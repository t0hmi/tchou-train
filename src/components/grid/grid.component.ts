import { Tile, TileType } from "../../types/type.type";
import { TileComponent } from "../tile/tile.component";

class GridComponent extends HTMLElement {
  static selector = 'train-grid';
  private tiles: string[] = Object.values(Tile);

  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });


    for (let i = 0; i < 36; i++) {
      // random value from Tile enum, for testing purpose
      const child = document.createElement('train-tile');
      child.setAttribute('tileType', Tile.EMPTY);
      child.setAttribute('tileId', i.toString());
      child.addEventListener('click', this.onClick);
      shadow.appendChild(child);
    }
  }

  nextTile(tiletype: string): string {
    let index = this.tiles.indexOf(tiletype) + 1;
    if (index >= this.tiles.length) {
      index = 0;
    }
    return this.tiles[index];
  }


  connectedCallback() {

  }



  onClick = (ev: MouseEvent) => {
    const cursor = document.body.style.cursor;
    const tile = ev.target as TileComponent;

    if (!cursor) {
      const tileType = tile.getAttribute('tileType') as string;
      tile.setAttribute('tileType', this.nextTile(tileType));
      return
    }

    const cursoredTile = cursor.split(('"'))[1].split('/').at(-1).split('.')[0];

    // cas de l'effaceur
    if (cursoredTile == TileType.ERASOR) {
      tile.setAttribute('tileType', Tile.EMPTY);
      return
    }

    tile.setAttribute('tileType', cursoredTile)
    return;
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