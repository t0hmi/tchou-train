import html from './sideMenu.component.html?raw';
import styleText from '../../style/style.scss?inline';
import { TileType } from '../../types/type.type';


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
    const sheet = new CSSStyleSheet();
    sheet.replaceSync(styleText);
    this.shadowRoot!.adoptedStyleSheets = [sheet];

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
    const clearButton = shadow.getElementById("clearButton");
    console.log(clearButton);

    menuItem.forEach(el => {
      el.addEventListener("click", (e) => {
        e.preventDefault();
        const tileType = el.id.split("-")[0];
        const tileName = el.id.split("-")[1];

        document.body.style.cursor = `url(assets/img/64/${tileType}/${TileType[tileName]}.png) 32 32, auto`;
        this.closeAll(checkBox);
        clearButton.classList.remove("hidden");
      })
    });

    // listener for the clear button to clear the selection

    clearButton.addEventListener("click", (e) => {
      e.preventDefault();
      document.body.style.cursor = `pointer, auto`;
      document.body.style.cursor = "";
      clearButton.classList.add("hidden");
      this.closeAll(checkBox);
    })
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

  }
}
customElements.define(SideMenuComponent.selector, SideMenuComponent);