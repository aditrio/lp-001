const mainNav = document.getElementById('js-menu')
const navBarToggle = document.getElementById('js-navbar-toggle')

navBarToggle.addEventListener('click', function () {
  mainNav.classList.toggle('active')
})
$(function () {
  $(document).scroll(function () {
    var $nav = $('.fixed-top')
    $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height())
  })
})

AOS.init()
