import App from './App'
import Router, { gotoRoute } from './Router'
import splash from './views/partials/splash'
import { html, render } from 'lit'
import Toast from './Toast'

class Auth {

    constructor() {
        this.currentUser = {}
    }

    // async sign up

    // async sign in
    async signIn(userData, fail = false){
        const response = await fetch(`${App.apiBase}/auth/signin`, {
          method: 'POST', 
          headers: {
            'Content-Type': 'application/json'
          },     
          body: JSON.stringify(userData)
        })

        const data = await response.json()
    
        // if response not ok
        if(!response.ok){
          console.log(data)
          // run fail() functon if set
          if(typeof fail == 'function') fail()
        }
    
        // sign in success
        // save access token (jwt) to local storage
        localStorage.setItem('accessToken', data.accessToken)
        // set current user
        this.currentUser = data.user      
        console.log(this.currentUser)           
        Router.init()
        console.log('sign in successful')
      }

    // async check
    async check(success) {
        // show splash screen while loading
        render(splash, App.rootEl)

        // check loacl token exists
        if(!localStorage.accessToken) {
            // no local token
            // Toast.show("token not found")
            // redirect
            gotoRoute('/')
            return
        }

        // validate token via the backend
        const response = await fetch(`${App.apiBase}/auth/validate`, {
            method: 'GET',
            headers: {
                "Authorization": `Bearer ${localStorage.accessToken}`
            }
        })

        // response not ok
        if(!response.ok) {
            // console log error
            const err = await response.json()
            if(err) console.log(err)
            // delete local token
            localStorage.removeItem('accessToken')
            Toast.show("session expired, please sign in")
            // redirect to sign in
            gotoRoute('/signin')
            return
        }

        // token is valid
        const data = await response.json()
        // set currentUser obj
        this.currentUser = data.user
        // run success
        success()
    }

    // async sign out
}

export default new Auth()