import { useInsertionEffect } from 'react'
import App from './App'
import Auth from './Auth'

class User {

    async getUser(userId) {
        // validate
        if(!userId) return
        
        // fetch json data
        const response = await fetch(`${App.apiBase}/users/${userId}`, {
            headers: { "Authorization": `Bearer ${localStorage.accessToken}`}
        })

        // if response not ok
        if(!response.ok) {
            const err = await response.json()
            if(err) console.log(err)
            throw new Error
        }

        const data = await response.json()

        return data
    }

}

export default new User()