document.addEventListener('DOMContentLoaded', function() {
    var progressBars = document.querySelectorAll('.progress-bar');
    progressBars.forEach(function(bar) {
      var percentage = parseInt(bar.getAttribute('aria-valuenow'));
      if (percentage < 30) {
        alert('¡Rellenar almacenes!');
      }
    });
  });