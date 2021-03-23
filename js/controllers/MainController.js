app.controller('MainController', ['$scope', function($scope) {
  $scope.programs = [
    {
    series: "Sherlock",
    series_img: "img/sherlock.jpg",
    genre: "Crime drama",
    season: 3,
    episode: "The Empty Hearse",
    description: "Two years after his reported Reichenbach Fall demise, Sherlock, who has been cleared of all fraud charges against him, returns with Mycroft's help to a London under threat of terrorist attack. John has moved on and has a girlfriend, Mary Morstan. Sherlock enlists Molly to assist him, but when John is kidnapped by unknown assailants and is rescued by Sherlock and Mary, John returns to help find the terrorists and an underground plot to blow up the Houses of Parliament during an all night sitting on Guy Fawkes Night.",
    datetime: new Date(2021, 11, 31, 21, 00, 00, 00)
  },
  {
  series: "Homeland",
  series_img: "img/homeland2.jpg",
  genre: "Spooks drama",
  season: 1,
  episode: "Grace",
  description: "Brody begins to exhibit signs of post-traumatic stress disorder. Carrie continues to spy on Brody and gets a new lead on Abu Nazir's activity.",
  datetime: new Date(2021, 11, 31, 21, 00, 00, 00)
}
  ]

}]);
