import { LitElement, html, css } from 'lit-element';

/* Looks like app's main component */
export class WcTraining extends LitElement {
  
  static styles = css`
    header {
      height: auto;
      background-color: white;
      display: flex;
      align-items: center;
      border-bottom-width: 1px;
      border-bottom-style: solid;
      border-bottom-color: LightGray;
    }

    footer {
      background-color: #fd7e14;
      color: white;
      font-weight: bold;
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      overflow: hidden;
    }

    #footerContent {
      margin-left: 15px;
    }

    #doge {
      height: 50px;
      margin: 5px 5px 5px;
    }

    #dogeBank {
      color: #fd7e14
    }

    #loginComponent{
      font-family: system-ui;
    }

  `;

  render() {
    return html`
    <header>
      <img id="doge" src="../assets/doge.svg">
      <span id="dogeBank"> DogeBank </span>
    </header>

    <wc-login id="loginComponent"></wc-login>

    <footer>
      <div id="footerContent">
        <p>Author: Nicolae State<br>
        <p>Created using 
          <a href="https://lion-web.netlify.app/guides/">Lion Web Components </a>
        </p>
      </div>
    </footer>
    `;
  }
}
