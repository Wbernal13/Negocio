// const contenedor = document.querySelector(".main");
// let conjuntoDiv = document.querySelector(".main-shirt");
// const shirtName = document.querySelector(".name")

// const onClick = conjuntoDiv.getElementsByTagName("div");

// onClick.addEventListener("click",()=>{
//     document.querySelector(".shirt-data").value = shirtName;
// });

// contenedor.appendChild(conjuntoDiv);

// let prueba = contenedor.getElementsByTagName("div");
// console.log(prueba);

for (var i = 1; i <= 16; i++) {
let contenedorImagen = document.querySelector(`.div-shirt${i}`);
let serial = `96456C${i}`;


contenedorImagen.addEventListener("click",()=>{
	document.querySelector(".shirt-data").value = serial;
});
contenedorImagen.tabIndex = i;

}