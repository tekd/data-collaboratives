$(document).ready(function(){
  // Modal Click Behavior
  $('.js-open-modal').click(function () {
      $(this).find('.js-target-modal').addClass('js-active');
      $('#overlay').addClass('js-active');
      $('body').addClass('js-body-modal-active');
  });

  $('.js-close-modal').click(function () {
      $('.js-target-modal').removeClass('js-active');
      $('#overlay').removeClass('js-active');
      $('body').removeClass('js-body-modal-active');
  });
});