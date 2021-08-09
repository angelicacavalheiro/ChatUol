function funcaoGeral() {
    let i = 0;
    let mensagens = document.querySelector(".mensagens");
    let acumuladorMensagens = " "
  
    function buscarDados() {
      const promisse = axios.get(
        "https://mock-api.bootcamp.respondeai.com.br/api/v3/uol/messages"
      );
      promisse.then(classificarMensagem);
    }
  
    function classificarMensagem(dados) {
      console.log(dados)
      while (i < 100) {
        let tipoMensagem = dados.data[i].type;
        if (tipoMensagem === "status") {
          mensagemStatus(dados, i);
          
        } 
        else 
          if (tipoMensagem === "message") {
          mensagemNormal(dados, i);
          
          } 
        else 
          if (tipoMensagem === "private_message") {
          mensagemReservada(dados, i);
          }
          if (i === 99) {
            scroll();
          
          }
          i++;
      }
    }
  
    function mensagemStatus(dados, i) {
      let elementoTime = dados.data[i].time;
      let elementoFrom = dados.data[i].from;
      let elementoText = dados.data[i].text;
      //renderiza
  
      acumuladorMensagens =
        acumuladorMensagens +
        `
        <div class = "status">
          <span class="tempo"> ${elementoTime} </span>
          <span class="nome"> ${elementoFrom} </span>
          <span class="texto"> ${elementoText} </span>
        </div>`;
  
        mensagens.innerHTML = acumuladorMensagens;
    }
  
    function mensagemReservada(dados, i) {
      let nome = userName.name
      let reservada = document.querySelector(".mensagens-reservadas");
      let elementoTime = dados.data[i].time;
      let elementoFrom = dados.data[i].from;
      let elementoTo = dados.data[i].to;
      let elementoText = dados.data[i].text;

      if ( elementoTo === nome|| elementoFrom === nome){
        acumuladorMensagens =
        acumuladorMensagens +
        `
        <div class = "reservada">
          <span class="tempo"> ${elementoTime} </span>
          <span class="nome"> ${elementoFrom} </span>
          <span class="para"> para ${elementoTo} </span>
          <span class="texto"> ${elementoText} </span>
        </div>`;
  
        mensagens.innerHTML = acumuladorMensagens;

      } 
    }
    
    function mensagemNormal(dados, i) {
      let normal = document.querySelector(".mensagens-normais");
      let elementoTime = dados.data[i].time;
      let elementoFrom = dados.data[i].from;
      let elementoTo = dados.data[i].to;
      let elementoText = dados.data[i].text;
      //renderiza
  
      acumuladorMensagens =
        acumuladorMensagens +
        `
        <div class = "normais">
          <span class="tempo"> ${elementoTime} </span>
          <span class="nome"> ${elementoFrom} </span>
          <span class="para"> para ${elementoTo} </span>
          <span class="texto"> ${elementoText} </span>
        </div>`;
  
        mensagens.innerHTML = acumuladorMensagens;
    }


    function scroll(dados, i){ 
      let fimPagina = document.querySelector("footer")
     fimPagina.scrollIntoView()      
    }
    
    buscarDados();
  
}
  //acaba a função geral
  
  funcaoGeral()

  function atualizar() {
    setInterval(funcaoGeral, 3000); 
  }
  
  atualizar();