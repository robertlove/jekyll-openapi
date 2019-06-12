---
layout: null
---

{% include_relative jquery.min.js %}
{% include_relative popper.min.js %}
{% include_relative bootstrap.min.js %}

$(function() {

  // Servers
  if ($("#servers").length && $(".servers-variables").length) {

    // Show/hide server variables
    $("#servers-url").change(function() {
      var target = $("#servers option:selected").attr("id") + "-variables";
      console.log("Target", target);
      $(".servers-variables").each(function() {
        if ($(this).attr("id") == target) {
          $(this).removeClass("d-none");
        } else {
          $(this).addClass("d-none");
        }
      });
    });

    var text = $("#servers-1-url-computed").val()
    console.log(text);
    text = text.replace("{username}", "demo");
    console.log(text);
    text = text.replace("{port}", "443");
    console.log(text);
    text = text.replace("{version}", "v3");
    console.log(text);

  }

});
