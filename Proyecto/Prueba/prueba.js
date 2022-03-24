let contenedor = document.querySelector(".flex-container");
const img = document.getElementsByTagName("img");

function crearCuadro(nombre,precio) {
    imagen = `<img src=${img}>`;
    nombre = `<h2>${nombre}</h2>`;
    talla = `<h3><b>Talla: </b>S - M - L</h3>`
    precio = `<p><b>Precio: </b>${precio}</p>`
    return [imagen,nombre,talla,precio]
}

let documentFragment = document.createDocumentFragment();

for (var i = 1; i <= 10; i++) {
    let precioRandom = Math.round(Math.random()*10000);
    let cuadro = crearCuadro(`Camisa ${i}`,`${precioRandom}`);
    let div = document.createElement("DIV");
	div.addEventListener("click",()=>{
		document.querySelector(".data-shirt").value = nombre;
	});
	div.classList.add("flex-item");
	div.innerHTML = cuadro[0] + cuadro[1] + cuadro[2] + cuadro[3];
	div.tabIndex = i;
	documentFragment.appendChild(div);
}

contenedor.appendChild(documentFragment);

console.log(cuadro);



