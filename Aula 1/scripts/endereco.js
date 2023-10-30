function limparError(){
    document.querySelector('#cep').classList.remove('error')
}
function pesquisarCep(){
    
    const cep = document.getElementById('cep').value;
    if(cep == ''){
        alert("Campo CEP vazio")
        document.querySelector('#cep').classList.add('error')
    }else if (cep.length != 8  ){
        alert("CEP inválido")
        document.querySelector('#cep').classList.add('error')
    }
    else{
        viaCep(cep)
    }
}
function viaCep(cep){
        alert (cep)
}