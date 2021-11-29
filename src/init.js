import "./db";
import "./models/Video";
import app from "./server";

const PORT = 4000;

const handleLinstening = () =>
  console.log(`✅ Server linstening on port http://localhost:${PORT} 🚀`);

app.listen(PORT, handleLinstening);