const addressbtn = document.querySelector('#address-form')
const addresclose = document.querySelector('#address-close')


addressbtn.addEventListener("click", function () {
    document.querySelector('.address-form').style.display = "flex"
})
addresclose.addEventListener("click", function () {
    document.querySelector('.address-form').style.display = "none"
})
//slider-----------------------------------------------------
/*P6 - P7 - P8*/
const rightbtn = document.querySelector('.fa-chevron-right')
rightbtn.addEventListener("Click", function () {
    
    document.querySelector(".slider-content-left-top").style.right = "100%"
})


/*P9*/
//-----------------------------------------------------slider-product------------------------

const rightbtntwo = document.querySelector('.fa-chevron-right-two')
const leftbtntwo = document.querySelector('.fa-chevron-left-two')
const imgNumbertwo = document.querySelectorAll('.slider-product-one-content-items')
//console.log(rightbtntwo) 
//console.log(leftbtntwo)
rightbtntwo.addEventListener ("click", function(){
    index = index+1
    if(index>imgNumbertwo.length-1){
        index=0
    }
    document.querySelector(".slider-product-one-content-items-content").style.right = index *100+"%"
})
leftbtntwo.addEventListener ("click", function(){
    index = index-1
    if(index<=0){
        index=imgNumbertwo.length-1
    }
    document.querySelector(".slider-product-one-content-items-content").style.right = index *100+"%"
})


