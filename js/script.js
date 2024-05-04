$(document).ready(function () {
   $('#mybtn').click(function (e) { 
       e.preventDefault();
       $('#mymodal').toggle(1500); 
   });
 
   new WOW().init();

});