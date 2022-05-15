"use strict";

const limparFormulario = (endereco) => {
  document.getElementById("endereco").value = "";
  document.getElementById("barrio").value = "";
  document.getElementById("ciudade").value = "";
  document.getElementById("estado").value = "";
};

const prenencherFormulario = (endereco) => {
  document.getElementById("endereco").value = endereco.logradouro;
  document.getElementById("barrio").value = endereco.bairro;
  document.getElementById("ciudade").value = endereco.localidade;
  document.getElementById("estado").value = endereco.uf;
};

const eNumero = (numero) => /^[0-9]+$/.test(numero);

const cepValido = (cep) => cep.length == 8 && eNumero(cep);

const pesquisarCep = async () => {
  limparFormulario();

  const cep = document.getElementById("cep").value.replace("-", "");
  const url = `http://viacep.com.br/ws/${cep}/json/`;
  if (cepValido(cep)) {
    const dados = await fetch(url);
    const endereco = await dados.json();
    if (endereco.hasOwnProperty("erro")) {
      document.getElementById("endereco").value = "CEP não encontrado 💔💔💔";
    } else {
      prenencherFormulario(endereco);
    }
  } else {
    document.getElementById("endereco").value = "CEP incorreto!! 😭😭😭";
    
  }
  
};
document.getElementById("cep").addEventListener("focusout", pesquisarCep);
