// const nome = document.getElementById('nome')
// const CPF = document.getElementById('CPF')
// const RG = document.getElementById('RG')
// const email = document.getElementById('email')
// const Nacionalidade = document.getElementById('Nacionalidade')
// const nascimento = document.getElementById('nascimento')
// const admissão = document.getElementById('admissão')
// const remuneração = document.getElementById('remuneração')
// const horaTrabalho = document.getElementById('horaTrabalho')
// const Cargo = document.getElementById('Cargo')
// const numero = document.getElementById('numero')


// function validar(item){
//     item.setCusttomValidity(' ');
//     item.checkValidity();
// }
// if(item ==)

function valida() {
    if (document.cadastro3.cpf.validity.patternMismatch) {
       alert("O CPF está incorreto");
    } else {
       alert("O CPF está correto");
    }
    return false;
 }