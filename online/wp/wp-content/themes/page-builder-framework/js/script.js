/*

1. Script that makes the whole colum clickable to link to next campus page.

2.
Script to give the "finn veien" site functionality where elements
swtich between hide/show state based on button clicks
*/

jQuery(function($){
  $('#btn_vulkan').click(function(){
    window.location.href = "https://tek.westerdals.no/~sankar17/wp/vulkan/";
  });

  $('#btn_fjerdingen').click(function(){
    window.location.href = "https://tek.westerdals.no/~sankar17/wp/fjerdingen/";
  });

  $('#btn_brenneriveien').click(function(){
    window.location.href = "https://tek.westerdals.no/~sankar17/wp/brenneriveien/";
  });

  $('#btn_kvadraturen').click(function(){
    window.location.href = "https://tek.westerdals.no/~sankar17/wp/kvadraturen/";
  });
});



// 2

jQuery(function($){
  // buttons
  $('#btn_more_info_fjerdingen_vulkan').hide();
  $('#btn_more_info_fjerdingen_kvadraturen').hide();
  $('#btn_more_info_vulkan_kvadraturen').hide();

  $('#btns_bus').hide();
  $('#btns_walk').hide();


  // maps
  $('#distance_fjerdingen_vulkan').hide();
  $('#distance_fjerdingen_kvadraturen').hide();
  $('#distance_vulkan_kvadraturen').hide();


  // text box
  $('#te_more_information').hide();
});

// decide that the buttons will show
jQuery(function($){

  $('#btn_walk').click(function(){

    $('#btns_bus').hide();
    $('#btns_walk').show();
  });

  $('#btn_bus').click(function(){

    $('#btns_walk').hide();
    $('#btns_bus').show();
  });



  $('#btn_fjerdingen_vulkan').click(function(){
    $('#map_image_box').attr('src','https://tek.westerdals.no/~sankar17/wp/wp-content/uploads/2018/05/fjerd-brenn-vulk2.png');

    $('#distance_fjerdingen_kvadraturen').hide();
    $('#distance_vulkan_kvadraturen').hide();

    $('#distance_fjerdingen_vulkan').show();
    $('#btn_more_info_fjerdingen_vulkan').show();
    });


  $('#btn_fjerdingen_kvadraturen').click(function(){
    $("#map_image_box").attr('src','https://tek.westerdals.no/~sankar17/wp/wp-content/uploads/2018/05/kvad-fjerd2.png');

    $('#distance_fjerdingen_vulkan').hide();
    $('#distance_vulkan_kvadraturen').hide();

    $('#distance_fjerdingen_kvadraturen').show();
  });


  $('#btn_vulkan_kvadraturen').click(function(){
    $("#map_image_box").attr('src','https://tek.westerdals.no/~sankar17/wp/wp-content/uploads/2018/05/kvad-brenn-vulk2.png');

    $('#distance_fjerdingen_vulkan').hide();
    $('#distance_fjerdingen_kvadraturen').hide();

    $('#distance_vulkan_kvadraturen').show();
  });

});

// Change content of textbox
jQuery(function($){
  $('#btn_more_info_fjerdingen_vulkan').click(function(){
    $('#te_more_information').text("For å komme seg mellom Fjerdingen og vulkan er det lettest å gå langs akerselva. Men man kan også ta bus.");
    $('#te_more_information').toggle();
  });
});
