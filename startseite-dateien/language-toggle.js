$('[lang]').hide(); // hide all lang attributes on start.
$('[lang="de"]').show(); // show just German text (you can change it)

function updateDropdownText() {
        var lang = $('#lang-switch').val();
        if (lang === 'en') {
            $('#lang-switch option[value="de"]').text('Deutsch');
            $('#lang-switch option[value="en"]').text('English');
        } else {
            $('#lang-switch option[value="de"]').text('Deutsch');
            $('#lang-switch option[value="en"]').text('English');
        }
    }

    // Call updateDropdownText on page load
    updateDropdownText();

$('#lang-switch').change(function () { // put onchange event when user select option from select
    var lang = $(this).val(); // decide which language to display using switch case. The rest is obvious (i think)
    switch (lang) {
        case 'en':
            $('[lang]').hide();
            $('[lang="en"]').show();
        break;
        case 'de':
            $('[lang]').hide();
            $('[lang="de"]').show();
        break;
        default:
            $('[lang]').hide();
            $('[lang="de"]').show();
        }
});