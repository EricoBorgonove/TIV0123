function modoEscuro(){
    if (btnMode == 'Escuro'){
        document.getElementById('principal').classList.add('bdBodyDark')
        document.getElementById('principal').classList.remove('bdBody')
        document.getElementById('btnMode').value = 'Claro'
    }else{
        document.getElementById('principal').classList.remove('bdBodyDark')
        document.getElementById('principal').classList.add('bdBody')
        document.getElementById('btnMode').value = 'Escuro'
    }
}
function newModoEscuro(){
    if (document.getElementById('btnEscuro').hidden = 'false'){
        document.getElementById('principal').classList.add('bdBodyDark')
        document.getElementById('principal').classList.remove('bdBody')
        document.getElementById('btnClaro').hidden = 'false'
        document.getElementById('btnEscuro').hidden = 'true'
    }else{
        document.getElementById('principal').classList.remove('bdBodyDark')
        document.getElementById('principal').classList.add('bdBody')
        document.getElementById('btnClaro').hidden = 'true'
        document.getElementById('btnEscuro').hidden = 'false'
    }
}
