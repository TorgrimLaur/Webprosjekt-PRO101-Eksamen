jQuery(function($){
  $('#map_image_box').hide();
  $('#distance_fjerdingen_vulkan').hide();
  $('#distance_fjerdingen_kvadraturen').hide();
  $('#distance_vulkan_kvadraturen').hide();

});

jQuery(function($){
  $('#btn_fjerdingen_vulkan').click(function(){
    $('#map_image_box').attr('src','http://localhost/wordpress/wp-content/uploads/2018/05/Vulkan-Fjerdingen.png');

    $('#distance_fjerdingen_kvadraturen').hide();
    $('#distance_vulkan_kvadraturen').hide();

    $('#distance_fjerdingen_vulkan').show();
    });

  $('#btn_fjerdingen_kvadraturen').click(function(){
    $("#test").attr('src','http://localhost/wordpress/wp-content/uploads/2018/05/Kvadraturen-Fjerdingen.png');

    $('#distance_fjerdingen_vulkan').hide();
    $('#distance_vulkan_kvadraturen').hide();

    $('#distance_fjerdingen_kvadraturen').show();
  });

  $('#btn_vulkan_kvadraturen').click(function(){
    $("#test").attr('src','http://localhost/wordpress/wp-content/uploads/2018/05/Kvadraturen-Fjerdingen.png');

    $('#distance_fjerdingen_vulkan').hide();
    $('#distance_fjerdingen_kvadraturen').hide();

    $('#distance_vulkan_kvadraturen').show();
  });

});
