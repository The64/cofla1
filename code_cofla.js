const container = document.querySelector(".grid-container");

// const card = document.querySelector(".card");

// const keyName = document.querySelector(".key-name");

// const keyPrice = document.querySelector(".key-price");

// const keyImg = document.querySelector(".key-img");

const create = (jsName,jsPrice,jsImg)=> {

    const div = document.createElement("div");
    div.classList.add("card");
    

    const h2 = document.createElement("h2");
    h2.classList.add("name");
    h2.textContent = jsName;


    const h3 = document.createElement("h3");
    h3.classList.add("price");
    h3.textContent = jsPrice;


    const img = document.createElement("img");
    img.classList.add("img");
    img.setAttribute("src",jsImg);


    div.appendChild(h2);
    div.appendChild(h3);
    div.appendChild(img)

    container.appendChild(div);
}



const userCreate = ()=> {

    const nameInp = document.querySelector(".name-inp").value;
    const priceInp = document.querySelector(".price-inp").value;
    const imgInp = document.querySelector(".img-inp").value;

    if (nameInp == "" || priceInp == "" || imgInp == "") {
        alert("PLEASE FILL ALL OF THE FILDS")
        
    }
    
    else {
        create(nameInp, priceInp, imgInp);
    }

}



const input = document.querySelector(".input");

input.required = "required";


const submit = document.querySelector(".submit");

submit.addEventListener("click",userCreate);



// create("nombre de la llave","precio de la llave","https://images5.alphacoders.com/904/904076.jpg");

// create("nombre de la llave","precio de la llave","https://images8.alphacoders.com/368/thumb-1920-368836.jpg");
