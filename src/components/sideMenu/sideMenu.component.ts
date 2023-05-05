import html from './sideMenu.component.html?raw';

class SideMenuComponent extends HTMLElement {
  static selector = 'side-menu';
  private template: string;

  constructor() {
    super();
    this.template = html;
  }

  connectedCallback() {
    const shadow = this.attachShadow({ mode: 'open' });

    //replace all attributes in the template with the actual values
    SideMenuComponent.observedAttributes.forEach((el) => {
      this.template = this.template.split(`{{${el}}}`).join(this.getAttribute(el));
    });

    // Apply external styles to the shadow dom
    const linkElem = document.createElement('link');
    linkElem.setAttribute('rel', 'stylesheet');
    linkElem.setAttribute('href', 'style/style.scss');
    shadow.appendChild(linkElem)
    shadow.innerHTML += this.template;
  }

  // component attributes
  static get observedAttributes() {
    return []
  }

}
customElements.define(SideMenuComponent.selector, SideMenuComponent);