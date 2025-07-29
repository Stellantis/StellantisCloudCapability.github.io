---
layout: doc-article
permalink: /specifications/data-treatment/monitor/server-specification/
section: specifications
subsection: data-treatment
categorie: Monitor
title: Server Specification
require: swagger
redirect_from: 
    - /webapi/b2b/monitor/webhook/
    - /webapi/b2b/monitor/webhook-v3/
    - /webapi/b2b/monitor/webhook-v2/
gitHubPath: webapi/content/webapi-server-specification.md
description: "Learn how to set-up the B2B API callback server in order to receive Monitor notifications."
---
{% assign specification_reference = site.baseurl | append: "/assets/openapi/platform-notification.yaml" %}
{%- comment -%} {% assign specification_reference = "https://github.psa-cloud.com/mph00/Spec/blob/main/spec/api/convergence/data/platform-notification.yaml" %} {%- endcomment -%}

{% include_relative content/data-treatment-server-specification.md %}