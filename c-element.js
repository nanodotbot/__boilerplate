class CElement extends HTMLElement {
    constructor() {
        super();

        this.innerHTML =
        `
        <h2>${this.getAttribute('title')}</h2>
        <p>${this.getAttribute('text')}</p>
        `;
    }
}

window.customElements.define('c-element', CElement);
