(function () {
    var app = angular.module('store', []);

    app.controller('StoreController', function () {
        this.products = gems;
    });

    app.controller('TabController', function () {
        this.tab = 1;
        this.setTab = function (number) {
            this.tab = number;
        };
        this.isSet = function (number) {
            return this.tab === number;
        };
    });

    app.controller('GalleryController', function () {
        this.current = 0;
        this.setCurrent = function (newGallery) {
            this.current = newGallery || 0;
        };
    });


    app.controller('ReviewController', function () {

        this.addReview = function (product) {
            this.rev.createdOn = Date.now();
            product.reviews.push(this.rev);

            this.rev = {};
        };
    });

    app.directive('productTitle', function () {
        return {
            restrict: 'E',
            templateUrl: 'productTitle.html'
        };
    });

    app.directive('productDescription', function () {
        return {
            restrict: 'E',
            templateUrl: 'productDescription.html'
        };
    });

    app.directive('productReviews', function () {
        return {
            restrict: 'E',
            templateUrl: 'productReviews.html'
        };
    });

    var gems = [
        {
            name: "Dochaherdron",
            price: 2.73,
            descr: "Beautiful gem made from a very rare ore.",
            reviews: [{
                stars: 5,
                body: "I love this gem!",
                author: "joe@example.org",
                createdOn: 1397490980837
            }, {
                stars: 1,
                body: "This gem sucks.",
                author: "tim@example.org",
                createdOn: 1397490980837
            }],
            canPurchase: false,
            soldOut: false,
            images: [
                "p1.png",
                "p2.png",
                "p3.png"
            ]
        },
        {
            name: "Pentagonal",
            price: 5.73,
            descr: "A very sharp and nice gem.",
            reviews: [{
                stars: 5,
                body: "I love this gem!",
                author: "joe@example.org",
                createdOn: 1397490980837
            }, {
                stars: 1,
                body: "This gem sucks.",
                author: "tim@example.org",
                createdOn: 1397490980837
            }],
            canPurchase: true,
            soldOut: false,
            images: [
                "p1.png",
                "p2.png",
                "p3.png"
            ]
        }
    ];


})();