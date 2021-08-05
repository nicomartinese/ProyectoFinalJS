$(".reserva").click(()=> { 
    $("main").fadeOut(200).empty().append(`
    <h2>HACÉ TU RESERVA</h2>
    <div id="container" class="container">
        
        <div class="row d-flex justify-content-center">
            <div class="col d-flex justify-content-around">
                <select class="fecha" name="dia">
                    <option >Seleccioná una fecha</option>
                    <option >Whoeves 1/04</option>
                    <option >Whoeves 8/04</option>
                    <option >Whoeves 15/04</option>
                </select>
            </div>
            <div class="col d-flex justify-content-around">
                <select class="horario" name="horario">
                    <option value="" disabled selected>Seleccioná un horario</option>
                    <option>18:30 a 20:30</option>
                    <option>20:30 a 22:30</option>
                    <option>22:30 al cierre</option>
                </select>
            </div>
        </div>
        <div class="row d-flex justify-content-center">
          <div class="col d-flex justify-content-around">
              <select name="sector" id="sector">
                  <option value="" disabled selected>Seleccioná un sector</option>
                  <option>Vereda</option>
                  <option>Adentro</option>
                  <option>Entrepiso</option>
              </select>
          </div>
          <div class="col d-flex justify-content-around">
            <input type="text" placeholder="Ingresá tu nombre" id="nombre">
          </div>
        </div>
        <div class="d-flex justify-content-center">
          <button id="reservarBtn">
            Reservar
          </button>
        </div>
        <div class="notificacion">
        </div>
    </div>
    `).fadeIn(100);
});