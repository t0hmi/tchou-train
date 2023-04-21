import rawTileHtml from "./tile.component.html?raw";

export class TileComponent extends HTMLElement {
  static selector = 'train-tile';

  $tile : TileComponent;

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    const child = document.createElement('div');
    child.setAttribute('id', 'train-tile');
    child.setAttribute('class', 'c-tile');
    let tileHtml = rawTileHtml;
    TileComponent.observedAttributes.forEach((el) => {
      tileHtml = tileHtml.split(`{{${el}}}`).join(this.getAttribute(el));
    });
    child.innerHTML = tileHtml;
    
    this.shadowRoot.appendChild(child);
    this.$tile = this.shadowRoot.querySelector('#train-tile');
  }


  connectedCallback() {
    
  }

  attributeChangedCallback(_, oldValue: string, newValue: string) {
    if (oldValue !== newValue) {
      this.$tile.getElementsByTagName('img')[0].src = this.$tile.getElementsByTagName('img')[0].src.split(oldValue).join(newValue);
    }
  }

  // component attributes
  static get observedAttributes() {
    return ['tiletype']
  }

}
customElements.define(TileComponent.selector, TileComponent);
