import "./components/tile/tile.component";
import "./components/grid/grid.component";
import "./components/header/header.component";
import "./components/modal/modal.component";
import "./style/style.scss";
document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <my-header></my-header>
  <train-grid class="train-grid"></train-grid>
  `;
