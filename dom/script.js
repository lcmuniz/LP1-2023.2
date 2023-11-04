const nome = document.getElementById("nome")
const telefone = document.getElementById("telefone")
const nomeReverso = document.getElementById("nomeReverso")
const btnEnviar = document.getElementById("btnEnviar")

btnEnviar.addEventListener('click', reverterNome)

nomeReverso.addEventListener('mouseover', maiuscula)

function reverterNome() {
  let reverso = nome.value.split('').reverse().join('')
  nomeReverso.innerHTML = reverso

  console.log(nome.value.toUpperCase() + ' ' + telefone.value)
}

let i = 0;
function maiuscula() {
  if (i % 2 == 0) {
    nomeReverso.innerHTML = nomeReverso.innerHTML.toUpperCase()
  }
  else {
    nomeReverso.innerHTML = nomeReverso.innerHTML.toLocaleLowerCase()
  }
  i++;
}
