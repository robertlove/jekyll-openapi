---
layout: null
---

{%- assign api = site.data.openapi -%}

{%- include_relative jquery.min.js -%}
{%- include_relative popper.min.js -%}
{%- include_relative bootstrap.min.js -%}
{%- include_relative prism.min.js -%}

$(function() {
  {%- if api.components.schemas -%}
    {%- for schema in api.components.schemas -%}
      var {{ schema[0] }} = {% include json_from_schema.html schema=schema %};
      console.log({{- schema[0] -}});
      $("[data-ref='{{- schema[0] -}}']").html(JSON.stringify({{- schema[0] -}}, null, '  '));
    {%- endfor -%}
  {%- endif -%}
  Prism.highlightAll();
});
