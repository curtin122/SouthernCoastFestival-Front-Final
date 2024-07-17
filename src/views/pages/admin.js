import App from '../../App'
import {html, render } from 'lit-html'
import Utils from '../../Utils'
import Event from '../../Event'
import Toast from '../../Toast'

import * as React from 'react'
import { renderReactComponent } from '../../components/react/reactHelper'
import eventCard from '../../components/react/sc-event-card'
import MUIDrawer from '../../components/sc-admin-nav'

class AdminView {
  init(){
    console.log('HomeView.init')
    document.title = 'Home'    
    this.render()    
    Utils.pageIntroAnim()

    const jumpTo = document.querySelectorAll('jumpTo')
    jumpTo.forEach(button => button.addEventListener('click', this.scrollTo))
  }

  async getEvents() {
    try {
      this.events = await Event.getEvents()
      console.log(this.events)
      this.render()
    } catch (err) {
      Toast.show(err, 'error')
    }
  }

  scrollTo() {
    const eventsSection = document.getElementById('events')
    eventsSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  render(){
    const template = html`

        <div id="drawer-container"></div>

        <div class="content-container">
          <sc-app-header></sc-app-header>

          <div class="page-content">        
            
            <!--HERO-->
            <div id="home">
              <div class="hero-banner">
                <div id="hero-content">
                  <h1>Watch the Light Show</h1>
                  <p>Come along to see Geelong's least kept secret, the Festival of Lights</p>
                  <p>Over 2,000 bulbs and neons to light up your imagination</p>
                  <button class="jumpTo">Find an event</button>
                </div>
              </div>
            </div>

            <!--EVENTS-->
            <!-- use react grid to create events layout -->

            <div id="events">
              <div id="filter-container">
                <!--MAIN FILTERS-->
                <div id="sections-container">
                  <button class="section-button">Eat + Drink</button>
                  <button class="section-button">Entertainment</button>
                  <button class="section-button">Shop</button>
                </div>
                <!--TAGS-->
                <div id="tag-container">
                  <button class="tag-button">All</button>
                  <button class="tag-button">Drinks</button>
                  <button class="tag-button">Food</button>
                  <button class="tag-button">Alcholic</button>
                  <button class="tag-button">Gluten Free</button>
                  <button class="tag-button">Nut Free</button>
                  <button class="tag-button">Gourmet</button>
                  <button class="tag-button">
                    <span class="material-icons">favorite_border</span>
                    Favourites
                  </button>
                  <!-- <button class="tag-button"></button> -->
                  <p class="message">Showing all __ items</p>
                </div>
              </div>
              
              <div class="events-grid">
                <div id="card-container"></div>
              </div>
            </div>

            <!--VENUE-->
            <div id="venue">
                <div class="venue-nav">
                  <ul>
                    <li><a href="#location">Location</a></li>
                    <li><a href="#map">Festival Map</a></li>
                    <li><a href="#accessibility">Accessibility</a></li>
                    <li><a href="#parking">Parking</a></li>
                    <li><a href="#transport">Transport</a></li>
                  </ul>
                </div>
                <div class="venue-container">
                  <div id="location">
                    <div class="left">
                      <h1>Location</h1>
                      <p>Rippleside Park, Bell Parade Geelong, Victoria, Australia</p>
                    </div>
                    <div class="right">
                      <div id="loc-img"></div>
                    </div>
                  </div>
                  <div id="map">
                    <div id="map-img"></div>
                    <h1>Festival Map</h1>
                  </div>
                  <div id="accessibility">
                    <h1>Accessibility</h1>
                    <p>Lorem ipsum</p>
                  </div>
                  <div id="parking">
                    <h1>Parking</h1>
                    <p>Lorem ipsum</p>
                  </div>
                  <div id="transport">
                    <h1>Transport</h1>
                    <p>Lorem ipsum</p>
                  </div>
                </div>
            </div>

            <!--ABOUT-->
            <div id="about">
              <div class="about-container">
                <table>
                  <tr>
                    <td>
                      <h1>About the Festival</h1>
                      <p>The 2024 Geelong based Southern Coast Festival of Lights celebrates its second year. Its sponsors and volunteers want you to have a great time, and made the festival twice as fun as last year's.</p>
                      <p>Come and help us celebrate our local art and food!</p>
                      <h2>Hours of Operation</h2>
                      <p>9 am to midnight on Saturday, 24 August 2024</p>
                      <p>9 am to 10pm on Sunday, 25 August 2024</p>
                    </td>
                    <td>
                      <div id="about-img"></div>  
                    </td>
                  </tr>
                  <tr>
                    <td><button>Contact us</button></td>
                    <td><button class="jumpTo">Find an event</button></td>
                  </tr>
                </table>
              </div>
            </div>
          </div>  

          <sc-app-footer></sc-app-footer>
        </div> 
    `
    render(template, App.rootEl)

    const drawerContainer = document.getElementById('drawer-container')
    renderReactComponent(MUIDrawer, drawerContainer)

    const cardContainer = document.getElementById('card-container')
    renderReactComponent(eventCard, cardContainer)
  }
}

export default new AdminView()