$(document).ready(onReady);

function onReady(){
    //console. log('JQuery is ready')
    getTestData();
    $('#addPerson').on('click', addPerson)
}

function addPerson(){
    $.ajax({
        type: 'POST',
        url: '/tester',
        data:{ //will become req.body
            name: 'Dane'
        }
    }).then(function(response){
        console.log(response);
        //DOM doesn't reflect array on server. Do another GET
        getTestData();
    }).catch(function(){
        alert('ERROR IN POST')
    })
}

function getTestData(){
    console.log('in getTestData')
    //AJAX GET call to /tester
    $.ajax({
        type: 'GET',
        url: '/tester'
    }).then(function(response){
        console.log('back from the server with:', response)
        appendToDom(response)
    }).catch(function(err){
        alert('problem! check the console.');
        console.log(err);
    })
}//end

function appendToDom(listOfPeople){
    //target ul, add person to DOM
    $('#personList').empty();
    for(let person of listOfPeople)
    $('#personList').append(`<li>${person}</li>`)
}