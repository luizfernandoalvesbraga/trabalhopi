describe('Protractor', function() {

    it('Deve retornar 59800.00 quando se passar o valor de 50 parcelas', function() {
        browser.driver.get('http://localhost:3000/Lamborghini');
        browser.driver.findElement(by.id('quantidade')).sendKeys(50);

        browser.driver.findElement(by.id('botao')).click();

        expect(browser.driver.findElement(by.id('result')).getText()).toEqual('Valor de cada parcela: R$ 59.800,00.');
    });

    it('Deve retornar 55000.00 quando se passar o valor de 30 parcelas', function() {
        browser.driver.get('http://localhost:3000/Ferrari');
        browser.driver.findElement(by.id('quantidade')).sendKeys(30);

        browser.driver.findElement(by.id('botao')).click();

        expect(browser.driver.findElement(by.id('result')).getText()).toEqual('Valor de cada parcela: R$ 55.000,00.');
    });

    it('Deve retornar 627.375 quando se passar o valor de 80 parcelas', function() {
        browser.driver.get('http://localhost:3000/Fox');
        browser.driver.findElement(by.id('quantidade')).sendKeys(80);

        browser.driver.findElement(by.id('botao')).click();

        expect(browser.driver.findElement(by.id('result')).getText()).toEqual('Valor de cada parcela: R$ 627,375.');
    });

    it('Deve retornar 3499.00 quando se passar o valor de 10 parcelas', function() {
        browser.driver.get('http://localhost:3000/HB20');
        browser.driver.findElement(by.id('quantidade')).sendKeys(10);

        browser.driver.findElement(by.id('botao')).click();

        expect(browser.driver.findElement(by.id('result')).getText()).toEqual('Valor de cada parcela: R$ 3.499,00.');
    });

    it('Deve retornar 1273.80 quando se passar o valor de 50 parcelas', function() {
        browser.driver.get('http://localhost:3000/Sentra');
        browser.driver.findElement(by.id('quantidade')).sendKeys(50);

        browser.driver.findElement(by.id('botao')).click();

        expect(browser.driver.findElement(by.id('result')).getText()).toEqual('Valor de cada parcela: R$ 1273,80.');
    });
});