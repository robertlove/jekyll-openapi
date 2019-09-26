---
layout: null
---

{% assign api = site.data.openapi %}

{% include_relative jquery.min.js %}
{% include_relative popper.min.js %}
{% include_relative bootstrap.min.js %}

{% if api.components.schemas %}
  $(function() {
    {% for schema in api.components.schemas %}
      {% assign type = schema[1].type %}
      {% assign properties = schema[1].properties %}
      var {{ schema[0] }} = {% include json.html type=type properties=properties %};
      console.log({{ schema[0] }});
      $("[data-ref='{{ schema[0] }}']").html(JSON.stringify({{ schema[0] }}, null, '  '));
    {% endfor %}
  });
{% endif %}
