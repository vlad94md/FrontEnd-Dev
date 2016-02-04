describe("pow", function () {

    describe("возводит x в степень n", function() {            
             
        it("возводит в n-ю степень", function () {
            assert.equal(pow(2, 3), 8);
        });

        it("при возведении 3 в 4ю степень равен 81", function () {
            assert.equal(pow(3, 4), 81);
        });

        it("при возведении 1 в сотой степень равен 1", function () {
            assert.equal(pow(1, 100), 1);
        });

        it("при возведении 2 в 3 степень не равен 9", function () {
            assert.notEqual(pow(2, 3), 9);
        });

    });
    
    describe("тест", function () {
        before(function () {
            alert("Начало тестов");
        });
        after(function () {
            alert("Конец тестов");
        });
    });

});