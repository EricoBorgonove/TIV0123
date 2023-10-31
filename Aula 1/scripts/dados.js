const estadosBrasil = [
    { nome: "Acre", sigla: "AC" },
    { nome: "Alagoas", sigla: "AL" },
    { nome: "Amapá", sigla: "AP" },
    { nome: "Amazonas", sigla: "AM" },
    { nome: "Bahia", sigla: "BA" },
    { nome: "Ceará", sigla: "CE" },
    { nome: "Distrito Federal", sigla: "DF" },
    { nome: "Espírito Santo", sigla: "ES" },
    { nome: "Goiás", sigla: "GO" },
    { nome: "Maranhão", sigla: "MA" },
    { nome: "Mato Grosso", sigla: "MT" },
    { nome: "Mato Grosso do Sul", sigla: "MS" },
    { nome: "Minas Gerais", sigla: "MG" },
    { nome: "Pará", sigla: "PA" },
    { nome: "Paraíba", sigla: "PB" },
    { nome: "Paraná", sigla: "PR" },
    { nome: "Pernambuco", sigla: "PE" },
    { nome: "Piauí", sigla: "PI" },
    { nome: "Rio de Janeiro", sigla: "RJ" },
    { nome: "Rio Grande do Norte", sigla: "RN" },
    { nome: "Rio Grande do Sul", sigla: "RS" },
    { nome: "Rondônia", sigla: "RO" },
    { nome: "Roraima", sigla: "RR" },
    { nome: "Santa Catarina", sigla: "SC" },
    { nome: "São Paulo", sigla: "SP" },
    { nome: "Sergipe", sigla: "SE" },
    { nome: "Tocantins", sigla: "TO" }
];

function abOutros(){
    const genero = document.getElementsByName("genero")
    const outros = document.querySelector("#outros")
        if (genero[2].checked){
            outros.disabled =  false
        }else{
            outros.disabled = true
        }
}
function verEstados(){
    const estados = document.getElementById('naturalidade')
    const pais = document.getElementById('nacionalidade')
    if (pais.value == 'BR'){
        for(let i=0;i<estadosBrasil.length;i++){
            let option = document.createElement('option');
            option.textContent = estadosBrasil[i].nome
            option.setAttribute('value',estadosBrasil[i].sigla)
            estados.appendChild(option)
            }
        estados.hidden = false
    } else{
        estados.hidden = true
    }

}