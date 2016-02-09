(function () {
    var app = angular.module('store', ['store-products']);

    app.controller('StoreController', function () {
        this.products = gems;
    });


    app.controller('ReviewController', function () {

        this.addReview = function (product) {
            this.rev.createdOn = Date.now();
            product.reviews.push(this.rev);

            this.rev = {};
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
        },
                {
            name: "Octagonal",
            price: 11.0,
            descr: "This gem has 8 sides",
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