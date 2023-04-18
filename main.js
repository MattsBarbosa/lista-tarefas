$(document).ready(function(){
    $('form').on('submit', function(e){
        e.preventDefault();
        const novaTarefa = $('#nova-tarefa').val();
        $(`<li>${novaTarefa}</li>`).appendTo('ul');
        $('#nova-tarefa').val('');
    })

    $('li').on('click', function(){
        $(this).css('text-decoration', 'line-through');
    })
})
