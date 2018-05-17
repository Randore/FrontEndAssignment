// Form validation
// const maxTextLength = 10;
// $('#project-desc').restrictLength(maxTextLength);
$.validate({
    form: '#form-partecipate',
     modules: 'location, date, security, file',
    onError: function ($form) {
        alert('Validation of form ' + $form.attr('id') + ' failed!');
    },
    onSuccess: function ($form) {
        alert('The form ' + $form.attr('id') + ' is valid!');
        return false; // Will stop the submission of the form
    },
    onValidate: function ($form) {
        return {
            element: $('#formMessages'),
            message: 'This input has an invalid value for some reason'
        }
    },
    onElementValidate: function (valid, $el, $form, errorMess) {
        console.log('Input ' + $el.attr('name') + ' is ' + (valid ? 'VALID' : 'NOT VALID'));
    },
    errorMessagePosition: 'top',
    validateHiddenInputs: true,
});

// Validation event listeners
$('input')
    .on('beforeValidation', function (value, lang, config) {
        console.log('Input "' + this.name + '" is about to become validated');
        // Call $(this).attr('data-validation-skipped', 1); to prevent validation
    })
    .on('validation', function (evt, valid) {
        console.log('Input "' + this.name + '" is ' + (valid ? 'VALID' : 'NOT VALID'));
    });
