
import "./components/tile/tile.component";
import "./components/grid/grid.component";
import "./components/header/header.component";
import "./components/modal/modal.component";
import "./components/sideMenu/sideMenu.component";
import "./style/style.scss";
document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
<my-header></my-header>
<div style="width:100%; display: flex;flex-direction: row;">
<side-menu class="c-side-menu"></side-menu>
  <train-grid class="train-grid"></train-grid>
</div>
  `;