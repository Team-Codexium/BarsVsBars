import mongoose, { Schema } from 'mongoose';

const VoterSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
    index: true,
  },
  battle: {
    type: Schema.Types.ObjectId,
    ref: 'Battle',
    required: true,
    index: true,
    unique: true, // so user cant vote multiple times in same battle,
    validate: {
      validator: (v) => v.expiryDate > new Date(),
      message: 'Battle has expired',
    }
  },
  vote: {
    type: Number,
    min: -1,
    max: 1,
    required: true
  },
  voteFor: {
    type: String,
    enum: ['challenger', 'opponent'],
    required: true,
  }
}, {
  timestamps: true,
});

const BattleSchema = new Schema({
  challenger: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  opponent: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    trim: true,
    indexedDB: true
  },  
  tracks: {
    challengerTrack: String, // Url to challenger track
    opponentTrack: String, // Url to opponent track
  },
  expiryDate: {
    type: Date,
    required: true,
    index: true,
    expires: {
      type: String,
      enum: ["1d", "3d", "7d"],
      default: "1d",
    }
  },
  isExpired: {
    type: Boolean,
    default: false,
  },
  status:{
    type: String,
    enum: ['pending', 'in progress', 'completed', 'cancelled'],
    default: 'pending'
  },
  votes: {
    "challengerVotes": [VoterSchema],
    "opponentVotes": [VoterSchema],
  },
  comments: {
    type: [{
      userId: {
        type: Schema.Types.ObjectId,
        ref: 'User'
      },
      comment: String,
      createdAt: {
        type: Date,
        default: Date.now
      }
    }],
    default: [],
  }

}, { timestamps: true,})

export const Battle  = mongoose.model('Battle', BattleSchema);