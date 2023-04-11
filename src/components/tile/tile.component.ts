import html from "./tile.component.html?raw";
import { BaseComponent } from '../base.component';

class TileComponent extends BaseComponent {
  static selector = 'my-tile';

  constructor() {
    super();

    this.template = html;
    this.attr = ['railType'];
  }

  // component attributes
  static get observedAttributes() {
    return ['railType']
  }

}
customElements.define(TileComponent.selector, TileComponent);