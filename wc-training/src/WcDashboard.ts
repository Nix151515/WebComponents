import { LitElement, html, css, property } from 'lit-element';


export class WcDashboard extends LitElement {
    @property({ type: String }) gotScaredOfDoggo = false;

    static styles = css`
        #container {
            width: 50%;
            max-width: 300px;
            margin: 0 auto;
        }

        #doggoImg {
            margin: 50px auto 10px auto;
            width: 100%;
            display: block;
        }

        #doggoButton {
            margin-top: 10px;
            display: block;
            background-color: #fd7e14;
            cursor: pointer;
        }
    `;

    goToLogin() {
        this.gotScaredOfDoggo = true;
    }

    render() {
        const dashboard = html`
            <div id="container">
                <img id="doggoImg" src='../assets/doggo-of-security.jpg'>
                <p> You have been visited by the doggo of security.</p>
                <p> Doggo is here to check that you are authenticated.</p>
                <p> "Safe navigation", says doggo </p>
                <lion-button id="doggoButton" @click="${() => this.goToLogin()}">Thank you, doggo !</lion-button>
            </div>
        `;
        const login = html`<wc-login><wc-login>`;

        return this.gotScaredOfDoggo ? login: dashboard;
    }
}

