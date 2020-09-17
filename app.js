// pobieramy przycisk tworzac zmienna const
const btn = document.querySelector("button");
// podpinamy do niego nasluchiwanie na click i tworzymy funkcje
const addElement = function() {
  const div = document.createElement("div");
  document.body.appendChild(div);
};
btn.addEventListener("click", addElement);
// zadeklarujemy funkcje
