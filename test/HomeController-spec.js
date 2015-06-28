var HomeController = require("../controllers/home")();
var validacaoUtil = require( '../util/validacao.js' )();

require('jasmine-expect');

describe("HomeController", function() {
	describe( "Validação dos dados", function() {
		
		it("Espero false como retorno quando passar um e-mail inválido", function() {
			
			var valores = { um: '1', dois: '-1', tres: '0', quatro: '1' };			
			
			var retorno = validacaoUtil.valorValido(valores);
			
			expect(retorno).toBe( true );
		});
	});
});
