import html from "./tile.component.html?raw";

class TileComponent extends HTMLElement {
  static selector = 'my-tile';
  private template: string;
  private attr: string[];

  constructor() {
    super();

    this.template = html;
    this.attr = ['railType'];
  }

  connectedCallback() {
    const shadow = this.attachShadow({ mode: 'closed' });
    console.log("this", this)


    //replace all attributes in the template with the actual values
    this.attr.forEach((el) => {
      this.template = this.template.split(`{{${el}}}`).join(this.getAttribute(el));
    });
    console.log("this.template", this.template);

    shadow.innerHTML = this.template;
  }

  // component attributes
  static get observedAttributes() {
    return ['railType']
  }

}
customElements.define(TileComponent.selector, TileComponent);