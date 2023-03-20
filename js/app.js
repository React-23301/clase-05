


class Input {
    constructor(parentID, type) {
        this.parentID = parentID;
        // if type != opciones validas... entonces poner un valor por default.
        this.type = type;
    }

    render() {
        let myApp = document.getElementById(this.parentID);

        const myInputHTML = myApp.innerHTML + "<input type=" + this.type + ">";

        myApp.innerHTML = myInputHTML; // Vamos a escribir el html para que se 

    }
}

// Hacer Un campo Input que se dibuje a partir de un array de elementos.
let mySuperArrayofStrings = ["text", "number", "email", "password", "date", "text"];


function RenderInput(type) {

    let input_type = "none"

    switch (type) {
        case "text":
            input_type = "text";
            break;
        case "number":
            input_type = "number";
            break;
        case "email":
            input_type = "email";
            break;
        case "password":
            input_type = "password";
            break;
        case "date":
            input_type = "date";
            break;
        default:
            input_type = "text";
            break;
    }

    let myInput = new Input("app", input_type);
    myInput.render();
}

mySuperArrayofStrings.forEach(element => {
    RenderInput(element);
});

// Agrego un salto de linea
document.getElementById("app").innerHTML += "<br>";



//Usar filter... para reducir la cantidad de elementos del array a dibujar..


let myFilteredArray = mySuperArrayofStrings.filter(element => {
    return element != "text";
});

myFilteredArray.forEach(element => {
    RenderInput("app", element);
});
