function next(){
  var n=document.getElementById("name").value;
  var g=document.getElementById("email").value;
  localStorage.setItem("name",n);
  localStorage.setItem("mail",g);
  window.location.assign("E:\pgm\html\task2\login.html")

}

