<?php  
require_once "config/config.php";
require_once "controller/controller.php";

if(!isset($_REQUEST['c'])){
	
	$controller = new administradorController();
	$controller->index();

}else{	
	$controller = $_REQUEST['c'];

	if(file_exists('controller/controller.php')){		

        $controller = $controller.'Controller';

		$controller = new $controller;

		$method = isset($_REQUEST['m']) ? $_REQUEST['m'] : 'index';

			if(method_exists($controller,$method)){

				call_user_func(array($controller,$method));	
			}else{
				echo 'Error - 1';
			}
	}else{
		echo 'Error - 2';
	}
}


?>