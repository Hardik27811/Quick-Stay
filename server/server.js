import express from "express"
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();  // Load environment variables from .env
const app = express();
app.use(cors()) /*allow backend to use frontend url or enables cross origin resource sharing */

app.get('/',(req , res)=> res.send("API is working fine"))
const PORT=process.env.PORT || 3000;
app.listen(PORT ,()=> console.log(`Server running on port ${PORT}`));
