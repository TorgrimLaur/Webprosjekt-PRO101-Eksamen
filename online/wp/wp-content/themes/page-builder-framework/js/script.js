/*
Script to give the "finn veien" site functionality where elements
swtich between hide/show state based on button clicks
*/

jQuery(function($){
  //$('#map_image_box').hide();
  $('#distance_fjerdingen_vulkan').hide();
  $('#distance_fjerdingen_kvadraturen').hide();
  $('#distance_vulkan_kvadraturen').hide();

  // buttons
  $('#btn_more_info_fjerdingen_vulkan').hide();
  $('#btn_more_info_fjerdingen_kvadraturen').hide();
  $('#btn_more_info_vulkan_kvadraturen').hide();

// text box
  $('#te_more_information').hide();
});

jQuery(function($){
  $('#btn_fjerdingen_vulkan').click(function(){
    $('#map_image_box').attr('src','https://tek.westerdals.no/~sankar17/wp/wp-content/uploads/2018/05/fjerd-brenn-vulk.png');

    $('#distance_fjerdingen_kvadraturen').hide();
    $('#distance_vulkan_kvadraturen').hide();

    $('#distance_fjerdingen_vulkan').show();
    $('#btn_more_info_fjerdingen_vulkan').show();
    });

  $('#btn_fjerdingen_kvadraturen').click(function(){
    $("#map_image_box").attr('src','https://tek.westerdals.no/~sankar17/wp/wp-content/uploads/2018/05/kvad-fjerd.png');

    $('#distance_fjerdingen_vulkan').hide();
    $('#distance_vulkan_kvadraturen').hide();

    $('#distance_fjerdingen_kvadraturen').show();
  });

  $('#btn_vulkan_kvadraturen').click(function(){
    $("#map_image_box").attr('src','https://tek.westerdals.no/~sankar17/wp/wp-content/uploads/2018/05/kvad-brenn-vulk.png');

    $('#distance_fjerdingen_vulkan').hide();
    $('#distance_fjerdingen_kvadraturen').hide();

    $('#distance_vulkan_kvadraturen').show();
  });

});

jQuery(function($){
  $('#btn_more_info_fjerdingen_vulkan').click(function(){
    $('#te_more_information').text("For å komme seg mellom Fjerdingen og vulkan er det lettest å gå langs akerselva. Men man kan også ta bus.");
    $('#te_more_information').toggle();
  });
});
