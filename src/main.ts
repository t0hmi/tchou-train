import './components/tile/tile.component';
import './components/grid/grid.component';
import './components/sideMenu/sideMenu.component';
document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
<side-menu class="c-side-menu"></side-menu>
<div class="main">
<my-grid class="c-grid"></my-grid>
</div>
`;