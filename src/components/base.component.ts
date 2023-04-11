export abstract class BaseComponent extends HTMLElement {

  protected attr: string[];
  protected template: string;


  connectedCallback() {
    const shadow = this.attachShadow({ mode: 'closed' });
    console.log("this", this)


    //replace all attributes in the template with the actual values
    this.attr.forEach((el) => {
      this.template = this.template.split(`{{${el}}}`).join(this.getAttribute(el));
    });


    shadow.innerHTML = this.template;

  }

}