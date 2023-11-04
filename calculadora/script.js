function adicionarAoDisplay(valor) {
  const display = document.getElementById("display")
  
  if (temPonto(display, valor)) {
    return
  }

  if (ehSimboloRepetido(display, valor)) {
    return
  }
  
  display.value = display.value + valor
  

  display.style.fontSize = "45px"
  if (display.value.length > 10) {
    display.style.fontSize = "30px"
  }
  if (display.value.length > 15) {
    display.style.fontSize = "20px"
  }

}

function temPonto(display, valor) {
  if (valor ==  '.' && display.value.indexOf('.') >= 0) {
    return true;
  }
  return false;
}

function ehSimboloRepetido(display, valor) {
  const simbolos = ['+', '-', '*', '/', '.']
  const ultimo = display.value[display.value.length-1]

  if (ultimo != null && simbolos.indexOf(ultimo) >=0 && simbolos.indexOf(valor) >= 0) {
    return true
  }
  return false;

}
function limparDisplay() {
  const display = document.getElementById("display")
  display.value = ''
}

function limparUltimoCarectere() {
  const display = document.getElementById("display")
  display.value = display.value.slice(0, -1)
}

function calcularResultado() {
  const display = document.getElementById("display")
  display.value = eval(display.value)
}