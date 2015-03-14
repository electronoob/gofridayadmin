$(document).ready(function() {
      $("#submit").submit(function(event) {
        event.preventDefault();

        var $form = $(this),
          key = $form.find("input[name='key']").val(),
          value = $form.find("input[name='value']").val(),
          url = '/api/set/shoutbox/'

        var posting = $.post(url, {
          Key: key,
          Value: value,
          Page: 0,
          App: "Shoutbox",
          User: "Demo"
        });

        posting.done(function(data) {
          $("#result").empty().append(data);
        });
      });
      $("#request").submit(function(event) {
        event.preventDefault();
        var $form = $(this),
          url = '/api/get/shoutbox/',
          term = $form.find("input[name='skey']").val(),
          posting = $.post(url, {
            Key: term,
            App: "Shoutbox",
            User: "Demo"
          });

        posting.done(function(data) {
		if (data === "") {
		  var returnString = "Not found!"
		} else {
          var returnString = "GET for " + JSON.stringify(data);
		}
          $("#result").empty().append(returnString);
        });
      });
});
