/**
 * 2018.1.28 - ken wakita
 *
 * The following code aligns the top of the web contents to the bottom of the navigation bar.
 * I tried other techniques but this is the only successful attempt.
 *
 * https://stackoverflow.com/a/19420051
 **/

function adjust_to_navbar_height() {
  const navbar_height = $('#main-navbar').height();
  $('body').css('padding-top', navbar_height);
}

const banners = {
  morning: 'pvis-top-morning.jpg',
  afternoon: 'pvis-top-afternoon.jpg',
  night: 'pvis-top-night.jpg' };

function choose_banner() {
  const prefix = '/pvis2018/assets/images/banner/';
  const hour = (new Date().getUTCHours() + 9) % 24;
  var banner = 'morning';
  if (12 <= hour && hour < 18) banner = 'afternoon';
  if (18 <= hour || hour < 5) banner = 'night';

  $('#pvis-banner').attr('src', prefix + banners[banner]);
}

function on_load() {
  adjust_to_navbar_height()
  choose_banner();
  $('img[usemap]').rwdImageMaps();
};

function on_resize() {
  adjust_to_navbar_height();
}


/** The dynamic code should not be executed in a headless browser
  * environment. */

if (typeof window.phantomjs === 'undefined') {
  $(window).on('load', on_load);
  $(window).on('resize', on_resize);
}
