app.controller('MainController', ['$scope', function($scope) {
    $scope.title = "Top Sellers in Books",
        $scope.promo = "Milan's Collection",
        $scope.products = [


            {
                name: "The Book of Trees",
                price: 19,
                pubdate: new Date('2014', '03', '08')
            },

            {
                name: "Program or be Programmed",
                price: 8,
                pubdate: new Date('2013', '08', '01')
            }

        ]
}]);