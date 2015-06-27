var validacaoUtil = require( '../util/validacao.js' )();

module.exports = function (app) {
	var HomeController = {

		web: {
			index: function (req, res) {
				
				res.render('index',{status : ''});

			},
			cadastro: function (req, res) {

				HomeController.util.preparaObjeto(req.body, function (valores) {
	
					console.log('valores: ', valores);
					console.log('valores: ', validacaoUtil.valorValido(valores));
					
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
						valores.um = obj.valorUm;
					}
					if (obj.valorDois) {
						valores.dois = obj.valorDois;
					}
					if (obj.valorTres) {
						valores.tres = obj.valorTres;
					}
					if (obj.valorQuatro) {
						valores.quatro = obj.valorQuatro;
					}

				}

				callback(valores);

			}
		}

	};

	return HomeController;
};