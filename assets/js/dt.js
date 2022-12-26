var table;

function show_loader_wrapper() {
    document.getElementsByClassName("spinner")[0].style.display = "block";
    document.getElementById("loader").style.display = "block";
}

function hide_loader_wrapper() {
    document.getElementsByClassName("spinner")[0].style.display = "none";
    document.getElementById("loader").style.display = "none";
}

window.onload = function(){     
show_loader_wrapper();
dtDatos(); 
    table = $('#reg').DataTable({
        
        "pageLength": 10,
        "responsive": true,
        "paging": true,
        "dom": 'Bfrtip',        
        "buttons": [ {
            "extend": 'excelHtml5',
            "autoFilter": true,
            "sheetName": 'Exported data'
        } ],
        "createdRow": function( row, data, dataIndex ) {
            if ( data[4] == "PENDIENTE" ) {        
                $(row).addClass('blue');
            }else if(data[4] == "PAGADO"){                
                $(row).addClass('green');
            }
        },
        "select": true,
        "oLanguage": {
            "sProcessing": "Procesando...",
            "sLengthMenu": "Mostrar _MENU_ registros",
            "sZeroRecords": "No se encontraron resultados",
            "sEmptyTable": "Ningún dato disponible en esta tabla",
            "sInfo": "Mostrando registros del _START_ al _END_ de un total de _TOTAL_ registros",
            "sInfoEmpty": "Mostrando registros del 0 al 0 de un total de 0 registros",
            "sInfoFiltered": "(filtrado de un total de _MAX_ registros)",
            "sInfoPostFix": "",
            "sSearch": "Buscar:",
            "sSearchPlaceholder": "Buscar:",
            "sUrl": "",
            "sInfoThousands": ",",
            "sLoadingRecords": "Cargando...",
            "oPaginate": {
                "sFirst": "Primero",
                "sLast": "Último",
                "sNext": "Siguiente",
                "sPrevious": "Anterior"
            },
            "oAria": {
                "sSortAscending": ": Activar para ordenar la columna de manera ascendente",
                "sSortDescending": ": Activar para ordenar la columna de manera descendente"
            }
        },
        // "order": [[ 2, "decs" ]],
        "fnInitComplete": function (oSettings, json) {
            $('.dataTables_filter input').attr("placeholder", " Busqueda");
        }
    });
}

var parametro;
function dtDatos(datos){
    $.ajax({
        type: 'GET',
        url: 'https://api.spacexdata.com/v3/launches',      
        dataType: 'json',
        success: function(response){
            var rows = table.rows().remove().draw();
            $.each(response, function(index, value) {
                var id = value.flight_number;
                var name = value.mission_name;
                var year = value.launch_year;
                var years = value.launch_date_local;
                var utc = value.launch_date_utc;
                var success = value.launch_success;
                var details = value.details;
                var rocket = value.rocket;
                var rocket_type =rocket['rocket_type'];
                var rocket_name =rocket['rocket_name'];
                var links = value.links;
                var links_wiki = links['wikipedia'];
                var links_youtube = links['video_link'];
                var links_img = links['mission_patch_small'];
                var example = [id+";"+name+";"+year+";"+years+";"+success+";"+details+";"+rocket_type+";"+rocket_name+";"+links_wiki+";"+links_youtube+";"+links_img];                    

                var icon;
                if(success){
                    icon = '<a idReg="' + example + '" class="obtener" style="cursor:pointer;" title="ver"><i style="color: #02fb02; margin-left: 25px;" class="fa fa-check-circle-o fa-2x" aria-hidden="true"></i></a>';
                    // icon = '<button type="button" idReg="' + example + '" class="obtener btn btn-light" style="cursor:pointer;"><i style="color: #02fb02; margin-left: 25px;" class="fa fa-check-circle-o fa-2x" aria-hidden="true">VER</button>';
                }else{
                    icon = '<i style="color: red; margin-left: 25px;" class="fa fa-times fa-2x" aria-hidden="true"></i>';
                }

                table.row.add([
                    id,
                    name,                    
                    year,                
                    years,
                    icon
                ]).draw().node();
                hide_loader_wrapper()

            });
        }, error: function(err) {
            console.log(err);
            hide_loader_wrapper();
        }
    });
}

var id;
$(document).on('click', '.obtener', function(){
    id = $(this).attr("idReg");
    enviarDatos(id);
});

function enviarDatos(id){
    localStorage.clear();
    localStorage.setItem("valores",id);
    window.location.href = "index.php?c=administrador&m=detalles";
}