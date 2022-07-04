let nombresCotizaciones = [
    "Dolar Oficial",
    "Dolar Blue",
    "Dolar Contado con Liqui",
    "Dolar",
    "Dolar Bolsa",
    "Dolar turista"
];

let container = document.getElementById("cotizacionesRow");



function callCotizacionesAPI() {
    fetch("https://www.dolarsi.com/api/api.php?type=valoresprincipales")
        .then( res => res.json() )
        .then( data => {
            processCotizaciones(data);
        });
}

function processCotizaciones(cotizaciones) {
    for (const iterator of cotizaciones) {
        let cotizacion = iterator.casa;
        if (nombresCotizaciones.includes(cotizacion.nombre)) {
            addCotizacion(cotizacion);
        }
    }
}

function addCotizacion(cotizacion) {
    container.innerHTML += `
<div class="col-sm-6">
  <div class="card border-dark mb-3">
    <div class="card-header text-success">
      ${ cotizacion.nombre.toUpperCase() }
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item" style="color:black">Compra: ${ cotizacion.compra }</li>
      <li class="list-group-item" style="color:black">Venta: ${ cotizacion.venta }</li>
      <li class="list-group-item" style="color:black">Variacion: ${ cotizacion.variacion ? cotizacion.variacion : "No disponible" }</li>
    </ul>
  </div>
</div>`
}

callCotizacionesAPI();