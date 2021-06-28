 
AOS.init();


 var navbar = document.getElementById('nav1');
 var items =document.getElementById('nav1-items');
  window.onscroll = function(){
  if(window.pageYOffset>100){

      // navbar.style.position="fixed";
      // navbar.style.top="0px";
      navbar.style.background="white";
      // navbar.style.box-shadow: "10px 10px 5px lightblue";
      items.style.color="black";
    }
  else{
      navbar.style.position="absolute";
      // navbar.style.top="100px";
      navbar.style.position="fixed";
      navbar.style.background="linear-gradient(to right, #274685 0%, #3db3c5 100%)";
      // navbar.style.color="blue";
    }
  }