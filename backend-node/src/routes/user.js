const router = require("express").Router();
const userController = require("../controllers/user");
const { check } = require("express-validator");

router.post(
  "/login",
  [
    check("email")
      .isEmail()
      .normalizeEmail()
      .withMessage("Must be correctly formatted e-mail"),
    check("password")
      .isLength({ min: 6 })
      .withMessage("Must be at least 6 characters long"),
  ],
  userController.login
);

router.post(
  "/signup",
  [
    check("firstName")
      .isLength({ min: 3 })
      .withMessage("Must be at least 3 characters long")
      .trim()
      .exists()
      .matches(/^[a-zžüõöäA-ÜÕÄÖZŽ,.'-]+[ ]?([a-žzüõöäA-ZÜÕÄÖŽ,.'-])+$/)
      .withMessage("Must be alphabetic"),
    check("lastName")
      .isLength({ min: 3 })
      .withMessage("Must be at least 3 characters long")
      .trim()
      .exists()
      .matches(/^[A-ZÕÄÖÜŽa-zžõäöü,.'-]+$/)
      .withMessage("Must be alphabetic"),
    check("email")
      .isEmail()
      .normalizeEmail()
      .withMessage("Must be correctly formatted e-mail"),
    check("password")
      .isLength({ min: 6 })
      .withMessage("Must be at least 6 characters long")
      .custom((value,{req, loc, path}) => {
        if (value !== req.body.pwConfirm) {
          throw new Error("Passwords don't match");
        }
      }),
  ],
  userController.signup
);

router.get("/profile/:id", userController.getUser)
router.get("/profiles", userController.getUsers)
router.put("/profiles/addflw/:id", userController.addUsersFollowers)
router.put("/profiles/rmflw/:id", userController.rmUsersFollowers)

module.exports = router;
