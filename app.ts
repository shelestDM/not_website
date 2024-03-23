let creatorsParentEl:HTMLUListElement | null  = document.querySelector(".creators");
interface CREATOR {
    title: string,
    image: string
}
let creatorsDataArr: CREATOR[] = [
    {
        title: "Keepitreal",
        image: "/images/authors/Keepitreal.png",
    },
    {
        title: "DigiLab",
        image:    "/images/authors/DigiLab.png",
    },
    {
        title: "GravityOne",
        image:    "/images/authors/GravityOne.png",
    },
    {
        title: "Juanie",
        image:    "/images/authors/Juanie.png",
    },
    {
        title: "BlueWhale",
        image:    "/images/authors/BlueWhale.png",
    },
    {
        title: "Mr Fox",
        image:    "/images/authors/MrFox.png"
    },
    {
        title: "Shroomie",
        image:    "/images/authors/Shroomie.png"
    },
    {
        title: "Robotica",
        image: "/images/authors/Robotica.png"
    }
];
creatorsDataArr.map((creator, index)=>{
    let creatorItem:HTMLLIElement = document.createElement("li");
    creatorItem.classList.add("creator_item");
    creatorItem.innerHTML = `
        <div class="badge">${index+1}</div>
        <img src=${creator.image} alt="avatar">
        <div class="info">
            <h6>${creator.title}</h6>
            <p>
                <span>Total Sales:</span>
                <span>34.53 ETH</span>
            </p>
        </div>`
    creatorsParentEl?.insertAdjacentElement("beforeend", creatorItem);    
})