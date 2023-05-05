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

    // listener for the menu button to close other open menus
    const checkBox = shadow.querySelectorAll(".menu-open");
    checkBox.forEach(el => {
      el.addEventListener("click", (e) => {
        checkBox.forEach(el => {
          if (el != e.target)
            el.checked = false;
        })
      })
    })
  }

  // component attributes
  static get observedAttributes() {
    return []
  }

}
customElements.define(SideMenuComponent.selector, SideMenuComponent);