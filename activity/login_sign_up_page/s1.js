function next(){
  var n=document.getElementById("name").value;
  var g=document.getElementById("email").value;
  localStorage.setItem("name",n);
  localStorage.setItem("mail",g);
  window.location.assign("E:\pgm\html\task2\login.html")

}

function myFunction(){
  var n=document.getElementById("name").value;
  var g=document.getElementById("email").value;
  var n1=localStorage.getItem("name");
  var g1=localStorage.getItem("mail");
  //alert(n+n1+g+g1);
if(n===n1 && g===g1){
     alert ("Login Successfully!!!");

}
else{
alert ("Login UnSuccessfully!!!");
}}
