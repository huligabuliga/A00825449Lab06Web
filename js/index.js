//intente various maneras y nunca agrego a la lista nada... espero verte en asesoria, igual aqui esta mi intento

function shoppingList() {

    const listItem = $('.inputText').val();
    $('.lista').append('<li>' + text +'</li>' ); 



}

$(shoppingList);


/*

    $("#shoppingForm").on('submit', function(){
    var text = $('#list-item').val();
    $('#lista').append('<li>' + text + '</li>');

});


/*
$("#newText").on("click", function(){

    $("#Lista").append("<li> </li>
                        <button class = """check"""> check </button> 
                        <button class = """del"""> check </button>)

                      
})

$("list").on("click", ".del", function() {
    $(this).parent().remove()
    }   
)

$("list").on("click", ".check", function() {
    $(this).prev().toggleClass(".chec")

    }   
)

//.chec > p{
//    text-decoration: line-through;