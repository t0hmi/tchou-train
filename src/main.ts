import "./components/circleMenu/circleMenu.component";
import "./style/style.scss";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `

<circle-menu class="c-circle-menu"></circle-menu>  `;
console.log(document.querySelector<HTMLDivElement>("#app"));
