$(document).ready(function(){
   // Datos para la gráfica de entradas de SFO_CEDAS
    var sfoEntradasData = {
      labels: ["Enero", "Febrero", "Marzo", "Abril", "Mayo"],
      datasets: [{
        label: 'SFO_CEDAS (Entradas)',
        data: [20, 35, 25, 40, 30],
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1
      }]
    };
  
    // Datos para la gráfica de salidas de SFO_CEDAS
    var sfoSalidasData = {
      labels: ["Enero", "Febrero", "Marzo", "Abril", "Mayo"],
      datasets: [{
        label: 'SFO_CEDAS (Salidas)',
        data: [10, 15, 20, 25, 30],
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1
      }]
    };
  
    // Datos para la gráfica de entradas de RR_CEDAS
    var rrEntradasData = {
      labels: ["Enero", "Febrero", "Marzo", "Abril", "Mayo"],
      datasets: [{
        label: 'RR_CEDAS (Entradas)',
        data: [15, 20, 25, 30, 35],
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1
      }]
    };
  
    // Datos para la gráfica de salidas de RR_CEDAS
    var rrSalidasData = {
      labels: ["Enero", "Febrero", "Marzo", "Abril", "Mayo"],
      datasets: [{
        label: 'RR_CEDAS (Salidas)',
        data: [5, 10, 15, 20, 25],
        backgroundColor: 'rgba(255, 206, 86, 0.2)',
        borderColor: 'rgba(255, 206, 86, 1)',
        borderWidth: 1
      }]
    };
  
    // Opciones comunes para todas las gráficas
    var options = {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    };
  
    // Crear la gráfica de entradas de SFO_CEDAS
    var sfoEntradasChart = new Chart($("#sfoEntradasChart"), {
      type: 'bar',
      data: sfoEntradasData,
      options: options
    });
  
    // Crear la gráfica de salidas de SFO_CEDAS
    var sfoSalidasChart = new Chart($("#sfoSalidasChart"), {
      type: 'bar',
      data: sfoSalidasData,
      options: options
    });
  
    // Crear la gráfica de entradas de RR_CEDAS
    var rrEntradasChart = new Chart($("#rrEntradasChart"), {
      type: 'bar',
      data: rrEntradasData,
      options: options
    });
  
    // Crear la gráfica de salidas de RR_CEDAS
    var rrSalidasChart = new Chart($("#rrSalidasChart"), {
      type: 'bar',
      data: rrSalidasData,
      options: options
    });
  });

  