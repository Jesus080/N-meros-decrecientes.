/*Recibir el id del formulario para poder manipular */
const FRM_CALCULAR = document.querySelector("#frmCalcula");

/*Genereamos el evento del formulario por el medio del boton submit*/
FRM_CALCULAR.addEventListener("submit",calculoController);

function calculoController(event){
    event.preventDefault();
    //recibir datos de cajsa de texto
    let numeroIngresado = parseInt(document.querySelector("#txtNumero").value);
    let numeroIngresadoInput = document.querySelector("#txtNumero");
    // Validar si la caja de texto está vacía
    if (numeroIngresadoInput.value.trim() == "") {
        alert("Por favor, ingrese un valor en la caja de crédito.");
        return;  // Detener la ejecución si está vacía
    }
    //imprimir resultados TDA
   
    let imprimirRes = document.getElementById("resultado");
    imprimirRes.textContent = numeroTDA(numeroIngresado);
    
}
const numeroTDA =(numeroIngresado) =>{   
  if (numeroIngresado > 0){
    return numeroTDA(numeroIngresado-1) + " - " + numeroIngresado
  }
  else {
    return 0;
  }
}

/*function imprimir(x){
    if(x > 0){
        imprimir(x-1)
        console.log(x)
    }
    
}
*/