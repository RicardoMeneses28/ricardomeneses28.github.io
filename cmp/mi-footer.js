class MiFooter
  extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /* html */
      `<p>
        &copy; 2021
        Ricardo Meneses Jimenez.
      </p>`;
  }
}

customElements.define(
  "mi-footer", MiFooter);
