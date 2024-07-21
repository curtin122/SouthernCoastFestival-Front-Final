import Router from './Router'
import Auth from './Auth'
import Toast from './Toast'
import Event from './Event'

class App {
    constructor() {
        this.name = "Southern Coast Festival"
        this.version = "1.0.0"
        // when backend is deployed, change url
        this.apiBase = "https://southerncoastfestival-backend.onrender.com"
        this.rootEl = document.getElementById("root")
    }

    init() {
        console.log("App.init")

        // toast init
        Toast.init()

        // auth check
        Auth.check(() => {
            // authenticated
            Router.init()
        })
    }
}

export default new App()