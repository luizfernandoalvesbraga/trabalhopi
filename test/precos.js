var controller = require('../controllers/precos.js')();

	describe('\nTesta se os métodos principais funcionam', function() {
		describe('Fox()', function() {
			it('Deve retornar 1003.80 quando for passado o numero de 50 parcelas', function() {
				var quantidade = 50;
				
				var resultado = controller.utils.calculos.Fox(quantidade)
				
				resultado.should.be.a.Number;
				resultado.should.be.equal(1003.80);
			});
			
			it('Deve retornar 1254.75 quando for passado o numero de 40 parcelas', function() {
				var quantidade = 40;
				
				var resultado = controller.utils.calculos.Fox(quantidade);
				
				resultado.should.be.a.Number;
				resultado.should.be.equal(1254.75);
			});
		});
		
		describe('Golf()', function() {
			it('Deve retornar 710.00 quando for passado o numero de 100 parcelas', function() {
				var quantidade = 100;
				
				var resultado = controller.utils.calculos.Golf(quantidade);
				
				resultado.should.be.a.Number;
				resultado.should.be.equal(710.00);
			});

			it('Deve retornar 1000.00 quando for passado o numero de 71 parcelas', function() {
				var quantidade = 71;

				var resultado = controller.utils.calculos.Golf(quantidade);

				resultado.should.be.a.Number;
				resultado.should.be.equal(1000.00);
			});
		});
		
		describe('Gol()', function() {
			it('Deve retornar 774.75 quando for passado o numero de 40 parcelas', function() {
				var quantidade = 40;
				
				var resultado = controller.utils.calculos.Gol(quantidade);
				
				resultado.should.be.a.Number;
				resultado.should.be.equal(774.75);
			});

			it('Deve retornar 1549.50 quando for passado o numero de 20 parcelas', function() {
				var quantidade = 20;

				var resultado = controller.utils.calculos.Gol(quantidade);

				resultado.should.be.a.Number;
				resultado.should.be.equal(1549.50);
			});
		});
		
		describe('Voyage()', function() {
			it('Deve retornar 1003.00 quando for passado o numero de 40 parcelas', function() {
				var quantidade = 40;

				var resultado = controller.utils.calculos.Voyage(quantidade);

				resultado.should.be.a.Number;
				resultado.should.be.equal(1003.00);
			});

			it('Deve retornar 501.50 quando for passado o numero de 80 parcelas', function() {
				var quantidade = 80;

				var resultado = controller.utils.calculos.Voyage(quantidade);

				resultado.should.be.a.Number;
				resultado.should.be.equal(501.50);
			});
		});

		describe('Saveiro()', function() {
			it('Deve retornar 1905.20 quando for passado o numero de 25 parcelas', function() {
				var quantidade = 25;

				var resultado = controller.utils.calculos.Saveiro(quantidade);

				resultado.should.be.a.Number;
				resultado.should.be.equal(1905.20);
			});

			it('Deve retornar 1190.75 quando for passado o numero de 40 parcelas', function() {
				var quantidade = 40;

				var resultado = controller.utils.calculos.Saveiro(quantidade);

				resultado.should.be.a.Number;
				resultado.should.be.equal(1190.75);
			});
		});

		describe('C3()', function() {
			it('Deve retornar 2224.50 quando for passado o numero de 20 parcelas', function() {
				var quantidade = 20;

				var resultado = controller.utils.calculos.C3(quantidade);

				resultado.should.be.a.Number;
				resultado.should.be.equal(2224.50);
			});

			it('Deve retornar 1190.75 quando for passado o numero de 30 parcelas', function() {
				var quantidade = 30;

				var resultado = controller.utils.calculos.C3(quantidade);

				resultado.should.be.a.Number;
				resultado.should.be.equal(1483.00);
			});
		});

		describe('C4()', function() {
			it('Deve retornar 1282.25 quando for passado o numero de 40 parcelas', function() {
				var quantidade = 40;

				var resultado = controller.utils.calculos.C4(quantidade);

				resultado.should.be.a.Number;
				resultado.should.be.equal(1282.25);
			});

			it('Deve retornar 5129.00 quando for passado o numero de 10 parcelas', function() {
				var quantidade = 10;

				var resultado = controller.utils.calculos.C4(quantidade);

				resultado.should.be.a.Number;
				resultado.should.be.equal(5129.00);
			});
		});

		describe('AirCross()', function() {
			it('Deve retornar 5899.00 quando for passado o numero de 10 parcelas', function() {
				var quantidade = 10;

				var resultado = controller.utils.calculos.AirCross(quantidade);

				resultado.should.be.a.Number;
				resultado.should.be.equal(5899.00);
			});

			it('Deve retornar 694.00 quando for passado o numero de 85 parcelas', function() {
				var quantidade = 85;

				var resultado = controller.utils.calculos.AirCross(quantidade);

				resultado.should.be.a.Number;
				resultado.should.be.equal(694.00);
			});
		});

		describe('DS5()', function() {
			it('Deve retornar 1399.90 quando for passado o numero de 100 parcelas', function() {
				var quantidade = 100;

				var resultado = controller.utils.calculos.DS5(quantidade);

				resultado.should.be.a.Number;
				resultado.should.be.equal(1399.90);
			});

			it('Deve retornar 2799.80 quando for passado o numero de 50 parcelas', function() {
				var quantidade = 50;

				var resultado = controller.utils.calculos.DS5(quantidade);

				resultado.should.be.a.Number;
				resultado.should.be.equal(2799.80);
			});
		});

		describe('DS3()', function() {
			it('Deve retornar 2174.75 quando for passado o numero de 40 parcelas', function() {
				var quantidade = 40;

				var resultado = controller.utils.calculos.DS3(quantidade);

				resultado.should.be.a.Number;
				resultado.should.be.equal(2174.75);
			});

			it('Deve retornar 3479.60 quando for passado o numero de 25 parcelas', function() {
				var quantidade = 25;

				var resultado = controller.utils.calculos.DS3(quantidade);

				resultado.should.be.a.Number;
				resultado.should.be.equal(3479.60);
			});
		});

		describe('HB20()', function() {
			it('Deve retornar 699.80 quando for passado o numero de 50 parcelas', function() {
				var quantidade = 50;

				var resultado = controller.utils.calculos.HB20(quantidade);

				resultado.should.be.a.Number;
				resultado.should.be.equal(699.80);
			});

			it('Deve retornar 1749.50 quando for passado o numero de 20 parcelas', function() {
				var quantidade = 20;

				var resultado = controller.utils.calculos.HB20(quantidade);

				resultado.should.be.a.Number;
				resultado.should.be.equal(1749.50);
			});
		});

		describe('Tucson()', function() {
			it('Deve retornar 1000.00 quando for passado o numero de 65 parcelas', function() {
				var quantidade = 65;

				var resultado = controller.utils.calculos.Tucson(quantidade);

				resultado.should.be.a.Number;
				resultado.should.be.equal(1000.00);
			});

			it('Deve retornar 1625.00 quando for passado o numero de 40 parcelas', function() {
				var quantidade = 40;

				var resultado = controller.utils.calculos.Tucson(quantidade);

				resultado.should.be.a.Number;
				resultado.should.be.equal(1625.00);
			});
		});

		describe('IX35()', function() {
			it('Deve retornar 4850.00 quando for passado o numero de 20 parcelas', function() {
				var quantidade = 20;

				var resultado = controller.utils.calculos.IX35(quantidade);

				resultado.should.be.a.Number;
				resultado.should.be.equal(4850.00);
			});

			it('Deve retornar 970.00 quando for passado o numero de 100 parcelas', function() {
				var quantidade = 100;

				var resultado = controller.utils.calculos.IX35(quantidade);

				resultado.should.be.a.Number;
				resultado.should.be.equal(970.00);
			});
		});

		describe('SantaFe()', function() {
			it('Deve retornar 1600.00 quando for passado o numero de 90 parcelas', function() {
				var quantidade = 90;

				var resultado = controller.utils.calculos.SantaFe(quantidade);

				resultado.should.be.a.Number;
				resultado.should.be.equal(1600.00);
			});

			it('Deve retornar 3600.00 quando for passado o numero de 40 parcelas', function() {
				var quantidade = 40;

				var resultado = controller.utils.calculos.SantaFe(quantidade);

				resultado.should.be.a.Number;
				resultado.should.be.equal(3600.00);
			});
		});

		describe('Azera()', function() {
			it('Deve retornar 5600.00 quando for passado o numero de 20 parcelas', function() {
				var quantidade = 20;

				var resultado = controller.utils.calculos.Azera(quantidade);

				resultado.should.be.a.Number;
				resultado.should.be.equal(5600.00);
			});

			it('Deve retornar 1120.00 quando for passado o numero de 100 parcelas', function() {
				var quantidade = 100;

				var resultado = controller.utils.calculos.Azera(quantidade);

				resultado.should.be.a.Number;
				resultado.should.be.equal(1120.00);
			});
		});

		describe('Frontier()', function() {
			it('Deve retornar 4599.50 quando for passado o numero de 20 parcelas', function() {
				var quantidade = 20;

				var resultado = controller.utils.calculos.Frontier(quantidade);

				resultado.should.be.a.Number;
				resultado.should.be.equal(4599.50);
			});

			it('Deve retornar 1839.80 quando for passado o numero de 50 parcelas', function() {
				var quantidade = 50;

				var resultado = controller.utils.calculos.Frontier(quantidade);

				resultado.should.be.a.Number;
				resultado.should.be.equal(1839.80);
			});
		});

		describe('Sentra()', function() {
			it('Deve retornar 1273.80 quando for passado o numero de 50 parcelas', function() {
				var quantidade = 50;

				var resultado = controller.utils.calculos.Sentra(quantidade);

				resultado.should.be.a.Number;
				resultado.should.be.equal(1273.80);
			});

			it('Deve retornar 2547.60 quando for passado o numero de 25 parcelas', function() {
				var quantidade = 25;

				var resultado = controller.utils.calculos.Sentra(quantidade);

				resultado.should.be.a.Number;
				resultado.should.be.equal(2547.60);
			});
		});

		describe('Versa()', function() {
			it('Deve retornar 419.90 quando for passado o numero de 100 parcelas', function() {
				var quantidade = 100;

				var resultado = controller.utils.calculos.Versa(quantidade);

				resultado.should.be.a.Number;
				resultado.should.be.equal(419.90);
			});

			it('Deve retornar 839.80 quando for passado o numero de 50 parcelas', function() {
				var quantidade = 50;

				var resultado = controller.utils.calculos.Versa(quantidade);

				resultado.should.be.a.Number;
				resultado.should.be.equal(839.80);
			});
		});

		describe('Ferrari()', function() {
			it('Deve retornar 16500.00 quando for passado o numero de 100 parcelas', function() {
				var quantidade = 100;

				var resultado = controller.utils.calculos.Ferrari(quantidade);

				resultado.should.be.a.Number;
				resultado.should.be.equal(16500.00);
			});

			it('Deve retornar 41250.00 quando for passado o numero de 40 parcelas', function() {
				var quantidade = 40;

				var resultado = controller.utils.calculos.Ferrari(quantidade);

				resultado.should.be.a.Number;
				resultado.should.be.equal(41250.00);
			});
		});

		describe('Lamborghini()', function() {
			it('Deve retornar 37375.00 quando for passado o numero de 80 parcelas', function() {
				var quantidade = 80;

				var resultado = controller.utils.calculos.Lamborghini(quantidade);

				resultado.should.be.a.Number;
				resultado.should.be.equal(37375.00);
			});

			it('Deve retornar 4600.00 quando for passado o numero de 650 parcelas', function() {
				var quantidade = 650;

				var resultado = controller.utils.calculos.Lamborghini(quantidade);

				resultado.should.be.a.Number;
				resultado.should.be.equal(4600.00);
			});
		});
	});

	describe('\nTesta métodos restantes', function() {
		it('Deve retornar 10 quando for passado o numero 1', function() {
			var numero = 1;

			var resultado = controller.utils.calculos.somar10(numero);

			resultado.should.be.a.Number;
			resultado.should.be.equal(10);
		});

		it('Deve retornar 1 quando for passado o numero 10', function() {
			var numero = 10;

			var resultado = controller.utils.calculos.diminuir10(numero);

			resultado.should.be.a.Number;
			resultado.should.be.equal(1);
		});

		it('Deve retornar 15 quando for passado o numero 1', function() {
			var numero = 1;

			var resultado = controller.utils.calculos.somar15(numero);

			resultado.should.be.a.Number;
			resultado.should.be.equal(15);
		});

		it('Deve retornar 1 quando for passado o numero 15', function() {
			var numero = 15;

			var resultado = controller.utils.calculos.diminuir15(numero);

			resultado.should.be.a.Number;
			resultado.should.be.equal(1);
		});

		it('Deve retornar 20 quando for passado o numero 1', function() {
			var numero = 1;

			var resultado = controller.utils.calculos.somar20(numero);

			resultado.should.be.a.Number;
			resultado.should.be.equal(20);
		});

		it('Deve retornar 1 quando for passado o numero 20', function() {
			var numero = 20;

			var resultado = controller.utils.calculos.diminuir20(numero);

			resultado.should.be.a.Number;
			resultado.should.be.equal(1);
		});

		it('Deve retornar 25 quando for passado o numero 1', function() {
			var numero = 1;

			var resultado = controller.utils.calculos.somar25(numero);

			resultado.should.be.a.Number;
			resultado.should.be.equal(25);
		});

		it('Deve retornar 1 quando for passado o numero 25', function() {
			var numero = 25;

			var resultado = controller.utils.calculos.diminuir25(numero);

			resultado.should.be.a.Number;
			resultado.should.be.equal(1);
		});

	});

	describe('\nTesta se a função calcular() funciona', function() {
		describe('Fox()', function() {
			it('Deveria retornar o valor de 2509.50 quando passar 20 parcelas', function() {
				var parametros = {
					quantidade: 20,
					operacao: 'Fox'
				};
				
				var resultado = controller.utils.calculos.calcular(parametros);
				
				resultado.should.be.a.Number;
				resultado.should.be.equal(2509.50);
			});
		});

		describe('Golf()', function() {
			it('Deveria retornar o valor de 1420.00 quando passar 50 parcelas', function() {
				var parametros = {
					quantidade: 50,
					operacao: 'Golf'
				};

				var resultado = controller.utils.calculos.calcular(parametros);

				resultado.should.be.a.Number;
				resultado.should.be.equal(1420.00);
			});
		});

		describe('Gol()', function() {
			it('Deveria retornar o valor de 3099.00 quando passar 10 parcelas', function() {
				var parametros = {
					quantidade: 10,
					operacao: 'Gol'
				};

				var resultado = controller.utils.calculos.calcular(parametros);

				resultado.should.be.a.Number;
				resultado.should.be.equal(3099.00);
			});
		});

		describe('Voyage()', function() {
			it('Deveria retornar o valor de 2006.00 quando passar 20 parcelas', function() {
				var parametros = {
					quantidade: 20,
					operacao: 'Voyage'
				};

				var resultado = controller.utils.calculos.calcular(parametros);

				resultado.should.be.a.Number;
				resultado.should.be.equal(2006.00);
			});
		});

		describe('Saveiro()', function() {
			it('Deveria retornar o valor de 952.60 quando passar 50 parcelas', function() {
				var parametros = {
					quantidade: 50,
					operacao: 'Saveiro'
				};

				var resultado = controller.utils.calculos.calcular(parametros);

				resultado.should.be.a.Number;
				resultado.should.be.equal(952.60);
			});
		});

		describe('C3()', function() {
			it('Deveria retornar o valor de 741.50 quando passar 60 parcelas', function() {
				var parametros = {
					quantidade: 60,
					operacao: 'C3'
				};

				var resultado = controller.utils.calculos.calcular(parametros);

				resultado.should.be.a.Number;
				resultado.should.be.equal(741.50);
			});
		});

		describe('C4()', function() {
			it('Deveria retornar o valor de 1025.80 quando passar 50 parcelas', function() {
				var parametros = {
					quantidade: 50,
					operacao: 'C4'
				};

				var resultado = controller.utils.calculos.calcular(parametros);

				resultado.should.be.a.Number;
				resultado.should.be.equal(1025.80);
			});
		});

		describe('AirCross()', function() {
			it('Deveria retornar o valor de 589.90 quando passar 100 parcelas', function() {
				var parametros = {
					quantidade: 100,
					operacao: 'AirCross'
				};

				var resultado = controller.utils.calculos.calcular(parametros);

				resultado.should.be.a.Number;
				resultado.should.be.equal(589.90);
			});
		});

		describe('DS5()', function() {
			it('Deveria retornar o valor de 13999.00 quando passar 10 parcelas', function() {
				var parametros = {
					quantidade: 10,
					operacao: 'DS5'
				};

				var resultado = controller.utils.calculos.calcular(parametros);

				resultado.should.be.a.Number;
				resultado.should.be.equal(13999.00);
			});
		});

		describe('DS3()', function() {
			it('Deveria retornar o valor de 1739.80 quando passar 50 parcelas', function() {
				var parametros = {
					quantidade: 50,
					operacao: 'DS3'
				};

				var resultado = controller.utils.calculos.calcular(parametros);

				resultado.should.be.a.Number;
				resultado.should.be.equal(1739.80);
			});
		});

		describe('HB20()', function() {
			it('Deveria retornar o valor de 1399.60 quando passar 25 parcelas', function() {
				var parametros = {
					quantidade: 25,
					operacao: 'HB20'
				};

				var resultado = controller.utils.calculos.calcular(parametros);

				resultado.should.be.a.Number;
				resultado.should.be.equal(1399.60);
			});
		});

		describe('Tucson()', function() {
			it('Deveria retornar o valor de 812.50 quando passar 80 parcelas', function() {
				var parametros = {
					quantidade: 80,
					operacao: 'Tucson'
				};

				var resultado = controller.utils.calculos.calcular(parametros);

				resultado.should.be.a.Number;
				resultado.should.be.equal(812.50);
			});
		});

		describe('IX35()', function() {
			it('Deveria retornar o valor de 1212.50 quando passar 80 parcelas', function() {
				var parametros = {
					quantidade: 80,
					operacao: 'IX35'
				};

				var resultado = controller.utils.calculos.calcular(parametros);

				resultado.should.be.a.Number;
				resultado.should.be.equal(1212.50);
			});
		});

		describe('SantaFe()', function() {
			it('Deveria retornar o valor de 1800.00 quando passar 80 parcelas', function() {
				var parametros = {
					quantidade: 80,
					operacao: 'SantaFe'
				};

				var resultado = controller.utils.calculos.calcular(parametros);

				resultado.should.be.a.Number;
				resultado.should.be.equal(1800.00);
			});
		});

		describe('Azera()', function() {
			it('Deveria retornar o valor de 1600.00 quando passar 70 parcelas', function() {
				var parametros = {
					quantidade: 70,
					operacao: 'Azera'
				};

				var resultado = controller.utils.calculos.calcular(parametros);

				resultado.should.be.a.Number;
				resultado.should.be.equal(1600.00);
			});
		});

		describe('Frontier()', function() {
			it('Deveria retornar o valor de 919.90 quando passar 100 parcelas', function() {
				var parametros = {
					quantidade: 100,
					operacao: 'Frontier'
				};

				var resultado = controller.utils.calculos.calcular(parametros);

				resultado.should.be.a.Number;
				resultado.should.be.equal(919.90);
			});
		});

		describe('Sentra()', function() {
			it('Deveria retornar o valor de 849.20 quando passar 75 parcelas', function() {
				var parametros = {
					quantidade: 75,
					operacao: 'Sentra'
				};

				var resultado = controller.utils.calculos.calcular(parametros);

				resultado.should.be.a.Number;
				resultado.should.be.equal(849.20);
			});
		});

		describe('Versa()', function() {
			it('Deveria retornar o valor de 4199.00 quando passar 10 parcelas', function() {
				var parametros = {
					quantidade: 10,
					operacao: 'Versa'
				};

				var resultado = controller.utils.calculos.calcular(parametros);

				resultado.should.be.a.Number;
				resultado.should.be.equal(4199.00);
			});
		});

		describe('Ferrari()', function() {
			it('Deveria retornar o valor de 6600.00 quando passar 250 parcelas', function() {
				var parametros = {
					quantidade: 250,
					operacao: 'Ferrari'
				};

				var resultado = controller.utils.calculos.calcular(parametros);

				resultado.should.be.a.Number;
				resultado.should.be.equal(6600.00);
			});
		});

		describe('Lamborghini()', function() {
			it('Deveria retornar o valor de 7475.00 quando passar 400 parcelas', function() {
				var parametros = {
					quantidade: 400,
					operacao: 'Lamborghini'
				};

				var resultado = controller.utils.calculos.calcular(parametros);

				resultado.should.be.a.Number;
				resultado.should.be.equal(7475.00);
			});
		});
	});
	
	describe('\nTesta se as funções utilitárias funcionam', function() {
		describe('Controller.utils.formatarResposta()', function() {
			it('Deve retornar 708,56 quando passado 1708.55555558', function() {
				var resultado = 708.55555558;
				var formatado = controller.utils.formatarResposta(resultado);
				
				formatado.should.be.an.Object;
				formatado.should.have.property('resultado');
				formatado.resultado.should.be.equal('708,56');
			});
			
			it('Deve retornar 0.00 quando passado undefined', function() {
				var resultado = undefined;
				var formatado = controller.utils.formatarResposta(resultado);
				
				formatado.should.be.an.Object;
				formatado.should.have.property('resultado');
				formatado.resultado.should.be.equal('0,00');
			});
		});
	});