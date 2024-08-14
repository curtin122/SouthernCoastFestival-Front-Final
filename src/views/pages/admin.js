import App from '../../App'
import {html, render } from 'lit-html'
import {gotoRoute, anchorRoute} from '../../Router'
import Auth from '../../Auth'
import Utils from '../../Utils'

class AdminView {
  init(){
    document.title = 'Admin Home'    
    this.render()    
    Utils.pageIntroAnim()
  }

  render(){
    const template = html`
      <div class="page-content">        
        <h1>Admin view</h1>
        <p>Page content ...</p>
        
      </div>      
    `
    render(template, App.rootEl)
  }
}

export default new AdminView()