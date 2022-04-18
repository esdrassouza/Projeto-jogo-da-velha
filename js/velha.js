var  vencedor , jogador = null;
var selecionado = document.querySelector('#jogadorSelecionado');
var vencedorSelecionado = document.querySelector('#vencedorSelecionado');



mudarJogador('X');

function escolherQuadrado(id){

    if(vencedor !== null){
        return;
    }
    let quadrado = document.getElementById(id);
 if(quadrado.innerHTML !== '-'){
        return;
    }
          quadrado.innerHTML= jogador;
            quadrado.style.color = "#000";

               if(jogador === 'X'){
                  
                    jogador = 'O';

               }else{
                   jogador = 'X';
               }

               mudarJogador(jogador);
               checarVencedor();
}

function mudarJogador(j){
    jogador = j;
    selecionado.innerHTML =  jogador;
}

function checarVencedor(){

    let quadrado_1 = document.getElementById('1');
    let quadrado_2 = document.getElementById('2');
    let quadrado_3 = document.getElementById('3');
    let quadrado_4 = document.getElementById('4');
    let quadrado_5 = document.getElementById('5');
    let quadrado_6 = document.getElementById('6');
    let quadrado_7 = document.getElementById('7');
    let quadrado_8 = document.getElementById('8');
    let quadrado_9 = document.getElementById('9');
           
     if(checarSequencia(quadrado_1, quadrado_2, quadrado_3)){
                   
                alterColor(quadrado_1, quadrado_2, quadrado_3);
                mudarVencedor(quadrado_1);    
                return;      
            }
            if(checarSequencia(quadrado_4, quadrado_5, quadrado_6)){
                   
                alterColor(quadrado_4, quadrado_5, quadrado_6);
                mudarVencedor(quadrado_4);
                return;          
            }
            if(checarSequencia(quadrado_7, quadrado_8, quadrado_9)){
                   
                alterColor(quadrado_7, quadrado_8, quadrado_9);
                mudarVencedor(quadrado_7);  
                return;        
            }

            if(checarSequencia(quadrado_1, quadrado_4, quadrado_7)){
                   
                alterColor(quadrado_1, quadrado_4, quadrado_7);
                mudarVencedor(quadrado_7);
                return; 
                        
            }
            if(checarSequencia(quadrado_2, quadrado_5, quadrado_8)){
                   
                alterColor(quadrado_2, quadrado_5, quadrado_8);
                mudarVencedor(quadrado_2);
                return; 
                        
            }
            if(checarSequencia(quadrado_3, quadrado_6, quadrado_9)){
                   
                alterColor(quadrado_3, quadrado_6, quadrado_9);
                mudarVencedor(quadrado_3);
                return; 
                        
            }

            if(checarSequencia(quadrado_1, quadrado_5, quadrado_9)){
                   
                alterColor(quadrado_1, quadrado_5, quadrado_9);
                mudarVencedor(quadrado_1);
                return; 
                        
            }
            if(checarSequencia(quadrado_3, quadrado_5, quadrado_7)){
                   
                alterColor(quadrado_3, quadrado_5, quadrado_7);
                mudarVencedor(quadrado_3);
                return; 
                        
            }
           
}

function mudarVencedor(quadrado){
     
    vencedor = quadrado.innerHTML;
      vencedorSelecionado.innerHTML = vencedor;


}

function alterColor(quadrado_1, quadrado_2, quadrado_3){
       quadrado_1.style.background='#0f0';
       quadrado_2.style.background='#0f0';
       quadrado_3.style.background='#0f0';
}

function checarSequencia(quadrado_1, quadrado_2, quadrado_3){
 
     let eIgual = false;

       if(quadrado_1.innerHTML !== '-' && quadrado_1.innerHTML === quadrado_2.innerHTML
          && quadrado_2.innerHTML === quadrado_3.innerHTML){
               eIgual = true;
          }

          return eIgual;
}

function reiniciar(){

    vencedor = null;
    vencedorSelecionado.innerHTML = "";

        for(var i = 1; i <= 9; i++){
            var quadrado = document.getElementById(i);
            quadrado.style.color="#eee";
            quadrado.style.background="#eee";
            quadrado.innerHTML = '-';
        }
        mudarJogador('X');
}