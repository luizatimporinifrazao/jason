async function testeAPI() {
    //await significa: espere a resposta chegar ante de continuar
    const resposta = await fetch ('https://dog.ceo/api/breed/husky/images/random')
    
    //precisamos converter a resposta aem JSON
    const dados = await resposta.json();

    console.log("📦 Resposta da API:" , dados)
    console.log("🐕 Imagem do cachorro: " , dados.message)
}

testeAPI()