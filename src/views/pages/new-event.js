import App from '../../App'
import { html, render } from 'lit'
import { gotoRoute } from '../../Router'
import Event from '../../Event'
import Auth from '../../Auth'
import Toast from '../../Toast'
import Utils from '../../Utils'

class newEventView {
    init() {
        console.log('NewEvent.init')
        document.title = 'New Post'
        this.render()
        Utils.pageIntroAnim
    }

    async newEventSubmitHandler(event) {
        event.preventDefault()
        const submitBtn = document.querySelector('.submit-btn')
        const formData = event.detail.formData

        // upload image to formData
        const fileInput = document.getElementById('fileInput')

        fileInput.addEventListener('change', (event) => {
            const selectedFile = event.target.files[0]
            if (selectedFile) {
                alert('Selected file: ' + selectedFile.name)
            }
        })

        // submit using Post
        try {
            await Event.newEvent(formData)
            Toast.show('Event added')
        } catch(err) {
            Toast.show(err)
        }
    }

    uploadImage() {
        document.getElementById('fileInput').click()
    }

    render() {
        const template = html`
            
            <sc-app-header></sc-app-header>

            <div class="page-content">
                <h2>Add new event:</h2>
                <div class="new-event-container">
                    <form class="new-event-form">
                        <input type="text" id="eventdisplayname"></input>
                    </form>
                </div>
            </div>
        `
    }
}

export default new newEventView()