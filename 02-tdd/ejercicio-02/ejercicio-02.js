function busquedaLinear (array,itemToSearch) {
  //Escribe tu codigo aqui

var c = -1;
  if(array == undefined || itemToSearch == undefined){
    return "Error";
  }else{
    if(!isNaN(parseInt(itemToSearch))){
      if(array.indexOf(itemToSearch)!= -1){return array.indexOf(itemToSearch);}else{return false;}
    
    }else{ return "Error de dato";}

  }



}

//NO TOCAR ESTE CODIGO O EXPLOTARA LA PC EN 10 SEGUNDOS
if(typeof exports !== 'undefined') {
    exports.busquedaLinear = busquedaLinear;
}
