const express = require("express");
const router = express.Router();
// helping to uploader
const upload = require("../middleware/multer");
const accountController = require("../controllers/account");
const { ensureAuth } = require("../middleware/auth");

router.get("/", ensureAuth, accountController.getProfile);
router.get("/createPost", ensureAuth, accountController.getPost);
router.post("/createPost", upload.single("file"), accountController.createPost);

// router.post("/review/:id", accountController.getReview);
// router.get("/createAvatar", ensureAuth, accountController.getAvatar);

module.exports = router;
