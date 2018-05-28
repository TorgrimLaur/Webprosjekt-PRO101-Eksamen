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
    $('#map_image_box').attr('src','https://tek.westerdals.no/~sankar17/wp/wp-content/uploads/2018/05/fjerd-vulk-gå.png');
    $('#te_information').text("1. Følg Christian Krohgs gate til Storgata. \n 2. Kryss Storgata til Axel Maurers vei. \n 3. Følg Axel Maurers vei og ta til høyre mot Akerselva. \n 4. Følg gangveien langs Akerselva forbi Ankerbrua. \n 5. Følg gangveien og kryss broen til Nedre Gate. \n 6. Følg Nedre gate og ta til venstre inn i Ingens gate. \n 7. Følg Ingens gate og ta til høyre inn i Brenneriveien. \n 8. Følg Brenneriveien til Møllerveien og kryss mot Dansens Hus. \n 9. Følg Vulkan forbi Dansens Hus og Mathallen. \n 10. Følg Vulkan til Campus Vulkan. \n 1. Følg Vulkan forbi Mathallen og Dansens Hus. \n 2. Kryss Møllerveien til Brenneriveien. \n 3. Følg Brenneriveien til Ingens gate. \n 4. Ta til venstre inn i Ingens gate og følg til Nedre gate. \n 5. Ta til høyre inn i Nedre gate og kryss broen over Akerselva. \n 6. Ta til venstre på gangveien og følg til Axel Maurers vei. \n 7. Gå fra Axel Maurers vei til Storgata. \n 8. Kryss Storgata til Christian Krohgs gate. \n");
    });

  $('#btn_walk_fjerdingen_kvadraturen').click(function(){
    $("#map_image_box").attr('src','https://tek.westerdals.no/~sankar17/wp/wp-content/uploads/2018/05/kvad-fjerd-gå.png');
    $('#te_information').text("1. Følg Kirkegata til Kirkeristen. \n 2. Ta til venstre inn i Storgata fra Kirkeristen. \n 3. Følg Storgata frem til Hausmanns gate. \n 4. Ta til høyre inn i Hausmanns gate. \n 5. Følg Hausmannsgate til Christian Krohgs gate. \n 6. Ta til venstre inn i Christian Krohgs gate. \n 7. Følg Christian Krohgs gate til Campus Fjerdingen. \n 1. Gå Christian Krohgs gate til Hausmanns gate. \n 2. Ta til høyre inn på Hausmanns gate. \n 3. Følg Hausmanns gate til Storgata. \n 4. Ta til venstre inn i Storgata. \n 5. Følg Storgata til Kirkeristen. \n 6. Gå til høyre ved Kirkeristen til Kirkegata \n 7. Følg Kirkegata til Campus Kvadraturen.");
  });


  $('#btn_walk_vulkan_kvadraturen').click(function(){
    $("#map_image_box").attr('src','https://tek.westerdals.no/~sankar17/wp/wp-content/uploads/2018/05/kvad-vulk-gå.png');
    $('#te_information').text("1.Følg Kirkegata til Stortorvet. \n 2. Ta til venstre på Stortorvet og gå til Møllergata. \n 3. Ta til høyre inn i Møllergata. \n 4. Følg Møllergata til krysset Møllergata/Hausmanns gate/ Maridalsveien. \n 5.	Gå skrått til venstre på Maridalsveien frem til Brenneriveien. \n 6. Gå inn i Brenneriveien og gå til Campus Brenneriveien ved Blå. \n 7. Gå til enden av Brenneriveien og kryss Møllerveien. \n 8. Gå forbi Dansens Hus mot Mathallen. \n 9. Gå forbi Mathallen og følg Vulkan opp til Campus Vulkan. \n 1. Gå fra Vulkan mot Mathallen. \n 2. Gå forbi Mathallen og Dansens Hus. \n 3. Kryss Møllerveien til Brenneriveien. \n 4. Gå til Maridalsveien. \n 5.	Kryss Maridalsveien/Hausmannsgate til Møllergata. \n 6. Følg Møllergata til Stortorvet. \n 7. Ta til venstre ved Stortorvet til Kirkegata. \n 8. Følg Kirkegata til Campus Kvadraturen.");
  });

  // bus

  $('#btn_bus_fjerdingen_vulkan').click(function(){
    $('#map_image_box').attr('src','https://tek.westerdals.no/~sankar17/wp/wp-content/uploads/2018/05/fjerd-vulk-buss.png');
    $('#te_information').text("1. Gå fra Christian Krohgs gate til Hausmanns gate. \n 2. Følg Hausmanns gate til Jakob Kirke. \n 3. Ta 34 Tåsen eller 54 Kjelsås Stasjon til Møllerveien(Brenneriveien)/Telthusbakken(Vulkan). \n 4. Gå fra Møllerveien til Brenneriveien/Telthusbakken til Vulkan. \n 1. Gå fra Vulkan til Telthusbakken/Brenneriveien til Møllerveien. \n 2. Ta 34 Ekeberg Hageby eller 54 Tjuvholmen til Jakob Kirke. \n 3. Gå langs Hausmanns gate til Christian Krohgs gate. \n 4. Ta til venstre inn i Christian Krohgs gate og følg til Campus Fjerdingen.");
    });


  $('#btn_bus_fjerdingen_kvadraturen').click(function(){
    $("#map_image_box").attr('src','https://tek.westerdals.no/~sankar17/wp/wp-content/uploads/2018/05/kvad-fjerd-trikk.png');
    $('#te_information').text("1. Gå fra Kirkegata til Dronningens gate. \n 2. Ta 12 Kjelsås eller 13 Storo – Grefsen Stasjon til Hausmanns gate. \n 3. Gå fra Hausmanns gate til Christian Krohgs gate. \n 4. Ta til venstre inn i Christian Krohgs gate. \n 5. Følg Christian Krohgs gate til Campus Fjerdingen. \n 1.	Gå fra Christian Krohgs gate til Hausmanns gate. \n 2. ta til høyre på Hausmanns gate og gå til Storgata. \n 3. Ta 12 Majorstuen eller 13 Bekkestua til Dronningens gate. \n 4. Gå fra Dronningens gate til Kirkegata. \n 5. Ta til høyre i Kirkegata og følg til Campus Kvadraturen.");
  });


  $('#btn_bus_vulkan_kvadraturen').click(function(){
    $("#map_image_box").attr('src','https://tek.westerdals.no/~sankar17/wp/wp-content/uploads/2018/05/kvad-vulk-buss.png');
    $('#te_information').text("1. Gå fra Kirkegata til Karl Johans gate. \n 2. Ta til høyre på Karl Johans gate og gå til Jernbanetorget. \n 3. Ta 34 Tåsen eller 54 Kjelsås Stasjon til Møllerveien(Brenneriveien)/Telthusbakken(Vulkan). \n 4. Gå fra Møllerveien til Brenneriveien/ Gå fra Telthusbakken til Vulkan. \n 1.	Gå fra Vulkan til Telthusbakken/Brenneriveien til Møllerveien. \n 2. Ta 34 Ekeberg Hageby eller 54 Tjuvholmen til Jernbanetorget. \n 3. Gå fra Jernbanetorget til Karl Johans gate. \n 4. Ta til venstre ved Kirkegata og følg til Campus Kvadraturen.");
  });

});
