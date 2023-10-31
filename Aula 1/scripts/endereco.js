function limparError() {
    document.querySelector('#cep').classList.remove('error')
}
function pesquisarCep() {
    digitarCep()
    const cep = document.getElementById('cep').value;
    if (cep == '') {
        alert("Campo CEP vazio")
        document.querySelector('#cep').classList.add('error')
    } else if (cep.length != 8) {
        alert("CEP inválido")
        document.querySelector('#cep').classList.add('error')
    }
    else {
        viaCep(cep)
    }
}
function viaCep(cep) {
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
        .then(response => response.json())
        .then(response => {
            document.querySelector('#logradouro').value = response.logradouro
            document.querySelector('#bairro').value = response.bairro
            document.querySelector('#cidade').value = response.localidade
            document.querySelector('#uf').value = response.uf
            document.querySelector('#complemento').value = response.complemento
        })
}
function digitarCep() {
    let digitar = document.querySelector('#digitar').value
    if (digitar == 'Digitar') {
        document.querySelector('#logradouro').disabled = false
        document.querySelector('#bairro').disabled = false
        document.querySelector('#cidade').disabled = false
        document.querySelector('#uf').disabled = false
        document.querySelector('#complemento').disabled = false
        document.querySelector('#digitar').value = 'Não Digitar'
    }else{
        document.querySelector('#logradouro').disabled = true
        document.querySelector('#bairro').disabled = true
        document.querySelector('#cidade').disabled = true
        document.querySelector('#uf').disabled = true
        document.querySelector('#complemento').disabled = true
        document.querySelector('#digitar').value = 'Digitar'
    }
}
function digitarRange(){
    let digitarR = document.querySelector('#digitarRange').value
    if (digitarR == 0) {
        document.querySelector('#logradouro').disabled = false
        document.querySelector('#bairro').disabled = false
        document.querySelector('#cidade').disabled = false
        document.querySelector('#uf').disabled = false
        document.querySelector('#complemento').disabled = false
        document.querySelector('#digitarR').value = 1
    }else{
        document.querySelector('#logradouro').disabled = true
        document.querySelector('#bairro').disabled = true
        document.querySelector('#cidade').disabled = true
        document.querySelector('#uf').disabled = true
        document.querySelector('#complemento').disabled = true
        document.querySelector('#digitarR').value = 0
}
}