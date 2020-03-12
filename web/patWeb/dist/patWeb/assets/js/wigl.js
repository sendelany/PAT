function wireupClientEvents() {

    // tinymce.init({
    //     selector: '.rich-text-formater'
    // });

    $('.tab-pane, a[data-toggle="tab"]').on('show.bs.tab', function(e) {
        //   e.target // newly activated tab
        //   e.relatedTarget // previous active tab

        //alert('shown');
        $("html, body").animate({
            scrollTop: 0
        }, "fast");

        if (!validForm(getTabForm(e.relatedTarget))) {
            e.preventDefault();
            e.stopPropagation();
            return false;
        }
    });


    //alert('wiring up!');

    (function() {
        'use strict';
        window.addEventListener('load', function() {
            // Fetch all the forms we want to apply custom Bootstrap validation styles to
            var forms = document.getElementsByClassName('needs-validation');
            // Loop over them and prevent submission
            var validation = Array.prototype.filter.call(forms, function(form) {
                form.addEventListener('submit', function(event) {
                    if (document.activeElement.getAttribute('value') == 'validate-parent-form') {
                        if (form.checkValidity() === false) {
                            event.preventDefault();
                            event.stopPropagation();
                            //alert('invalid');
                        }
                        form.classList.add('was-validated');
                    }
                }, false);
            });
        }, false);
    })();
}

function validateLists(event) {
    var button = event.target || event.srcElement || event.currentTarget;
    if (!validForm(getButtonForm(button))) {
        event.preventDefault();
        event.stopPropagation();
        return false;
    } else
        return true;
}

function getButtonForm(button) {
    var form = $(button).closest('form')[0];
    return form;
}

function getTabForm(tabReferenceLink) {
    var tab = $(tabReferenceLink.hash);
    var form = tab.find('form')[0];

    return form;
}

function validForm(form) {

    if (form == null) return true;

    var validParticipants = true;

    if ($(form).find('.participants').length > 0) {

        $(form).find('.participants').removeClass('invalid-card').addClass('valid-card').addClass('validated');

        if ($(form).find('.participants').find('.participant').length < 1) {
            validParticipants = false;
            $(form).find('.participants').removeClass('valid-card').addClass('invalid-card');
        }
    }

    var pageInvalidMessage = $('#pageInvalidMessage');

    if (form.checkValidity() === false || !validParticipants) {
        ShowToast('Error', 'There are some validation errors in your form. Please correct before proceeding');
        form.classList.add('was-validated');
        if (pageInvalidMessage) pageInvalidMessage.show();
        return false;
    } else {
        form.classList.add('was-validated');
        if (pageInvalidMessage) pageInvalidMessage.hide();
        return true;
    }
}

function validNearestForm(button) {

    var form = $(button).closest('form')[0];

    if (form == null) return true;

    var formInvalidMessage = $('.form-errors');

    if (form.checkValidity() === false) {
        //ShowToast('Error', 'There are some validation errors in your form. Please correct before proceeding');
        form.classList.add('was-validated');
        if (formInvalidMessage) formInvalidMessage.show();
        return false;
    } else {
        form.classList.remove('was-validated');
        if (formInvalidMessage) formInvalidMessage.hide();
        return true;
    }
}

function closeModal() {
    $('.modal').modal('hide');
}

function revalidateParicipants(container) {

    if ($('#' + container).hasClass('validated')) {

        $('#' + container).removeClass('invalid-card').removeClass('valid-card').removeClass('validated');
    }
}