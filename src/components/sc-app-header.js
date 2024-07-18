import { LitElement, html, css } from 'lit'

class AppHeader extends LitElement {
    constructor() {
        super();
        this.anchorEl = null;
        this.menuOpen = false;
        this.reactRoot = null;
    }

    static get properties() {
        return {
            title: { type: String },
            user: { type: String },
            anchorEl: { type: Object },
            menuOpen: { type: Boolean }
        }
    }

    firstUpdated() {
        this.navActiveLinks();
        this.scrollTo();
    }

    navActiveLinks() {
        const links = this.shadowRoot.querySelectorAll('.nav-item')

        links.forEach(link => {
            link.addEventListener('click', (event) => {
                event.preventDefault()
                links.forEach(link => link.classList.remove('active'))
                event.currentTarget.classList.add('active')
            })
        })
    }

    scrollTo() {
        const links = this.shadowRoot.querySelectorAll('.nav-item')

        links.forEach(link => {
            link.addEventListener('click', (event) => {
                event.preventDefault()
                const targetId = link.getAttribute('href').substring(1)
                const targetElement = document.getElementById(targetId)
                if (targetElement) {
                    targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' })
                }
            })
        })
    }

    render() {
        return html`
            <style>
                @keyframes blink {
                    20%,
                    24%,
                    55% {
                        color: #000000;
                        text-shadow: none;
                    }

                    0%,
                    19%,
                    21%,
                    23%,
                    25%,
                    54%,
                    56%,
                    100% {
                        text-shadow: 0 0 5px #FFC600, 0 0 10px #FFC600, 0 0 15px #FFC600, 0 0 20px #FFC600, 0 0 25px #FFC600, 0 0 30px #ff6200, 0 0 35px #ff6200;
                        color: #fdf8c9;
                    }
                }

                .app-header {
                    height: var(--app-header-height);
                    background-color: #000000;
                    border-bottom: 0.2em solid #FFC600;

                    display: flex;
                    justify-content: center;
                    z-index: 10;

                    position: sticky;
                    top: 0;
                }
                .app-header-left {
                    display: flex;
                    align-items: center;
                    padding-left: 10px;

                    .app-header-logo {
                        width: 3.5em;
                        position: absolute;
                    }
                }
                .app-header-nav {
                    display: flex;
                    align-items: center;
                    width: 50%;
                    margin: auto;

                    ul {
                        list-style-type: none;
                        margin: 0;
                        padding: 0;

                        font-family: var(--base-font-family);
                        font-weight: 700;

                        width: 100%;
                        display: flex;
                        justify-content: space-evenly;
                    }
                    .nav-item {
                        display: block;
                        color: #FFFFFF;
                        text-align: center;
                        padding: 0.75em;
                        text-decoration: none;
                    }
                    .nav-item:hover, .nav-item.active {
                        background-color: #000000;
                        text-shadow: 0 0 5px #FFC600, 0 0 10px #FFC600, 0 0 15px #FFC600, 0 0 20px #FFC600, 0 0 25px #FFC600, 0 0 30px #ff6200, 0 0 35px #ff6200;
                        color: #fff6a9;

                        animation: blink 7s infinite;
                        -webkit-animation: blink 7s infinite;
                    }
                }

                // tablet
                @media all and (max-width: 768px) {

                }

                // mobile
            </style>

            <header class="app-header">

                <div class="app-header-left">
                    <img class="app-header-logo" src="/images/soco-logo.png">
                </div>

                <nav class="app-header-nav">
                    <ul>
                        <li><a class="nav-item" href="#home">Home</a></li>
                        <li><a class="nav-item" href="#events">Events</a></li>
                        <li><a class="nav-item" href="#venue">Venue</a></li>
                        <li><a class="nav-item" href="#about">About</a></li>
                    </ul>
                </nav>


            </header>
        `;
    }
}

customElements.define('sc-app-header', AppHeader);