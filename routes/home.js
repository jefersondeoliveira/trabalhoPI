module.exports = function(app){
	var home = app.controllers.home;
	app.get('/', home.web.index);
	app.post('/cadastro', home.web.cadastro);
};