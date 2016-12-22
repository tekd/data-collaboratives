$(document).ready(function(){
  // Modal Click Behavior
  $('.js-open-modal').click(function () {
      $(this).find('.js-target-modal').addClass('js-active');
      $('#overlay').addClass('js-active');
      $('body').addClass('js-body-modal-active');
  });

  $('body').on ("click", '.js-close-modal', function () {
      $('.js-target-modal').removeClass('js-active');
      $('#overlay').removeClass('js-active');
      $('body').removeClass('js-body-modal-active');
  });

  // General Click Behavior for Overlay
  $('#overlay').click(function () {
      $('.js-active').removeClass('js-active');
      $('.js-active-menu').removeClass('js-active-menu');
      $('body').removeClass('js-body-modal-active');
  });

});