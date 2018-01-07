/*  =========================================
*               NAVIGATION
*  =========================================  */
$(function() {
  $.fatNav();
});

/*  =========================================
*               ANIMATION
*  =========================================  */
$(function() {
  new WOW().init();
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
        icon: 'devicon-react-original',
      },
      {
        id: 'material-ui',
        name: 'MaterialUI',
        value: 80,
        icon: 'devicon-react-original',
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
      '<div class="col-sm-6 col-12"><h3 class="heading-third mb-4">' +
        key +
        '</h3><div class="' +
        key +
        '"></div></div>',
    );

    for (var i = 0; i < skills[key].length; i++) {
      var skill = skills[key][i];
      var wrapper = '#skills .skills__wrapper .' + key;

      // Tag Cloud
      $('#tag-cloud ul').append(
        '<li><a href="#' + skill.id + '">' + skill.name + '</a></li>',
      );
      var settings = {
        height: 500,
        width: 500,
        radius: 150,
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
        '<h5 class="heading-fifth">' +
          skill.name +
          '</h5><div id="' +
          skill.id +
          '"></div>',
      );

      $('#' + skill.id).LineProgressbar({
        percentage: skill.value,
        ShowProgressCount: false,
      });
    }
  }
});
