// Show or hide the button based on scroll position
window.onscroll = function() {
    var goTopBtn = document.getElementById("goTopBtn");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      goTopBtn.style.display = "block";
    } else {
      goTopBtn.style.display = "none";
    }
  };

  // Scroll to top function
  function scrollToTop() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
  }

  $('.accordion').on('show.bs.collapse', function(e) {
    $(e.target).prev('.card-header').find('.fas').removeClass('fa-chevron-down').addClass('fa-chevron-up');
  }).on('hide.bs.collapse', function(e) {
    $(e.target).prev('.card-header').find('.fas').removeClass('fa-chevron-up').addClass('fa-chevron-down');
  });