'use strict';

function BinarioADecimal(num) {
   var suma = 0;
   var exponente= num.length-1;
   for (var i=0; i<num.length; i++){
      suma = suma + (num[i])*Math.pow(2,exponente);
      exponente--;
   }
   return (suma);
   }
function DecimalABinario(num) {
   var binario = "";
      var esDivisible = true;
   while (esDivisible===true){
      if (num%2==1){
         binario = "1"+ binario; //100
      }
      else{
         binario = "0"+ binario; //100
      }
      
      
      if (num>=2){
         esDivisible=true;
      }
      else{
         esDivisible=false;
      }
      num = parseInt(num/2);
   }
   return binario;
}



module.exports = {
   BinarioADecimal,
   DecimalABinario,
};
