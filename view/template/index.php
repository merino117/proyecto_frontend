<?php 
	require_once "controller/controller.php";
    $controller = new administradorController();
?>
<?php include "header.php";?>
<?php include "menu.php";?>

<body>
    <div class="col-lg-8 mx-auto p-4 py-md-5">
        <main>
            
             <div class="row" style="width: 90%; max-width: 1000px; margin: auto;">
                
                &nbsp;
                <div class="card text-center">                
                    <div class="card-body">
                        <h5 class="card-title">Missions Space X</h5>
                    </div>
                </div>
                
                <?php
                $fileCmpOrigen = "https://api.spacexdata.com/v3/missions";
                $originCmpOrigen = file_get_contents($fileCmpOrigen);    
                ?> 
                <div class="row row-cols-1 row-cols-md-3 g-4">
                <?php foreach (json_decode($originCmpOrigen) as $items ) {?>
                
                    <div class="col">
                        <div class="card h-100 text-bg-light">
                            <!-- <img src="..." class="card-img-top" alt="..."> -->
                            <div class="card-body">
                                <?php echo '<h4 class="card-title">'.$items->mission_id." ".$items->mission_name.'</h4>'; ?>
                                <strong>Description</strong>  
                                <?php echo '<p class="card-text">'.$items->description.'</p>'; ?>
                                <br>
                                <strong>Reference</strong>                                
                                <?php echo '<a target="_blank" href="'.$items->wikipedia.'" class="card-text">'.$items->wikipedia.'</a>'; ?>
                                <?php echo '<a target="_blank" href="'.$items->website.'" class="card-text">'.$items->website.'</a>'; ?>
                                <?php echo '<a target="_blank" href="'.$items->twitter.'" lass="card-text">'.$items->twitter.'</a>'; ?>                                               
                            </div>
                        </div>
                    </div>                    
                
                <?php } ?>
                </div>
            <div>
		</main>
	</div>
    
    <script src="assets/js/jquery-3.5.1.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4" crossorigin="anonymous"></script>
    <script src="assets/js/addRegistro.js"></script>
    <script src="assets/js/dt.js"></script>
    <script src="assets/js/datatables.js"></script>
    <script src="assets/js/jquery.validate.js"></script>

   
</body>