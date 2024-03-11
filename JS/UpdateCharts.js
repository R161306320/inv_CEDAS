// Simulación de datos de las gráficas
var sfoData = [10, 20, 30, 40, 50]; // Datos de SFO
var rrData = [30, 40, 50, 60, 70]; // Datos de RR

// Supongamos que tienes funciones para actualizar las gráficas
function updateSFOChart() {
  // Lógica para actualizar la gráfica SFO
}

function updateRRChart() {
  // Lógica para actualizar la gráfica RR
}

// Función para actualizar las barras de progreso
function updateProgressBars(sfoPercentage, rrPercentage) {
  var sfoProgressBar = document.getElementById('sfo-progress');
  var rrProgressBar = document.getElementById('rr-progress');

  // Actualizar la barra de progreso de SFO
  sfoProgressBar.style.width = sfoPercentage + '%';
  sfoProgressBar.setAttribute('aria-valuenow', sfoPercentage);
  sfoProgressBar.innerText = sfoPercentage + '%';

  // Actualizar la barra de progreso de RR
  rrProgressBar.style.width = rrPercentage + '%';
  rrProgressBar.setAttribute('aria-valuenow', rrPercentage);
  rrProgressBar.innerText = rrPercentage + '%';
}

// Lógica para obtener el porcentaje actual de SFO y RR
// Por simplicidad, aquí se supone que simplemente se toma el último valor de los datos
var sfoPercentage = sfoData[sfoData.length - 1];
var rrPercentage = rrData[rrData.length - 1];

// Llamar a la función para actualizar las barras de progreso
updateProgressBars(sfoPercentage, rrPercentage);
