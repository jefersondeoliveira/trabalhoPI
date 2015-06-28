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
            
            return true;
        }

    };

    return ValidacaoUtil;
};