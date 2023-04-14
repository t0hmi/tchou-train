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


    //replace all attributes in the template with the actual values
    this.attr.forEach((el) => {
      this.template = this.template.split(`{{${el}}}`).join(this.getAttribute(el));
    });

    shadow.innerHTML = this.template;
  }

  // attribute change
  attributeChangedCallback(property, oldValue, newValue) {
    if (oldValue === newValue) return;
    this[property] = newValue;
  }

  // component attributes
  static get observedAttributes() {
    return []
  }
}

customElements.define(GridComponent.selector, GridComponent);