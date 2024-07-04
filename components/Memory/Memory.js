export class Memory extends HTMLElement{
    constructor(){
        super();
        //document.adoptedStyleSheets = [styles];
    }

    connectedCallback(){
        this.innerText = "Memory Game";
    }

}

customElements.define("memory-game", Memory);
