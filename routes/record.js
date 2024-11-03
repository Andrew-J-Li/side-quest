import express from "express"

import db from "../server/connect.js"

import {ObjectId} from "mongodb"

const router = express.Router()

router.get("/", async (req, res) => {
	let collection = await db.collection("records")
	let results = await collection.find({}).toArray()
	res.status(200).send(results)
})

router.get("/:id", async (req, res) => {
	let collection = await db.collection("records")
	let query = { _id: new ObjectId(req.params.id) }
	let result = await collection.findOne(query)

	if(!result) res.status(404).send("Not found")
	else res.status(200).send(result)
})