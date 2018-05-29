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
    $('#map_image_box').attr('src','https://tek.westerdals.no/~sankar17/wp/wp-content/uploads/2018/05/fjerd-vulk-gå.png');
    $('#te_information').html("<div class='info_tittle'> <b>Fjerdingen - Vulkan</b> </div> <br/><br/> <div class='info_text'> 1. Følg Christian Krohgs gate til Storgata. <br/> 2. Kryss Storgata til Axel Maurers vei. <br/> 3. Følg Axel Maurers vei og ta til høyre mot Akerselva. <br/> 4. Følg gangveien langs Akerselva forbi Ankerbrua. <br/> 5. Følg gangveien og kryss broen til Nedre Gate. <br/> 6. Følg Nedre gate og ta til venstre inn i Ingens gate. <br/> 7. Følg Ingens gate og ta til høyre inn i Brenneriveien. <br/> 8. Følg Brenneriveien til Møllerveien og kryss mot Dansens Hus. <br/> 9. Følg Vulkan forbi Dansens Hus og Mathallen. <br/> 10. Følg Vulkan til Campus Vulkan. </div> <div class='info_tittle'> <br/> <b>Vulkan - Fjerdingen</b> </div> <br/><br/> <div class='info_text'> 1. Følg Vulkan forbi Mathallen og Dansens Hus. <br/> 2. Kryss Møllerveien til Brenneriveien. <br/> 3. Følg Brenneriveien til Ingens gate. <br/> 4. Ta til venstre inn i Ingens gate og følg til Nedre gate. <br/> 5. Ta til høyre inn i Nedre gate og kryss broen over Akerselva. <br/> 6. Ta til venstre på gangveien og følg til Axel Maurers vei. <br/> 7. Gå fra Axel Maurers vei til Storgata. <br/> 8. Kryss Storgata til Christian Krohgs gate. </div> <br/>");
    });

  $('#btn_walk_fjerdigen_kvadraturen').click(function(){
    $("#map_image_box").attr('src','https://tek.westerdals.no/~sankar17/wp/wp-content/uploads/2018/05/kvad-fjerd-gå.png');
    $('#te_information').html("<div class='info_tittle'> <b>Kvadraturen - Fjerdingen</b> </div> <br/> <br/><div class='info_text'> 1. Følg Kirkegata til Kirkeristen. <br/> 2. Ta til venstre inn i Storgata fra Kirkeristen. <br/> 3. Følg Storgata frem til Hausmanns gate. <br/> 4. Ta til høyre inn i Hausmanns gate. <br/> 5. Følg Hausmannsgate til Christian Krohgs gate. <br/> 6. Ta til venstre inn i Christian Krohgs gate. <br/> 7. Følg Christian Krohgs gate til Campus Fjerdingen.</div> <br/> <div class='info_tittle'> <b>Fjerdingen - Kvadraturen</b></div> <br/><br/><div class='info_text'> 1. Gå Christian Krohgs gate til Hausmanns gate. <br/> 2. Ta til høyre inn på Hausmanns gate. <br/> 3. Følg Hausmanns gate til Storgata. <br/> 4. Ta til venstre inn i Storgata. <br/> 5. Følg Storgata til Kirkeristen. <br/> 6. Gå til høyre ved Kirkeristen til Kirkegata <br/> 7. Følg Kirkegata til Campus Kvadraturen. </div>");
  });


  $('#btn_walk_vulkan_kvadraturen').click(function(){
    $("#map_image_box").attr('src','https://tek.westerdals.no/~sankar17/wp/wp-content/uploads/2018/05/kvad-vulk-gå.png');
    $('#te_information').html("<div class='info_tittle'> <b>Kvadraturen - Vulkan</b> </div> <br/><br/> <div class='info_text'>1.Følg Kirkegata til Stortorvet. <br/> 2. Ta til venstre på Stortorvet og gå til Møllergata. <br/> 3. Ta til høyre inn i Møllergata. <br/> 4. Følg Møllergata til krysset Møllergata/Hausmanns gate/ Maridalsveien. <br/> 5.	Gå skrått til venstre på Maridalsveien frem til Brenneriveien. <br/> 6. Gå inn i Brenneriveien og gå til Campus Brenneriveien ved Blå. <br/> 7. Gå til enden av Brenneriveien og kryss Møllerveien. <br/> 8. Gå forbi Dansens Hus mot Mathallen. <br/> 9. Gå forbi Mathallen og følg Vulkan opp til Campus Vulkan. </div> <br/> <div class='info_tittle'> <b>Vulkan - Kvadraturen</b> </div> <br/><br/> <div class='info_text'> 1. Gå fra Vulkan mot Mathallen. <br/> 2. Gå forbi Mathallen og Dansens Hus. <br/> 3. Kryss Møllerveien til Brenneriveien. <br/> 4. Gå til Maridalsveien. <br/> 5.	Kryss Maridalsveien/Hausmannsgate til Møllergata. <br/> 6. Følg Møllergata til Stortorvet. <br/> 7. Ta til venstre ved Stortorvet til Kirkegata. <br/> 8. Følg Kirkegata til Campus Kvadraturen. </div>");
  });

  // bus

  $('#btn_bus_fjerdingen_vulkan').click(function(){
    $('#map_image_box').attr('src','https://tek.westerdals.no/~sankar17/wp/wp-content/uploads/2018/05/fjerd-vulk-buss.png');
    $('#te_information').html("<div class='info_tittle'> <b>Fjerdingen - Vulkan</b> </div> <br/><br/> <div class='info_text'> 1. Gå fra Christian Krohgs gate til Hausmanns gate. <br/> 2. Følg Hausmanns gate til Jakob Kirke. <br/> 3. Ta 34 Tåsen eller 54 Kjelsås Stasjon til Møllerveien(Brenneriveien)/Telthusbakken(Vulkan). <br/> 4. Gå fra Møllerveien til Brenneriveien/Telthusbakken til Vulkan.</div> <br/> <div class='info_tittle'> <b>Vulkan - Fjerdingen</b> </div> <br/><br/> <div class='info_text'> 1. Gå fra Vulkan til Telthusbakken/Brenneriveien til Møllerveien. <br/> 2. Ta 34 Ekeberg Hageby eller 54 Tjuvholmen til Jakob Kirke. <br/> 3. Gå langs Hausmanns gate til Christian Krohgs gate. <br/> 4. Ta til venstre inn i Christian Krohgs gate og følg til Campus Fjerdingen.</div>");
    });


  $('#btn_bus_fjerdingen_kvadraturen').click(function(){
    $("#map_image_box").attr('src','https://tek.westerdals.no/~sankar17/wp/wp-content/uploads/2018/05/kvad-fjerd-trikk.png');
    $('#te_information').html("<div class='info_tittle'> <b>Kvadraturen - Fjerdingen</b> </div> <br/><br/><div class='info_text'> 1. Gå fra Kirkegata til Dronningens gate. <br/> 2. Ta 12 Kjelsås eller 13 Storo – Grefsen Stasjon til Hausmanns gate. <br/> 3. Gå fra Hausmanns gate til Christian Krohgs gate. <br/> 4. Ta til venstre inn i Christian Krohgs gate. <br/> 5. Følg Christian Krohgs gate til Campus Fjerdingen.</div> <br/> <div class='info_tittle'> <b>Fjerdingen - Kvadraturen</b> </div> <br/><br/><div class='info_text'> 1.	Gå fra Christian Krohgs gate til Hausmanns gate. <br/> 2. ta til høyre på Hausmanns gate og gå til Storgata. <br/> 3. Ta 12 Majorstuen eller 13 Bekkestua til Dronningens gate. <br/> 4. Gå fra Dronningens gate til Kirkegata. <br/> 5. Ta til høyre i Kirkegata og følg til Campus Kvadraturen. </div>");
  });


  $('#btn_bus_vulkan_kvadraturen').click(function(){
    $("#map_image_box").attr('src','https://tek.westerdals.no/~sankar17/wp/wp-content/uploads/2018/05/kvad-vulk-buss.png');
    $('#te_information').html("<div class='info_tittle'> <b>Kvadraturen - Vulkan</b> </div> <br/><br/><div class='info_text'> 1. Gå fra Kirkegata til Karl Johans gate. <br/> 2. Ta til høyre på Karl Johans gate og gå til Jernbanetorget. <br/> 3. Ta 34 Tåsen eller 54 Kjelsås Stasjon til Møllerveien(Brenneriveien)/Telthusbakken(Vulkan).  <br/> 4. Gå fra Møllerveien til Brenneriveien/ Gå fra Telthusbakken til Vulkan. </div> <br/> <div class='info_tittle'> <b>Vulkan - Kvadraturen</b> </div> <br/><br/> <div class='info_text'> 1.	Gå fra Vulkan til Telthusbakken/Brenneriveien til Møllerveien. <br/> 2. Ta 34 Ekeberg Hageby eller 54 Tjuvholmen til Jernbanetorget. <br/> 3. Gå fra Jernbanetorget til Karl Johans gate. <br/> 4. Ta til venstre ved Kirkegata og følg til Campus Kvadraturen.</div>");
  });

});
