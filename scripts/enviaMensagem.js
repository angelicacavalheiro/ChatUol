
  function perguntarNome() {

    let userName = { name: prompt("Entre com seu nome") };

    const enviaNome = axios.post(
        "https://mock-api.bootcamp.respondeai.com.br/api/v3/uol/participants",
        userName
      );

    enviaNome.then(tratarSucesso);
    enviaNome.catch(tratarErro)   
    atualizarPresenca(userName)   
    enviarMensagem(userName)
  }

  perguntarNome()
  //essa função eu posso apagar depois, mas vou deixar aqui por enquanto 
  //para funs didáticos
  function tratarSucesso(resposta){
    const statusCode = resposta.status;
	console.log(statusCode);
  }
  
  function tratarErro(erro){
      //esses console.log mais tarde posso apagar tbem
    console.log("Status code: " + erro.response.status); // Ex: 404
	console.log("Mensagem de erro: " + erro.response.data); // Ex: Not Found

    perguntarNome()
  }
  
  function atualizarPresenca(userName){
      const atualizaNome = axios.post ("https://mock-api.bootcamp.respondeai.com.br/api/v2/uol/status", userName )
  }

  setInterval(atualizarPresenca, 100000) //mudar para 5000

  function enviarMensagem(userName){
    //pegar do input e criar um objeto
    let objetoMensagem = {
        from: userName,
        to: "Todos",
        text: "mensagem digitada", //pegar no input após o botão ser clicado
        type: "message" 
    }
      let novaMensagem = axios.post(
        "https://mock-api.bootcamp.respondeai.com.br/api/v2/uol/messages",
        objetoMensagem
      );

  }

  enviarMensagem()