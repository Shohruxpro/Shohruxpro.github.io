$(document).ready(function () {
  $('.js--wp-1').waypoint(
    function (direction) {
      $('.js--wp-1').addClass('animate__animated animate__fadeIn');
    },
    { offset: '70%' }
  );
  $('.js--wp-2').waypoint(
    function (direction) {
      $('.js--wp-2').addClass('animate__animated animate__slideInLeft');
    },
    { offset: '50%' }
  );
  $('.js--wp-3').waypoint(
    function (direction) {
      $('.js--wp-3').addClass('animate__animated animate__fadeIn');
    },
    { offset: '70%' }
  );

  $('.navigation__link').click(function () {
    $('.navigation__checkbox').prop('checked', false);
  });
});
