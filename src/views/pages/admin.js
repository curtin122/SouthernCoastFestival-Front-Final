import App from '../../App'
import {html, render } from 'lit-html'
import {gotoRoute, anchorRoute} from '../../Router'
import Auth from '../../Auth'
import Utils from '../../Utils'
import Event from '../../Event'
import Toast from '../../Toast'

class AdminView {
  init(){
    console.log('AdminView.init')
    document.title = 'Home'    
    this.render()    
    Utils.pageIntroAnim()
  }

  render(){
    const template = html`

      <sc-app-header></sc-app-header>

      <div class="page-content">        
        <p>admin go brr</p>
      </div>   
      
      <sc-app-footer></sc-app-footer>
    `
  }
}

export default new AdminView()