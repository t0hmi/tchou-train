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
        this.closeAllButMe(checkBox, e.target)
      })
    })

    // listener for the buttons to select a menu item
    const menuItem = shadow.querySelectorAll(".menu-item");
    menuItem.forEach(el => {
      el.addEventListener("click", (e) => {
        e.preventDefault();
        document.body.style.cursor = `url(assets/img/64/${el.id}.png), auto`;
        this.closeAll(checkBox);
      })
    });
  }

  // component attributes
  static get observedAttributes() {
    return []
  }

  private closeAllButMe(listToClose, me: EventTarget) {
    listToClose.forEach(el => {
      if (el != me)
        el.checked = false;
    })
  }
  private closeAll(listToClose) {
    this.closeAllButMe(listToClose, null);
    // listToClose.forEach(el => {
    //   el.checked = false;
    // })
  }
}
customElements.define(SideMenuComponent.selector, SideMenuComponent);