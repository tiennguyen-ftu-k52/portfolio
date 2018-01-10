/*  =========================================
*               NAVIGATION
*  =========================================  */
$(function() {
  $.fatNav();

  $(window).scroll(function() {
    if ($(this).scrollTop() < 50) {
      $('.hamburger').css({
        'box-shadow': 'none',
        'background-color': 'transparent',
        border: '2px solid #fff',
        color: '#fff',
      });
    } else {
      $('.hamburger').css({
        'box-shadow': '0 0.5rem 1rem rgba(0, 0, 0, 0.2)',
        'background-color': '#00d664',
        border: '2px solid #00d664',
        color: '#fff',
      });
    }
  });
});

/*  =========================================
*               ANIMATION
*  =========================================  */
$(function() {
  new WOW().init({
    mobile: false,
  });
});

/*  =========================================
*               TIMELINE
*  =========================================  */
$(function() {
  $('.cntl').cntl({
    revealbefore: 300,
    anim_class: 'cntl-animate',
    onreveal: function(e) {
      console.log(e);
    },
  });
});

/*  =========================================
*               SKILLS
*  =========================================  */
$(function() {
  function toTitleCase(str) {
    return str.replace(/\w\S*/g, function(txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
  }
  const skills = {
    frontend: [
      {id: 'html5', name: 'HTML5', value: 100, icon: 'devicon-html5-plain'},
      {id: 'css3', name: 'CSS3', value: 90, icon: 'devicon-css3-plain'},
      {id: 'sass', name: 'SASS', value: 70, icon: 'devicon-sass-original'},
      {
        id: 'bootstrap',
        name: 'Bootstrap',
        value: 90,
        icon: 'devicon-bootstrap-plain',
      },
      {
        id: 'semantic-ui',
        name: 'SemanticUI',
        value: 80,
        icon: 'devicon-firefox-original',
      },
      {
        id: 'material-ui',
        name: 'MaterialUI',
        value: 80,
        icon: 'devicon-chrome-original',
      },
      {
        id: 'javascript',
        name: 'Javascript',
        value: 90,
        icon: 'devicon-javascript-plain',
      },
      {
        id: 'react-js',
        name: 'ReactJS',
        value: 90,
        icon: 'devicon-react-original',
      },
      {
        id: 'angular-js',
        name: 'AngularJS',
        value: 50,
        icon: 'devicon-angularjs-plain',
      },
      {id: 'vue-js', name: 'VueJS', value: 40, icon: 'devicon-vuejs-plain'},
    ],
    backend: [
      {id: 'node-js', name: 'NodeJS', value: 90, icon: 'devicon-nodejs-plain'},
      {
        id: 'express-js',
        name: 'ExpressJS',
        value: 90,
        icon: 'devicon-express-original',
      },
      {
        id: 'meteor-js',
        name: 'MeteorJS',
        value: 80,
        icon: 'devicon-meteor-plain',
      },
      {
        id: 'mongodb',
        name: 'MongoDB',
        value: 90,
        icon: 'devicon-mongodb-plain',
      },
    ],
    mobile: [
      {
        id: 'react-native',
        name: 'React Native',
        value: 80,
        icon: 'devicon-react-original',
      },
      {
        id: 'objective-c',
        name: 'Objective-C',
        value: 50,
        icon: 'devicon-apple-original',
      },
      {id: 'swift', name: 'Swift', value: 30, icon: 'devicon-swift-plain'},
    ],
    desktop: [
      {
        id: 'electron',
        name: 'Electron',
        value: 80,
        icon: 'devicon-atom-original',
      },
    ],
    others: [
      {id: 'git', name: 'Git', value: 80, icon: 'devicon-git-plain'},
      {
        id: 'aws',
        name: 'AWS',
        value: 50,
        icon: 'devicon-amazonwebservices-original',
      },
    ],
  };

  // Create Progress Bar
  for (var key in skills) {
    $('#skills .skills__wrapper').append(
      '<div class="col-md-6 col-12"><h3 class="heading-third mb-4">' +
        toTitleCase(key) +
        '</h3><div class="' +
        key +
        '"></div></div>',
    );

    for (var i = 0; i < skills[key].length; i++) {
      var skill = skills[key][i];
      var wrapper = '#skills .skills__wrapper .' + key;

      // Tag Cloud
      var tagCloudSize = 500;
      var tagCloudRadius = 150;
      var windowWidth = $(window).width();

      if (windowWidth <= 480) {
        tagCloudSize = 300;
        tagCloudRadius = 100;
      } else if (windowWidth > 480 && windowWidth < 768) {
        tagCloudSize = 400;
        tagCloudRadius = 120;
      }

      $('#tag-cloud ul').append(
        '<li><a href="#' +
          skill.id +
          '"><i class="' +
          skill.icon +
          '"></i></a></li>',
      );

      var settings = {
        height: tagCloudSize,
        width: tagCloudSize,
        radius: tagCloudRadius,
        speed: 0.5,
        slower: 0.9,
        timer: 5,
        fontMultiplier: 15,
        hoverStyle: {
          border: 'none',
          color: '#dde6ed',
        },
        mouseOutStyle: {
          border: 'none',
          color: '#d6ac22',
        },
      };

      $('#tag-cloud').tagoSphere(settings);

      // Progress bar
      $(wrapper).append(
        '<h5 class="heading-fifth mb-3">' +
          skill.name +
          '</h5><div class="progress mb-5"><div class="progress-bar" role="progressbar" style="width: ' +
          skill.value +
          '%" aria-valuenow="' +
          skill.value +
          '" aria-valuemin="0" aria-valuemax="100"></div></div>',
      );
    }
  }
});

/*  =========================================
*               SWIPER
*  =========================================  */
$(function() {
  var swiper = new Swiper('.swiper-container', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflowEffect: {
      rotate: 50,
      stretch: -30,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    loop: true,
    autoplay: {
      delay: 5000,
    },
  });
});
