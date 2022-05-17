"use strict";

const btn_guardar = document.querySelector("#btn_guardar");
const nome = document.querySelector('#nome')
const CPF = document.querySelector('#CPF')
const RG = document.querySelector('#RG')
const email = document.querySelector('#email')
const Nacionalidade = document.querySelector('#Nacionalidade')
const nascimento = document.querySelector('#nascimento')
const admissão = document.querySelector('#admissão')
const remuneracao = document.querySelector('#remuneracao')
const horaTrabalho = document.querySelector('#horaTrabalho')
const Cargo = document.querySelector('#Cargo')
const masculino = document.querySelector('#masculino')
const feminina = document.querySelector('#feminina')
const status = document.querySelector('#status')
const contratacao = document.querySelector('#contratacao')
const estadoCivil = document.querySelector('#estadoCivil')
const departSelection = document.querySelector('#departSelection')
const numero = document.querySelector('#numero')
const cep = document.querySelector('#cep')
const endereco = document.querySelector('#endereco')
const barrio = document.querySelector('#barrio')
const ciudade = document.querySelector('#ciudade')
const estado = document.querySelector('#estado')


let validar = () => {
  let inputs_requeridos = document.querySelectorAll(
    "#form_registro [required]"
  );
  let error = false;

  for (let i = 0; i < inputs_requeridos.length; i++)
    if (inputs_requeridos[i].value == " ") {
      inputs_requeridos[i].classList.add(alert("input-error"));
      error = true;
    } else {
      inputs_requeridos[i].classList.remove("input-error");
    }

  return error;
};

let obtener_datos = () => {
  let error = validar();

  if (error) {
      Swal.fire({
          'title': 'Datos não Salvodo',
          'teste': 'Confiera os campo vermelho',
          'icon': 'warning'
      });
  } else {
    Swal.fire({
        'title': 'Processo realisado con sucesso',
        'teste': 'Dato Salvado',
        'icon': 'success'
    });
    console.log(nome.identificacion.value);
    console.log(CPF.identificacion.value);
    console.log(RG.identificacion.value);
  }
};

btn_guardar.addEventListener("click", obtener_datos);
