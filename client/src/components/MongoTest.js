import {React, useEffect, useState} from 'react';

const MongoTest = () => {
	const [users, setUsers] = useState([])

	useEffect(() => {
		async function getUsers() {
			const response = await fetch(`https://side-quest-backend.onrender.com/users/`)

			if(!response.ok){
				const message = `An error ocurred: ${response.statusText}`
				console.error(message)
				return
			}
			
			const users = await response.json()
			setUsers(users)
			console.log(users)
		}

		getUsers()
		return
	}, [users.length])

	function usersList(){
		return users.map((user) => {
			return (
				<p>{user.username} has {user.points} points</p>
			)
		})
	}

	return (
		<div>
			{usersList()}
		</div>
	)
}

export default MongoTest