import express from "express"

import db from "../connect.js"

import {ObjectId} from "mongodb"

const router = express.Router()

router.get("/", async (req, res) => {
	let collection = await db.collection("users")
	let results = await collection.find({}).toArray()
	res.status(200).send(results)
})

router.get("/:id", async (req, res) => {
	let collection = await db.collection("users")
	let query = { _id: new ObjectId(req.params.id) }
	let result = await collection.findOne(query)

	if(!result) res.status(404).send("Not found")
	else res.status(200).send(result)
})

router.post("/", async (req, res) => {
	try{
		let newDocument = {
			username: req.body.username,
			points: req.body.points,
		}

		let collection = await db.collection("users")
		let result = await collection.insertOne(newDocument)
		res.status(200).send(result)
	}
	catch(err){
		console.error(err)
		res.status(500).send("Error adding user")
	}
})

router.patch("/:id", async (req, res) => {
	try {
		const query = { _id: new ObjectId(req.params.id)}
		const updates = {
			$set: {
				username: req.body.username,
				points: req.body.points
			}
		}

		let collection = await db.collection("users")
		let result = await collection.updateOne(query, updates)
		res.status(200).send(result)
	}
	catch(err){
		console.error(err)
		res.status(500).send("Error updating user")
	}
})

router.delete("/:id", async (req, res) => {
	try{
		const query = { _id: new ObjectId(req.params.id)}

		let collection = await db.collection("users")
		let result = await collection.deleteOne(query)

		res.status(200).send(result)
	}
	catch(err){
		console.error(err)
		res.status(500).send("Error deleting user")
	}
})

export default router