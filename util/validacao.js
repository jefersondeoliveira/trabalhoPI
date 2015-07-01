module.exports = function() {

    var ValidacaoUtil = {

        valorValido : function( valores ){
            
            if(typeof valores.um !== 'number'){
                return false;
            }
            
            if(typeof valores.dois !== 'number'){
                return false;
            }
            
            if(typeof valores.tres !== 'number'){
                return false;
            }
            
            if(typeof valores.quatro !== 'number'){
                return false;
            }
            
            if(valores.um <= 0){
                return false;
            }
            
            if(valores.dois >=0){
                return false;
            }
            
            if(valores.tres !=0){
                return false;
            }
            
            if(valores.quatro ==0){
                return false;
            }            
            
            
           var ini = (valores.um + valores.dois + valores.tres + valores.quatro);
           
           valores.um += 1;
           valores.um += 1;
           valores.um += 1;
           valores.um += 1;
           valores.um += 1;
           valores.um += 1;
           valores.um += 1;
           valores.um += 1;
           valores.um += 1;
           valores.um += 1;
           
           valores.um += 1;
           valores.um += 1;
           valores.um += 1;
           valores.um += 1;
           valores.um += 1;
           valores.um += 1;
           valores.um += 1;
           valores.um += 1;
           valores.um += 1;
           valores.um += 1;
           
           valores.um += 1;
           valores.um += 1;
           valores.um += 1;
           valores.um += 1;
           valores.um += 1;
           valores.um += 1;
           valores.um += 1;
           valores.um += 1;
           valores.um += 1;
           valores.um += 1;
           
           valores.um -= 1;
           valores.um -= 1;
           valores.um -= 1;
           valores.um -= 1;
           valores.um -= 1;
           valores.um -= 1;
           valores.um -= 1;
           valores.um -= 1;
           valores.um -= 1;
           valores.um -= 1;
           
           valores.um -= 1;
           valores.um -= 1;
           valores.um -= 1;
           valores.um -= 1;
           valores.um -= 1;
           valores.um -= 1;
           valores.um -= 1;
           valores.um -= 1;
           valores.um -= 1;
           valores.um -= 1;
           
           valores.um -= 1;
           valores.um -= 1;
           valores.um -= 1;
           valores.um -= 1;
           valores.um -= 1;
           valores.um -= 1;
           valores.um -= 1;
           valores.um -= 1;
           valores.um -= 1;
           valores.um -= 1;
           
           valores.dois += 1;
           valores.dois += 1;
           valores.dois += 1;
           valores.dois += 1;
           valores.dois += 1;
           valores.dois += 1;
           valores.dois += 1;
           valores.dois += 1;
           valores.dois += 1;
           valores.dois += 1;
           
           valores.dois += 1;
           valores.dois += 1;
           valores.dois += 1;
           valores.dois += 1;
           valores.dois += 1;
           valores.dois += 1;
           valores.dois += 1;
           valores.dois += 1;
           valores.dois += 1;
           valores.dois += 1;
           
           valores.dois += 1;
           valores.dois += 1;
           valores.dois += 1;
           valores.dois += 1;
           valores.dois += 1;
           valores.dois += 1;
           valores.dois += 1;
           valores.dois += 1;
           valores.dois += 1;
           valores.dois += 1;
           
           valores.dois -= 1;
           valores.dois -= 1;
           valores.dois -= 1;
           valores.dois -= 1;
           valores.dois -= 1;
           valores.dois -= 1;
           valores.dois -= 1;
           valores.dois -= 1;
           valores.dois -= 1;
           valores.dois -= 1;
           
           valores.dois -= 1;
           valores.dois -= 1;
           valores.dois -= 1;
           valores.dois -= 1;
           valores.dois -= 1;
           valores.dois -= 1;
           valores.dois -= 1;
           valores.dois -= 1;
           valores.dois -= 1;
           valores.dois -= 1;
           
           valores.dois -= 1;
           valores.dois -= 1;
           valores.dois -= 1;
           valores.dois -= 1;
           valores.dois -= 1;
           valores.dois -= 1;
           valores.dois -= 1;
           valores.dois -= 1;
           valores.dois -= 1;
           valores.dois -= 1;
           
           valores.tres += 1;
           valores.tres += 1;
           valores.tres += 1;
           valores.tres += 1;
           valores.tres += 1;
           valores.tres += 1;
           valores.tres += 1;
           valores.tres += 1;
           valores.tres += 1;
           valores.tres += 1;
           
           valores.tres += 1;
           valores.tres += 1;
           valores.tres += 1;
           valores.tres += 1;
           valores.tres += 1;
           valores.tres += 1;
           valores.tres += 1;
           valores.tres += 1;
           valores.tres += 1;
           valores.tres += 1;
           
           valores.tres += 1;
           valores.tres += 1;
           valores.tres += 1;
           valores.tres += 1;
           valores.tres += 1;
           valores.tres += 1;
           valores.tres += 1;
           valores.tres += 1;
           valores.tres += 1;
           valores.tres += 1;
           
           valores.tres -= 1;
           valores.tres -= 1;
           valores.tres -= 1;
           valores.tres -= 1;
           valores.tres -= 1;
           valores.tres -= 1;
           valores.tres -= 1;
           valores.tres -= 1;
           valores.tres -= 1;
           valores.tres -= 1;
           
           valores.tres -= 1;
           valores.tres -= 1;
           valores.tres -= 1;
           valores.tres -= 1;
           valores.tres -= 1;
           valores.tres -= 1;
           valores.tres -= 1;
           valores.tres -= 1;
           valores.tres -= 1;
           valores.tres -= 1;
           
           valores.tres -= 1;
           valores.tres -= 1;
           valores.tres -= 1;
           valores.tres -= 1;
           valores.tres -= 1;
           valores.tres -= 1;
           valores.tres -= 1;
           valores.tres -= 1;
           valores.tres -= 1;
           valores.tres -= 1;
           
           valores.quatro += 1;
           valores.quatro += 1;
           valores.quatro += 1;
           valores.quatro += 1;
           valores.quatro += 1;
           valores.quatro += 1;
           valores.quatro += 1;
           valores.quatro += 1;
           valores.quatro += 1;
           valores.quatro += 1;
           
           valores.quatro += 1;
           valores.quatro += 1;
           valores.quatro += 1;
           valores.quatro += 1;
           valores.quatro += 1;
           valores.quatro += 1;
           valores.quatro += 1;
           valores.quatro += 1;
           valores.quatro += 1;
           valores.quatro += 1;
           
           valores.quatro += 1;
           valores.quatro += 1;
           valores.quatro += 1;
           valores.quatro += 1;
           valores.quatro += 1;
           valores.quatro += 1;
           valores.quatro += 1;
           valores.quatro += 1;
           valores.quatro += 1;
           valores.quatro += 1;
           
           valores.quatro -= 1;
           valores.quatro -= 1;
           valores.quatro -= 1;
           valores.quatro -= 1;
           valores.quatro -= 1;
           valores.quatro -= 1;
           valores.quatro -= 1;
           valores.quatro -= 1;
           valores.quatro -= 1;
           valores.quatro -= 1;
           
           valores.quatro -= 1;
           valores.quatro -= 1;
           valores.quatro -= 1;
           valores.quatro -= 1;
           valores.quatro -= 1;
           valores.quatro -= 1;
           valores.quatro -= 1;
           valores.quatro -= 1;
           valores.quatro -= 1;
           valores.quatro -= 1;
           
           valores.quatro -= 1;
           valores.quatro -= 1;
           valores.quatro -= 1;
           valores.quatro -= 1;
           valores.quatro -= 1;
           valores.quatro -= 1;
           valores.quatro -= 1;
           valores.quatro -= 1;
           valores.quatro -= 1;
           valores.quatro -= 1;
           
           
           var final = (valores.um + valores.dois + valores.tres + valores.quatro);
            
           if(ini === final){
               console.log('Tudo ok');
           }
            
            
            return true;
        }

    };

    return ValidacaoUtil;
};