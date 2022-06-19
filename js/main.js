//Se realiza una simulador para calcular el precio en cuotas con un recargo de 10% en la mayoria de los  productos, y de 3% en algunos seleccionados.
const productos = [
	{ tipo: "monitor", modelo: "SAMSUNG MONITOR CURVO 24 FULLHD", precio: 250 },
	{ tipo: "monitor", modelo: "LG MONITOR ULTRAGEAR™ 23.6", precio: 225 },
	{ tipo: "Joystick", modelo: "DUALSHOCK PS4", precio: 85 },
	{ tipo: "consola", modelo: "PLAYSTATION 5", precio: 1300 },
	{ tipo: "Mouse", modelo: "MOUSE LOGITECH PRO SERIES G PRO HERO", precio: 45 },
	{ tipo: "Mouse", modelo: "LOGITECH G SERIES LIGHTSPEED G502", precio: 116 },
	{ tipo: "consola", modelo: "NINTENDO SWITCH", precio: 570 },
  ];



const buscarProducto = productos.filter( producto => producto.modelo.includes("S","L","D","P","M","L","N"));
console.log(buscarProducto)


const calcularCuotasRecargo1 = (nombreProducto,precioInicial) => {

    const recargo = calcularRecargoCuotas1 (precioInicial, numeroDeCuotas);
    
	return "El producto " + nombreProducto + " Tiene un costo de US$" + precioInicial +  " se financia con un 5% de recargo en " + numeroDeCuotas + " cuotas de US$" + recargo ;
}

const calcularCuotasRecargo2 = (nombreProducto,precioInicial) => {

    const recargo = calcularRecargoCuotas2 (precioInicial, numeroDeCuotas);
    
	return "El producto " + nombreProducto + " Tiene un costo de US$" + precioInicial +  " se financia con un 10% de recargo en " + numeroDeCuotas + " cuotas de US$" + recargo ;
}



let nombreProducto = (prompt("Ingresa el nombre del producto").toUpperCase());
let precioInicial = Number(prompt("Ingresa el precio al contado."));
let numeroDeCuotas = Number(prompt("Ingresa el numero de cuotas"));


const calcularRecargoCuotas1 = (precioInicial) => {

	if(nombreProducto === "SAMSUNG MONITOR CURVO 24 FULLHD" || "LG MONITOR ULTRAGEAR™ 23.6") {
		return Math.ceil((precioInicial*1.03)/ numeroDeCuotas);
	}
	
}

const calcularRecargoCuotas2 = (precioInicial) => {

		return Math.ceil((precioInicial*1.10)/ numeroDeCuotas);
	
}



const financiacion1 = calcularCuotasRecargo1 (nombreProducto,precioInicial,calcularRecargoCuotas1);

const financiacion2 = calcularCuotasRecargo2 (nombreProducto,precioInicial,calcularRecargoCuotas2);

alert(financiacion1);