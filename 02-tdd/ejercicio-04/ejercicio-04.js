function fibonacci(upperLimit) {
  //Escribe tu codigo aqui
  var a = 0;
  var b = 1;
  var n = 0;
  var array = [];
  if(upperLimit==undefined || isNaN(parseInt(upperLimit)) || upperLimit<1){
    return "Error";

  }else{

    if(upperLimit == 1){ return [0];}
    if(upperLimit == 2){ return [0,1];}
    if(upperLimit>=3){
      array[0] = 0;
      array[1] = 1;
      for(i=2; i<upperLimit; i++){
        array[i] = a + b;
        a = b;
        b = array[i];
      }
    }
  }
  return array;
}

//NO TOCAR ESTE CODIGO O EXPLOTARA LA PC EN 10 SEGUNDOS
if(typeof exports !== 'undefined') {
    exports.fibonacci = fibonacci;
}
