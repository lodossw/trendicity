'use strict';
angular.module('Trendicity')

.service('FavoritesService', function(localStorageService) {

    var that = this;

    this.add = function (location) {
        var currentFavorites = this.getFavorites();

        currentFavorites.push(location);
        localStorageService.set('Favorites', currentFavorites);

        return this.getFavorites();
    };

    this.delete = function (favorite) {
        var currentFavorites = this.getFavorites();

        angular.forEach(currentFavorites, function(i){
            if(i.id === favorite.id) {
                currentFavorites.splice(currentFavorites.indexOf(i), 1 );
                return false;
            }
        });

        localStorageService.set('Favorites', currentFavorites);

        return this.getFavorites();
    };

    this.getFavorites = function () {
        return localStorageService.get('Favorites');
    };

    this.getFavorite = function (id) {
        var currentFavorites = this.getFavorites(),
            favorite;

        angular.forEach(currentFavorites, function(i){
            if(i.id === id) {
                favorite = i;
                return false;
            }
        });

        return favorite;
    };

    return this;
});