var today = new Date();
var year = today.getUTCFullYear();
$("body").append(`
<footer>
    <div class="container">
        <div class="row">
            <div class="col-6">
                <h5> © ${year} Whoeves. </h5>
            </div>
            <div class="col-6">
                <h5>Encontranos en las redes sociales como @whoeves</h5>
            </div>
        </div>
    </div>
</footer>
`);