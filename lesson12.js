let clientsEstimations = [];
function askClientToGiveEstimation() {
  let estimation = prompt("Как вы оцениваете нашу кофейню от 1 до 10?");
  estimation = Number(estimation);
  if (estimation >= 1 && estimation <= 10) {
    clientsEstimations.push(estimation);
  }
}

for (let i = 0; i < 5; i++) {
  askClientToGiveEstimation();
}

let goodEstimations = clientsEstimations.filter(estimation => estimation > 5).length;
let notGoodEstimations = clientsEstimations.filter(estimation => estimation <= 5).length;

alert(`Всего положительных оценок: ${goodEstimations}; Всего отрицательных оценок: ${notGoodEstimations}`);

