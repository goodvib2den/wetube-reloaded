import mongoose from "mongoose";

mongoose.connect(process.env.DB_URL);

const db = mongoose.connection;

const handleOpen = () => console.log("OK : Connected to DB");
const handleError = (error) => console.log("ERR : DB Error", error);

db.on("error", handleError); // 에러를 체크하는 함수
db.once("open", handleOpen); // 연결을 확인하는 함수
