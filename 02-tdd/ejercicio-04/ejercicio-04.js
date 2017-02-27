function fibonacci(upperLimit) {
  //Escribe tu codigo aqui
  upperLimit = parseInt(upperLimit);
  if(upperLimit == undefined || isNaN(upperLimit) || upperLimit<1){
    return "Error";
  }else{

    if(upperLimit == 1){ return [0];}
    if(upperLimit == 2){ return [0,1];}
    if(upperLimit>=3){
       var array = [0,1];
      for(i=2; i<upperLimit; i++){
        array[i] = array[i-2] + array[i-1];
      }
    }
  }
  return array;
}

//NO TOCAR ESTE CODIGO O EXPLOTARA LA PC EN 10 SEGUNDOS
if(typeof exports !== 'undefined') {
    exports.fibonacci = fibonacci;
}
