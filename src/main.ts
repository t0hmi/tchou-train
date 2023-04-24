import './components/tile/tile.component'
import './components/grid/grid.component'
import './style/style.scss'
document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <train-grid class="c-grid"></train-grid>
  `;