$("#add").click(function(event){
    event.preventDefault();
    var AddBurger = $("#help").val();

    console.log("A burger has been forged!");
    $.ajax("/api/burgers", {
        type: "POST",
        data: {"myData":AddBurger}
    }).then(
        function(data){
            console.log(AddBurger);
             location.reload();
        }
    );
});



$(".devour").click(function(event){
    event.preventDefault();
    var id = $(this).data("id");
    var newDevoured = $(this).data("devoured");  
    location.reload();
    
    console.log("id is" + id);
    console.log("devoured" + newDevoured);

    $.ajax("/api/burgers" + id, {
        type: "PUT",
        data: newDevoured
    }).then(
        function(data){
            
        }
    );

 });
