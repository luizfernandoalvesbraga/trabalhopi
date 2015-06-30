module.exports = function() {
	var Controller = {
		utils: {
			formatarResposta: function(resultado) {
				var accounting = require('accounting');
				var resposta   = {
					resultado: 0.0
				};

				resultado = accounting.formatNumber(resultado, 2, ".", ",");
				resposta.resultado = resultado;

				return resposta;
			},

			calculos: {
				calcular: function(parametro) {
					var quantidade = parseFloat(parametro.quantidade);

					var resultado = Controller.utils.calculos[parametro.operacao](quantidade);

					return resultado;
				},

                Fox: function(quantidade) {
                    return 50190.00 / quantidade;
                },

                Golf: function(quantidade) {
                    return 71000.00 / quantidade;
                },

                Gol: function(quantidade) {
                    return 30990.00 / quantidade;
                },

                Voyage: function(quantidade) {
                    return 40120.00 / quantidade;
                },

                Saveiro: function(quantidade) {
                    return 47630.00 / quantidade;
                },

                C3: function(quantidade) {
                    return 44490.00 / quantidade;
                },

                C4: function(quantidade) {
                    return 51290.00 / quantidade;
                },

                AirCross: function(quantidade) {
                    return 58990.00 / quantidade;
                },

                DS5: function(quantidade) {
                    return 139990.00 / quantidade;
                },

                DS3: function(quantidade) {
                    return 86990.00 / quantidade;
                },

                HB20: function(quantidade) {
                    return 34990.00 / quantidade;
                },

                Tucson: function(quantidade) {
                    return 65000.00 / quantidade;
                },

                IX35: function(quantidade) {
                    return 97000.00 / quantidade;
                },

                SantaFe: function(quantidade) {
                    return 144000.00 / quantidade;
                },

                Azera: function(quantidade) {
                    return 112000.00 / quantidade;
                },

                Frontier: function(quantidade) {
                    return 91990.00 / quantidade;
                },

                Sentra: function(quantidade) {
                    return 63690.00 / quantidade;
                },

                Versa: function(quantidade) {
                    return 41990.00 / quantidade;
                },

                Ferrari: function(quantidade) {
                    return 1650000.00 / quantidade;
                },

                Lamborghini: function(quantidade) {
                    return 2990000.00 / quantidade;
                },

                somar10: function(numero) {
                    var valor = Number(numero);
                    valor += 1;
                    valor += 1;
                    valor += 1;
                    valor += 1;
                    valor += 1;
                    valor += 1;
                    valor += 1;
                    valor += 1;
                    valor += 1;

                    return valor;
                },

                diminuir10: function(numero) {
                    var valor = Number(numero);
                    valor -= 1;
                    valor -= 1;
                    valor -= 1;
                    valor -= 1;
                    valor -= 1;
                    valor -= 1;
                    valor -= 1;
                    valor -= 1;
                    valor -= 1;

                    return valor;
                },

                somar15: function(numero) {
                    var valor = Number(numero);
                    valor += 1;
                    valor += 1;
                    valor += 1;
                    valor += 1;
                    valor += 1;
                    valor += 1;
                    valor += 1;
                    valor += 1;
                    valor += 1;
                    valor += 1;
                    valor += 1;
                    valor += 1;
                    valor += 1;
                    valor += 1;

                    return valor;
                },

                diminuir15: function(numero) {
                    var valor = Number(numero);
                    valor -= 1;
                    valor -= 1;
                    valor -= 1;
                    valor -= 1;
                    valor -= 1;
                    valor -= 1;
                    valor -= 1;
                    valor -= 1;
                    valor -= 1;
                    valor -= 1;
                    valor -= 1;
                    valor -= 1;
                    valor -= 1;
                    valor -= 1;

                    return valor;
                },

                somar20: function(numero) {
                    var valor = Number(numero);
                    valor += 1;
                    valor += 1;
                    valor += 1;
                    valor += 1;
                    valor += 1;
                    valor += 1;
                    valor += 1;
                    valor += 1;
                    valor += 1;
                    valor += 1;
                    valor += 1;
                    valor += 1;
                    valor += 1;
                    valor += 1;
                    valor += 1;
                    valor += 1;
                    valor += 1;
                    valor += 1;
                    valor += 1;

                    return valor;
                },

                diminuir20: function(numero) {
                    var valor = Number(numero);
                    valor -= 1;
                    valor -= 1;
                    valor -= 1;
                    valor -= 1;
                    valor -= 1;
                    valor -= 1;
                    valor -= 1;
                    valor -= 1;
                    valor -= 1;
                    valor -= 1;
                    valor -= 1;
                    valor -= 1;
                    valor -= 1;
                    valor -= 1;
                    valor -= 1;
                    valor -= 1;
                    valor -= 1;
                    valor -= 1;
                    valor -= 1;

                    return valor;
                },

                somar25: function(numero) {
                    var valor = Number(numero);
                    valor += 1;
                    valor += 1;
                    valor += 1;
                    valor += 1;
                    valor += 1;
                    valor += 1;
                    valor += 1;
                    valor += 1;
                    valor += 1;
                    valor += 1;
                    valor += 1;
                    valor += 1;
                    valor += 1;
                    valor += 1;
                    valor += 1;
                    valor += 1;
                    valor += 1;
                    valor += 1;
                    valor += 1;
                    valor += 1;
                    valor += 1;
                    valor += 1;
                    valor += 1;
                    valor += 1;

                    return valor;
                },

                diminuir25: function(numero) {
                    var valor = Number(numero);
                    valor -= 1;
                    valor -= 1;
                    valor -= 1;
                    valor -= 1;
                    valor -= 1;
                    valor -= 1;
                    valor -= 1;
                    valor -= 1;
                    valor -= 1;
                    valor -= 1;
                    valor -= 1;
                    valor -= 1;
                    valor -= 1;
                    valor -= 1;
                    valor -= 1;
                    valor -= 1;
                    valor -= 1;
                    valor -= 1;
                    valor -= 1;
                    valor -= 1;
                    valor -= 1;
                    valor -= 1;
                    valor -= 1;
                    valor -= 1;

                    return valor;
                }
			},

			validaParametro: function(parametro) {
				if(parametro && parametro !== '') {
					return parseFloat(parametro);
				}

				return 0.0;
			},

			extrairParametro: function(body) {
				var parametro = {
                    quantidade: 0.0,
					operacao: body.operacao
				};

				parametro.quantidade = Controller.utils.validaParametro(body.quantidade);

				return parametro;
			}
		},

		get: {
			index: function(request, response) {
				response.render('index');
			},

            Fox: function(request, response) {
				response.render('Fox');
			},

            Golf: function(request, response) {
                response.render('Golf');
            },

            Gol: function(request, response) {
                response.render('Gol');
            },

            Voyage: function(request, response) {
                response.render('Voyage');
            },

            Saveiro: function(request, response) {
                response.render('Saveiro');
            },

            C3: function(request, response) {
                response.render('C3');
            },

            C4: function(request, response) {
                response.render('C4');
            },

            AirCross: function(request, response) {
                response.render('Aircross');
            },

            DS5: function(request, response) {
                response.render('DS5');
            },

            DS3: function(request, response) {
                response.render('DS3');
            },

            HB20: function(request, response) {
                response.render('HB20');
            },

            Tucson: function(request, response) {
                response.render('Tucson');
            },

            IX35: function(request, response) {
                response.render('IX35');
            },

            SantaFe: function(request, response) {
                response.render('SantaFe');
            },

            Azera: function(request, response) {
                response.render('Azera');
            },

            Frontier: function(request, response) {
                response.render('Frontier');
            },

            Sentra: function(request, response) {
                response.render('Sentra');
            },

            Versa: function(request, response) {
                response.render('Versa');
            },

            Ferrari: function(request, response) {
                response.render('Ferrari');
            },

            Lamborghini: function(request, response) {
                response.render('Lamborghini');
            }
		},

		post: {
			calcular: function(request, response) {
                var parametro = Controller.utils.extrairParametro(request.body);
				var resultado  = Controller.utils.calculos.calcular(parametro);
                var resposta   = Controller.utils.formatarResposta(resultado);

				response.render(parametro.operacao, resposta);
			}
		}
	};
	
	return Controller;
};