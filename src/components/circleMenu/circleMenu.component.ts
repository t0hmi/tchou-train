import html from './circleMenu.component.html?raw';

class CircleMenuComponent extends HTMLElement {
  static selector = 'circle-menu';

  private template: string = html;

  private attr: string[] = [];
  constructor() {
    super();
  }

  connectedCallback() {
    const shadow = this.attachShadow({ mode: 'open' });


    //replace all attributes in the template with the actual values
    this.attr.forEach((el) => {
      this.template = this.template.split(`{{${el}}}`).join(this.getAttribute(el));
    });

    shadow.innerHTML = this.template;

    const linkElem = document.createElement('link');
    linkElem.setAttribute('rel', 'stylesheet');
    linkElem.setAttribute('href', 'style/style.scss');

    shadow.appendChild(linkElem)


    document.querySelectorAll(".menu-wrap__item").forEach(el => {
      el.addEventListener("mouseenter", () => {
        el.classList.add("hovered");

      });
      el.addEventListener("mouseleave", () => {
        el.classList.remove("hovered");
      });
    });

    // affiche le sous menu
    shadow.querySelector(".rail-droit").addEventListener("mouseenter", () => {
      shadow.querySelector(".submenu__rail_droit").classList.add("show");
    });

    // cache le sous menu
    shadow.querySelector(".rail-droit").addEventListener("mouseleave", (ev: any) => {
      console.log(ev.relatedTarget.classList);
      // dans le cas où on 
      if (!ev.relatedTarget.classList.contains("menu-wrap") && !ev.relatedTarget.classList.contains("submenu__rail")) {
        shadow.querySelector(".submenu__rail_droit").classList.remove("show");
      }
      // dans le cas où on survole un élément du menu principal
      if (ev.relatedTarget.classList.contains("menu-wrap__item")) {
        shadow.querySelectorAll(".submenu").forEach(el =>
          el.classList.remove("show")
        )
      }
    });
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

customElements.define(CircleMenuComponent.selector, CircleMenuComponent);