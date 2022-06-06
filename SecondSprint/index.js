const pagos = [];
const nombres = [];
const listOfPeople = document.getElementById('listOfPeople');
const totalDiv = document.getElementById('totalDiv');

function calcular() {
    let nombreYPago;
    nombreYPago = agregarGastoEnVariables();
    mostrarGastoEnLista(nombreYPago[0], nombreYPago[1]);
    actualizarTotalDiv();
}

function agregarGastoEnVariables() {
    let nombre = document.getElementById('nombre').value;
    let gastoDeNombre = Number(document.getElementById('gasto').value);
    nombres.push(nombre);
    pagos.push(gastoDeNombre);
    return [nombre, gastoDeNombre];
}

function mostrarGastoEnLista(nombre, pago) {
    const newListItem = document.createElement('li');
    const newText = document.createTextNode(`${nombre}: $${pago}`);
    
    newListItem.appendChild(newText);
    newListItem.classList.add('list-group-item');
    listOfPeople.appendChild(newListItem);
}

function actualizarTotalDiv() {
    let total = pagos.reduce((partialSum, number) => partialSum + number, 0);
    totalDiv.innerText = `TOTAL: $${total}. A cada uno le toca aportar: $${total/nombres.length}`;
}