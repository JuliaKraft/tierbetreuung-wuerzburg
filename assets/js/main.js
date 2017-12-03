$(function() {
    $('#contact-form').validate({
        debug: true,
        rules: {
            name: { required: true },
            contact: { required: true },
            content: { required: true }
        },
        errorPlacement: function(error, element) { return true },
        submitHandler: function(form) {
            $('#form-success').hide();
            $('#form-error').hide();
            $('#submit-form').prop('disabled', true);

            var name = $('#name').val();
            var contact = $('#contact').val();
            var content = $('#content').val();
            var json = '{"name":"'+name+'", "contact":"'+contact+'", "content":"'+content+'"}';
            $.ajax({
                type: 'POST',
                url: 'https://l5mi4r157b.execute-api.eu-central-1.amazonaws.com/production/contact',
                data: json,
                contentType: 'application/json',
                dataType: 'json',
                success: function(data) {
                    $('#contact-form').trigger('reset');
                    $('#form-success').show();
                    $('#submit-form').prop('disabled', false);
                },
                error: function(request, status, error) {
                    console.log(request, status, error)
                    $('#form-error').show();
                    $('#submit-form').prop('disabled', false);
                }
            });
          }
    });
});