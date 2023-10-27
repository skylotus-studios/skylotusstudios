$(document).ready(function() {
    $("form").submit(function(event) {
        event.preventDefault(); // Prevent the form from submitting via the browser.

        var formData = $(this).serialize(); // Serialize the form data for submission

        $.ajax({
            type: "POST",
            url: $(this).attr("action"), // Your Mailchimp action URL
            data: formData,
            cache: false,
            dataType: "json",
            contentType: "application/x-www-form-urlencoded",
            success: function(response) {
                if (response.result === 'success') {
                    alert('Thanks for subscribing!');
                } else {
                    alert('Error: ' + response.msg);
                }
            },
            error: function(err) {
                alert('Could not connect to the registration server. Please try again later.');
            }
        });
    });
});
