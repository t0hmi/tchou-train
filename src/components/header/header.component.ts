// header.component.ts
import html from "./header.component.html?raw";

class HeaderComponent extends HTMLElement {
  static selector = "my-header";

  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" });
    const editableListContainer = document.createElement("div");
    editableListContainer.innerHTML = html;
    shadow.appendChild(editableListContainer);
  }
}
customElements.define(HeaderComponent.selector, HeaderComponent);
