let autos = require ('./autos')
let concesionaria = {
   autos: autos,
 
   buscarAuto: function (patente) {
   this.patente=patente;
   for (let i = 0; i < autos.length ; i++) {
      if (patente == autos[i].patente) {
         return (autos[i]);
      }
   }
   return null;

},

   venderAuto:function(){
      this.buscarAuto = buscar;
      if (buscar == autos[i].patente) {

         return (autos[i].vendido == true);
      }
   
   return null;
   }
}