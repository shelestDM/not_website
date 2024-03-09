let box : HTMLElement | null = document.querySelector("#box");
box?.addEventListener("click", function():void{
    if(this.textContent !== null){
        this.textContent = (+this.textContent + 1).toString();
    }
});

let alpha: HTMLButtonElement | null = document.querySelector(".btn");
alpha?.addEventListener("click", function():void{
    if(this.textContent !== null){
        this.textContent = this.textContent === "me" ? "click" : "me";
    }
});