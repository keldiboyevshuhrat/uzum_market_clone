// fetch('https://jsonplaceholder.typicode.com/todos/1')
//       .then(response => response.json())
//       .then(json => console.log(json))



//   console.log(json1);

// for (let index = 0; index < json1.length; index++) {

//     console.log(json1[index]);
// }

let main_div_1 = document.querySelector(".main_div_1");

// render 

function name1(json1) {
    for (let a = 0; a < json1.length; a++) {
        // console.log(a);

        let div = document.createElement("div")
        div.className = 'main_div_1_1'
        div.innerHTML = `

                    <div class="main_img">
                            <img src="${json1[a].image}" alt="rasim">
                            <i class="main_div_icon2 fa-regular fa-heart"></i>
                        </div>
                        <div class="div_albomi_id_title">

                            <p class="main_div_p1"><span style="color:red">nomi:</span> ${json1[a].nomi}</p>
                            <p class="main_div_p2"><span style="color:red">oylik narhi: </span>
                                <mark style="background-color: blue;"> ${json1[a].oylik_narxi}</mark>

                            </p>
                            <div class="main_albom_id_title_narh">

                                <p>${json1[a].aksiya_narxi} <sup><s> ${json1[a].eski_narxi}</s></sup> $</p>

                                <i class="main_icon1 fa-solid fa-cart-shopping"></i>
                            </div>

                        </div>

        `

        main_div_1.appendChild(div);

    }
} name1(json1)




// yoqtirish saqlash

// let main_div_icon2 = document.querySelector(".main_div_icon2");



// // yoqtirish saqlash manzili

// let yoqtirish1 = document.querySelector("#yoqtirish1");
// console.log(yoqtirish1);












// text 
let header_text = document.querySelector(".header_text")


// submit click 
let header_submit = document.querySelector(".header_submit")

// console.log(header_submit);

// sorch data
header_submit.addEventListener("click", (e) => {

    e.preventDefault();
    main_div_1.innerHTML = "";
    let manba = [];
    let val = header_text.value;




    json1.forEach((e) => {
        if (e.nomi.trim() === val) {
            manba.push(e);


        }
    })


    for (let a = 0; a < manba.length; a++) {
        // console.log(a);

        let div = document.createElement("div")
        div.className = 'main_div_1_1'
        div.innerHTML = `

                <div class="main_img">
                        <img src="${manba[a].image}" alt="rasim">
                        <i class="main_div_icon2 fa-regular fa-heart"></i>
                    </div>
                    <div class="div_albomi_id_title">

                        <p class="main_div_p1"><span style="color:red">nomi:</span> ${manba[a].nomi}</p>
                        <p class="main_div_p2"><span style="color:red">oylik narhi: </span>
                            <mark style="background-color: blue;"> ${manba[a].oylik_narxi}</mark>

                        </p>
                        <div class="main_albom_id_title_narh">

                            <p>${manba[a].aksiya_narxi} <sup><s> ${manba[a].eski_narxi}</s></sup> $</p>

                            <i class="main_icon1 fa-solid fa-cart-shopping"></i>
                        </div>

                    </div>

    `

        main_div_1.appendChild(div);

    }


})





// teskor nomlar //////////////////////////////////////////////////////

let hammasi = document.querySelector("#hammasi");

let hammasi2 = document.querySelector("#hammasi2");




// console.log(hammasi5);

hammasi2.addEventListener("click", () => {



    main_div_1.innerHTML = "";
    let manba = [];
    let val = "telifon";





    json1.forEach((e) => {
        if (e.nomi.trim() === val) {
            manba.push(e);


        } else {
            console.log('yoq');
        }
    })


    for (let a = 0; a < manba.length; a++) {
        // console.log(a);

        let div = document.createElement("div")
        div.className = 'main_div_1_1'
        div.innerHTML = `

                <div class="main_img">
                        <img src="${manba[a].image}" alt="rasim">
                        <i class="main_div_icon2 fa-regular fa-heart"></i>
                    </div>
                    <div class="div_albomi_id_title">

                        <p class="main_div_p1"><span style="color:red">nomi:</span> ${manba[a].nomi}</p>
                        <p class="main_div_p2"><span style="color:red">oylik narhi: </span>
                            <mark style="background-color: blue;"> ${manba[a].oylik_narxi}</mark>

                        </p>
                        <div class="main_albom_id_title_narh">

                            <p>${manba[a].aksiya_narxi} <sup><s> ${manba[a].eski_narxi}</s></sup> $</p>

                            <i class="main_icon1 fa-solid fa-cart-shopping"></i>
                        </div>

                    </div>

    `

        main_div_1.appendChild(div);

    }


})

//\///  krasopka 

let hammasi3 = document.querySelector("#hammasi3");


hammasi3.addEventListener("click", () => {



    main_div_1.innerHTML = "";
    let manba = [];
    let val = "oyoq kiyim";





    json1.forEach((e) => {
        if (e.nomi.trim() === val) {
            manba.push(e);


        } else {
            console.log('yoq');
        }
    })


    for (let a = 0; a < manba.length; a++) {
        // console.log(a);

        let div = document.createElement("div")
        div.className = 'main_div_1_1'
        div.innerHTML = `

                <div class="main_img">
                        <img src="${manba[a].image}" alt="rasim">
                        <i class="main_div_icon2 fa-regular fa-heart"></i>
                    </div>
                    <div class="div_albomi_id_title">

                        <p class="main_div_p1"><span style="color:red">nomi:</span> ${manba[a].nomi}</p>
                        <p class="main_div_p2"><span style="color:red">oylik narhi: </span>
                            <mark style="background-color: blue;"> ${manba[a].oylik_narxi}</mark>

                        </p>
                        <div class="main_albom_id_title_narh">

                            <p>${manba[a].aksiya_narxi} <sup><s> ${manba[a].eski_narxi}</s></sup> $</p>

                            <i class="main_icon1 fa-solid fa-cart-shopping"></i>
                        </div>

                    </div>

    `

        main_div_1.appendChild(div);

    }


})





// kanditsaner 


let hammasi4 = document.querySelector("#hammasi4");

hammasi4.addEventListener("click", () => {



    main_div_1.innerHTML = "";
    let manba = [];
    let val = "kanditsaner";





    json1.forEach((e) => {
        if (e.nomi.trim() === val) {
            manba.push(e);


        } else {
            console.log('yoq');
        }
    })


    for (let a = 0; a < manba.length; a++) {
        // console.log(a);

        let div = document.createElement("div")
        div.className = 'main_div_1_1'
        div.innerHTML = `

                <div class="main_img">
                        <img src="${manba[a].image}" alt="rasim">
                        <i class="main_div_icon2 fa-regular fa-heart"></i>
                    </div>
                    <div class="div_albomi_id_title">

                        <p class="main_div_p1"><span style="color:red">nomi:</span> ${manba[a].nomi}</p>
                        <p class="main_div_p2"><span style="color:red">oylik narhi: </span>
                            <mark style="background-color: blue;"> ${manba[a].oylik_narxi}</mark>

                        </p>
                        <div class="main_albom_id_title_narh">

                            <p>${manba[a].aksiya_narxi} <sup><s> ${manba[a].eski_narxi}</s></sup> $</p>

                            <i class="main_icon1 fa-solid fa-cart-shopping"></i>
                        </div>

                    </div>

    `

        main_div_1.appendChild(div);

    }


})




// velik 
let hammasi5 = document.querySelector("#hammasi5");
hammasi5.addEventListener("click", () => {



    main_div_1.innerHTML = "";
    let manba = [];
    let val = "velik";





    json1.forEach((e) => {
        if (e.nomi.trim() === val) {
            manba.push(e);


        } else {
            console.log('yoq');
        }
    })


    for (let a = 0; a < manba.length; a++) {
        // console.log(a);

        let div = document.createElement("div")
        div.className = 'main_div_1_1'
        div.innerHTML = `

                <div class="main_img">
                        <img src="${manba[a].image}" alt="rasim">
                        <i class="main_div_icon2 fa-regular fa-heart"></i>
                    </div>
                    <div class="div_albomi_id_title">

                        <p class="main_div_p1"><span style="color:red">nomi:</span> ${manba[a].nomi}</p>
                        <p class="main_div_p2"><span style="color:red">oylik narhi: </span>
                            <mark style="background-color: blue;"> ${manba[a].oylik_narxi}</mark>

                        </p>
                        <div class="main_albom_id_title_narh">

                            <p>${manba[a].aksiya_narxi} <sup><s> ${manba[a].eski_narxi}</s></sup> $</p>

                            <i class="main_icon1 fa-solid fa-cart-shopping"></i>
                        </div>

                    </div>

    `

        main_div_1.appendChild(div);

    }


})




///////////////////////////// hamasi

hammasi.addEventListener("click", () => {



    for (let a = 0; a < json1.length; a++) {
        // console.log(a);

        let div = document.createElement("div")
        div.className = 'main_div_1_1'
        div.innerHTML = `

                    <div class="main_img">
                            <img src="${json1[a].image}" alt="rasim">
                            <i class="main_div_icon2 fa-regular fa-heart"></i>
                        </div>
                        <div class="div_albomi_id_title">

                            <p class="main_div_p1"><span style="color:red">nomi:</span> ${json1[a].nomi}</p>
                            <p class="main_div_p2"><span style="color:red">oylik narhi: </span>
                                <mark style="background-color: blue;"> ${json1[a].oylik_narxi}</mark>

                            </p>
                            <div class="main_albom_id_title_narh">

                                <p>${json1[a].aksiya_narxi} <sup><s> ${json1[a].eski_narxi}</s></sup> $</p>

                                <i class="main_icon1 fa-solid fa-cart-shopping"></i>
                            </div>

                        </div>

        `

        main_div_1.appendChild(div);

    }




})


