// $('#demo').wScratchPad('reset');
// $('#demo').wScratchPad('clear');
// $('#demo').wScratchPad('enable', true);
// $('#demo').wScratchPad('enable', false);

$(function () {
  $('#demo').wScratchPad({
    bg: './assets/img/clock.gif',
    fg: './assets/img/overclock.png',
    'cursor': 'default',
    scratchMove: function (e, percent) {
      $(document.getElementById('the-percent')).html(percent+'%');
      if (percent > 85) {
        this.clear();
        $('.buttons').slideDown('fast');
      }
    },
    size: 30
  });
  $('#snooze').click(function() {
    $(this).attr('disabled', 'true');
    // should not have sound undefined if clickable
    // sound.Stop;
    setTimeout(function() {
      sound = document.createElement('audio');
      sound.setAttribute('src', 'stylo.mp3');
      sound.setAttribute('autoplay', 'autoplay');
      // sound.Play;
      console.log('here');
    }, 1000); // will pull snooze time from settings
    $('#demo').wScratchPad('reset');
  });
  $('#dismiss').click(function() {
    sound.pause();
    sound.Stop;
  });
});