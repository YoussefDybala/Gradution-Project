let dark = document.querySelector(".dark")
let light = document.querySelector(".light")
let body = document.querySelector("body")
let service = document.querySelector(".serv")
let title = document.querySelectorAll(".container .main-title")
let up = document.querySelector(".up")
let dayTime = document.querySelector("#daytime")
let dayTimeImage = document.querySelectorAll("#daytime img")
let gear = document.querySelector(".fa-gear")
dark.addEventListener('click' , function () {
    if (light.style.display = "block") {
        body.style.backgroundColor = "#232326"
        body.style.color = "white"
        service.style.backgroundColor = "#232326"
        body.style.transition = "0.3s"
        up.style.backgroundColor = "white"
        up.style.color = "black"
        dayTime.style.backgroundImage = "none"
        dayTime.style.color = "white"
        gear.style.color = "white"
    }
})

light.addEventListener('click' , function () {
    if (light.style.display = "none") {
        body.style.backgroundColor = "white"
        body.style.color = "black"
        service.style.backgroundColor = "white"
        body.style.transition = "0.3s"
        up.style.backgroundColor = "black"
        up.style.color = "white"
        dayTime.style.backgroundImage = "url(images/daytime_bg.jpeg)"
        dayTime.style.color = "white"
        gear.style.color = "white"
    }
    
})


// Start Setting Menu

let setting = document.querySelector(".setting")
let closeee = document.querySelector(".close")

gear.onclick = function () {
    setting.classList.add ("active")
}
closeee.onclick = function () {
    setting.classList.remove ("active")
}
document.onkeyup = function (e) {
    if (e.key === "Escape"){
        setting.classList.remove ("active")
    }
}

let oran = document.querySelector(".oran")
let rose = document.querySelector(".rose")
let blGreen = document.querySelector(".bl-green")
let sky = document.querySelector(".sky")
let tree = document.querySelector(".tree")
let bluevoilot = document.querySelector(".bluevoilot")
let brown = document.querySelector(".brown")
let pasil = document.querySelector(".pasil")
let gray = document.querySelector(".gray")
let kohly = document.querySelector(".kohly")
let header = document.querySelector("header")
let text = document.querySelector(".text")
let services = document.querySelector(".serv")
oran.addEventListener("click" , function () {
   document.documentElement.style.setProperty('--main-color' , 'rgb(255, 128, 0)'  )
   text.style.backgroundColor = "rgb(255 128 0/70%)"
//    header.style.backgroundColor = "rgb(255 128 0/30%)"
   body.style.transition = "0.3s"
})
rose.addEventListener("click" , function () {
    document.documentElement.style.setProperty('--main-color' , '#e91e63' )
    text.style.backgroundColor = "#e91e638f"
    // header.style.backgroundColor = "#e91e638f"
    body.style.transition = "0.3s"
})
blGreen.addEventListener("click" , function () {
    document.documentElement.style.setProperty('--main-color' , '#009688' )
    text.style.backgroundColor = "#009688a1"
    // header.style.backgroundColor = "#009688a1"
    body.style.transition = "0.3s"
})
sky.addEventListener("click" , function () {
    document.documentElement.style.setProperty('--main-color' , '#03a9f4' )
    text.style.backgroundColor = "#03a9f4a3"
    // header.style.backgroundColor = "#03a9f4a3"
    body.style.transition = "0.3s"
})
tree.addEventListener("click" , function () {
    document.documentElement.style.setProperty('--main-color' , '#4caf50' )
    text.style.backgroundColor = "#4caf50ad"
    // header.style.backgroundColor = "#4caf50ad"
    body.style.transition = "0.3s"
})
bluevoilot.addEventListener("click" , function () {
    document.documentElement.style.setProperty('--main-color' , 'rgb(57, 0, 90)' )
    text.style.backgroundColor = "rgb(57 0 90 / 70%)"
    // header.style.backgroundColor = "rgb(57 0 90 / 30%)"
    body.style.transition = "0.3s"
})
brown.addEventListener("click" , function () {
    document.documentElement.style.setProperty('--main-color' , 'brown' )
    text.style.backgroundColor = "#a52a2ac2"
    // header.style.backgroundColor = "#a52a2ac2"
    body.style.transition = "0.3s"
})
pasil.addEventListener("click" , function () {
    document.documentElement.style.setProperty('--main-color' , '#686c00' )
    text.style.backgroundColor = "rgb(104 108 0 / 70%)"
    // header.style.backgroundColor = "rgb(104 108 0 / 30%)"
    body.style.transition = "0.3s"
})
gray.addEventListener("click" , function () {
    document.documentElement.style.setProperty('--main-color' , 'gray' )
    text.style.backgroundColor = "#808080bd"
    // header.style.backgroundColor = "#808080bd"
    body.style.transition = "0.3s"
})
kohly.addEventListener("click" , function () {
    document.documentElement.style.setProperty('--main-color' , '#333' )
    text.style.backgroundColor = "rgb(51 51 51 / 70%)"
    // header.style.backgroundColor = "rgb(51 51 51 / 30%)"
    body.style.transition = "0.3s"
    // service.style.color = "white"
})

let bulletControl = document.querySelectorAll(".bullet-control div")
let yes = document.querySelector(".yes")
let no = document.querySelector(".no")
let bullets = document.querySelector(".first-Bullets")

console.log(bulletControl);
bulletControl.forEach((ele) => {
    ele.onclick = function () {
        bulletControl.forEach((ele) => {
            ele.classList.remove("active")
        })
        this.classList.add("active")
        if (ele === no) {
            bullets.style.display = "none"
        } else {
            bullets.style.display = "block"
        }
    }
})



// End Setting Menu



// Start Shop Card

let iconCart = document.querySelector(".icon-cart")
let shopCart = document.querySelector(".shop-cart")
let closee= document.querySelector(".closer")


iconCart.onclick = function () {
    shopCart.classList.add("show-cart")
    document.onkeyup = function (e) {
        if (e.key === "Escape"){
            shopCart.classList.remove("show-cart")
        }
    }
}

closee.onclick = function () {
   shopCart.classList.remove("show-cart")
}


// End Shop Cart 

////////////////////////////////////////////////// End Header 

////////////////////////////////////////////////// Start Lading 
let imageOne = document.querySelector(".image-one")
let imageTwo = document.querySelector(".image-Two")
let imageThree = document.querySelector(".image-Three")
let bullOne = document.querySelector("#cir-one")
let bullTwo = document.querySelector("#cir-two")
let bullThree = document.querySelector("#cir-three")
let bullFour = document.querySelector("#cir-four")
let bullFive = document.querySelector("#cir-five")
let landing = document.querySelector(".landing")

bullOne.addEventListener("click" , function () {
landing.style.backgroundImage = "url(images/home_bg.jpeg)"
bullOne.classList.add("active")
})
bullTwo.addEventListener("click" , function () {
landing.style.backgroundImage = " url(images/home_bg4.jpg)"

})
bullThree.addEventListener("click" , function () {
landing.style.backgroundImage = " url(images/home_bg3.jpg)"
})
bullFour.addEventListener("click" , function () {
landing.style.backgroundImage = "url(images/home_bg5.jpg)"
})
bullFive.addEventListener("click" , function () {
landing.style.backgroundImage = "url(images/home_bg6.jpg)"
})
////////////////////////////////////////////////// End Lading 

////////////////////////////////////////////////// Start Skills
let bulletsSkills = document.querySelectorAll(".bullets li")
let allContent = document.querySelectorAll(".all-content .M1")
console.log(allContent);
console.log(bulletsSkills);
bulletsSkills.forEach((ele) => {
    ele.onclick = function () {
        bulletsSkills.forEach((ele) => {
            ele.classList.remove("active")
        })
        this.classList.add("active")
    }
    ele.addEventListener("click" , function () {
        allContent.forEach((ele) => {
            ele.style.display = "none"
        })
        document.querySelectorAll(this.dataset.work).forEach((ele) => {
            ele.style.display = "block"
        })
    })
})


// End Skills





////////////////////////////////////////////////// End  Skills

let span = document.querySelector(".up")
window.onscroll = function () {
    // console.log(scrollY)
    if (this.scrollY >= 1000) {
        span.classList.add("show")
    }else {
        span.classList.remove("show")
    }
}
span.onclick = function () {
    window.scrollTo({
    top:0,
    behavior:"smooth"
    })
}


let products =[ 
    {
        id : 1 ,
        title : 'Pepperoni Pizza' ,
        img : 'images/pepproni.png',
        price : 20
    },
    {
        id : 2 ,
        title : 'Vegeterian Pizza' ,
        img : 'images/vegi.png',
        price : 12
    },
    {
        id : 3 ,
        title : ' Turkey Pizza' ,
        img : 'images/smoketurkey.png',
        price : 18
    },
    {
        id : 4 ,
        title : 'Dubble Burger' ,
        img : 'images/dubbleburger.png',
        price : 16
    },
    {
        id : 5 ,
        title : 'Classic Burger' ,
        img : 'images/classic.png',
        price : 14
    },
    {
        id : 6 ,
        title : 'Chicken Nuggets' ,
        img : 'images/chicken-nuggets.png',
        price : 14
    },
    {
        id : 7 ,
        title : 'Beef Lasagna' ,
        img : 'images/Beef-Lasagna.png',
        price : 20
    },
    {
        id : 8 ,
        title : 'Spaghetti Beef' ,
        img : 'images/spagettibolognese.png',
        price : 20
    },
    {
        id : 9 ,
        title : 'Chicken Alfrido' ,
        img : 'images/chicken-alfrido.png',
        price : 20
    },
    {
        id : 10 ,
        title : 'Grilled Beef Plate' ,
        img : 'images/Grilled beef.png',
        price : 25
    },
    {
        id : 11 ,
        title : 'Roast Beef Plate' ,
        img : 'images/Roast Beef.png',
        price : 30
    },
    {
        id : 12 ,
        title : 'Picata Beef Plate' ,
        img : 'images/Picata Beef.png',
        price : 28
    },
    {
        id : 13 ,
        title : 'Esspreco Double' ,
        img : 'images/Esspreco double.png',
        price : 9
    },
    {
        id : 14 ,
        title : 'Cortado Classic' ,
        img : 'images/cortado classic.png',
        price : 11
    },
    {
        id : 15 ,
        title : 'Green Tea' ,
        img : 'images/Green Tea.png',
        price : 7
    },
    {
        id : 16 ,
        title : 'Lemome Juice' ,
        img : 'images/Lemon Juice.png',
        price : 13
    },
    {
        id : 17 ,
        title : 'Orange Juice' ,
        img : 'images/Orange Juice.png',
        price : 14
    },
    {
        id : 18 ,
        title : 'Watermelon Juice' ,
        img : 'images/Watermelon Juice.png',
        price : 15
    },
    {
        id : 19 ,
        title : 'Cookies' ,
        img : 'images/cookies.png',
        price : 11
    },
    {
        id : 20,
        title : 'Ice Cream Cono' ,
        img : 'images/ice cream cono.png',
        price : 12
    },
    {
        id : 21 ,
        title : 'Donuts' ,
        img : 'images/donuts.png',
        price : 15
    },
]

// let allItems = JSON.parse(localStorage.getItem("productsInCart")) || []



let categories = document.querySelector(".catigories")
function drawProductsUI () {
    let productsUI = products.map((item) => {
        return `
        <div class="products">
            <div class="photo"><img src="${item.img}" alt=""></div>
            <div class="product-name">${item.title}</div>
            <div class="info">
                <div class="main-info">
                    <div class="pr">Price</div>
                    <div class="dr">${item.price}</div>
                </div>
                <div class="add">
                    <button class="add-to-cart" onclick="addedToCart(${item.id})">Add To Cart</button> 
                </div>
            </div>
        </div>
        `
    })
    categories.innerHTML = productsUI
}
drawProductsUI ()

let n = 100.544444
let AddedItem = []
let cartsProduct = document.querySelector(".carts-product")
let Notfication = document.querySelector(".Notfi")
let value = document.querySelector(".value")
let taxvalue = document.querySelector(".tax-val")
let servicevalue = document.querySelector(".serv-val")
let totalprice = 0
let tax = 14/100
let serv = 12/100
totalprice.toFixed(5)



function addedToCart (id) {
    let chooseItem = products.find((item) => item.id === id  )
    cartsProduct.innerHTML +=
    ` 
    <div class="sigle-product" id="product-${chooseItem.id}">
    <div class="cart-img"><img src="${chooseItem.img}" alt=""></div>
    <div class="cart-name">${chooseItem.title}</div>
    <div class="cart-price">${chooseItem.price}</div>
    <div class="remove-cart" onclick="removeC(${chooseItem.id})">Remove</div>
    </div>
    `
    // let price = document.querySelector(".cart-price").textContent
    // totalprice += +(`${price}`);
    // value.textContent = totalprice

    
    totalprice += +(`${chooseItem.price}`)

    let totalcash = totalprice 
    let all =  value.textContent = totalcash.toFixed(0)
    // let totalcash = totalprice + totalprice * tax + totalprice * serv
    // taxvalue.textContent = totalprice * 14/100
    // servicevalue.textContent = totalprice * 12/100
    Math.trunc(all)
    AddedItem = [...AddedItem , chooseItem]
    localStorage.setItem('productsInCart' , JSON.stringify(AddedItem))
    let cartsProductt = document.querySelectorAll(".carts-product .cart-name")
    Notfication.style.display = "block"
    Notfication.innerHTML = cartsProductt.length
    window.alert(`${chooseItem.title} Added Sucsesfully`)
}

function removeC(id) {
    let product = document.getElementById("product-" + id)
    let targetDiv = document.getElementById("product-" + id).getElementsByClassName("cart-price")[0].innerHTML
    product.remove()
    let cartsProductt = document.querySelectorAll(".carts-product .cart-name")
    Notfication.innerHTML = cartsProductt.length
    if (targetDiv) {
        let price = parseFloat(targetDiv) || 0; // Convert to number
        totalprice -= price ;
        let value = document.querySelector(".value"); // Ensure 'value' element exists
        if (value) {
            value.textContent = totalprice
            // value.textContent = totalprice + totalprice * tax + totalprice * serv;
            
        }
        
        
        
}
}
// Ensure the function runs after the DOM is fully loaded


// function displayCart() {
//     // Clear the existing content in the cart
//     cartsProduct.innerHTML = '';


//     allItems.map((item) => {
//         cartsProduct.innerHTML += `
//             <div class="single-product" id="product-${item.id}" key=${item.id}>
//                 <div class="cart-name">${item.title}</div>
//                 <div class="cart-price">${item.price}</div>
//                 <div class="cart-img"><img src="${item.img}" alt=""></div>
//                 <button class="trash-icon onclick="delToCart(${item.id})">delete</button>
//             </div>
//         `;

//         totalprice += +item.price;
//     });

//     // Update the total price in the UI
//     value.textContent = totalprice;

//     // Update the notification count
//     Notfication.style.display = "block";
//     Notfication.innerHTML = allItems.length;
// }
// displayCart()

// function delToCart(id) {
//     console.log("product-" + id);
//     allItems = allItems.filter(item => item.id !== id);

//     // Update the localStorage
//     localStorage.setItem('productsInCart', JSON.stringify(allItems));

//     // Update the UI
//     displayCart();
// }


// function delToCart (id) {
// let productsInCart = localStorage.getItem("productsInCart")
// if (productsInCart) {
// let items = JSON.parse(productsInCart)
// let filterdItem = items.filter((item) => item.id !== id )
// localStorage.setItem('productsInCart' , JSON.stringify(filterdItem))
// }
// drawProductsUI(filterdItem)
// }

// Start Contact US 
let submit = document.querySelector(".btn-py")

submit.addEventListener("click" , function () {

    window.alert("Your Massage Has Been Sent")
})
// End Contact US