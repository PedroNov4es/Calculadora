var n1 = document.getElementById('n1')
var n2 = document.getElementById('n2')
var resultado = document.querySelector('span');


function somar() {
    resultado.innerHTML = parseInt(n1.value) + parseInt(n2.value);
    if(n1.value == '' && n2.value == '' || n1.value <= 0 && n2.value <= 0){
        alert('Valor indefinido ou inexistente');
    };
    
};

function subtrair() {
    resultado.innerHTML = parseInt(n1.value) - parseInt(n2.value);
    if(n1.value == '' && n2.value == '' || n1.value <= 0 && n2.value <= 0){
        alert('Valor indefinido ou inexistente');
    };
};

function mutiplicar() {
    resultado.innerHTML = parseInt(n1.value) * parseInt(n2.value);
    if(n1.value == '' && n2.value == '' || n1.value <= 0 && n2.value <= 0){
        alert('Valor indefinido ou inexistente');
    };
};

function dividir() {
    resultado.innerHTML = parseInt(n1.value) / parseInt(n2.value);
    if(n1.value == '' && n2.value == '' || n1.value <= 0 && n2.value <= 0){
        alert('Valor indefinido ou inexistente');
    };
};

