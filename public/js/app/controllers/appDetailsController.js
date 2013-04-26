'use strict';

angular.module('appEpiManager').
  controller('appDetailsController', [
    '$scope',
    function($scope) {
      $scope.title = "EpiManager";
      // $scope.showSegments = ["Introduction", "ShortStory", "News", "Special Guest"];
    }
  ])

// angular.bootstrap(document, ['appEpiManager']);

      /*$scope.currentProject = [
      {
        "title": "Intorduction",
        "cast" : [{"fistName": "Augie", "lastName":"Lopez"},
                  {"firstName":"Isaiah", "lastName": "Pacheco"},
                  {"firstName":"Patrick", "lastName": "McLenithan"}
                  ],
        "notes": "If you stay Ready you ain't gotta get ready!"
      },
      {
        "title": "ShortStory",
        "story": "Well, here's a little story i got to tell about three bad brothers you know so well. It started way back in history with Ad-Rock, MCA and me, Mike-D!"
        "notes": "I did it like this. I did it like that. I did it with a wiffle ball bat."
      },
      {
        "title": "News",
        "newsArticle": [{"title": "Isaiah Loses it", "url": "#", "postedBy": "Isaiah Pacheco", "priority": "2"}
                        {"title": "Augie Discovers his Sexuality", "url": "#", "postedBy": "Isaiah Pacheco", "priority": "3"}
                        {"title": "Patrick tripped on a rock", "url": "#", "postedBy": "Isaiah Pacheco", "priority": "1"}
                        {"title": "Rico gets liked by a dog in no-no's", "url": "#", "postedBy": "Isaiah Pacheco", "priority": "3"}
        ]
      },
      {
        "title": "Special Guest",
        "guests": [{"Angelina Jolie"}, {"Penolpe Cruz"}]
        "notes": "New Movie out should be amazing."
        "questions": [{"How do you do that with that?"},
        {"why would you do this that way?"}]
      }];*/