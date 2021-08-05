$(".aboutUs").click(()=> { 
    $("main").fadeOut(200).empty().append(`
    <div class="nosotros container">
      <h3 class="text-center">
        Manifiesto Whoeves.
      </h3>
      <p class="text-center">
        Somos un grupo de amigos que creo un after office con el claro objetivo de darte excusas para divertirte todos los jueves. 
        Los Jueves son Whoeves, el momento que te escapas de la rutina, cortas semana o arrancas el fin de semana en @who.bar 
      </p>
    </div>
    `).fadeIn(100);
});