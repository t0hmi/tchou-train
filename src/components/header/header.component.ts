// header.component.ts
import html from "./header.component.html?raw";

class HeaderComponent extends HTMLElement {
  static selector = "my-header";
  modal: HTMLElement;

  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" });
    const editableListContainer = document.createElement("div");
    editableListContainer.innerHTML = html;
    shadow.appendChild(editableListContainer);

    this.modal = document.createElement("my-modal");
    this.modal.setAttribute("isopen", 'false');
    shadow.appendChild(this.modal);

    const playButton = shadow.querySelector(".btn-play");
    playButton.addEventListener("click", () => {
      this.play();
    });
  }

  play() {
    this.modal.setAttribute("isopen", 'true');
  }
}
customElements.define(HeaderComponent.selector, HeaderComponent);
