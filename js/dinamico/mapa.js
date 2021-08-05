$(".comoLlego").click(()=> { 
    $("main").fadeOut(200).empty().append(`
        <h2>¿CÓMO LLEGO?
        <div class="container d-flex justify-content-center">
            <iframe id="mapa"src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3285.291020322538!2d-58.460908084175756!3d-34.571502163302526!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb5d997dfb5bd%3A0xa61bfde5179fc74c!2sWho%20Bar!5e0!3m2!1ses!2sar!4v1619525341496!5m2!1ses!2sar" width="800" height="600" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
        </div>
    `).fadeIn(100);
});
