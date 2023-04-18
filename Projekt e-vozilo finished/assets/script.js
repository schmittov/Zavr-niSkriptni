var popup = document.getElementById("myModal"); //popup
var btnOpen = document.getElementById("myBtn"); //login u navbaru
var btnClose = document.getElementsByClassName("close")[0]; //X u popup-u
var LoginWindow = document.getElementsByClassName("login_window")[0];//background zatamnjeni login popupa

var mail = document.getElementById("mail-modal"); //mail u popup
var password = document.getElementById("password-modal"); //password u popup
var btnSubmit = document.getElementById("submitModal");//submit btn u popup

var ham =document.getElementById("ham"); //navbar u responzivi

var oTvrtciModal=document.getElementById("company"); //navbar o tvrtci
var vozilaModal=document.getElementById("veichle"); //navbar vozila
var contactModal=document.getElementById("contact");//navbar kontakt

var hamBar=document.getElementById("nav-ham");
var oTvrtciModalHam=document.getElementById("companyHam"); //navbar o tvrtci ham
var vozilaModalHam=document.getElementById("veichleHam"); //navbar vozila ham
var contactModalHam=document.getElementById("contactHam");//navbar kontakt ham
var btnOpenHam = document.getElementById("myBtnHam"); //login u navbaru

//var automobil = document.getElementsByClassName("option")[0];//div od auta koji hovera
var bicikl = document.getElementsByClassName("option")[1];//div od auta koji hovera
var romobil = document.getElementsByClassName("option")[2];//div od auta koji hovera
// var automobil=document.getElementById("vozilo-auto");
// var automobil=document.getElementsByClassName("btnNaslov")[0];

var automobilTable= document.getElementsByClassName("price-table")[0];//tablica cijena
var bicikllTable= document.getElementsByClassName("price-table")[1];//tablica cijena
var romobilTable= document.getElementsByClassName("price-table")[2];//tablica cijena

btnOpen.onclick = function() //otvori popup
{
  LoginWindow.style.display = "block";
  
  
}

btnClose.onclick = function()  //zatvori popup sa X
{
  LoginWindow.style.display = "none";
  mail.value="";
  password.value="";
  mail.style.border="none";
  password.style.border="none";
}

window.onclick=function(event){ //zatvori popup klikom na ekran
  if (event.target == LoginWindow) {
    LoginWindow.style.display = "none";

    mail.value="";
    password.value="";
    mail.style.border="none";
    password.style.border="none";
  }
}

//provjera ispunjenosti u popup_u
btnSubmit.onclick=function(){
  if(mail.value==""){
    mail.style.border="solid red 1px";
  }

  else{
    mail.style.border="solid green 1px"
  }
   


  if(password.value==""){
    password.style.border="solid red 1px";
  }
    

  else{
    password.style.border="solid green 1px"
  }
   
}



//navbar scroolaj na taj dio stranice
contactModal.onclick=function(){
  window.scrollTo({
    top: 1740,
    behavior:'smooth'}
    );
}

oTvrtciModal.onclick=function(){
  window.scrollTo({
    top: 910,
    behavior:'smooth'});
}

vozilaModal.onclick=function(){
  window.scrollTo(
    {
      top: 1050,
      behavior:'smooth'});
}

//ham navbar 
ham.onclick=function(){
  //ham.classList.toggle("change");
  // hamBar.style.display="block";
  if (hamBar.style.display == "block") {
    hamBar.style.display = "none";
  } else {
    hamBar.style.display = "block";
  }
 hamBar.style.width=="100%"
}


contactModalHam.onclick=function(){
  window.scrollTo({
    top: 1740,
    behavior:'smooth'}
    );
    hamBar.style.display = "none";
}

oTvrtciModalHam.onclick=function(){
  window.scrollTo({
    top: 910,
    behavior:'smooth'});
    hamBar.style.display = "none";
}

vozilaModalHam.onclick=function(){
  window.scrollTo(
    {
      top: 1050,
      behavior:'smooth'});
      hamBar.style.display = "none";
}
btnOpenHam.onclick = function() //otvori popup
{
  LoginWindow.style.display = "block";
  hamBar.style.display = "none";
}

// automobil.onclick = function()  //otvori tablicu cijena
// {
//   automobilTable.style.display = "block";
// }

// bicikl.onclick = function()  //otvori tablicu cijena
// {
//   biciklTable.style.display = "block";
// }

automobil.onclick = function()  //otvori tablicu cijena
{
  // romobilTable.style.display = "none";
  alert("nigga");
}