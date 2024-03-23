var creatorsParentEl = document.querySelector(".creators");
var creatorsDataArr = [
    {
        title: "Keepitreal",
        image: "/images/authors/Keepitreal.png"
    },
    {
        title: "DigiLab",
        image: "/images/authors/DigiLab.png"
    },
    {
        title: "GravityOne",
        image: "/images/authors/GravityOne.png"
    },
    {
        title: "Juanie",
        image: "/images/authors/Juanie.png"
    },
    {
        title: "BlueWhale",
        image: "/images/authors/BlueWhale.png"
    },
    {
        title: "Mr Fox",
        image: "/images/authors/MrFox.png"
    },
    {
        title: "Shroomie",
        image: "/images/authors/Shroomie.png"
    },
    {
        title: "Robotica",
        image: "/images/authors/Robotica.png"
    }
];
creatorsDataArr.map(function (creator, index) {
    var creatorItem = document.createElement("li");
    creatorItem.classList.add("creator_item");
    creatorItem.innerHTML = "\n        <div class=\"badge\">" + (index + 1) + "</div>\n        <img src=" + creator.image + " alt=\"avatar\">\n        <div class=\"info\">\n            <h6>" + creator.title + "</h6>\n            <p>\n                <span>Total Sales:</span>\n                <span>34.53 ETH</span>\n            </p>\n        </div>";
    creatorsParentEl === null || creatorsParentEl === void 0 ? void 0 : creatorsParentEl.insertAdjacentElement("beforeend", creatorItem);
});
