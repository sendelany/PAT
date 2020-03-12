function ShowToast(header, message) {

    var displayedToasts = $('.toast');
    var lastTopPos = 70;
    var lastHeight = 0;
    var currentTop = 0;

    displayedToasts.each(function() {
        lastTopPos = $(this).position().top;
        lastHeight = $(this).height();
    });

    currentTop = lastTopPos + lastHeight + 30;

    var toast = $('<div style="top: ' + currentTop + 'px" class="toast ' + (header == "Error" ? "text-danger" : "text-dark") + '" role="alert" aria-live="assertive" aria-atomic="true">' +
        '     <div class="toast-header">' +
        '        <strong class="mr-auto">' + header + '</strong>' +
        '        <button type="button" class="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close">' +
        '          <span aria-hidden="true">&times;</span>' +
        '        </button>' +
        '      </div>' +
        '      <div class="toast-body">' +
        message +
        '      </div>' +
        '    </div>');

    // $('#toastDock').append(toast);
    $('html').append(toast);

    toast.toast({
        delay: 8000,
        animation: true,
        autohide: true
    });
    toast.toast('show');
}

function checkPasswordConfirmation(matchingField, input) {
    if (input.value != matchingField.value) {
        input.setCustomValidity('Password Must be Matching.');
    } else {
        // input is valid -- reset the error message
        input.setCustomValidity('');
    }
}

$(function() {
    var navMain = $(".navbar-collapse");
    navMain.on("click", "a:not([data-toggle])", null, function() {
        navMain.collapse('hide');
    });

    $(document).click(function(event) {
        var navMain = $(".navbar-collapse");
        navMain.collapse('hide');
    });

    // ShowToast("Error", "1. This is a test error");
    // ShowToast("Error", "2. This is a test error");
    // ShowToast("Error", "3. This is a test error");
    // ShowToast("Error", "4. This is a test error");
});

var numberOfYearsPurchased = 1;
var pricePerAnnum;