$(document).ready(function() {
    // PC - Afficher la sidebar -> souris dans la zone
    $('#menu-tab').on('mouseenter', function() {
        $('#sidebar').addClass('active');
        $('#menu-tab-visible').hide(); // Cacher le menu-tab-visible
    });
 
    // Cache la sidebar -> souris hors de celle-ci
    $('#sidebar').on('mouseleave', function() {
        $('#sidebar').removeClass('active');
        $('#menu-tab-visible').show(); // Montrer le menu-tab-visible
    });
 
    // Scroll smooth
    $('#sidebar a').on('click', function(e) {
        e.preventDefault();
        var target = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(target).offset().top
        }, 100);
    });
 
    // Mobile - Affiche le menu sur le bouton à 3 lignes
    $('#mobile-menu').on('click', function() {
        $('#sidebar').toggleClass('active');
        $('#menu-tab').show(); // Montrer le menu-tab-visible
    });
  
 });