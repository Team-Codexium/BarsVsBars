import mongooses, { Schema } from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const UserSchema = new Schema(
  {
    fullName: {
      type: String,
      required: true,
      trim: true,
      index: true,
      minlength: [3, "Minimum 3 characters"],
      maxlength: [50, "Maximum 50 characters"],
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/\S+@\S+\.\S+/, "Invalid email address"],
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      minlength: [8, "Minimum 8 characters required"],
    },
    googleId: {
      type: String,
      default: null
    },
    bio: {
      type: String,
      default: "Nothing to see here...",
    },
    profilePicture: {
      type: String,
      default: "../../public/pfp.jpg",
    },
    userType: {
      type: String,
      enum: ["fan", "artist"],
      required: true
    },
    battles: {
      type: [{
        battleId: {
          type: Schema.Types.ObjectId,
          ref: 'Battle'
        },
        status: {
          type: String,
          enum: ['pending', 'in progress', 'completed', 'cancelled'],
          default: 'pending'
        }
      }]
    },
    invited: {
      type: [{
        userId: {
          type: Schema.Types.ObjectId,
          ref: 'User'
        },
        battle: {
          type: Schema.Types.ObjectId,
          ref: 'Battle'
        },
        status: {
          type: String,
          enum: ['pending', 'accepted', 'rejected'],
          default: 'pending'
        }
      }]
    },
    invitations: {
      type: [{
        userId: {
          type: Schema.Types.ObjectId,
          ref: 'User'
        },
        battle: {
          type: Schema.Types.ObjectId,
          ref: 'Battle'
        },
        status: {
          type: String,
          enum: ['pending', 'accepted', 'rejected'],
          default: 'pending'
        }
      }]
    },
    stats: {
      wins: {type: Number, default: 0},
      loses: {type: Number, default: 0},
      battles: {type: Number, default: 0}
    }
  },
  {
    timestamps: true,
  }
);

UserSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 10);
});

UserSchema.methods.isPasswordCorrect = async function (password) {
  return await bcrypt.compare(password, this.password);
};

UserSchema.methods.generatAccessToken = function () {
  return jwt.sign(
    {
      _id: this._id,
      email: this.email,
      username: this.username,
    },
    process.env.ACCESS_TOKEN_SECRET,
    {
      expiresIn: process.env.ACCESS_TOKEN_EXPIRY,
    }
  );
};

UserSchema.methods.generatRefreshToken = function () {
  return jwt.sign(
    {
      _id: this._id
    },
    process.env.REFRESH_TOKEN_SECRET,
    {
      expiresIn: process.env.REFRESH_TOKEN_EXPIRY,
    }
  );
};

export const User = mongooses.model("User", UserSchema);
