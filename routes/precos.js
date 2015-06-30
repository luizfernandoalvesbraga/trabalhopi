module.exports = function(app) {
	var controller = app.controllers.precos;

	app.get('/', controller.get.index);
	app.get('/Fox', controller.get.Fox);
    app.get('/Golf', controller.get.Golf);
    app.get('/Gol', controller.get.Gol);
    app.get('/Saveiro', controller.get.Saveiro);
    app.get('/Voyage', controller.get.Voyage);
    app.get('/C3', controller.get.C3);
    app.get('/C4', controller.get.C4);
    app.get('/Aircross', controller.get.AirCross);
    app.get('/DS5', controller.get.DS5);
    app.get('/DS3', controller.get.DS3);
    app.get('/HB20', controller.get.HB20);
    app.get('/Tucson', controller.get.Tucson);
    app.get('/IX35', controller.get.IX35);
    app.get('/SantaFe', controller.get.SantaFe);
    app.get('/Azera', controller.get.Azera);
    app.get('/Frontier', controller.get.Frontier);
    app.get('/Sentra', controller.get.Sentra);
    app.get('/Versa', controller.get.Versa);
    app.get('/Ferrari', controller.get.Ferrari);
    app.get('/Lamborghini', controller.get.Lamborghini);
	app.post('/calcular', controller.post.calcular);
};