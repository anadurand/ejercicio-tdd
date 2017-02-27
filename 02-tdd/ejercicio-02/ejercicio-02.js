function busquedaLinear (array,itemToSearch) {
  //Escribe tu codigo aqui

var c = -1;
  if(array == undefined || itemToSearch == undefined){
    return "Error";
  }else{
    if(!isNaN(parseInt(itemToSearch))){
      for(i=0; i<array.length; i++){
        if(array[i]==itemToSearch){
          c = i;
          break;
        }
      }
      if(c!=-1){ return c;}else{return false;}
    }else{ return "Error de dato";}

  }



}

//NO TOCAR ESTE CODIGO O EXPLOTARA LA PC EN 10 SEGUNDOS
if(typeof exports !== 'undefined') {
    exports.busquedaLinear = busquedaLinear;
}
