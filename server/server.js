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

// app.use((req, res, next) => {
// 	res.setHeader(
// 	  "Access-Control-Allow-Origin",
// 	  "https://side-quest-frontend.onrender.com/"
// 	);
// 	res.setHeader(
// 	  "Access-Control-Allow-Methods",
// 	  "GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS,CONNECT,TRACE"
// 	);
// 	res.setHeader(
// 	  "Access-Control-Allow-Headers",
// 	  "Content-Type, Authorization, X-Content-Type-Options, Accept, X-Requested-With, Origin, Access-Control-Request-Method, Access-Control-Request-Headers"
// 	);
// 	res.setHeader("Access-Control-Allow-Credentials", true);
// 	res.setHeader("Access-Control-Allow-Private-Network", true);
// 	//  Firefox caps this at 24 hours (86400 seconds). Chromium (starting in v76) caps at 2 hours (7200 seconds). The default value is 5 seconds.
// 	res.setHeader("Access-Control-Max-Age", 7200);
  
// 	next();
//   });
  
app.use(cors({
	origin: ['https://side-quest-frontend.onrender.com/', 'http://side-quest-frontend.onrender.com/'],
  	credentials: true,
}))
app.use(express.json())
app.use("/users", users)

app.listen(PORT, () => {
	console.log(`Server listening on port ${PORT}`)
})