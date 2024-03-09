var box = document.querySelector("#box");
box === null || box === void 0 ? void 0 : box.addEventListener("click", function () {
    if (this.textContent !== null) {
        this.textContent = (+this.textContent + 1).toString();
    }
});
var alpha = document.querySelector(".btn");
alpha === null || alpha === void 0 ? void 0 : alpha.addEventListener("click", function () {
    if (this.textContent !== null) {
        this.textContent = this.textContent === "me" ? "click" : "me";
    }
});
