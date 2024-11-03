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

const corsOptions = {
	origin: ['https://side-quest-frontend.onrender.com/', 'http://side-quest-frontend.onrender.com/'],
	methods: "GET,HEAD,PUT,OPTIONS,POST,DELETE",
	allowedHeaders: [
	  "Access-Control-Allow-Headers",
	  "Origin",
	  "X-Requested-With",
	  "Content-Type",
	  "Accept",
	  "Authorization",
	  "token",
	  "Access-Control-Request-Method",
	  "Access-Control-Request-Headers",
	  "Access-Control-Allow-Credentials",
	],
	credentials: true,
	preflightContinue: false,
	optionsSuccessStatus: 204,
  };

app.use(cors(corsOptions)); 

app.set("trust proxy", 1); // trust first proxy
app.use(
  session({
    secret: process.env.JWT_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
      secure: true,
      sameSite: "none",
    },
  })
);

app.use(express.json())
app.use("/users", users)

app.listen(PORT, () => {
	console.log(`Server listening on port ${PORT}`)
})