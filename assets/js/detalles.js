function show_loader_wrapper() {
    document.getElementsByClassName("spinner")[0].style.display = "block";
    document.getElementById("loader").style.display = "block";
}

function hide_loader_wrapper() {
    document.getElementsByClassName("spinner")[0].style.display = "none";
    document.getElementById("loader").style.display = "none";
}

window.onload = function(){
    dtDatos();
}


function dtDatos(){
    var vls = localStorage.getItem("valores");

    var spli = vls.split(';');    
    var p_id = spli[0];
    var p_nombre = spli[1];
    var p_ano_lanzamiento = spli[2];
    var p_año_trans = spli[3];
    var p_statuss = spli[4];
    if(p_statuss == "true"){
        p_status = "Success";
    }else{
        p_status = "Failed";
    }
    var p_detalles = spli[5];
    if(p_detalles == "null"){
        p_detalle = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
    }else{
        p_detalle = p_detalles;
    }
    var p_tipo = spli[6];
    var p_tipo_nombre = spli[7];
    var p_wikipedia = spli[8];
    var p_youtube = spli[9];
    var p_img = spli[10];

    var splitV = p_youtube.split("=");
    var idCOdigo = splitV[1];
    var new_ruta = "https://www.youtube.com/embed/"+idCOdigo;

    // var id = document.getElementById("ids");
    // var txt = document.createElement("h4");
    // txt.innerHTML = "FLIGHT NUMBER: " + p_id;
    // id.appendChild(txt);


    var id = document.getElementById("idNombre");
    var txt = document.createElement("h1");
    txt.innerHTML =  p_nombre;
    id.appendChild(txt);

    var id = document.getElementById("idAno");
    var txt = document.createElement("p");
    txt.innerHTML = "Release year: " + p_ano_lanzamiento;
    id.appendChild(txt);

    var id = document.getElementById("idSts");
    var txt = document.createElement("p");
    txt.innerHTML = "Status: " + p_status;
    id.appendChild(txt);

    var idD = document.getElementById("idDetalle");
    var txtP = document.createElement("p");
    txtP.className = "fs-5 col-md-8";
    txtP.innerHTML = p_detalle;
    idD.appendChild(txtP);

    var id = document.getElementById("idTipo");
    var txt = document.createElement("p");
    txt.innerHTML = "Type: " +p_tipo;
    id.appendChild(txt);

    var id = document.getElementById("idTipNom");
    var txt = document.createElement("p");
    txt.innerHTML = "Rocket: " + p_tipo_nombre ;
    id.appendChild(txt);

    var id = document.getElementById("idWiki");
    var txt = document.createElement("a");
    txt.setAttribute("target", "_blank");
    txt.setAttribute("href", p_wikipedia);
    txt.innerHTML = p_wikipedia;
    id.appendChild(txt);

    var id = document.getElementById("idVideo");
    var txt = document.createElement("iframe");
    txtP.className = "tamano";
    txt.setAttribute("src", new_ruta);
    txt.innerHTML = p_tipo + p_tipo_nombre ;
    id.appendChild(txt);

    var id = document.getElementById("idImg");
    var txt = document.createElement("img");
    txt.className = "imgs";
    txt.setAttribute("src", p_img);
    // txt.innerHTML = "Rocket: " + p_tipo_nombre ;
    id.appendChild(txt);

    hide_loader_wrapper();
    
}


 let palabra = "AnacondaAnaA"
    
    let convertida = Array.from(palabra)
    let resultado = convertida.reduce((total = 0, elemento) => {
      if(elemento === "A") {
        total = total + 1
      }
      return total
    }, 0)
    console.log(resultado)