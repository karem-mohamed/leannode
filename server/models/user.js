import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      trim: true,
      minLength: 8,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      unique: true,
      validate: {
        validator: function (arg) {
          return arg.includes("@");
        },
        message: "must be valid mail",
      },
    },
    name: {
      type: String,
      required: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
    biography: {
      type: String,
      required: true,
      minLength: 10,
    },
    avatar: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

userSchema.pre("save", async function (next) {
  const user = this;
  if (user.isModified("password")) {
    const saltRound = 8;
    const salt = await bcrypt.genSalt(saltRound);
    user.password = await bcrypt.hash(user.password, salt);
  }
  next();
});

const User = mongoose.model("User", userSchema);

export default User;
