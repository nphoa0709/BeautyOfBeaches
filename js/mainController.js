var app = angular.module("myApp", ["ngRoute", "ngAnimate"]);

app.run([
  "$http",
  "$rootScope",
  function ($http, $rootScope) {
    // Get data from JSON, then put into Session Strorage [R - Read]
    $rootScope.beachesList = new Array();
    $rootScope.monthsList = new Array();
    $rootScope.regionsList = new Array();
    $rootScope.ratingsList = new Array();
    $rootScope.pricesList = new Array();
    $rootScope.reviewsList = new Array();
    $rootScope.faqsList = new Array();

    $rootScope.toJsDate = function (str) {
      if (!str) return null;
      return new Date(str);
    };
    $rootScope.onlyDigits = function (val) {
      if (!val) return null;
      return Math.floor(val);
    };

    $rootScope.myPrice = [
      { id: 1, name: "Extra Economical" },
      { id: 2, name: "Economical" },
      { id: 3, name: "Affordable" },
      { id: 4, name: "Quite Expensive" },
      { id: 5, name: "Expensive" },
    ];
    $rootScope.priceDesc = function (val) {
      for (var i = 0; i < $rootScope.myPrice.length; i++) {
        if ($rootScope.myPrice[i].id === $rootScope.onlyDigits(val)) {
          return $rootScope.myPrice[i].name;
        }
      }
    };

    $rootScope.getData = function () {
      $http.get("./json/beaches.json").then(function (res) {
        if (sessionStorage.getItem("sesBeachesData") == null) {
          sessionStorage.setItem(
            "sesBeachesData",
            JSON.stringify(res.data.beaches).replace(/\n/g, "<br>")
          );
          $rootScope.beachesList = JSON.parse(
            sessionStorage.getItem("sesBeachesData")
          );
          sessionStorage.setItem(
            "sesMonthsData",
            JSON.stringify(res.data.months)
          );
          $rootScope.monthsList = JSON.parse(
            sessionStorage.getItem("sesMonthsData")
          );
          sessionStorage.setItem(
            "sesRegionsData",
            JSON.stringify(res.data.regions)
          );
          $rootScope.regionsList = JSON.parse(
            sessionStorage.getItem("sesRegionsData")
          );
          sessionStorage.setItem(
            "sesRatingsData",
            JSON.stringify(res.data.ratings)
          );
          $rootScope.ratingsList = JSON.parse(
            sessionStorage.getItem("sesRatingsData")
          );
          sessionStorage.setItem(
            "sesPricesData",
            JSON.stringify(res.data.prices)
          );
          $rootScope.pricesList = JSON.parse(
            sessionStorage.getItem("sesPricesData")
          );
        } else {
          $rootScope.beachesList = JSON.parse(
            sessionStorage.getItem("sesBeachesData")
          );
          $rootScope.monthsList = JSON.parse(
            sessionStorage.getItem("sesMonthsData")
          );
          $rootScope.regionsList = JSON.parse(
            sessionStorage.getItem("sesRegionsData")
          );
          $rootScope.ratingsList = JSON.parse(
            sessionStorage.getItem("sesRatingsData")
          );
          $rootScope.pricesList = JSON.parse(
            sessionStorage.getItem("sesPricesData")
          );
        }
      });
    };
    $rootScope.getReviews = function () {
      $http.get("./json/reviews.json").then(function (res) {
        if (sessionStorage.getItem("sesReviewsData") == null) {
          sessionStorage.setItem(
            "sesReviewsData",
            JSON.stringify(res.data.reviews)
          );
          $rootScope.reviewsList = JSON.parse(
            sessionStorage.getItem("sesReviewsData")
          );
        } else {
          $rootScope.reviewsList = JSON.parse(
            sessionStorage.getItem("sesReviewsData")
          );
        }
      });
    };
    $rootScope.getFaqs = function () {
      $http.get("./json/faq.json").then(function (res) {
        if (sessionStorage.getItem("sesFaqsData") == null) {
          sessionStorage.setItem("sesFaqsData", JSON.stringify(res.data.faq));
          $rootScope.faqsList = JSON.parse(
            sessionStorage.getItem("sesFaqsData")
          );
        } else {
          $rootScope.faqsList = JSON.parse(
            sessionStorage.getItem("sesFaqsData")
          );
        }
      });
    };
    $rootScope.setStorage = function () {
      sessionStorage.setItem(
        "sesBeachesData",
        JSON.stringify($rootScope.beachesList).replace(/\r/g, "<br />")
      );
      sessionStorage.setItem(
        "sesMonthsData",
        JSON.stringify($rootScope.monthsList)
      );
      sessionStorage.setItem(
        "sesRegionsData",
        JSON.stringify($rootScope.regionsList)
      );
      sessionStorage.setItem(
        "sesRatingsData",
        JSON.stringify($rootScope.ratingsList)
      );
      sessionStorage.setItem(
        "sesPricesData",
        JSON.stringify($rootScope.pricesList)
      );
      sessionStorage.setItem(
        "sesReviewsData",
        JSON.stringify($rootScope.reviewsList)
      );
      sessionStorage.setItem(
        "sesFaqsData",
        JSON.stringify($rootScope.faqsList)
      );
    };
    $rootScope.doTimeout = function (t) {
      setTimeout(function () {
        document.activeElement.blur();
      }, t);
    };
  },
]);

app.config(function ($routeProvider) {
  $routeProvider
    .when("/index", {
      templateUrl: "index.html",
      controller: "myCtrl",
    })
    .when("/whenToGo", {
      templateUrl: "whenToGo.html",
      controller: "myCtrl",
    })
    .when("/whereToGo", {
      templateUrl: "whereToGo.html",
      controller: "myCtrl",
    })
    .when("/01-KohKradan", {
      templateUrl: "./html/01-KohKradan.html",
      controller: "myCtrl",
    })
    .when("/02-Whitehaven", {
      templateUrl: "./html/02-Whitehaven.html",
      controller: "myCtrl",
    })
    .when("/03-Anakena", {
      templateUrl: "./html/03-Anakena.html",
      controller: "myCtrl",
    })
    .when("/04-CampsBay", {
      templateUrl: "./html/04-CampsBay.html",
      controller: "myCtrl",
    })
    .when("/05-CalaGoloritze", {
      templateUrl: "./html/05-CalaGoloritze.html",
      controller: "myCtrl",
    })
    .when("/06-MiamiSouth", {
      templateUrl: "./html/06-MiamiSouth.html",
      controller: "myCtrl",
    })
    .when("/07-Gjipe", {
      templateUrl: "./html/07-Gjipe.html",
      controller: "myCtrl",
    })
    .when("/08-SanJosefBay", {
      templateUrl: "./html/08-SanJosefBay.html",
      controller: "myCtrl",
    })
    .when("/09-WhiteBeach", {
      templateUrl: "./html/09-WhiteBeach.html",
      controller: "myCtrl",
    })
    .when("/10-Copacabana", {
      templateUrl: "./html/10-Copacabana.html",
      controller: "myCtrl",
    })
    .when("/11-Waikiki", {
      templateUrl: "./html/11-Waikiki.html",
      controller: "myCtrl",
    })
    .when("/12-BelleMareBeach", {
      templateUrl: "./html/12-BelleMareBeach.html",
      controller: "myCtrl",
    })
    .when("/13-OludenizBeach", {
      templateUrl: "./html/13-OludenizBeach.html",
      controller: "myCtrl",
    })
    .when("/14-SurfersParadiseBeach", {
      templateUrl: "./html/14-SurfersParadiseBeach.html",
      controller: "myCtrl",
    })
    .when("/15-NhaTrangBeach", {
      templateUrl: "./html/15-NhaTrangBeach.html",
      controller: "myCtrl",
    })
    .when("/16-PinkBeach", {
      templateUrl: "./html/16-PinkBeach.html",
      controller: "myCtrl",
    })
    .when("/17-NavagioBeach", {
      templateUrl: "./html/17-NavagioBeach.html",
      controller: "myCtrl",
    })
    .when("/18-IpanemaBeach", {
      templateUrl: "./html/18-IpanemaBeach.html",
      controller: "myCtrl",
    })
    .when("/19-BottomBay", {
      templateUrl: "./html/19-BottomBay.html",
      controller: "myCtrl",
    })
    .when("/20-HyamsBeach", {
      templateUrl: "./html/20-HyamsBeach.html",
      controller: "myCtrl",
    })
    .when("/21-GraceBayBeach", {
      templateUrl: "./html/21-GraceBayBeach.html",
      controller: "myCtrl",
    })
    .when("/22-NihiwatuBeach", {
      templateUrl: "./html/22-NihiwatuBeach.html",
      controller: "myCtrl",
    })
    .when("/23-AnseSoleil", {
      templateUrl: "./html/23-AnseSoleil.html",
      controller: "myCtrl",
    })
    .when("/24-DianiBeach", {
      templateUrl: "./html/24-DianiBeach.html",
      controller: "myCtrl",
    })
    .when("/contactUs", {
      templateUrl: "contactUs.html",
      controller: "myCtrl",
    })
    .when("/about", {
      templateUrl: "about.html",
      controller: "myCtrl",
    })
    .when("/siteMap", {
      templateUrl: "siteMap.html",
      controller: "myCtrl",
    })
    .otherwise({
      templateUrl: "home.html",
      controller: "myCtrl",
    });
});

app.controller("myCtrl", function ($scope, $rootScope, $window, $timeout) {
  // setDefault();
  $window.scrollTo(0, 0);
  $rootScope.scrollToTop = function () {
    $window.scrollTo(0, 0);
  };
  $rootScope.scrollToBottom = function () {
    $window.scrollTo(
      0,
      document.body.scrollHeight || document.documentElement.scrollHeight
    );
  };
  $rootScope.getData();
  $scope.btnShowAll = "Show All";
  $scope.filters = {
    region: "",
    rating: "",
    price: "",
  };
  $scope.selected = "";
  $scope.toggleSearch = function () {
    $scope.selected = "";
    console.log($scope.selected);
  }
  
  $scope.rateFilter = function (itm) {
    if ($scope.filters.rating == "") {
      return itm.beachRating;
    } else {
      return Math.floor(itm.beachRating) == parseInt($scope.filters.rating);
    }
  };
  $scope.priceFilter = function (itm) {
    if ($scope.filters.price == "") {
      return itm.beachPrice;
    } else {
      return Math.floor(itm.beachPrice) == parseInt($scope.filters.price);
    }
  };

  $scope.beachVisible = function (month) {
    month.visible = month.visible ? false : true;
  };
  $scope.beachVisibleAll = function () {
    for (var i = 0; i < $rootScope.monthsList.length; i++) {
      $scope.isAllChecked = true;
      if (!$rootScope.monthsList[i].visible) {
        $scope.isAllChecked = false;
        break;
      }
    }
    for (var i = 0; i < $rootScope.monthsList.length; i++) {
      $rootScope.monthsList[i].visible = !$scope.isAllChecked;
    }
    $scope.btnShowAll = $scope.isAllChecked ? "Show All" : "Collapse All";
    $rootScope.doTimeout(300);
  };

  // angular.element($window).bind("mousewheel", function () {
  //   $('#navbarToggler').fadeOut();
  // });
});

app.controller("detailCtrl", function ($scope, $rootScope, $window, $timeout) {
  // setDefault();
  $window.scrollTo(0, 0);
  $rootScope.getReviews();
  $rootScope.getFaqs();
  $scope.btnOrderBy = "Ascending";
  $scope.userRv = {
    FullName: "",
    Email: "",
    When: "",
    Who: "",
    Cost: null,
    Other: "",
    Long: null,
    Climate: null,
    Food: null,
    Facility: null,
  };
  $scope.review = {
    search: "",
    order: "",
    mention: "",
    orderBy: true,
  };
  $scope.toggleOrderBy = function () {
    $scope.btnOrderBy = $scope.review.orderBy ? "Ascending" : "Descending";
    $scope.review.orderBy = !$scope.review.orderBy;
    $rootScope.doTimeout(300);
  };
  $scope.userReviewState = false;
  $scope.detailBeach = "";
  $scope.detailPath = $window.location.href.split("!/").pop();
  angular.forEach($rootScope.beachesList, function (itm) {
    if (itm.beachCodeName === $scope.detailPath) {
      $scope.detailBeach = itm;
    }
  });
  $scope.userReviewState = false;
  $scope.toggleUserReview = function () {
    $scope.userReviewState = !$scope.userReviewState;
  };
  $scope.toggleMention = function (word) {
    $scope.review.mention = word;
  };
  $scope.userRatings = {
    current: 3,
    max: 5,
  };
  $rootScope.usersWho = ["Alone", "Couples", "Family", "Friends", "Business"];
  $rootScope.usersLong = [
    { id: 0, value: "<= 1 day" },
    { id: 1, value: "2 to 3 days" },
    { id: 2, value: "<= 1 week" },
    { id: 3, value: "> 1 week" },
  ];
  $rootScope.usersClimate = [
    { id: 2, value: "Comfortable" },
    { id: 1, value: "A little bit Cold" },
    { id: 0, value: "Too Cold" },
    { id: 3, value: "A little bit Warm" },
    { id: 4, value: "Too Warm" },
  ];
  $rootScope.usersFood = [
    { id: 0, value: "Terrible" },
    { id: 1, value: "Poor" },
    { id: 2, value: "Average" },
    { id: 3, value: "Very good" },
    { id: 4, value: "Excellent" },
  ];
  $rootScope.usersFacility = [
    { id: 0, value: "Terrible" },
    { id: 1, value: "Poor" },
    { id: 2, value: "Average" },
    { id: 3, value: "Very good" },
    { id: 4, value: "Excellent" },
  ];

  // toastr settings
  toastr.options = {
    closeButton: true,
    debug: false,
    newestOnTop: false,
    progressBar: true,
    positionClass: "toast-bottom-center",
    preventDuplicates: false,
    onclick: null,
    showDuration: "300",
    hideDuration: "1000",
    timeOut: "5000",
    extendedTimeOut: "1000",
    showEasing: "swing",
    hideEasing: "linear",
    showMethod: "fadeIn",
    hideMethod: "fadeOut",
  };

  // Gallery
  // initial image index
  $scope._Index = 0;
  // if a current image is the same as requested image
  $scope.isActive = function (index) {
    return $scope._Index === index;
  };
  // show prev image
  $scope.showPrev = function () {
    $scope._Index =
      $scope._Index > 0
        ? --$scope._Index
        : $scope.detailBeach.beachImgFull.length - 1;
  };
  // show next image
  $scope.showNext = function () {
    $scope._Index =
      $scope._Index < $scope.detailBeach.beachImgFull.length - 1
        ? ++$scope._Index
        : 0;
  };
  // show a certain image
  $scope.showPhoto = function (index) {
    $scope._Index = index;
  };

  // Add User Review
  $scope.doAddReview = function (form) {
    var rvItm = {
      rvFullName: $scope.userRv.FullName,
      rvTime: new Date(),
      rvEmail: $scope.userRv.Email,
      rvBeachId: $scope.detailBeach.beachCodeName,
      rvRating: $scope.userRatings.current,
      rvWhen: $scope.userRv.When,
      rvWho: $scope.userRv.Who,
      rvCost: parseInt($scope.userRv.Cost),
      rvOther: $scope.userRv.Other,
      rvLong: parseInt($scope.userRv.Long),
      rvClimate: parseInt($scope.userRv.Climate),
      rvFood: parseInt($scope.userRv.Food),
      rvFacility: parseInt($scope.userRv.Facility),
    };
    $rootScope.reviewsList.push(rvItm);
    $rootScope.setStorage();
    $scope.doResetReview(form);
    $scope.userReviewState = false;
    toastr["success"]("Your review has been added successfully !", "THANK YOU");
  };

  // Reset Review Form
  $scope.doResetReview = function (form) {
    if (form) {
      form.$setPristine();
      form.$setUntouched();
    }
    setDefault_AddReview();
  };

  // Reset
  function setDefault_AddReview() {
    $scope.userRv = {
      FullName: "",
      Email: "",
      When: "",
      Who: "",
      Cost: null,
      Other: "",
      Long: null,
      Climate: null,
      Food: null,
      Facility: null,
    };
    $scope.userRatings.current = 3;
    $scope.btnAdd = false;
    $rootScope.doTimeout(380);
  }
});

app.controller("contactCtrl", function ($scope, $rootScope, $window, $timeout) {
  $window.scrollTo(0, 0);
  $scope.userFbState1 = false;
  $scope.userFbState2 = false;
  $scope.userFb = {
    opt: "",
    fullName: "",
    email: "",
    phone: "",
    age: null,
    quality: null,
    visual: null,
    speed: null,
    overall: null,
    other: "",
  };
  $scope.fbContent = {
    beachName: "",
    outdatedChkBox: false,
    dupChkBox: false,
    closedChkBox: false,
    existChkBox: false,
    outdatedCmt: " ",
    dupCmt: " ",
    closedCmt: "",
    existCmt: "",
  };

  $scope.beachNames = [];
  angular.forEach($rootScope.beachesList, function (itm) {
    $scope.beachNames.push(itm.beachName);
  });

  // toastr settings
  toastr.options = {
    closeButton: true,
    debug: false,
    newestOnTop: false,
    progressBar: true,
    positionClass: "toast-bottom-center",
    preventDuplicates: false,
    onclick: null,
    showDuration: "300",
    hideDuration: "1000",
    timeOut: "5000",
    extendedTimeOut: "1000",
    showEasing: "swing",
    hideEasing: "linear",
    showMethod: "fadeIn",
    hideMethod: "fadeOut",
  };

  $scope.doAddFeedback1 = function (form1, form2) {
    if (
      !$scope.fbContent.outdatedChkBox &&
      !$scope.fbContent.dupChkBox &&
      !$scope.fbContent.closedChkBox &&
      !$scope.fbContent.existChkBox
    ) {
      toastr["warning"](
        "Please select one or more options listed above before submit !",
        "EMPTY FEEDBACK"
      );
    } else {
      $scope.doResetFeedback(form1);
      $scope.doResetFeedback(form2);
      toastr["success"](
        "Your feedback has been added successfully !",
        "THANK YOU"
      );
    }
  };
  $scope.doAddFeedback2 = function (form1, form2) {
    $scope.doResetFeedback(form1);
    $scope.doResetFeedback(form2);
    toastr["success"](
      "Your feedback has been added successfully !",
      "THANK YOU"
    );
  };

  $scope.$watch("fbContent.outdatedChkBox", function () {
    $scope.fbContent.outdatedCmt = !$scope.fbContent.outdatedChkBox ? " " : "";
  });
  $scope.$watch("fbContent.dupChkBox", function () {
    $scope.fbContent.dupCmt = !$scope.fbContent.dupChkBox ? " " : "";
  });

  $scope.toggleFeedback1 = function () {
    $scope.userFbState1 = !$scope.userFbState1;
    $scope.userFbState2 = $scope.userFbState2
      ? !$scope.userFbState2
      : $scope.userFbState2;
  };
  $scope.toggleFeedback2 = function () {
    $scope.userFbState2 = !$scope.userFbState2;
    $scope.userFbState1 = $scope.userFbState1
      ? !$scope.userFbState1
      : $scope.userFbState1;
  };
  $scope.fbRate = [
    { id: 0, value: "Terrible" },
    { id: 1, value: "Poor" },
    { id: 2, value: "Average" },
    { id: 3, value: "Very good" },
    { id: 4, value: "Excellent" },
  ];

  // Reset Feedback Form
  $scope.doResetFeedback = function (form1, form2) {
    if (form1) {
      form1.$setPristine();
      form1.$setUntouched();
    }
    if (form2) {
      form2.$setPristine();
      form2.$setUntouched();
    }
    setDefault_AddFeedback();
  };
  // Reset
  function setDefault_AddFeedback() {
    $scope.userFb = {
      fullName: "",
      email: "",
      phone: "",
      age: null,
      quality: null,
      visual: null,
      speed: null,
      overall: null,
      other: "",
    };
    $scope.fbContent = {
      beachName: "",
      outdatedCmt: " ",
      dupCmt: " ",
      closedCmt: "",
      existCmt: "",
    };
    $scope.btnSubmit = false;
    $rootScope.doTimeout(380);
  }
});

app.controller("homeCtrl", function ($scope) {
  $scope.subcribe = {
    email: "",
  };

  // toastr settings
  toastr.options = {
    closeButton: true,
    debug: false,
    newestOnTop: false,
    progressBar: true,
    positionClass: "toast-bottom-center",
    preventDuplicates: false,
    onclick: null,
    showDuration: "300",
    hideDuration: "1000",
    timeOut: "5000",
    extendedTimeOut: "1000",
    showEasing: "swing",
    hideEasing: "linear",
    showMethod: "fadeIn",
    hideMethod: "fadeOut",
  };
  $scope.doSubscribe = function (form) {
    if (form) {
      form.$setPristine();
      form.$setUntouched();
      $scope.subcribe.email = "";
    }
    toastr["success"](
      "Your subscription has been added successfully !",
      "THANK YOU"
    );
  };
});

app.directive("scrollSpy", function ($timeout) {
  return {
    restrict: "A",
    link: function (scope, elem, attr) {
      var offset = parseInt(attr.scrollOffset, 10);
      if (!offset) offset = 10;
      elem.scrollspy({ offset: offset });
      scope.$watch(
        attr.scrollSpy,
        function (value) {
          $timeout(function () {
            elem.scrollspy("refresh", { offset: offset });
          }, 1);
        },
        true
      );
    },
  };
});
app.directive("preventDefault", function () {
  return function (scope, element, attrs) {
    jQuery(element).click(function (event) {
      event.preventDefault();
    });
  };
});
app.directive("scrollTo", [
  "$window",
  function ($window) {
    return {
      restrict: "AC",
      compile: function () {
        function scrollInto(elementId) {
          if (!elementId) $window.scrollTo(0, 0);
          //check if an element can be found with id attribute
          var el = document.getElementById(elementId);
          if (el) el.scrollIntoView();
        }

        return function (scope, element, attr) {
          element.bind("click", function (event) {
            scrollInto(attr.scrollTo);
          });
        };
      },
    };
  },
]);

app.directive("scrollspyMenu", function ($timeout) {
  return {
    restrict: "AC",
    link: function (scope, element, attr) {
      var menuItems = [];
      var config = { offset: 0, duration: 500 };
      var userConfig = scope.$eval(attr.scrollspyMenu);
      angular.extend(config, userConfig);

      var scrollTo = function (event) {
        event.preventDefault();
        var target = $(event.target.hash);

        $("body").animate(
          {
            scrollTop: target.offset().top - Number(config.offset) + 1,
          },
          config.duration
        );
      };

      //bind click events of menu items
      var setup = function () {
        angular.forEach(element.find("a"), function (el) {
          var self = $(el);
          var target = $(self.attr("href"));
          if (target.length) {
            self.click(scrollTo);
            menuItems.push({ self: self, target: target });
          }
        });
      };

      $timeout(setup, 0);

      // Bind to scroll
      $(window).scroll(function () {
        var winTop = $(self).scrollTop() + Number(config.offset);
        var current = menuItems[0];

        angular.forEach(menuItems, function (item) {
          item.fromTop = item.target.offset().top - winTop;
          if (item.fromTop < 0) current = item;
        });

        angular.forEach(menuItems, function (item) {
          if (item === current) item.self.addClass("active");
          else item.self.removeClass("active");
        });
      });
    },
  };
});

app.directive("starRating", function () {
  return {
    restrict: "A",
    template:
      '<ul class="userRating">' +
      '<li ng-repeat="star in stars" ng-class="star" ng-click="toggle($index)">\u2B50 </li></ul>',
    scope: {
      ratingValue: "=",
      max: "=",
    },
    link: function (scope, elem, attrs) {
      var updateStars = function () {
        scope.stars = [];
        for (var i = 0; i < scope.max; i++) {
          scope.stars.push({
            filled: i < scope.ratingValue,
          });
        }
      };
      scope.toggle = function (index) {
        scope.ratingValue = index + 1;
      };
      scope.$watch("ratingValue", function () {
        updateStars();
      });
    },
  };
});
app.directive("star", function ($timeout) {
  return {
    restrict: "E",
    scope: {
      rating: "=",
      max: "=",
    },
    link: function (scope, element, attrs) {
      const fullStar = '<i class="fa-solid fa-star"></i>'.repeat(
        Math.floor(scope.rating)
      );
      const halfStar =
        scope.rating % 1 !== 0
          ? '<i class="fa-regular fa-star-half-stroke"></i>'
          : "";
      const noStar = '<i class="fa-regular fa-star"></i>'.repeat(
        Math.floor(scope.max - scope.rating)
      );
      element.append(
        '<span class="star-icon">' + fullStar + halfStar + noStar + "</span>"
      );
    },
  };
});
app.directive("locate", function () {
  return {
    restrict: "E",
    scope: {
      locating: "=",
      width: "=",
      height: "=",
    },
    link: function (scope, element, attrs) {
      const locateMap =
        '<iframe src="' +
        scope.locating +
        '" width="' +
        scope.width +
        '" height="' +
        scope.height +
        '" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>';
      element.append('<div class="locate-map">' + locateMap + "</div>");
    },
  };
});
app.directive("autoSuggest", function ($timeout) {
  return {
    restrict: "A",
    require: "ngModel",
    link: function (scope, ele, attrs) {
      ele.autocomplete({
        source: scope.beachNames,
        select: function () {
          $timeout(function () {
            ele.trigger("input");
          }, 1);
        },
      });
    },
  };
});
app.filter("floorFilter", function () {
  return function (value) {
    if (!value) return null;
    return Math.floor(value);
  };
});

app.directive("auto", function ($timeout) {
  var name = [
    "Koh Kradan",
    "Whitehaven",
    "Anakena",
    "Camps Bay",
    "Cala Goloritzè",
    "Miami South Beach",
    "Gjipe Beach",
    "San Josef Bay",
    "White Beach",
    "Copacabana",
    "Waikiki",
    "Belle Mare Beach",
    "Oludeniz Beach",
    "Surfers Paradise Beach",
    "Nha Trang Beach",
    "Pink Beach",
    "Navagio Beach",
    "Ipanema Beach",
    "Bottom Bay",
    "Hyams Beach",
    "Grace Bay Beach",
    "Nihiwatu Beach",
    "Anse Soleil",
    "Diani Beach",
  ];
  return {
    restrict: "A",
    require: "ngModel",
    link: function (scope, iElement, iAttrs) {
      iElement.autocomplete({
        source: name,
        select: function () {
          $timeout(function () {
            iElement.trigger("input");
          }, 0);
        },
      });
    },
  };
});
