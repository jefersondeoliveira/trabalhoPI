var HomeController = require("../controllers/home")();
var validacaoUtil = require( '../util/validacao.js' )();
var expect = require('chai').expect;

require('jasmine-expect');

describe("HomeController", function() {
	describe( 'construtor', function(){
		it( 'Deveria retornar um objeto', function( done ){
			var valorEsperado = 'object';
			var valorRetornado = typeof HomeController;

			expect( valorRetornado ).to.equal( valorEsperado );
			done();
		});
	})
	describe( "Web.Index", function() {
		it( "Espero receber como retorno a view 'index' e o status vazio", function() {
			
			var response = criaResponse();
			var request = {};
			
			HomeController.web.index( request, response );
			
			expect( response.view ).to.equal( "index" );
			expect( response.object.status ).to.equal('');
		});	
	})
	describe( "Web.Cadastro", function() {
		it( "Espero receber como retorno a view 'index' e o status invalido", function() {
			
			var response = criaResponse();
			var request = {};
			
			HomeController.web.cadastro( request, response );
			
			expect( response.view ).to.equal( "index" );
			expect( response.object.status ).to.equal('Dados invalidos');
		});
		it( "Espero receber como retorno a view 'index' e o status valido", function() {
			
			var response = criaResponse();
			var request = criaRequest();
			
			HomeController.web.cadastro( request, response );
			
			expect( response.view ).to.equal( "index" );
			expect( response.object.status ).to.equal('Dados validos');
		});		
	})
	describe( "Validação dos dados", function() {
		it("Espero true quando passado valores corretos", function(done) {
			
			var valores = { um: 1, dois: -1, tres: 0, quatro: 1 };			
			
			var retorno = validacaoUtil.valorValido(valores);
			
			expect(retorno).to.equal( true );
			done();
		});
		it("Espero false quando passado valores incorretos", function(done) {
			
			var valores = { um: -1, dois: 2, tres: 0, quatro: 5 };			
			
			var retorno = validacaoUtil.valorValido(valores);
			
			expect(retorno).to.equal( false );
			done();
		});
		it("Espero false quando passado valores com string", function(done) {
			
			var valores = { um: '1', dois: '1', tres: '1', quatro: '1' };			
			
			var retorno = validacaoUtil.valorValido(valores);
			
			expect(retorno).to.equal( false );
			done();
		});
		it("Espero false quando passado valores incorretos", function(done) {
			
			var valores = { um: 1, dois: '1', tres: '1', quatro: '1' };			
			
			var retorno = validacaoUtil.valorValido(valores);
			
			expect(retorno).to.equal( false );
			done();
		});
		it("Espero false quando passado valores incorretos", function(done) {
			
			var valores = { um: 1, dois: 1, tres: '1', quatro: '1' };			
			
			var retorno = validacaoUtil.valorValido(valores);
			
			expect(retorno).to.equal( false );
			done();
		});
		it("Espero false quando passado valores incorretos", function(done) {
			
			var valores = { um: 1, dois: 1, tres: 1, quatro: '1' };			
			
			var retorno = validacaoUtil.valorValido(valores);
			
			expect(retorno).to.equal( false );
			done();
		});
		it("Espero false quando passado valores incorretos", function(done) {
			
			var valores = { um: 1, dois: 1, tres: 1, quatro: '1' };			
			
			var retorno = validacaoUtil.valorValido(valores);
			
			expect(retorno).to.equal( false );
			done();
		});
		it("Espero false quando passado valores incorretos", function(done) {
			
			var valores = { um: 1, dois: 2, tres: 1, quatro: 1 };			
			
			var retorno = validacaoUtil.valorValido(valores);
			
			expect(retorno).to.equal( false );
			done();
		});
		it("Espero false quando passado valores incorretos", function(done) {
			
			var valores = { um: 1, dois: -2, tres: 1, quatro: 1 };			
			
			var retorno = validacaoUtil.valorValido(valores);
			
			expect(retorno).to.equal( false );
			done();
		});
		it("Espero false quando passado valores incorretos", function(done) {
			
			var valores = { um: 1, dois: -2, tres: 0, quatro: 0 };			
			
			var retorno = validacaoUtil.valorValido(valores);
			
			expect(retorno).to.equal( false );
			done();
		});
		
	});
	describe( 'prepararObjeto', function(){
		it( 'Deveria retornar um objeto vazio passando-se undefined', function( done ){
			
			HomeController.util.preparaObjeto(undefined, function (valores) {
				
				var valorEsperado = 'object';
				var valorRetornado = typeof valores;
	
				expect( valorRetornado ).to.equal( valorEsperado );
				done();
			
			});
			
		});

		it( 'Deveria retornar um objeto com valores setados', function( done ){
			
			var dadosRequisicao = {
					valorUm : '1',
					valorDois : '-1',
					valorTres : '0',
					valorQuatro : '1'
				};
			
			HomeController.util.preparaObjeto(dadosRequisicao, function (valores) {
				
				expect( parseInt(dadosRequisicao.valorUm) ).to.equal( valores.um );
				expect( parseInt(dadosRequisicao.valorDois) ).to.equal( valores.dois );
				expect( parseInt(dadosRequisicao.valorTres) ).to.equal( valores.tres );
				expect( parseInt(dadosRequisicao.valorQuatro) ).to.equal( valores.quatro );
				done();
			
			});
			
		});
	});
});

function criaResponse() {
	return {
	   view : "",
	   object : {},
	   
	   render : function( view, object ) {
		   this.view = view;
		   this.object = object;
	   },
	   
	   redirect : function( view ) {
		   this.view = view;
	   }
   };	
};
function criaRequest(){
	return { 
	  body: 
	   { valorUm: '1',
	     valorDois: '-2',
	     valorTres: '0',
	     valorQuatro: '1' 
		}
	}
};
