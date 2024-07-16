import { LitElement, html, css } from 'lit'

class AppFooter extends LitElement {
    constructor() {
        super();

    }

    firstUpdated() {
        
    }

    render() {
        return html`
            <style>
                .app-footer {
                    height: auto;
                    width: 100%;
                    display: flex;
                    flex-direction: row;
                    justify-content: space-between;
                    align-items: center;
                    padding-bottom: 1em;

                    .app-footer-left {
                        height: 6.5em;
                        margin: auto 1em;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        justify-content: center;

                        h2 {
                            color: #FFC600;
                            font-weight: normal;
                            font-size: 1.25em;
                            margin: 0;
                        }
                    }
                    .ackn-disc {
                        margin: auto 1em;
                        p {
                            color: #bdbdbd;
                            font-size: 0.5em;
                            font-family: var(--base-font-family);
                        }
                    }
                    .app-footer-right {
                        margin: auto 1em;
                        a {
                            font-family: var(--base-font-family);
                            font-size: 0.6em;
                            text-decoration: none;
                            color: #FFC600;
                            text-align: center;
                        }
                    }
                }
            </style>

            <footer class="app-footer">
                <div class="app-footer-left">
                    <div><h2 style="font-family: var(--base-font-family)">Geelong</h2></div>
                    <div><h2 style="font-family: var(--sub-font-family)">2024</h2></div>
                </div>
                <div class="ackn-disc">
                    <p>The Southern Coast Festival of Lights Committee acknowledges Traditional Owners of Country throughout Australia and recognises the continuing connection to lands, waters and communities. We pay our respects to Aboriginal and Torres Strait Islander cultures and to Elders past and present.</p>
                    <p>Aboriginal and Torres Strait Islander peoples should be aware that this website may contain images or names of people who have passed away.</p>
                    <p>Disclaimer: This website has been created as part of an assignment in an approved course of study for Curtin University and contains copyright material not created by the author. All copyright material used remains copyright of the respective owners and has been used here pursuant to Section 40 of the Copyright Act 1968 (Commonwealth of Australia). No part of this work may be reproduced without consent of the original copyright owners. See code comments for references.</p>
                </div>
                <div class="app-footer-right">
                    <a href="admin">Administration Login</a>
                </div>
            </footer>

        `;
    }
}

customElements.define('sc-app-footer', AppFooter);