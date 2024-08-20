import { LitElement, html, css } from 'lit'
import { createRoot } from 'react-dom/client'
import DiscDialog from './react/sc-disc-dialog'
import LoginDialog from './react/sc-login-dialog'
import FacebookShareButton from './react/facebook.js'; // Import the FacebookShareButton component


class AppFooter extends LitElement {
    static properties = {
        dialogOpen: { type: Boolean },
        loginOpen: { type: Boolean },
    };

    constructor() {
        super();
        this.dialogOpen = false;
        this.loginOpen = false;
    }

    firstUpdated() {
        this.dialogContainer = document.createElement('div')
        this.shadowRoot.appendChild(this.dialogContainer)
        this.reactRoot = createRoot(this.dialogContainer)
        this.renderReactDialog()
    }

    updated(changedProperties) {
        if (changedProperties.has('dialogOpen') || changedProperties.has('loginOpen')) {
            this.renderReactDialog()
        }
    }

    renderReactDialog() {
        this.reactRoot.render(
            <>
            <DiscDialog 
                open={this.dialogOpen}
                onClose={() => this.dialogOpen = false}
            />
            <LoginDialog
                open={this.loginOpen}
                onClose={() => this.loginOpen = false}
                onLoginSuccess={() => this.handleLoginSuccess()}
            />
            </>
        )
    }

    toggleDialog() {
        this.dialogOpen = !this.dialogOpen
    }

    toggleLogin() {
        this.loginOpen = !this.loginOpen
    }

    render() {
        return html`
            <style>
                .app-footer {
                    height: auto;
                    width: 70wv;
                    display: flex;
                    flex-direction: row;
                    justify-content: space-between;
                    align-items: center;
                    padding-bottom: 1em;
                    margin: 0 auto;
                }

                .app-footer-left {
                    height: 6.5em;
                    margin: auto 1em;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                }
                .media-icons img {
                    width: 20px;
                    margin-top: 0.5em;
                }

                h2 {
                    color: #FFC600;
                    font-weight: normal;
                    font-size: 1.5em;
                    margin: 0;
                }

                .ackn-disc {
                    margin: auto 1em;
                }

                p {
                    color: #bdbdbd;
                    font-size: 0.7em;
                    font-family: var(--base-font-family);
                }

                .app-footer-right {
                    margin: auto 1em;
                }

                a {
                    font-family: var(--base-font-family);
                    font-size: 0.7em;
                    text-decoration: none;
                    color: #FFC600;
                    text-align: center;
                    cursor: pointer;
                }
                    @media all and (max-width: 768px) {
                    .app-footer {
                    width: 100%;
                    }
            </style>

            <footer class="app-footer">


                <div class="app-footer-left">
                    <div><h2 style="font-family: var(--base-font-family)">Geelong</h2></div>
                    <div><h2 style="font-family: var(--sub-font-family)">2024</h2></div>
                    <div class="media-icons">
                        <img src=${share} />
                        <a href="https://www.instagram.com/southern_fol/" target="_blank" rel="noopener noreferrer">
  <img src=${insta} />
                        <a href="https://www.facebook.com/profile.php?id=61564461005823" target="_blank" rel="noopener noreferrer">
  <img src=${facebook} />
</a>
                    </div>
                </div>
                <div class="ackn-disc">
                    <p>The Southern Coast Festival of Lights Committee acknowledges Traditional Owners of Country throughout Australia and recognises the continuing connection to lands, waters and communities. We pay our respects to Aboriginal and Torres Strait Islander cultures and to Elders past and present.</p>
                    <p>Aboriginal and Torres Strait Islander peoples should be aware that this website may contain images or names of people who have passed away.</p>
                    <a @click="${this.toggleDialog}">Disclaimer</a>
                </div>
                <div class="app-footer-right">
                    <a @click="${this.toggleLogin}">Administration Login</a>
                </div>
            </footer>
        `;
    }
}


customElements.define('sc-app-footer', AppFooter);
