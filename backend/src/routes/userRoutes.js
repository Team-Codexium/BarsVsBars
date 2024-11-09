import { User } from "../models/user.models.js";

const Artists = async (req, res) => {
  try {
    const users = await User.find();
    const artists = users.filter((user) => user.userType === "artist");

    if (!artists)
      return res
        .status(404)
        .json({ success: false, message: "No artists found" });

    artists = artists.sort((a, b) => b.stats.wins - a.stats.wins);

    return res
      .status(200)
      .json({
        success: true,
        message: "Artists retrieved successfully",
        artists,
      });
  } catch (error) {
    return res.status(500).json({ success: false, message: "Error during retrieving artists", error });
  }
};

const ArtistDetails = async (req, res) => {
  try {
    const { id } = req.params;
    const artist = await User.findById(id);
    if (!artist) {
        return res
          .status(404)
          .json({ success: false, message: "Artist does" });
    }
  } catch (err) {

  }
};

export { Artists, ArtistDetails };
