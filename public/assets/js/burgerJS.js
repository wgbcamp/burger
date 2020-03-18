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

// $("#devour").click(function(event){
//     event.preventDefault();
//     $.ajax("/api/burgers", {
//         type: "PUT",
//         data: 
//     })
// })



