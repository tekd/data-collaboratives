 $(document).ready(function(){

  // Init ScrollMagic
  var controller = new ScrollMagic.Controller();
  // pin the intro 
  var pinIntroScene = new ScrollMagic.Scene({
    triggerElement: '#intro',
    triggerHook: 0,
    duration: '30%'
  })
  .setPin('#intro', {pushFollowers: false})
  .addTo(controller);

  var pinFirstSlideScene = new ScrollMagic.Scene({
    triggerElement: '#slide01',
    triggerHook: 0.4
  })
  .setPin('#intro', {pushFollowers: false})
  .addTo(controller);


// parallax
  var parallaxTL = new TimelineMax();
  parallaxTL
    .from('.content-wrapper', 0.4, {autoAlpha: 0, ease: Power0.easeNone}, 0.4)
    .from('.bcg',2, {y: '-50%', ease: Power0.easeNone}, 0)
    ;
  var slideParallaxScene = new ScrollMagic.Scene({
    triggerElement: '.bcg-parallax',
    triggerHook:1,
    duration: '100%'
  })
  .setTween(parallaxTL)
  .addTo(controller);

  //loop through slides
  $('.slide').each(function() {
    var ourScene = new ScrollMagic.Scene({
      triggerElement: this.children[0],
      triggerHook: 0.9,
    })
    .setClassToggle(this, 'fade-in') // add class to slide01
    .addIndicators({
      name: 'fade scene',
      colorTrigger: 'black',
      colorStart: '#75C695',
      colorEnd: 'red'
    }) // this requires a plugin
    .addTo(controller);
  });

});


















