$(function () {

    var namE = $('#name');
    var emaiL = $('#email');
    var submitBtn = $('#submitBtn');
    var infoDiv = $('#info');

    $('form').on('click', function (event) { // blokuję przeładowanie trony na formularzu
        event.preventDefault();
    });

    function myR() {
        infoDiv.text('Hello nice to see U... please wait for a while...');
        if ((submitBtn).prop('disabled', true)) { // po uruchomieniu guzika na czas gdy guzik jest nieaktywny
            infoDiv.text("Trwa wczytywanie..."); // div-info pokazuje komunikat
            $('form').fadeOut(); // formularz znika
        }
        $.ajax({
            url: 'http://showcase.itdotfocus.com/rest_simple.php',
            type: 'POST', // bo zapytanie polega na wysłaniu danych 'data'
            dataType: 'json', // odpowiedź będzie json
            data: {
                name: namE.val(), // przekazuję dane z inputa name
                email: emaiL.val() // j.w. email
            }
        }).done(function (ans) {
            if (ans.result == false) { // gdy odpowiedź jest niezgodna (nie spełnia warunków? brak takiego atrybutu)
                console.log(ans.error); //
                infoDiv.text(ans.error); // wypisuje w info: wiadomość o błędzie

            } else {
                infoDiv.text(ans.login); // gdy jest spełniony wynikiem jest info: LOGIN
            }
            namE.val(''); // czyścimy inputy po wczytaniu
            emaiL.val(''); // j.w.
            $('form').fadeIn(); // pojawia się formularz


        }).fail(function () {
            infoDiv.text('Sorry... Something wrong'); // gdyby poszło coś nie tak...
        })

    }

    $('#submitBtn').on('click', function () { // po kliknięciu submit
        myR();  // uruchamiamy funkcję 'POST' itd
        $('#submitBtn').prop('disabled',false); // następnie guzik submita musi stać się aktywny dla kolejnych działań

    })

});