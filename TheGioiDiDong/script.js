const addressbtn = document.querySelector('#address-form')
const addresclose = document.querySelector('#address-close')


addressbtn.addEventListener("click", function () {
    document.querySelector('.address-form').style.display = "flex"
})
addresclose.addEventListener("click", function () {
    document.querySelector('.address-form').style.display = "none"
})
//slider-----------------------------------------------------
const rightbtn = document.querySelector('.fa-chevron-right')
rightbtn.addEventListener ("Click", function(){
    console.log("ok")
    document.querySelector(".slider-content-left-top").style.right = "100%"
})
