---
layout: null
---

{% include_relative jquery.min.js %}
{% include_relative popper.min.js %}
{% include_relative bootstrap.min.js %}

function isJSON(string) {
  try {
    JSON.parse(string);
  } catch (e) {
    return false;
  }
  return true;
}

$(function() {
  $(".language-json").each(function() {
    var string = $(this).html();
    if (isJSON(string)) {
      var json = JSON.parse(string);
      $(this).html(JSON.stringify(json, null, '  '));
    }
  });
});
