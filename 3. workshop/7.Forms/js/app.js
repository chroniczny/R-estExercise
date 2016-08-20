/**
 * Created by jakub_000 on 2016-08-18.
 */
$(document).ready(function () {
    console.log('działa');
    var form = $('form');
    var name = form.find('#nameInput');
    var email = form.find('#emailInput');
    var message = form.find('#messageInput');
    var errDiv = form.find('.error');
    var btnSbmt = form.children().last();
    console.log(btnSbmt.attr('type'));

    //form.on('click', function(event){ // przenoszę to jednak do warunków...
    //    event.preventDefault();
    //});

    btnSbmt.on('click', function(){
        var nameInpt = name.val();
        var emailInpt = email.val();
        var messageInpt = message.val();
        var validEmail = /[^@]+@[^@]+[.]+[a-z]+$/.test(emailInpt); // testujemy pobrany string
                       // nie@ + @ nie@ + '.' + litery aż do końca

        if (nameInpt.length<5) {
            errDiv.text('Your name need at least 5 signs');
            event.preventDefault();
            return;
        }
        if (!validEmail) {
            errDiv.text('Your email is invalid');
            event.preventDefault();
            return;
        }
        if (messageInpt.length<=10) {
            errDiv.text('Your message need at least 10 signs');
            event.preventDefault();
            return;
        }
    })
});