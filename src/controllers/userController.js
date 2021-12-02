import User from "../models/User";
import bcrypt from "bcrypt";

export const getJoin = (req, res) => res.render("join", { pageTitle: "Join" });

export const postJoin = async (req, res) => {
  const { name, username, email, password, password2, location } = req.body;
  const pageTitle = "Join";

  // password confrim
  if (password !== password2) {
    // 오류가 있을시 여기서 return을 걸어줘야 함수가 중단될 수 있기 떄문에 return을 달아준다
    return res.status(400).render("join", {
      pageTitle,
      errorMessage: "Passeord confirmation does not match",
    });
  }

  // 유저이름과 이메일이 중복되는지 확인
  const exists = await User.exists({ $or: [{ username }, { email }] });
  if (exists) {
    return res.status(400).render("join", {
      pageTitle,
      errorMessage: "This username or email is already used",
    });
  }

  // create user profile
  try {
    await User.create({
      name,
      username,
      email,
      password,
      location,
    });
    return res.redirect("/login");
  } catch (error) {
    return res.status(400).render("join", {
      pageTitle: "Join",
      errorMessage: error._message,
    });
  }
};

export const getLogin = (req, res) =>
  res.render("login", { pageTitle: "Login" });

export const postLogin = async (req, res) => {
  // 로그인하는 아이디를 확인
  const { username, password } = req.body;
  const pageTitle = "Login";
  const user = await User.findOne({ username });
  if (!user) {
    return res.status(400).render("login", {
      pageTitle,
      errorMessage: "An account with this username does not exists.",
    });
  }

  // 로그인하는 패스워드 확인
  const ok = await bcrypt.compare(password, user.password);
  if (!ok) {
    return res.status(400).render("login", {
      pageTitle,
      errorMessage: "Wrong Password",
    });
  }

  // 세션확인
  req.session.loggedIn = true;
  req.session.user = user;

  // 확인 시 로그인을 시킨다
  return res.redirect("/");
};

export const edit = (req, res) => res.send("Edit User");

export const remove = (req, res) => res.send("Remove User");

export const logout = (req, res) => res.send("Logout");

export const see = (req, res) => res.send("See");
