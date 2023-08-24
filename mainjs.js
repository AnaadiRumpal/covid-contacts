function openwebsite()
{
  window.open("https://anaadirampalportfolio.onrender.com/")
}


function dropDown() {
    document.querySelector('#submenu').classList.toggle('hidden')
  }
  

function Openbar() {
    document.querySelector('.sidebar').classList.toggle('left-[-300px]')
}


function Closebar() {
    document.querySelector('.sidebar').classname = "hidden";
}


function slidee() {
    var slidees = document.querySelectorAll(".slidee");
  
    for (var i = 0; i < slidees.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = slidees[i].getBoundingClientRect().top;
      var elementVisible = 100;
  
      if (elementTop < windowHeight - elementVisible) {
        slidees[i].classList.add("active");
      } else {
        slidees[i].classList.remove("active");
      }
    }
  }
  
  window.addEventListener("scroll", slidee);




  function showcontact()
{
    let contcont = document.getElementById("contcont");
    contcont.className = "flex flex-col justify-center items-center w-full bgimage bg-fixed bg-cover ";

    let charts = document.getElementById("charts");
    charts.className = " hidden flex-col justify-center items-center w-full bgimage2 bg-fixed bg-cover ";

    let btn1 = document.getElementById("btn1");
    btn1.className = "p-2.5 mt-2 flex items-center rounded-md px-4 duration-300 cursor-pointer bg-cyan-800 hover:bg-blue-600 ";

    let btn2 = document.getElementById("btn2");
    btn2.className = "p-2.5 mt-2 flex items-center rounded-md px-4 duration-300 cursor-pointer  hover:bg-blue-600 ";
}

function showcharts()
{
    let contcont = document.getElementById("contcont");
    contcont.className = "hidden flex-col justify-center items-center w-full bgimage bg-fixed bg-cover ";

    let charts = document.getElementById("charts");
    charts.className = " flex flex-col justify-center items-center w-full bgimage2 bg-fixed bg-cover ";
    let btn1 = document.getElementById("btn1");
    btn1.className = "p-2.5 mt-2 flex items-center rounded-md px-4 duration-300 cursor-pointer  hover:bg-blue-600 ";

    let btn2 = document.getElementById("btn2");
    btn2.className = "p-2.5 mt-2 flex items-center rounded-md px-4 duration-300 cursor-pointer bg-cyan-800 hover:bg-blue-600 ";

    
}