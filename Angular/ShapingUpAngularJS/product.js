(function () {
    var app = angular.module('store-products', []);

    app.directive('productTitle', function () {
        return {
            restrict: 'E',
            templateUrl: 'productTitle.html'
        };
    });

    app.directive('productTabs', function () {
        return {
            restrict: 'E',
            templateUrl: 'productTabs.html',
            controller: function () {
                this.tab = 1;

                this.setTab = function (number) {
                    this.tab = number;
                };
                this.isSet = function (number) {
                    return this.tab === number;
                };
            },
            controllerAs: "tab"
        };
    });

    app.directive('productGallery', function () {
        return {
            restrict: 'E',
            templateUrl: 'productGallery.html',
            controller: function () {
                this.current = 0;

                this.setCurrent = function (newGallery) {
                    this.current = newGallery || 0;
                };
            },
            controllerAs: "gallery"
        };
    });

})();