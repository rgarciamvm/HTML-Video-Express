//option 2 with JQuery Smooth Scroll
//https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js
$('.navbar a').click(function(e) {
   if (this.hash !== ''){
       e.preventDefault();

       const hash=this.hash;
       //('html, body') is the jquery solution for cross browser scroll animation
       $("html, body").animate({
           scrollTop: $(hash).offset().top
       },800);
   }
})

