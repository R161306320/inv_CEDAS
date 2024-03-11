// Inicializar mapas
function initMaps() {
    // Mapa para Contacto Principal
    var mapPrincipal = new google.maps.Map(document.getElementById('map-principal'), {
      center: {lat: 20.6736, lng: -103.344},
      zoom: 15
    });
    var markerPrincipal = new google.maps.Marker({
      position: {lat: 20.6736, lng: -103.344},
      map: mapPrincipal,
      title: 'Contacto Principal'
    });

    // Mapa para Soporte Técnico
    var mapTecnico = new google.maps.Map(document.getElementById('map-tecnico'), {
      center: {lat: 20.6843, lng: -103.356},
      zoom: 15
    });
    var markerTecnico = new google.maps.Marker({
      position: {lat: 20.6843, lng: -103.356},
      map: mapTecnico,
      title: 'Soporte Técnico'
    });
  }