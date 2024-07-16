import {html, render} from 'lit-html'
import Utils from '../../Utils'
import App from '../../App'

class AdminView {
  init() {
    console.log('AdminView.init')
    document.title = 'Home'        
    Utils.pageIntroAnim()
    this.render()
  }

  render() {
    const template = html`
      
      <sc-app-header></sc-app-header>

      <div class="page-content">        
      </div>   
      
      <sc-app-footer></sc-app-footer>

    `

    render(template, App.rootEl)
  }
}

export default new AdminView()