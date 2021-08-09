
  let userName = " "

  function enviarNome() {
    userName = { name: prompt("Entre com seu nome") };

    const enviaNome = axios.post(
        "https://mock-api.bootcamp.respondeai.com.br/api/v3/uol/participants",
        userName
      );
    enviaNome.then(tratarSucessoNome);
    enviaNome.catch(tratarErroNome)   
  }

  enviarNome()

  
  function tratarErroNome(){
    enviarNome()
  }
  
  function atualizarPresenca(){
    const atualizaNome = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v3/uol/status", userName);
    //esse post ta com problema, n sei identificar qual
  }

  setInterval(atualizarPresenca, 5000) 

  function enviarMensagem(){
    let nome = userName.name
    let mensagem = document.querySelector(".enviar").value

    
    let objetoMensagem = {
        from: nome,
        to: "Todos",
        text: mensagem, 
        type: "message" 
    }

       let novaMensagem = axios.post(
         "https://mock-api.bootcamp.respondeai.com.br/api/v3/uol/messages",
         objetoMensagem
       );

      novaMensagem.then(tratarSucessoMensagem);
      novaMensagem.catch(tratarErroMensagem)  
  } 


function tratarSucessoMensagem(){
     atualizar();
 }

function tratarErroMensagem(){
   enviarNome()
  }