$(function () {
    var operation = "C"; //"C"=Crear
    var selected_index = -1; // Индекс выбранного элемента в списке
    var tblPersons = localStorage.getItem("tblPersons"); //вернуть данные, хранящиеся
    tblPersons = JSON.parse(tblPersons); 
    if (tblPersons === null) //если нет данных запустить пустой массив
        tblPersons = [];
  
    function Create() {
      //Get the values entered in the html and convert them to string
      var person = JSON.stringify({
         Nome: $("#Nome").val(),
          Telefone: $("#Telefone").val(),
          Email: $("#Email").val()
      }); 
      tblPersons.push(person);
      //Store localStorage data
      localStorage.setItem("tblPersons", JSON.stringify(tblPersons));
      return true;
    }
  
    function Edit() {
      // Изменение выбранного элемента в таблице
      tblPersons[selected_index] = JSON.stringify({
          Nome: $("#Nome").val(),
          Telefone: $("#Telefone").val(),
          Email: $("#Email").val()
      });
      //Armazenar os itens em localStorage
      localStorage.setItem("tblPersons", JSON.stringify(tblPersons)); 
      alert("The data has been edited"); //Mensaje de alerta
      return true;
    }
  
    function Delete() {
      //Eliminar el elemento seleccionado en la tabla
      tblPersons.splice(selected_index, 1); 
      //Actualizar los datos del Local Storage
      localStorage.setItem("tblPersons", JSON.stringify(tblPersons)); 
    }
  
    function List() {
      $("#tblList").html("");
      $("#tblList").html(
              "<thead>" +
              "<tr>" +                
              "<th>Name</th>" +
              "<th>Telephone</th>" +
              "<th>Email</th>" +
              "<th>Action</th>" +
              "</tr>" +
              "</thead>" +
              "<tbody>" +
              "</tbody>"
              ); 
      for (var i in tblPersons) {
          var per = JSON.parse(tblPersons[i]);
          $("#tblList tbody").append("<tr>" +                    
                  "<td>" + per.Nome + "</td>" +
                  "<td>" + per.Telefone + "</td>" +
                  "<td>" + per.Email + "</td>" +                 
                                     
                   "<td><img src='http://res.cloudinary.com/demeloweb/image/upload/v1497537879/edit_n51oto.png' alt='Edit" + i + "' class='btnEdit'/>&nbsp &nbsp<img src='http://res.cloudinary.com/demeloweb/image/upload/v1497537882/delete_ntuxjl.png' alt='Delete" + i + "' class='btnDelete'/></td>" +                  
                  
                  "</tr>"
                  );
      }
    }
  
    $("#frmPerson").bind("submit", function () {
      if (operation === "C")
          return Create();
      else
          return Edit();
    }); 
    
    List();
  
    $(".btnEdit").bind("click", function () {
      operation = "E"; //"E" = Editar
      //Obter o identificador do item a ser editado
      selected_index = parseInt($(this).attr("alt").replace("Edit", ""));
      //Converter JSON no formato adequado para os itens serem editados
      var per = JSON.parse(tblPersons[selected_index]); 
      $("#Nome").val(per.Nome);
      $("#Telefone").val(per.Telefone);
      $("#Email").val(per.Email);
    
    });
  
    $(".btnDelete").bind("click", function () {
      //OObter o identificador do item a ser deletado
      selected_index = parseInt($(this).attr("alt").replace("Delete", "")); 
      Delete(); //eliminar o item
      List(); //Voltar aos itens listados na tabela
    });
  });



//   ===============animation=================
$(function() {

    $('.pages').click(function(){
        $('.listfunc').animate({"height"  : 'toggle'}, 'fast' );
        });

});

function initMap(){
    var pos = {lat: 43.2352870755837,  lng:76.90972334070497};
    var obj = {
        center: pos,
        zoom: 15,
    };
    var myMaps = new google.maps.Map(document.getElementById("location"), obj);

    var marker = new google.maps.Market({
        position: pos,
        map: myMaps,
        title: "IITU",

    });
}



    $(document).ready(function(){
        $('.admin__photo').click(function(){
          $('.acc').animate({"height"  : 'toggle'}, 'fast' );
          });

        $('.admin__photo2').click(function(){
        $('.acc2').animate({"height"  : 'toggle'}, 'fast' );
        });
      });