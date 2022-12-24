<?php

class administradorController{
    // public $datos;

    public function __construct(){
        require_once 'model/model.php';         
    }
     
    // MOSTRAR
    function index(){			
        require_once('view/template/index.php');
	}

    function dtTabla(){           
        require_once('view/template/details.php');
    }    

    function detalles(){           
        require_once('view/template/info.php');
    }        
}