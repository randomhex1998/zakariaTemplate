let j = $.noConflict();


j(document).ready( function (){
    j(".bars").on("click" , () =>{
        j(".mobile-menu").toggleClass("active-mobile-menu");
        j(".wrapper").toggleClass("active-mobile-menu");
    })
    j(".wrapper").on("click" , () =>{
        j(".mobile-menu").removeClass("active-mobile-menu");
        j(".wrapper").removeClass("active-mobile-menu");
    })
})