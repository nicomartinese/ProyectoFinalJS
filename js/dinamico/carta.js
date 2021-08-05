$(".carta").click(()=> { 
    $("main").fadeOut(200).empty().append(`
      <h2>ENCONTRÁ TU PLATO</h2>
      <div class="d-flex justify-content-center">
        <iframe src="media/archivos/WHO BAR MENU.pdf#toolbar=0" width="400px" height="800px"></iframe>
      </div>
    `).fadeIn(100);
});