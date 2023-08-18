const { User } = require("../../models");

const path = require("path");
const fs = require("fs/promises");

const avatarsDir = path.join(__dirname, "../../", "public", "avatars");

const updateAvatar = async (req, res, next) => {
  const { path: tempUpload, originalname } = req.file;
  try {
    const resultUpload = path.join(avatarsDir, originalname);
    await fs.rename(tempUpload, resultUpload);
    const avatarURL = path.join("public", "avatars", originalname);
    await User.findByIdAndUpdate(req.urer._id, { avatarURL });
    res.status(200).json({
      status: "OK",
      code: 200,
        avatarURL,
      },
    });
  } catch (error) {
    await fs.unlink(tempUpload);
    next(error);
  }
};

module.exports = updateAvatar;
