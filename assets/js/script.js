---
layout: null
---

{% include_relative jquery.min.js %}
{% include_relative popper.min.js %}
{% include_relative bootstrap.min.js %}

$(function() {

  // Servers

  // If there is more than one server
  if ($("#servers-2").length) {

    // When the user changes servers
    $("#servers").change(function() {

      var server = $("#servers option:selected").attr("id");

      // Show/hide the server description
      var description = server + "-description";

      $(".servers-description").each(function() {
        if ($(this).attr("id") == description) {
          $(this).removeClass("d-none");
        } else {
          $(this).addClass("d-none");
        }
      });

      // If there are server variables
      if ($(".servers-variables").length) {

        var variables = server + "-variables";

        // Show/hide the server variables
        $(".servers-variables").each(function() {
          if ($(this).attr("id") == variables) {
            $(this).removeClass("d-none");
          } else {
            $(this).addClass("d-none");
          }
        });

      }

    });

    // var text = $("#servers-1-url-computed").val()
    // console.log(text);
    // text = text.replace("{username}", "demo");
    // console.log(text);
    // text = text.replace("{port}", "443");
    // console.log(text);
    // text = text.replace("{version}", "v3");
    // console.log(text);

  }

});
