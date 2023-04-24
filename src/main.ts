import "./components/tile/tile.component";
import "./components/header/header.component";
import "./components/grid/grid.component";
import "./style/style.scss";
document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <my-header></my-header>
  <my-grid class="c-grid"></my-grid>
  `;
