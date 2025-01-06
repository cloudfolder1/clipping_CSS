const button = document.getElementById("clipButton");
const circle = document.getElementById("circle");

button.addEventListener("click", () => {
 
  if (circle.style.clipPath === "polygon(50% 0%, 0% 100%, 100% 100%)") {           // Checking current shape
   
    circle.style.clipPath = "circle(50%)";                           // change to full circle
  } else {
    
    circle.style.clipPath = "polygon(50% 0%, 0% 100%, 100% 100%)";        // Clip to triangle
  }
});
