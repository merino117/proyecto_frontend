
<?php include "header.php";?>
<?php include "menu.php";?>

<div class="col-lg-8 mx-auto p-4 py-md-5">
    <main>
        <div class="card border-light">
          <div class="card-body">
            <div style="text-align: center;" id="idNombre"></div>
          </div>
        </div>        
        &nbsp;
        <div class="card-group">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Type</h5>
              <div id="idAno"></div>
              <div id="idSts"></div>
              <div id="idTipo"></div>
              <div id="idTipNom"></div>
              <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
            </div>
          </div>
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Details</h5>              
              <div id="idDetalle"></div>
              <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
            </div>
          </div>
          <div class="card">
            <div class="card-body">
              <h5 style="text-align: center;" class="card-title">Image</h5>
              <div style="text-align: center;" id="idImg"></div>   
              <h5 class="card-title">Reference</h5>
              <div id="idWiki"></div>
              <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
            </div>
          </div>
        </div>
        <!-- &nbsp; -->
        <hr class="col-3 col-md-12 mb-5">
        <div class="card border-light text-center">                    
            <h5 class="card-title">Special Video</h5>
            <div id="idVideo"></div>                           
        </div>    

        
    </main>
  
</div>
<br>

<script src="assets/js/jquery-3.5.1.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4" crossorigin="anonymous"></script>
<script src="assets/js/detalles.js"></script>
<script src="assets/js/datatables.js"></script>