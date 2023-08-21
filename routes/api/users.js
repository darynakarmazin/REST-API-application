const express = require("express");
const router = express.Router();

const { auth, upload } = require("../../middlewares");
const { users: ctrl } = require("../../controllers");

router.post("/register", ctrl.register);

router.post("/login", ctrl.login);

router.post("/logout", auth, ctrl.logout);

router.get("/current", auth, ctrl.getCurrent);

router.patch("/avatars", auth, upload.single("avatar"), ctrl.updateAvatar);

router.patch("/", auth, ctrl.updateSubscriptionUser);

router.get("/verify/:verificationToken", ctrl.verifyEmail);

module.exports = router;
