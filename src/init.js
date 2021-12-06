import "dotenv/config";
import "./db";
import "./models/Video";
import "./models/User";
import app from "./server";

const PORT = 4000;

const handleLinstening = () =>
  console.log(`OK : Server linstening on port http://localhost:${PORT}`);

app.listen(PORT, handleLinstening);
