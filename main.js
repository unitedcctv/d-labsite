if (Meteor.isClient) {
  console.log($(window).height(), $('header.startpage').height());
  $('header.startpage').height = $(window).height();

  Template.twitterfeed.events({
    'click .twttrfeed': function () {
      console.log('clicked feed');
    }
  });

  Template.freemoney.events({
    'mouseover .freemoneylink': function () {
      //UI.insert(UI.render(Template.moneytooltip), $('.freemoneylink'))
    }
  });

  Template.body.rendered = function () {
    $('div#startpage').height($(window).height());
    $('div#secondpage').height($(window).height() - 180);
    $('.prereveal').removeClass('prereveal')
    $('a[href^="#"]').on('click',function (e) {
      e.preventDefault();

      var target = this.hash,
      $target = $(target);

      $('html, body').stop().animate({
          'scrollTop': $target.offset().top
      }, 900, 'swing', function () {
          window.location.hash = target;
      });
  });
  };
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}