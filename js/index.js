let notas50 = 1000;

let notas10 = 1000;

let notas5 = 1000;

let notas1 = 1000;

let valorSaque = 0;

let numeroNotas = 0;

function sacar(){

   valorSaque = Number.parseInt(prompt('Digite um valor maior que 10 reais a ser sacado.'));

    if(valorSaque>=50){
        numeroNotas = Math.floor(valorSaque/50);
        notas50 = notas50-numeroNotas;
        valorSaque = valorSaque - Math.floor((Math.floor((valorSaque/50))*50));
    }
    
    if(valorSaque>=10){
        numeroNotas+=Math.floor(valorSaque/10);
        notas10 = notas10-Math.floor(valorSaque/10);
        valorSaque = valorSaque - Math.floor((Math.floor((valorSaque/10))*10));  
    }
    
    if(valorSaque>=5){
        numeroNotas+=Math.floor(valorSaque/5);
        notas5 = notas5-Math.floor(valorSaque/5);
        valorSaque = valorSaque - Math.floor((Math.floor((valorSaque/5))*5));
    }
    
    if(valorSaque>=1){
        notas1 = notas1-valorSaque;
        numeroNotas+=valorSaque;
    }
    
    alert(`O número de notas é ${numeroNotas}.`);

    alert(`Foram usadas ${1000-notas50} notas de 50, ${1000-notas10} notas de 10, ${1000-notas5} notas de 5, ${1000-notas1} notas de 1.\n\n Restam ${notas50} notas de 50, ${notas10} notas de 10, ${notas5} notas de 5, ${notas1} notas de 1.`);

}



