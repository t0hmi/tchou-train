class GridComponent extends HTMLElement {
  static selector = 'my-grid';

  private template: string;

  private attr: string[] = [];
  constructor() {
    super();
    this.template = ``;
    for (let i = 0; i < 36; i++) {
      this.template += `<my-tile railType="${i % 2 == 0 ? "vertical" : "horizontal"}" class="c-grid__item"></my-tile>`;
    }
  }

  connectedCallback() {
    const shadow = this.attachShadow({ mode: 'closed' });
    console.log("this", this);


    this.attr.forEach((el, key) => {
      this.template = this.template.split(`{{${key}}}`).join(el.toString());
    });

    console.log("template", this.template);

    shadow.innerHTML = this.template;
    console.log("shadow", shadow);

  }

  // attribute change
  attributeChangedCallback(property, oldValue, newValue) {
    if (oldValue === newValue) return;
    this[property] = newValue;
  }

  // component attributes
  static get observedAttributes() {
    return ['railType']
  }
}

customElements.define(GridComponent.selector, GridComponent);