var languageMenu = function () {
    var userLanguage = navigator.language.substring(0, 2);
    var selectedLanguage;

    if (userLanguage === "en") {
        selectedLanguage = "en";
    } else if (userLanguage === "fr") {
        selectedLanguage = "fr";
    } else if (userLanguage === "es") {
        selectedLanguage = "es";
    } else {
        selectedLanguage = "en";
    }

    var update = function (lang) {
        $('.language-menu button').removeClass('is-active');
        $('.language-menu button[lang="' + lang + '"]').addClass('is-active');

        $('.content [lang]').addClass('hidden');
        $('.content [lang="' + lang + '"]').removeClass('hidden');
    };

    $('.language-menu').on('click', 'button', function () {
        selectedLanguage = $(this).prop('lang');
        update(selectedLanguage);
    });

    update(selectedLanguage);
};

var countrySelection = function () {
    var setCookies = function () {
        Cookies.set('intl_splash', false, { expires: 3, path: '.bestbuy.com' });
    };

    $('.country-selection').on('click', 'a', function () {
        setCookies();
    });
};

var buildUSLink = function () {
  var re = /\?/
  var newUrl = window.location.href;
  var queryString = newUrl.match(re);

  if (queryString) {
    if (window.location.search) {
      newUrl = newUrl + '&intl=nosplash';
    } else {
      newUrl = newUrl + 'intl=nosplash';
    }
  } else {
    newUrl = newUrl + '?intl=nosplash';
  }

  $('.us-link').attr('href', newUrl);
  $('.us-link').on('click', function () {
      window.location.href = newUrl;
  });
};

window.onload = function () {
    languageMenu();
    countrySelection();
    buildUSLink();
};
