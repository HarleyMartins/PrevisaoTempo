const key = "57b4f1115f481106d45ad136da61197c" // CHAVE DA API

function putData(dados){ // FUNÇÃO PARA PEGAR OS DADOS NO JSON E COLOCAR NOS ELEMENTOS HTML
    document.querySelector(".c-city__cidade").innerHTML = "Tempo em " + dados.name
    document.querySelector(".c-city__time").innerHTML = Math.floor(dados.main.temp) + " °C"
    document.querySelector(".c-icon__prev").innerHTML = dados.weather[0].description
    document.querySelector(".c-icon__umid").innerHTML = "Umidade " + dados.main.humidity + "%"
    document.querySelector(".c-icon__img").src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`

}


async function searchCity(cidade){ // FUNÇÃO PARA BUSCAR A CIDADE ATRAVÉS DA API USANDO
    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`).then(resposta => resposta.json()) 
   //CAPTURAMOS OS DADOS CIDADE UTILIZANDO A URL DA API E PASSAMOS AS VARIÁVEIS JÁ DECLARADAS. NA URL FOI MODIFICADO APENAS O "&lang=pt_br" PARA OS DADOS FICAREM EM PORTUGUÊS E O "&units=metric" PARA CONVERTER GRAUS FAHRENHEIT EM GRAUS CELSIUS


    putData(dados)
    console.log(dados)
}

function takeCity(){ //FUNÇÃO PARA PEGAR O A CIDADE DIGITADA PELO USUÁRIO
    const cidade = document.querySelector(".card__input").value
    
    searchCity(cidade)
}

