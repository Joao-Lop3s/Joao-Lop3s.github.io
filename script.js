// Menu mobile: abrir e fechar
const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobileMenu");
const closeBtn = document.getElementById("closeBtn");

// Ao clicar no ícone hambúrguer, mostra o menu mobile
hamburger.addEventListener("click", () => {
  mobileMenu.style.display = "flex";
});

// Ao clicar no botão de fechar, esconde o menu mobile
closeBtn.addEventListener("click", () => {
  mobileMenu.style.display = "none";
});

// Variáveis para o cursor customizado
let cursor_delay_element, cursor_element;
let current_x, current_y;
let target_x, target_y;

// Função de setup do p5.js (corre uma vez ao iniciar)
function setup() 
{
  noCanvas(); // Não cria canvas

  // Seleciona e mostra o cursor atrasado
  cursor_delay_element = select("#meu_cursor_delay");
  cursor_delay_element.show();

  // Seleciona e mostra o cursor principal
  cursor_element = select("#meu_cursor");
  cursor_element.show();

  // Inicializa as posições do cursor
  current_x = mouseX;
  current_y = mouseY;
}

// Função draw do p5.js (corre em loop)
function draw() 
{
  // Define tamanho e border-radius do cursor atrasado
  const w_delay = 120;
  const h_delay = 120;
  cursor_delay_element.size(w_delay, h_delay);
  cursor_delay_element.style("border-radius", w_delay/2 + "px");

  // Atualiza posição alvo do cursor
  target_x = mouseX;
  target_y = mouseY;

  // Faz interpolação suave entre posição atual e alvo
  const lerpAmount = 0.05;
  current_x = lerp(current_x, target_x, lerpAmount);
  current_y = lerp(current_y, target_y, lerpAmount);

  // Atualiza posição do cursor atrasado
  cursor_delay_element.position(current_x - w_delay/2, current_y - h_delay/2, "fixed");

  // Define tamanho e posição do cursor principal
  const w = 1;
  const h = 1;
  cursor_element.size(w, h);
  cursor_element.style("border-radius", w/2 + "px");
  cursor_element.position(target_x - w/2, target_y - h/2, "fixed");
}

// Esconde o cursor customizado (usado ao passar por cima de links/menus)
function hideCustomCursor()
{
  cursor_delay_element.hide();
}

// Mostra o cursor customizado novamente
function showCustomCursor() 
{
  cursor_delay_element.show();
}

