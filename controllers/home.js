var validacaoUtil = require( '../util/validacao.js' )();

module.exports = function (app) {
	var HomeController = {

		web: {
			index: function (req, res) {
				
				res.render('index',{status : ''});

			},
			cadastro: function (req, res) {
				console.log('req',req)
				HomeController.util.preparaObjeto(req.body, function (valores) {
	
					var msg = 'Dados invalidos';
					
					if(validacaoUtil.valorValido(valores)){
						msg = 'Dados validos';
					}
					
					res.render('index',{
						status : msg
					});

				});

			}
		},
		util: {
			preparaObjeto: function (obj, callback) {

				var valores = {};

				if (obj) {

					if (obj.valorUm) {
						valores.um = parseInt(obj.valorUm);
					}
					if (obj.valorDois) {
						valores.dois = parseInt(obj.valorDois);
					}
					if (obj.valorTres) {
						valores.tres = parseInt(obj.valorTres);
					}
					if (obj.valorQuatro) {
						valores.quatro = parseInt(obj.valorQuatro);
					}

				}

				callback(valores);

			}
		}

	};

	return HomeController;
};