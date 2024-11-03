import express from "express"
import cors from "cors"
import users from "./routes/user.js"

import path from 'path'
import { fileURLToPath } from "url"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const PORT = process.env.PORT || 5050
const app = express();

app.use(express.static(path.join(__dirname, '../client/build')))

app.get("*", (req, res) => {
	res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

app.use(cors({ 
	origin: "https://side-quest-frontend.onrender.com/", 
	credentials: true 
   }));
app.use(express.json())
app.use("/users", users)

app.listen(PORT, () => {
	console.log(`Server listening on port ${PORT}`)
})