export default class SupportPalestineBanner extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.createStyles();
  }

  createStyles() {
    const style = document.createElement('style');
    style.textContent = `
      .support-palestine, .support-palestine:visited {
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        background: rgb(0,0,0);
        display: flex;
        justify-content: center;
        padding-top: 5px;
        padding-bottom: 5px;
        z-index: 10000;
        text-decoration: none;
        font-family: arial;
      }
      .support-palestine:hover, .support-palestine:active {
        background: black;
        display: flex;
        background: rgb(25, 25, 25);
        text-decoration: none;
      }
      .support-palestine__flag {
        margin-right: 10px;
      }
      .support-palestine__label {
        color: white;
        font-size: 12px;
        line-height: 24px;
      }
      .background {
        background: darkgreen;
        height:21px;
      }
      .top {
        background: black;
        width:40px;
        height: 8px;
        z-index: 1;
      }
      .middle {
        background: white;
        width: 100%;
        height: 8px;
        z-index: 1;
      }
      .triangle {
        background: auto;
        border-top: 12px solid transparent;
        border-bottom: 12px solid transparent;
        border-left: 20px solid red;
        z-index: 2;
        position: relative;
        top: -16px;
        left: 0;
      }
    `;
    this.shadowRoot.appendChild(style);
  }

  connectedCallback() {
    this.render();
  }

  render() {
    const fragment = document.createDocumentFragment();

    const link = document.createElement('a');
    link.className = 'support-palestine';
    link.href = 'https://www.islamic-relief.org.uk/giving/appeals/palestine/';
    link.target = '_blank';
    link.rel = 'nofollow noopener';
    link.title = 'Donate to support palestine';

    const flag = document.createElement('div');
    flag.className = 'support-palestine__flag';
    flag.setAttribute('aria-hidden', 'true');

    const background = document.createElement('div');
    background.className = 'background';

    const top = document.createElement('div');
    top.className = 'top';
    background.appendChild(top);

    const middle = document.createElement('div');
    middle.className = 'middle';
    background.appendChild(middle);

    const triangle = document.createElement('div');
    triangle.className = 'triangle';
    background.appendChild(triangle);

    flag.appendChild(background);
    link.appendChild(flag);

    const label = document.createElement('div');
    label.className = 'support-palestine__label';
    label.textContent = 'Donate to support Palestine';
    link.appendChild(label);

    fragment.appendChild(link);
    this.shadowRoot.appendChild(fragment);
  }
}

customElements.define("support-palestine-banner", SupportPalestineBanner);
