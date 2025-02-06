export class Person extends HTMLElement {
  static get observedAttributes() {
    return ['name', 'age'];
  }

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
  }

  attributeChangedCallback() {
    this.render();
  }

  render() {
    const name = this.getAttribute('name') || '';
    const age = this.getAttribute('age') || '';
    
    if (this.shadowRoot) {
      this.shadowRoot.innerHTML = `
        <div class="person">
          <p>Nome: ${name}</p>
          <p>Idade: ${age}</p>
        </div>
      `;
    }
  }
}

customElements.define('person-component', Person); 