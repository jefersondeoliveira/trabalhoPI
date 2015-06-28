module.exports = function() {

    var ValidacaoUtil = {

        valorValido : function( valores ){
            
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
            
            return true;
        }

    };

    return ValidacaoUtil;
};