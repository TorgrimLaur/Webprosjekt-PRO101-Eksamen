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
  $('#btns_bus').hide();
  $('#btns_walk').hide();

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

    //walk
  $('#btn_walk_fjerdingen_vulkan').click(function(){
    $('#map_image_box').attr('src','https://tek.westerdals.no/~sankar17/wp/wp-content/uploads/2018/05/fjerd-brenn-vulk2.png');
    $('#te_information').text("For å komme seg mellom Fjerdingen og vulkan er det lettest å gå langs akerselva. Adresse vulkan 14 elns æøå");
    });


  $('#btn_walk_fjerdingen_kvadraturen').click(function(){
    $("#map_image_box").attr('src','https://tek.westerdals.no/~sankar17/wp/wp-content/uploads/2018/05/kvad-fjerd2.png');
    $('#te_information').text("For å komme seg mellom Fjerdingen og kvadraturen går man gjennom karl johan.  æøå");
  });


  $('#btn_walk_vulkan_kvadraturen').click(function(){
    $("#map_image_box").attr('src','https://tek.westerdals.no/~sankar17/wp/wp-content/uploads/2018/05/kvad-brenn-vulk2.png');
    $('#te_information').text("For å komme seg mellom vulkan og kvadraturen tar man bus ;) er det lettest å gå langs akerselva. Adresse vulkan 14 elns æøå");
  });

  // bus

  $('#btn_bus_fjerdingen_vulkan').click(function(){
    $('#map_image_box').attr('src','https://tek.westerdals.no/~sankar17/wp/wp-content/uploads/2018/05/fjerd-brenn-vulk2.png');
    $('#te_information').text("For å komme seg mellom Fjerdingen og vulkan er det lettere å gå enn å ta bus. Adresse vulkan 14 elns æøå");
    });


  $('#btn_bus_fjerdingen_kvadraturen').click(function(){
    $("#map_image_box").attr('src','https://tek.westerdals.no/~sankar17/wp/wp-content/uploads/2018/05/kvad-fjerd.png');
    $('#te_information').text("Hei. Adresse vulkan 14 elns æøå");

  });


  $('#btn_bus_vulkan_kvadraturen').click(function(){
    $("#map_image_box").attr('src','https://tek.westerdals.no/~sankar17/wp/wp-content/uploads/2018/05/kvad-brenn-vulk.png');
    $('#te_information').text("Her er det smart å ta bus. Adresse vulkan 14 elns æøå");

  });

});
