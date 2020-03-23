import { html, css, LitElement } from 'lit-element';

export default class Tomato extends LitElement {
  static get properties() {
    return {
      title: { type: String },
    };
  }

  static get styles() {
    return css`
      button {
        width: 200px;
        height: 200px;
        border-radius: 50%;
        background-color: tomato;
        border: none;
     }
    `;
  }

  constructor() {
      super();
      this.title = 'TOMATO';
  }

  render() {
    return html`
      <button>${this.title}</button>
    `;
  }
}

customElements.define('my-tomato', Tomato);
