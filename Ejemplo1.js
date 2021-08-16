//array of students
var students = [];

//variables

//objectos

//arreglos

var salida = '';



function agregar() {

    var est = Object();

    est.nom = document.getElementById('nom').value;
    est.ape = document.getElementById('ape').value;
    est.n1 = document.getElementById('n1').value;
    est.n2 = document.getElementById('n2').value;
    est.n3 = document.getElementById('n3').value;
    
    var nota = notafinal(est.n1, est.n2, est.n3);

    //validate 
    var information = validate(nota);

    salida += `
        <tr>
            <td>${est.nom}</td>
            <td>${est.ape}</td>
            <td>${est.n1}</td>
            <td>${est.n2}</td>
            <td>${est.n3}</td>
            <td>
                <font color="${letra(nota)}">${nota}</font>
            </td>
            <td>${ nota >= 3.0 ? "Aprobado" : "Reprobado"}</td>
            <td>
                <font color="${information.color}">${information.value}</font>
            </td>
        </tr>
    `;

    // insert new student
    // students.push(est);

    // students.map(est => {
    //     var nota = notafinal(est.n1, est.n2, est.n3);
    // })

    document.getElementById('cuerpo').innerHTML = salida;
    limpiarCajas();

}


//validate the note final of a student.
function notafinal(n1, n2, n3) {

    // var total = parseFloat(n1) + parseFloat(n2) + parseFloat(n3);
    // var result = total / 3;
    // return result.toFixed(2);
    
    return ((parseFloat(n1)+parseFloat(n2)+parseFloat(n3))/3).toFixed(2);
}


function validate(n) {
    var information = {};

    if (n >= 0 && n <= 1) {
        information.value = "Insuficiente";
        information.color = "red";
    } else if (n > 1 && n <= 3) {
        information.value = "Deficiente";
        information.color = "yellow";
    }

    return information;
}

// function validate(n){
//     if(n>=3.0){
//         return "Aprobado"
//     }
//     else{
//         return "Reprobado"
//     }
// }

//gives a color to final note
function letra(n) {
    var estilo = '';
    if (n >= 3.0) {
        // return "Aprobado"
        estilo = "#0D0D0D";
    }
    else {
        // return "Reprobado"
        estilo = "#FA062B";
    }
    return estilo;
}

//clear the information
function limpiarCajas() {
    document.getElementById('nom').value = '';
    document.getElementById('ape').value = '';
    document.getElementById('n1').value = '';
    document.getElementById('n2').value = '';
    document.getElementById('n3').value = '';
    document.getElementById('nom').focus();
}