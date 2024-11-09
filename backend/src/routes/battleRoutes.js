import mongoose from "mongoose";
import { Battle } from "../models/battle.models.js";
import { User } from "../models/user.models.js";

const { ObjectId } = mongoose.Types;

const Battles = async (req, res) => {
  try {
    const battles = await Battle.find();
    if (!battles) {
      return res
        .status(404)
        .json({ success: false, message: "No battles found" });
    }
    return res.status(200).json({ success: true, battles });
  } catch (err) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

const BattleDetails = async (req, res) => {
  try {
    const { id } = req.params;
    const battle = await Battle.findById(id);
    if (!battle) {
      return res
        .status(404)
        .json({ success: false, message: "Battle not found" });
    }
    return res.status(200).json({ success: true, message: "Invite sent" });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

const inviteSend = async (req, res) => {
  try {
    const { challenger, opponent } = req.body;
    console.log(req.body)
    const challengerId = createFromTime(challenger);
    const opponentId = createFromTime(opponent);

    const chl = await User.findByIdAndUpdate(
      challengerId,
      { $push: { invited: { userId: opponentId, status: 'pending' } } },
      { new: true }
    );

    const opp = await User.findByIdAndUpdate(
      opponentId,
      { $push: { invitations: { userId: challengerId, status: 'pending' } } },
      { new: true }
    );
    if (!chl || !opp) {
      return res.status(404).json({ success: false, message: "User doesn't exists" });
    }
    return res.status(200).json({ success: true });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

// const AcceptInvite = async (req, res) => {
//   try {
//     const { battleId, userId } = req.body;
//     const battle = await Battle.findByIdAndUpdate(
//       battleId,
//       { $pull: { participants: userId } },
//       { new: true }
//     );
//     if (!battle) {
//       return res
//         .status(404)
//         .json({ success: false, message: "Battle not found" });
//     }
//     return res.status(200).json({ success: true, battle });
//   } catch (err) {
//     return res.status(500).json({ success: false, message: error.message });
//   }
// };

const AcceptInvite = async (req, res) => {
  const { chalId, oppId } = req.body;
  try {

    const chalObjId = new ObjectId(chalId);
    const oppObjId = new ObjectId(oppId);

    const battle = await Battle.create({
      challenger: chalId,
      opponent: oppId,
      winner: null,
      loser: null,
    });

    if (!battle) {
      return res
        .status(400)
        .json({ success: false, message: "Failed to create battle" });
    }

    const challengerUser = await User.findByIdAndUpdate(
      chalId,
      { $pull: { invited: oppId } },
      { new: true }
    );
    const opponentUser = await User.findByIdAndUpdate(
      oppId,
      { $pull: { invitations: chalId } },
      { new: true }
    );
    if (!challengerUser ||!opponentUser) {
      return res.status(404).json({ success: false, message: "User not found" });
    }
    return res.status(200).json({ success: true, battle });
  } catch (err) {
    return res.status(500).json({ success: false, message: err.message });
  }
};

const DeleteBattle = async (req, res) => {
  const { id } = req.params;
  try {
    const battle = await Battle.findByIdAndDelete(id);
    if (!battle) {
      return res
        .status(404)
        .json({ success: false, message: "Battle not found" });
    }
    return res.status(200).json({ success: true, message: "Battle deleted" });
  } catch (err) {
    return res.status(500).json({ success: false, message: err.message });
  }
};

const AddMedia = (req, res) => {};

export {
  Battles,
  BattleDetails,
  DeleteBattle,
  AddMedia,
  inviteSend,
  AcceptInvite,
};
