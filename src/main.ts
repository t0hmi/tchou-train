import './components/tile/tile.component.js'
import './components/grid/grid.component.ts'
import './style/style.scss'
document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <h1>Hello Vite!</h1>
  <my-grid class="c-grid"></my-grid>
  `;