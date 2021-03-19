import { LitElement, html, css, property } from 'lit-element';

export class WcLoginPage extends LitElement {
    @property({ type: String }) welcomeMessage = 'Welcome to the page, hope you like it 👀';
    @property({ type: String }) loginMessage = 'You have to login to see more content';

    static styles = css`
    h3 {
        margin-bottom: 40px;
        text-align: center;
    }

    h5 {
        text-align: center;
    }
    `;

    render() {
        return html`
        <h3> ${this.welcomeMessage} </h3>
        <h5> ${this.loginMessage} </h5>
        `;
    }
}
