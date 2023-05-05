import html from './modal.component.html?raw';
import './modal.component.scss';

class Modal extends HTMLElement {
    private backdrop: HTMLElement;
    private modal: HTMLElement;
  
    constructor() {
      super();
  
      const shadowRoot = this.attachShadow({ mode: 'open' });
  
      // Create backdrop element
      this.backdrop = document.createElement('div');
      this.backdrop.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
        display: none;
        z-index: 10;
      `;

     
      // Create modal element
      this.modal = document.createElement('div');
      this.modal.classList.add('modal');
      this.modal.innerHTML = html;
  
      // Create close button
      const closeButton = document.createElement('button');
      closeButton.textContent = 'Close';
      closeButton.addEventListener('click', () => {
        this.close();
      });
  
      // Add elements to shadow root
      shadowRoot.appendChild(this.backdrop);
      this.modal.appendChild(closeButton);
      shadowRoot.appendChild(this.modal);
    }
  
    connectedCallback() {
        const span = this.shadowRoot    .querySelector('#date');
        span.textContent = new Date().toLocaleDateString('fr', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })
  
      // log the isOpen attribute
        if(this.getAttribute('isOpen') === 'true') {
            this.open();
        }else {
            this.close();
        }
    }

  
    private open() {
      this.backdrop.style.display = 'block';
      this.modal.style.display = 'block';
    }
  
    private close() {
        this.setAttribute('isOpen', 'false');
      this.backdrop.style.display = 'none';
      this.modal.style.display = 'none';
    }

    attributeChangedCallback(property, oldValue, newValue) {
        console.log("property", property);
        if (oldValue === newValue) return;
        this[property] = newValue;
        if(this.getAttribute('isopen') === 'true') {
            this.open();
        }else {
            this.close();
        }
    }


    // component attributes
    static get observedAttributes() {
        return ['isopen']
    }

  }
  
  customElements.define('my-modal', Modal);