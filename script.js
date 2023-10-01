// Função para aplicar a cor selecionada à tela e ocultar os botões
function changeBackgroundColorAndHideButtons(color) {
  document.body.style.backgroundColor = color;

  // Oculta os botões
  const buttons = document.querySelectorAll(".color-selector button");
  buttons.forEach((button) => {
    button.style.display = "none";
  });
}

// Event listeners para os botões de cores
document.getElementById("red").addEventListener("click", function () {
  changeBackgroundColorAndHideButtons("red");
});

document.getElementById("green").addEventListener("click", function () {
  changeBackgroundColorAndHideButtons("green");
});

document.getElementById("blue").addEventListener("click", function () {
  changeBackgroundColorAndHideButtons("blue");
});

document.getElementById("yellow").addEventListener("click", function () {
  changeBackgroundColorAndHideButtons("yellow");
});

document.getElementById("purple").addEventListener("click", function () {
  changeBackgroundColorAndHideButtons("purple");
});

document.getElementById("orange").addEventListener("click", function () {
  changeBackgroundColorAndHideButtons("orange");
});

document.getElementById("black").addEventListener("click", function () {
  changeBackgroundColorAndHideButtons("black");
});
