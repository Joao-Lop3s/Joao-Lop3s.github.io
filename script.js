
    const hamburger = document.getElementById("hamburger");
    const mobileMenu = document.getElementById("mobileMenu");
    const closeBtn = document.getElementById("closeBtn");

    hamburger.addEventListener("click", () => {
      mobileMenu.style.display = "flex";
    });

    closeBtn.addEventListener("click", () => {
      mobileMenu.style.display = "none";
    });

let cursor_delay_element, cursor_element;
let current_x, current_y;
let target_x, target_y;


function setup() 
{
  noCanvas();
  
  cursor_delay_element = select ("#meu_cursor_delay");
  cursor_delay_element.show();
  
  cursor_element = select ("#meu_cursor");
  cursor_element.show();
  
  current_x = mouseX;
  current_y = mouseY;
}


function draw() 
{
  const w_delay = 120;
  const h_delay = 120;
  cursor_delay_element.size (w_delay, h_delay);
  cursor_delay_element.style ("border-radius", w_delay/2+"px");
  
  
  target_x = mouseX;
  target_y = mouseY;
  
  const lerpAmount = 0.05;
  current_x = lerp(current_x, target_x, lerpAmount);
  current_y = lerp(current_y, target_y, lerpAmount);
  
  cursor_delay_element.position (current_x-w_delay/2, current_y-h_delay/2, "fixed");
  
  
  const w = 1;
  const h = 1;
  cursor_element.size (w, h);
  cursor_element.style ("border-radius", w/2+"px");
  cursor_element.position (target_x-w/2, target_y-h/2, "fixed");
}


function hideCustomCursor()
{
  cursor_delay_element.hide();
}


function showCustomCursor() 
{
  cursor_delay_element.show();
}

