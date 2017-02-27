function suma (sum1,sum2) {
  //Escribe tu codigo aqui
  if(sum1==undefined && sum2==undefined){
    return "Error";
  }else{
    if(sum1==undefined || sum2 == undefined){
      return "Error";
    }else{
      sum1 = parseInt(sum1);
      sum2 = parseInt(sum2);
      if(!isNaN(sum1)&& !isNaN(sum2)){
        return sum1 + sum2;
      }else{ return "Error";}
    }

  }
}

//NO TOCAR ESTE CODIGO O EXPLOTARA LA PC EN 10 SEGUNDOS
if(typeof exports !== 'undefined') {
    exports.suma = suma;
}
