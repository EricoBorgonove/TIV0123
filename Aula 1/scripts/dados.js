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
const dddsBrasil = [
    "11", "12", "13", "14", "15", "16", "17", "18", "19", // São Paulo (SP)
    "21", "22", "24", // Rio de Janeiro (RJ)
    "27", "28", // Espírito Santo (ES)
    "31", "32", "33", "34", "35", "37", "38", // Minas Gerais (MG)
    "41", "42", "43", "44", "45", "46", // Paraná (PR)
    "47", "48", "49", // Santa Catarina (SC)
    "51", "53", "54", "55", // Rio Grande do Sul (RS)
    "61", "62", "63", // Distrito Federal (DF) e Goiás (GO)
    "64", "65", "66", // Mato Grosso (MT)
    "67", "68", // Mato Grosso do Sul (MS)
    "69", // Rondônia (RO)
    "71", "73", "74", "75", "77", // Bahia (BA)
    "79", // Sergipe (SE)
    "81", "82", // Alagoas (AL)
    "83", // Paraíba (PB)
    "84", // Rio Grande do Norte (RN)
    "85", "88", // Ceará (CE)
    "86", "89", // Piauí (PI)
    "91", "92", "93", "94", "95", "96", "97", "98", "99" // Pará (PA), Amazonas (AM), Amapá (AP)
];
const paisesONU = [
    { nome: "Afeganistão", sigla: "AF" },
    { nome: "África do Sul", sigla: "ZA" },
    { nome: "Albânia", sigla: "AL" },
    { nome: "Alemanha", sigla: "DE" },
    { nome: "Andorra", sigla: "AD" },
    { nome: "Angola", sigla: "AO" },
    { nome: "Antígua e Barbuda", sigla: "AG" },
    { nome: "Arábia Saudita", sigla: "SA" },
    { nome: "Argélia", sigla: "DZ" },
    { nome: "Argentina", sigla: "AR" },
    { nome: "Armênia", sigla: "AM" },
    { nome: "Austrália", sigla: "AU" },
    { nome: "Áustria", sigla: "AT" },
    { nome: "Azerbaijão", sigla: "AZ" },
    { nome: "Bahamas", sigla: "BS" },
    { nome: "Bahrein", sigla: "BH" },
    { nome: "Bangladesh", sigla: "BD" },
    { nome: "Barbados", sigla: "BB" },
    { nome: "Bélgica", sigla: "BE" },
    { nome: "Belize", sigla: "BZ" },
    { nome: "Benin", sigla: "BJ" },
    { nome: "Bielorrússia", sigla: "BY" },
    { nome: "Bolívia", sigla: "BO" },
    { nome: "Bósnia e Herzegovina", sigla: "BA" },
    { nome: "Botsuana", sigla: "BW" },
    { nome: "Brasil", sigla: "BR" },
    { nome: "Brunei", sigla: "BN" },
    { nome: "Bulgária", sigla: "BG" },
    { nome: "Burkina Faso", sigla: "BF" },
    { nome: "Burundi", sigla: "BI" },
    { nome: "Butão", sigla: "BT" },
    { nome: "Cabo Verde", sigla: "CV" },
    { nome: "Camboja", sigla: "KH" },
    { nome: "Camarões", sigla: "CM" },
    { nome: "Canadá", sigla: "CA" },
    { nome: "Catar", sigla: "QA" },
    { nome: "Cazaquistão", sigla: "KZ" },
    { nome: "Chade", sigla: "TD" },
    { nome: "Chile", sigla: "CL" },
    { nome: "China", sigla: "CN" },
    { nome: "Chipre", sigla: "CY" },
    { nome: "Colômbia", sigla: "CO" },
    { nome: "Comores", sigla: "KM" },
    { nome: "Coreia do Norte", sigla: "KP" },
    { nome: "Coreia do Sul", sigla: "KR" },
    { nome: "Costa do Marfim", sigla: "CI" },
    { nome: "Costa Rica", sigla: "CR" },
    { nome: "Croácia", sigla: "HR" },
    { nome: "Cuba", sigla: "CU" },
    { nome: "Dinamarca", sigla: "DK" },
    { nome: "Djibuti", sigla: "DJ" },
    { nome: "Dominica", sigla: "DM" },
    { nome: "Egito", sigla: "EG" },
    { nome: "El Salvador", sigla: "SV" },
    { nome: "Emirados Árabes Unidos", sigla: "AE" },
    { nome: "Equador", sigla: "EC" },
    { nome: "Eritreia", sigla: "ER" },
    { nome: "Eslováquia", sigla: "SK" },
    { nome: "Eslovênia", sigla: "SI" },
    { nome: "Espanha", sigla: "ES" },
    { nome: "Estados Unidos", sigla: "US" },
    { nome: "Estônia", sigla: "EE" },
    { nome: "Etiópia", sigla: "ET" },
    { nome: "Fiji", sigla: "FJ" },
    { nome: "Filipinas", sigla: "PH" },
    { nome: "Finlândia", sigla: "FI" },
    { nome: "França", sigla: "FR" },
    { nome: "Gabão", sigla: "GA" },
    { nome: "Gâmbia", sigla: "GM" },
    { nome: "Gana", sigla: "GH" },
    { nome: "Geórgia", sigla: "GE" },
    { nome: "Granada", sigla: "GD" },
    { nome: "Grécia", sigla: "GR" },
    { nome: "Guatemala", sigla: "GT" },
    { nome: "Guiana", sigla: "GY" },
    { nome: "Guiné", sigla: "GN" },
    { nome: "Guiné Equatorial", sigla: "GQ" },
    { nome: "Guiné-Bissau", sigla: "GW" },
    { nome: "Haiti", sigla: "HT" },
    { nome: "Holanda", sigla: "NL" },
    { nome: "Honduras", sigla: "HN" },
    { nome: "Hungria", sigla: "HU" },
    { nome: "Iémen", sigla: "YE" },
    { nome: "Ilhas Marshall", sigla: "MH" },
    { nome: "Ilhas Salomão", sigla: "SB" },
    { nome: "Índia", sigla: "IN" },
    { nome: "Indonésia", sigla: "ID" },
    { nome: "Irã", sigla: "IR" },
    { nome: "Iraque", sigla: "IQ" },
    { nome: "Irlanda", sigla: "IE" },
    { nome: "Islândia", sigla: "IS" },
    { nome: "Israel", sigla: "IL" },
    { nome: "Itália", sigla: "IT" },
    { nome: "Jamaica", sigla: "JM" },
    { nome: "Japão", sigla: "JP" },
    { nome: "Jordânia", sigla: "JO" },
    { nome: "Kiribati", sigla: "KI" },
    { nome: "Kuwait", sigla: "KW" },
    { nome: "Laos", sigla: "LA" },
    { nome: "Lesoto", sigla: "LS" },
    { nome: "Letônia", sigla: "LV" },
    { nome: "Líbano", sigla: "LB" },
    { nome: "Libéria", sigla: "LR" },
    { nome: "Líbia", sigla: "LY" },
    { nome: "Liechtenstein", sigla: "LI" },
    { nome: "Lituânia", sigla: "LT" },
    { nome: "Luxemburgo", sigla: "LU" },
    { nome: "Macedônia do Norte", sigla: "MK" },
    { nome: "Madagáscar", sigla: "MG" },
    { nome: "Malásia", sigla: "MY" },
    { nome: "Malawi", sigla: "MW" },
    { nome: "Maldivas", sigla: "MV" },
    { nome: "Mali", sigla: "ML" },
    { nome: "Malta", sigla: "MT" },
    { nome: "Marrocos", sigla: "MA" },
    { nome: "Mauritânia", sigla: "MR" },
    { nome: "Maurícia", sigla: "MU" },
    { nome: "México", sigla: "MX" },
    { nome: "Mianmar", sigla: "MM" },
    { nome: "Micronésia", sigla: "FM" },
    { nome: "Moçambique", sigla: "MZ" },
    { nome: "Moldávia", sigla: "MD" },
    { nome: "Mónaco", sigla: "MC" },
    { nome: "Mongólia", sigla: "MN" },
    { nome: "Montenegro", sigla: "ME" },
    { nome: "Namíbia", sigla: "NA" },
    { nome: "Nauru", sigla: "NR" },
    { nome: "Nepal", sigla: "NP" },
    { nome: "Nicarágua", sigla: "NI" },
    { nome: "Níger", sigla: "NE" },
    { nome: "Nigéria", sigla: "NG" },
    { nome: "Noruega", sigla: "NO" },
    { nome: "Nova Zelândia", sigla: "NZ" },
    { nome: "Omã", sigla: "OM" },
    { nome: "Palau", sigla: "PW" },
    { nome: "Panamá", sigla: "PA" },
    { nome: "Papua-Nova Guiné", sigla: "PG" },
    { nome: "Paquistão", sigla: "PK" },
    { nome: "Paraguai", sigla: "PY" },
    { nome: "Peru", sigla: "PE" },
    { nome: "Polônia", sigla: "PL" },
    { nome: "Portugal", sigla: "PT" },
    { nome: "Quênia", sigla: "KE" },
    { nome: "Quirguistão", sigla: "KG" },
    { nome: "Reino Unido", sigla: "GB" },
    { nome: "República Centro-Africana", sigla: "CF" },
    { nome: "República Checa", sigla: "CZ" },
    { nome: "República Democrática do Congo", sigla: "CD" },
    { nome: "República Dominicana", sigla: "DO" },
    { nome: "Romênia", sigla: "RO" },
    { nome: "Ruanda", sigla: "RW" },
    { nome: "Rússia", sigla: "RU" },
    { nome: "Salvador", sigla: "SV" },
    { nome: "Samoa", sigla: "WS" },
    { nome: "Santa Lúcia", sigla: "LC" },
    { nome: "São Cristóvão e Nevis", sigla: "KN" },
    { nome: "São Marinho", sigla: "SM" },
    { nome: "São Tomé e Príncipe", sigla: "ST" },
    { nome: "São Vicente e Granadinas", sigla: "VC" },
    { nome: "Senegal", sigla: "SN" },
    { nome: "Sérvia", sigla: "RS" },
    { nome: "Seychelles", sigla: "SC" },
    { nome: "Serra Leoa", sigla: "SL" },
    { nome: "Singapura", sigla: "SG" },
    { nome: "Síria", sigla: "SY" },
    { nome: "Somália", sigla: "SO" },
    { nome: "Sri Lanka", sigla: "LK" },
    { nome: "Suazilândia", sigla: "SZ" },
    { nome: "Sudão", sigla: "SD" },
    { nome: "Sudão do Sul", sigla: "SS" },
    { nome: "Suécia", sigla: "SE" },
    { nome: "Suíça", sigla: "CH" },
    { nome: "Suriname", sigla: "SR" },
    { nome: "Tailândia", sigla: "TH" },
    { nome: "Taiwan", sigla: "TW" },
    { nome: "Tajiquistão", sigla: "TJ" },
    { nome: "Tanzânia", sigla: "TZ" },
    { nome: "Timor-Leste", sigla: "TL" },
    { nome: "Togo", sigla: "TG" },
    { nome: "Tonga", sigla: "TO" },
    { nome: "Trindade e Tobago", sigla: "TT" },
    { nome: "Tunísia", sigla: "TN" },
    { nome: "Turcomenistão", sigla: "TM" },
    { nome: "Turquia", sigla: "TR" },
    { nome: "Tuvalu", sigla: "TV" }
]  

const cidadesAmazonas = [
    'Alvarães',
    'Amaturá',
    'Anamã',
    'Anori',
    'Apuí',
    'Atalaia do Norte',
    'Autazes',
    'Barcelos',
    'Barreirinha',
    'Benjamin Constant',
    'Beruri',
    'Boa Vista do Ramos',
    'Boca do Acre',
    'Borba',
    'Caapiranga',
    'Canutama',
    'Carauari',
    'Careiro',
    'Careiro da Várzea',
    'Coari',
    'Codajás',
    'Eirunepé',
    'Envira',
    'Fonte Boa',
    'Guajará',
    'Humaitá',
    'Ipixuna',
    'Iranduba',
    'Itacoatiara',
    'Itamarati',
    'Itapiranga',
    'Japurá',
    'Juruá',
    'Jutaí',
    'Lábrea',
    'Manacapuru',
    'Manaquiri',
    'Manaus',
    'Manicoré',
    'Maraã',
    'Maués',
    'Nhamundá',
    'Nova Olinda do Norte',
    'Novo Airão',
    'Novo Aripuanã',
    'Parintins',
    'Pauini',
    'Presidente Figueiredo',
    'Rio Preto da Eva',
    'Santa Isabel do Rio Negro',
    'Santo Antônio do Içá',
    'São Gabriel da Cachoeira',
    'São Paulo de Olivença',
    'São Sebastião do Uatumã',
    'Silves',
    'Tabatinga',
    'Tapauá',
    'Tefé',
    'Tonantins',
    'Uarini',
    'Urucará',
    'Urucurituba',
  ];
  
function abOutros() {
    const genero = document.getElementsByName("genero")
    const outros = document.querySelector("#outros")
    if (genero[2].checked) {
        outros.disabled = false
    } else {
        outros.disabled = true
    }
}
function verEstados() {
    const estados = document.getElementById('naturalidade')
    const pais = document.getElementById('nacionalidade')
    const cidade = document.getElementById('cidade')
    if (pais.value == 'BR') {
        for (let i = 0; i < estadosBrasil.length; i++) {
            let option = document.createElement('option');
            option.textContent = estadosBrasil[i].nome
            option.setAttribute('value', estadosBrasil[i].sigla)
            estados.appendChild(option)
        }
        estados.hidden = false
    } else {
        estados.hidden = true
        cidade.hidden = true
    }
}
function verCidades() {
    const estados = document.getElementById('naturalidade')
    const cidade = document.getElementById('cidade')
    if (estados.value == 'AM') {
        for (let i = 0; i < cidadesAmazonas.length; i++) {
            let option = document.createElement('option');
            option.textContent = cidadesAmazonas [i]
            cidade.appendChild(option)
        }
        cidade.hidden = false
    } else {
        cidade.hidden = true
    }
}
function carredarDados() {

    const celular = document.getElementById('celular')
    const telefone = document.getElementById('telefone')
    const pais = document.getElementById('nacionalidade')
    for (let i = 0; i < dddsBrasil.length; i++) {
        let option = document.createElement('option');
        option.textContent = dddsBrasil[i]
        telefone.appendChild(option)
    }
    for (let i = 0; i < dddsBrasil.length; i++) {
        let option = document.createElement('option');
        option.textContent = dddsBrasil[i]
        celular.appendChild(option)
    }
    for (let i = 0; i < paisesONU.length; i++) {
        let option = document.createElement('option');
        option.textContent = paisesONU[i].nome
        option.setAttribute('value', paisesONU[i].sigla)
        pais.appendChild(option)
    }
}
carredarDados()