import { Tile } from "../tile/type.type";
import { TileComponent } from "../tile/tile.component";

class GridComponent extends HTMLElement {
  static selector = 'train-grid';
  private tiles = Object.values(Tile);

  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });
    

    for (let i = 0; i < 36; i++) {
      // random value from Tile enum, for testing purpose
      const child = document.createElement('train-tile');
      child.setAttribute('tileType', this.randomTile());
      child.setAttribute('tileId', i.toString());
      child.addEventListener('click', this.onClick);
      shadow.appendChild(child);
    }
  }

  randomTile() {
    return this.tiles[Math.floor(Math.random() * this.tiles.length)];
  }


  connectedCallback() {
    
  }

  

  onClick = (ev: MouseEvent) => {
    const tile = ev.target as TileComponent; 
    tile.setAttribute('tileType', this.randomTile());
    console.log("this", ev.target);  
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