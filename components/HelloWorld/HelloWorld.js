export class HelloWorld extends HTMLElement{

    constructor() {
        super();
    }

    connectedCallback() {
        console.log("Hello World is connected!!");       
    }

    // disconnectedCallback() { }
    // adoptedCallback() { }
    // attributeChangedCallback(name, oldValue, newValue) { }
}

if(!customElements.get("hello-world")) customElements.define("hello-world", HelloWorld);
