import mongoose, { Schema } from 'mongoose';

const VoterSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  battleId: {
    type: Schema.Types.ObjectId,
    ref: 'Battle'
  },
  vote: {
    type: Number,
    min: -1,
    max: 1,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
}, {
  unique: [['userId', 'battleId']],// so user cant vote multiple times
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
    expires: '1d' || '3d' || '7d' // Expire after 24 hours
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

}, { timeseries: true,})

export const Battle  = mongoose.model('Battle', BattleSchema);