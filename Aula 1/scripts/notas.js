function calcularMedia (){
    let nota1 = Number(document.querySelector('#nota1').value)
    let nota2 = Number(document.querySelector('#nota2').value)
    let nota3 = Number(document.querySelector('#nota3').value)

    let media = (nota1 + nota2 + nota3)/3
    document.querySelector('#media').value = media.toFixed(2)

    let resultado = document.querySelector('#resultado')
    document.querySelector('#resultado').classList.remove('verde', 'amarelo', 'vermelho')
    if (media>=7 && media <=10){
        resultado.innerHTML="Aprovado"
        resultado.classList.add('verde')
    }else if (media>=5 && media <7){
        document.querySelector('#resultado').innerHTML="Recuperação"
        document.querySelector('#resultado').classList.add('amarelo')
    }else if (media>=0 && media <5){
        document.querySelector('#resultado').innerHTML="Reprovado"
        document.querySelector('#resultado').classList.add('vermelho')
    }}
function limpar (){
    document.querySelector('#nota1').value=""
    document.querySelector('#nota2').value=""
    document.querySelector('#nota3').value=""
    document.querySelector('#media').value=""
    document.querySelector('#resultado').innerHTML=""
    document.querySelector('#resultado').classList.remove('verde', 'amarelo', 'vermelho')
}
function verErro(){
    let nota1 = Number(document.querySelector('#nota1').value)
    let nota2 = Number(document.querySelector('#nota2').value)
    let nota3 = Number(document.querySelector('#nota3').value)  

    if (nota1<0  || nota1>10 ){
        document.querySelector('#erro1').innerHTML="nota inválida"
         document.querySelector('#erro1').classList.add('vermelho')
    }
    if (nota2<0  || nota2>10){
        document.querySelector('#erro2').innerHTML="nota inválida"
        document.querySelector('#erro2').classList.add('vermelho')
    }
    if (nota3<0  || nota3>10){
       document.querySelector('#erro3').innerHTML="nota inválida"
      document.querySelector('#erro3').classList.add('vermelho')
}

}
