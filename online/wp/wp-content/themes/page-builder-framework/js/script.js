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

  $('#btn_find_way').click(function(){
    window.location.href = "https://tek.westerdals.no/~sankar17/wp/finn_veien/";
  });

  $('#btn_events').click(function(){
    window.location.href = "https://tek.westerdals.no/~sankar17/wp/events/";
  });
});





// 2

jQuery(function($){
  // buttons
$('#btns_fjerdingen_vulkan_maps').hide();
$('#btns_fjerdingen_kvadraturen_maps').hide();
$('#btns_vulkan_kvadraturen_maps').hide();

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
      // campus buttons
      $('#btn_fjerdigen_vulkan').click(function(){
        $('#btns_fjerdingen_kvadraturen_maps').hide();
        $('#btns_vulkan_kvadraturen_maps').hide();

          $('#btns_fjerdingen_vulkan_maps').show();
        });

      $('#btn_fjerdigen_kvadraturen').click(function(){
        $('#btns_fjerdingen_vulkan_maps').hide();
        $('#btns_vulkan_kvadraturen_maps').hide();

          $('#btns_fjerdingen_kvadraturen_maps').show();
          });

      $('#btn_vulkan_kvadraturen').click(function(){
        $('#btns_fjerdingen_vulkan_maps').hide();
        $('#btns_fjerdingen_kvadraturen_maps').hide();

        $('#btns_vulkan_kvadraturen_maps').show();
          });

    //walk
  $('#btn_walk_fjerdigen_vulkan').click(function(){
    $('#map_box').html('<iframe src="https://www.google.com/maps/embed?pb=!1m34!1m12!1m3!1d7998.958627277226!2d10.747102984620708!3d59.91986796333299!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m19!3e2!4m5!1s0x46416e649635af45%3A0xaabd74df8a4d5dde!2sWesterdals+Oslo+School+of+Arts%2C+Communication+and+Technology%2C+Oslo!3m2!1d59.9233391!2d10.7524968!4m5!1s0x46416e6433784157%3A0x2bdd2c0930d805a3!2sBrenneriveien+9%2C+Oslo!3m2!1d59.920351999999994!2d10.7527981!4m5!1s0x46416e6057bf3f39%3A0x22d6a578df0644b5!2sWesterdals+Oslo+ACT%2C+Chr.+Krohgs+gate+32%2C+0186+Oslo!3m2!1d59.916173699999995!2d10.7602099!5e0!3m2!1sno!2sno!4v1527707603029" width="800" height="600" frameborder="0" style="border:0" allowfullscreen></iframe>');
    $('#te_information').html("");

    $('#te_left_info_box').html("<div class='info_tittle'> <b>Fjerdingen - Vulkan</b> </div> <br/><br/> <div class='info_text'> 1. Følg Christian Krohgs gate til Storgata. <br/> 2. Kryss Storgata til Axel Maurers vei. <br/> 3. Følg Axel Maurers vei og ta til høyre mot Akerselva. <br/> 4. Følg gangveien langs Akerselva forbi Ankerbrua. <br/> 5. Følg gangveien og kryss broen til Nedre Gate. <br/> 6. Følg Nedre gate og ta til venstre inn i Ingens gate. <br/> 7. Følg Ingens gate og ta til høyre inn i Brenneriveien. <br/> 8. Følg Brenneriveien til Møllerveien og kryss mot Dansens Hus. <br/> 9. Følg Vulkan forbi Dansens Hus og Mathallen. <br/> 10. Følg Vulkan til Campus Vulkan.");

    $('#te_right_info_box').html("<div class='info_tittle'> <b>Vulkan - Fjerdingen</b> </div> <br/><br/> <div class='info_text'> 1. Følg Vulkan forbi Mathallen og Dansens Hus. <br/> 2. Kryss Møllerveien til Brenneriveien. <br/> 3. Følg Brenneriveien til Ingens gate. <br/> 4. Ta til venstre inn i Ingens gate og følg til Nedre gate. <br/> 5. Ta til høyre inn i Nedre gate og kryss broen over Akerselva. <br/> 6. Ta til venstre på gangveien og følg til Axel Maurers vei. <br/> 7. Gå fra Axel Maurers vei til Storgata. <br/> 8. Kryss Storgata til Christian Krohgs gate. </div>");

});

  $('#btn_walk_fjerdigen_kvadraturen').click(function(){
    $('#map_box').html('<iframe src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d4000.220944737101!2d10.74807054917459!3d59.913713905525434!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e2!4m5!1s0x46416e6057bf3f39%3A0x22d6a578df0644b5!2sWesterdals+Oslo+ACT%2C+Christian+Krohgs+gate%2C+Oslo!3m2!1d59.916173699999995!2d10.7602099!4m5!1s0x46416e88371902fb%3A0x5d5eb187d14e98e5!2sH%C3%B8yskolen+Kristiania%2C+Kirkegata+24%2C+0153+Oslo!3m2!1d59.9111522!2d10.745074599999999!5e0!3m2!1sno!2sno!4v1527707557202" width="800" height="600" frameborder="0" style="border:0" allowfullscreen></iframe>');
    $('#te_information').html("");

    $('#te_left_info_box').html("<div class='info_tittle'> <b>Kvadraturen - Fjerdingen</b> </div> <br/> <br/><div class='info_text'> 1. Følg Kirkegata til Kirkeristen. <br/> 2. Ta til venstre inn i Storgata fra Kirkeristen. <br/> 3. Følg Storgata frem til Hausmanns gate. <br/> 4. Ta til høyre inn i Hausmanns gate. <br/> 5. Følg Hausmannsgate til Christian Krohgs gate. <br/> 6. Ta til venstre inn i Christian Krohgs gate. <br/> 7. Følg Christian Krohgs gate til Campus Fjerdingen.</div>");

    $('#te_right_info_box').html("<div class='info_tittle'> <b>Fjerdingen - Kvadraturen</b></div> <br/><br/><div class='info_text'> 1. Gå Christian Krohgs gate til Hausmanns gate. <br/> 2. Ta til høyre inn på Hausmanns gate. <br/> 3. Følg Hausmanns gate til Storgata. <br/> 4. Ta til venstre inn i Storgata. <br/> 5. Følg Storgata til Kirkeristen. <br/> 6. Gå til høyre ved Kirkeristen til Kirkegata <br/> 7. Følg Kirkegata til Campus Kvadraturen. </div>");

   });


  $('#btn_walk_vulkan_kvadraturen').click(function(){
    $('#map_box').html('<iframe src="https://www.google.com/maps/embed?pb=!1m34!1m12!1m3!1d7999.563783757984!2d10.740173984618782!3d59.91735721413206!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m19!3e2!4m5!1s0x46416e88371902fb%3A0x5d5eb187d14e98e5!2sH%C3%B8yskolen+Kristiania%2C+Kirkegata%2C+Oslo!3m2!1d59.9111522!2d10.745074599999999!4m5!1s0x46416e6433784157%3A0x2bdd2c0930d805a3!2sBrenneriveien+9%2C+Oslo!3m2!1d59.920351999999994!2d10.7527981!4m5!1s0x46416e649635af45%3A0xaabd74df8a4d5dde!2sWesterdals+Oslo+School+of+Arts%2C+Communication+and+Technology%2C+19+Vulkan%2C+0178+Oslo!3m2!1d59.9233391!2d10.7524968!5e0!3m2!1sno!2sno!4v1527707508090" width="800" height="600" frameborder="0" style="border:0" allowfullscreen></iframe>');
    $('#te_information').html("");

    $('#te_left_info_box').html("<div class='info_tittle'> <b>Kvadraturen - Vulkan</b> </div> <br/><br/> <div class='info_text'>1.Følg Kirkegata til Stortorvet. <br/> 2. Ta til venstre på Stortorvet og gå til Møllergata. <br/> 3. Ta til høyre inn i Møllergata. <br/> 4. Følg Møllergata til krysset Møllergata/Hausmanns gate/ Maridalsveien. <br/> 5.	Gå skrått til venstre på Maridalsveien frem til Brenneriveien. <br/> 6. Gå inn i Brenneriveien og gå til Campus Brenneriveien ved Blå. <br/> 7. Gå til enden av Brenneriveien og kryss Møllerveien. <br/> 8. Gå forbi Dansens Hus mot Mathallen. <br/> 9. Gå forbi Mathallen og følg Vulkan opp til Campus Vulkan. </div>");

    $('#te_right_info_box').html("<div class='info_tittle'> <b>Vulkan - Kvadraturen</b> </div> <br/><br/> <div class='info_text'> 1. Gå fra Vulkan mot Mathallen. <br/> 2. Gå forbi Mathallen og Dansens Hus. <br/> 3. Kryss Møllerveien til Brenneriveien. <br/> 4. Gå til Maridalsveien. <br/> 5.	Kryss Maridalsveien/Hausmannsgate til Møllergata. <br/> 6. Følg Møllergata til Stortorvet. <br/> 7. Ta til venstre ved Stortorvet til Kirkegata. <br/> 8. Følg Kirkegata til Campus Kvadraturen. </div>");
    });
  // bus

  $('#btn_bus_fjerdingen_vulkan').click(function(){
    $('#map_box').html('<iframe src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d7998.933042009745!2d10.746470534620816!3d59.91997411329949!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e3!4m5!1s0x46416e649635af45%3A0xaabd74df8a4d5dde!2sWesterdals+Oslo+School+of+Arts%2C+Communication+and+Technology%2C+Oslo!3m2!1d59.9233391!2d10.7524968!4m5!1s0x46416e60c78540dd%3A0xa19b8032c939043a!2sCampus+Fjerdingen%2C+Chr.+Krohgs+gate+32%2C+0186+Oslo!3m2!1d59.9161644!2d10.7596752!5e0!3m2!1sno!2sno!4v1527707469518" width="800" height="600" frameborder="0" style="border:0" allowfullscreen></iframe>');
    $('#te_information').html('<img src="https://tek.westerdals.no/~sankar17/wp/wp-content/uploads/2018/05/vulkan-fjerd.png">');

    $('#te_left_info_box').html("");
    $('#te_right_info_box').html("");
    });


  $('#btn_bus_fjerdingen_kvadraturen').click(function(){
    $('#map_box').html('<iframe src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d8000.656449083801!2d10.74361893461574!3d59.91282366557486!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e3!4m5!1s0x46416e6057bf3f39%3A0x22d6a578df0644b5!2sWesterdals+Oslo+ACT%2C+Christian+Krohgs+gate%2C+Oslo!3m2!1d59.916173699999995!2d10.7602099!4m5!1s0x46416e88371902fb%3A0x5d5eb187d14e98e5!2sH%C3%B8yskolen+Kristiania%2C+Kirkegata%2C+Oslo!3m2!1d59.9111522!2d10.745074599999999!5e0!3m2!1sno!2sno!4v1527707429478" width="800" height="600" frameborder="0" style="border:0" allowfullscreen></iframe>');
      $('#te_information').html('<img src="https://tek.westerdals.no/~sankar17/wp/wp-content/uploads/2018/05/fjerd-kvad.png">');

      $('#te_left_info_box').html("");
      $('#te_right_info_box').html("");
  });


  $('#btn_bus_vulkan_kvadraturen').click(function(){
    $('#map_box').html('<iframe src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d15999.04420666656!2d10.731006014440077!3d59.91753014515577!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e3!4m5!1s0x46416e88371902fb%3A0x5d5eb187d14e98e5!2sH%C3%B8yskolen+Kristiania%2C+Kirkegata+24%2C+0153+Oslo!3m2!1d59.9111522!2d10.745074599999999!4m5!1s0x46416e649635af45%3A0xaabd74df8a4d5dde!2sWesterdals+Oslo+School+of+Arts%2C+Communication+and+Technology%2C+Oslo!3m2!1d59.9233391!2d10.7524968!5e0!3m2!1sno!2sno!4v1527707385972" width="800" height="600" frameborder="0" style="border:0" allowfullscreen></iframe>');
    $('#te_information').html('<img src="https://tek.westerdals.no/~sankar17/wp/wp-content/uploads/2018/05/vulkan-kvad.png">');

    $('#te_left_info_box').html("");
    $('#te_right_info_box').html("");
  });

});
