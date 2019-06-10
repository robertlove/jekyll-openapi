---
layout: null
---

{% include_relative jquery.min.js %}
{% include_relative popper.min.js %}
{% include_relative bootstrap.min.js %}

$(function() {

  // Show/hide server variables
  if ($("#servers").length && $("#servers-variables").length) {
    $("#servers").change(function() {
      var target = $("#servers option:selected").attr("id") + "-variables";
      console.log("Target", target);
      $("#servers-variables").children().each(function() {
        if ($(this).attr("id") == target) {
          $(this).removeClass("d-none");
        } else {
          $(this).addClass("d-none");
        }
      });
    });
  }

});
