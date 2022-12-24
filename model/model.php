<?php  
require_once "config/config.php";

class Service {

    public $db;

    public function __construct(){
        $this->db = db::conexion();
    }
}




?>