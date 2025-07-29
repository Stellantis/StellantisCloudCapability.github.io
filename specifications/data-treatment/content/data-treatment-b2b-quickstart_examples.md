---
layout: doc-article
permalink: /specifications/data-treatment/quickstart/b2b/examples
section: specifications
subsection: data-treatment
categorie: Quickstart
title: Examples
gitHubPath: webapi/content/webapi-quickstart_examples.md
description: "This page contains examples (single objects, collections, geo-json object) of curl requests to Stellantis Fleet owner API."
redirect_from: 
    - /webapi/b2b/quickstart/
require: api-reference
---

This page is a list of examples of HTTP requests to Stellantis {% if page.subsection == 'data-treatment' %}Fleet Owners{% elsif page.subsection == 'b2c' %}Accessing Party for End-Users {% endif %} API.

These examples will show you how to deal with:
- **Single** objects
- **Collections** objects, and pagination
- **GeoJSON**
- **Post** and **Delete** verbs HTTP verbs

Check out the following pages to learn about the concepts of [single objects]({{site.baseurl}}/specifications/data-treatment/overview/api-concepts/#single-object), [collection]({{site.baseurl}}/specifications/data-treatment/overview/api-concepts/#collection) and [paginations]({{site.baseurl}}/specifications/data-treatment/overview/api-concepts/#pagination) in this API.

{% if page.subsection == "b2c" %}
{% include realms.md %}
{% endif %}

## Get a List of Vehicles


The {% if page.subsection == 'data-treatment' %} `/accounts/vehicles`{% elsif page.subsection == 'b2c' %} `/user/vehicles` {% endif %} endpoint allows you to retrieve a list of your vehicles.

This endpoint returns a [collection]({{site.baseurl}}/specifications/{{page.subsection}}/overview/api-concepts/#collection), checkout [pagination]({{site.baseurl}}/specifications/{{page.subsection}}/overview/api-concepts#pagination) for more information about `indexRange` and `pageSize`.

{% assign getVehicleListQueryParams = 'indexRange=<element_per_page>, pageSize=<nb_of_pages>' | split: ", " %}

<div
  id="get-vehicles-example"
  class="api-content-code api-code-content-webapi"
  style="margin-bottom: 1.5rem;"
>
  <div class="api-code-header">
    <a 
      class="api-code-header-text api-code-header-get"
      href="{{site.baseurl}}
      {%- if page.subsection == "data-treatment" -%}/webapi/b2c/api-reference/specification/#operation/deleteVehicleVehicleMonitor
      {%- elsif page.subsection == "b2b" -%}/webapi/b2b/api-reference-v3/specification/#operation/deleteFleetVehicleMonitor{%- endif -%}"
    >
      GET | {% if page.subsection == 'data-treatment' %}/accounts/vehicles{% elsif page.subsection == 'b2c' %}/user/vehicles/{id}/monitors/{mid}{% endif %}
</a>
  </div>
  <div class="code-block first-block kotlin">
    <div class="api-code-header">
      <div class="api-code-tabs-container">
        <nav class="api-code-tabs">
          <div class="api-code-tab kotlin">
            <span class="api-code-tab-icon is-white">
              <i class="fas fa-long-arrow-alt-up"></i>
            </span>
            <span class="api-code-tab-text">HTTP Request</span>
          </div>
        </nav>
      </div>
    </div>
    <div class="api-content-code-example api-content-code-example-req-kotlin">
      <div class="highlight shell"><pre class="highlight"><code>$ curl \
 --location --globoff '{{BASE_URL}}/v1/accounts/vehicles?env={{env}}&gId={{GID}}&pageSize={{PAGE_SIZE}}&locale={{LOCALE}}&vinPrefix={{SSDP_MOCK_VIN_PREFIX}}' \
 --header 'X-Introspect-Realm: {{X-Introspect-Realm}}' \
 --header 'X-CVS-Scope: {{VEHICLE_SCOPE}} VIN:{{SSDP_VIN}}' \
 --header 'X-IBM-Client-Id: {{X-IBM-Client-Id}}' \
 --header 'X-Supersede-CVS-User-Id: {{X-Supersede-RCZ-SSDP-CVS-User-Id}}' \
 --header 'X-IBM-Client-Secret: {{X-IBM-Client-Secret}}'</code></pre></div>
    </div>
  </div>
</div>

## Get Alerts of a Vehicle


The {% if page.subsection == 'data-treatment' %} `/accounts/vehicles/{id}/alerts` {% elsif page.subsection == 'b2c' %} `/user/vehicles/{id}/alerts` {% endif %} endpoint allows to retrieve a list of alerts for a vehicle.
- Path parameter **{id}** is the unique identifier of a vehicle.
- Query parameter `locale` will change the language of the alert message.

<div id="delete-monitor-example"
class="api-content-code api-code-content-webapi"
style="margin-bottom: 1.5rem;"
>
  <div class="api-code-header">
    <a 
      class="api-code-header-text api-code-header-get"
      href="{{site.baseurl}}
      {%- if page.subsection == "data-treatment" -%}/webapi/b2c/api-reference/specification/#operation/deleteVehicleVehicleMonitor
      {%- elsif page.subsection == "b2b" -%}/webapi/b2b/api-reference-v3/specification/#operation/deleteFleetVehicleMonitor{%- endif -%}"
    >
      GET | {% if page.subsection == 'data-treatment' %}/accounts/vehicles/{id}/alerts{% elsif page.subsection == 'b2c' %}/user/vehicles/{id}/monitors/{mid}{% endif %}
</a>
  </div>
  <div class="code-block first-block kotlin">
    <div class="api-code-header">
      <div class="api-code-tabs-container">
        <nav class="api-code-tabs">
          <div class="api-code-tab kotlin">
            <span class="api-code-tab-icon is-white">
              <i class="fas fa-long-arrow-alt-up"></i>
            </span>
            <span class="api-code-tab-text">HTTP Request</span>
          </div>
        </nav>
      </div>
    </div>
    <div class="api-content-code-example api-content-code-example-req-kotlin">
      <div class="highlight shell"><pre class="highlight"><code>$ curl \
 --location --globoff --request GET '/v1//accounts/vehicles/{id}/alerts?env={env}' \
 --header 'X-Introspect-Realm: {{X-Introspect-Realm}}' \
 --header 'X-CVS-Scope: data:telemetry:vehicle:alert VIN:RCZ65065847128653' \
 --header 'X-IBM-Client-Id: {{X-IBM-Client-Id}}' \
 --header 'X-Supersede-CVS-User-Id: {{X-Supersede-RCZ-SSDP-CVS-User-Id}}' \
 --header 'X-IBM-Client-Secret: {{X-IBM-Client-Secret}}' </code></pre></div>
    </div>
  </div>
</div>

## Post New Monitor


The {% if page.subsection == 'data-treatment' %} `/accounts/channels/{chId}/monitors`{% elsif page.subsection == 'b2c' %} `/user/vehicles/{id}/monitors`{% endif %} endpoint allows you to create a new monitor.

Checkout the [dedicated tutorial]({{site.baseurl}}/specifications/{{page.subsection}}/monitor/about-monitors) for information about **Monitors**.

## Post New Channel - WebSocket

<div id="delete-monitor-example"
class="api-content-code api-code-content-webapi"
style="margin-bottom: 1.5rem;"
>
  <div class="api-code-header">
    <a 
      class="api-code-header-text api-code-header-post"
      href="{{site.baseurl}}
      {%- if page.subsection == "data-treatment" -%}/webapi/b2c/api-reference/specification/#operation/deleteVehicleVehicleMonitor
      {%- elsif page.subsection == "b2b" -%}/webapi/b2b/api-reference-v3/specification/#operation/deleteFleetVehicleMonitor{%- endif -%}"
    >
      POST | {% if page.subsection == 'data-treatment' %}/accounts/channels{% elsif page.subsection == 'b2c' %}/user/vehicles/{id}/monitors/{mid}{% endif %}
</a>
  </div>
  <div class="code-block first-block kotlin">
    <div class="api-code-header">
      <div class="api-code-tabs-container">
        <nav class="api-code-tabs">
          <div class="api-code-tab kotlin">
            <span class="api-code-tab-icon is-white">
              <i class="fas fa-long-arrow-alt-up"></i>
            </span>
            <span class="api-code-tab-text">HTTP Request</span>
          </div>
        </nav>
      </div>
    </div>
    <div class="api-content-code-example api-content-code-example-req-kotlin">
      <div class="highlight shell"><pre class="highlight"><code>$ curl \
--location 'localhost:8080/v1/accounts/channels?env=int' \
--header 'Content-Type: application/json' \
--header 'X-CVS-User-Id: AC-ACNT200000248728' \
--header 'X-IBM-Client-Id: bc44396bed3a0c0ed403479db1d46895' \
--header 'X-CVS-Scope: VIN:SSDP5065847128744' \
--header 'X-IBM-Client-Secret: f2e4573260154732de1d50c793eaafe1' \
--header 'Cookie: PSACountry=IT; PSACountry=FR; JSESSIONID=9XgquvRPcf9lO2l8pdh3_UiLuwDgY5n32EM2RQXO' \
--header 'X-Introspect-Realm: B2C' \
--header 'X-Supersede-CVS-User-Id: AC-ACNT200000248728' \
--header 'X-PartnerId: {{X_PARTNER_ID}}' \
--header 'X-Customer-Context: {{X-Customer-Context}}' \
--data '{
    "label": "Channel Remote 755",
    "channel": {
        "webhook": {
            "target": "https://webhook.site/a1fd8eac-a1a7-452c-9169-441ef8fdd098",
            "name": "webhook",
            "attributes": [
                {
                    "type": "Header",
                    "key": "x-vehicle-id",
                    "value": "$vin"
                }
            ]
        }
    }
}'   </code></pre></div>
    </div>
  </div>
</div>

## Post New Channel - PushNotification

<div id="delete-monitor-example"
class="api-content-code api-code-content-webapi"
style="margin-bottom: 1.5rem;"
>
  <div class="api-code-header">
    <a 
      class="api-code-header-text api-code-header-post"
      href="{{site.baseurl}}
      {%- if page.subsection == "data-treatment" -%}/webapi/b2c/api-reference/specification/#operation/deleteVehicleVehicleMonitor
      {%- elsif page.subsection == "b2b" -%}/webapi/b2b/api-reference-v3/specification/#operation/deleteFleetVehicleMonitor{%- endif -%}"
    >
      POST | {% if page.subsection == 'data-treatment' %}/accounts/channels/{% elsif page.subsection == 'b2c' %}/user/vehicles/{id}/monitors/{mid}{% endif %}
</a>
  </div>
  <div class="code-block first-block kotlin">
    <div class="api-code-header">
      <div class="api-code-tabs-container">
        <nav class="api-code-tabs">
          <div class="api-code-tab kotlin">
            <span class="api-code-tab-icon is-white">
              <i class="fas fa-long-arrow-alt-up"></i>
            </span>
            <span class="api-code-tab-text">HTTP Request</span>
          </div>
        </nav>
      </div>
    </div>
    <div class="api-content-code-example api-content-code-example-req-kotlin">
      <div class="highlight shell"><pre class="highlight"><code>$ curl \
--location 'localhost:8080/v1/accounts/channels?env=int' 
--header 'Content-Type: application/json' \
--header 'X-CVS-User-Id: AC-ACNT200000248728' \
--header 'X-IBM-Client-Id: bc44396bed3a0c0ed403479db1d46895' \
--header 'X-CVS-Scope: VIN:SSDP5065847128744' \
--header 'X-IBM-Client-Secret: f2e4573260154732de1d50c793eaafe1' \
--header 'Cookie: PSACountry=IT; PSACountry=FR; JSESSIONID=9XgquvRPcf9lO2l8pdh3_UiLuwDgY5n32EM2RQXO' \
--header 'X-Introspect-Realm: B2C' \
--header 'X-Supersede-CVS-User-Id: AC-ACNT200000248728' \
--header 'X-PartnerId: {{X_PARTNER_ID}}' \
--header 'X-Customer-Context: {{X-Customer-Context}}' \
--data '{
    "label": "Channel Remote 755",
    "channel": {
        "webhook": {
            "target": "https://webhook.site/a1fd8eac-a1a7-452c-9169-441ef8fdd098",
            "name": "webhook",
            "attributes": [
                {
                    "type": "Header",
                    "key": "x-vehicle-id",
                    "value": "$vin"
                }
            ]
        }
    }
}'   </code></pre></div>
    </div>
  </div>
</div>

## Post New Channel - WebHook

<div id="delete-monitor-example"
class="api-content-code api-code-content-webapi"
style="margin-bottom: 1.5rem;"
>
  <div class="api-code-header">
    <a 
      class="api-code-header-text api-code-header-post"
      href="{{site.baseurl}}
      {%- if page.subsection == "data-treatment" -%}/webapi/b2c/api-reference/specification/#operation/deleteVehicleVehicleMonitor
      {%- elsif page.subsection == "b2b" -%}/webapi/b2b/api-reference-v3/specification/#operation/deleteFleetVehicleMonitor{%- endif -%}"
    >
      POST | {% if page.subsection == 'data-treatment' %}/accounts/channels/{% elsif page.subsection == 'b2c' %}/user/vehicles/{id}/monitors/{mid}{% endif %}
</a>
  </div>
  <div class="code-block first-block kotlin">
    <div class="api-code-header">
      <div class="api-code-tabs-container">
        <nav class="api-code-tabs">
          <div class="api-code-tab kotlin">
            <span class="api-code-tab-icon is-white">
              <i class="fas fa-long-arrow-alt-up"></i>
            </span>
            <span class="api-code-tab-text">HTTP Request</span>
          </div>
        </nav>
      </div>
    </div>
    <div class="api-content-code-example api-content-code-example-req-kotlin">
      <div class="highlight shell"><pre class="highlight"><code>$ curl \
--location 'localhost:8080/v1/accounts/channels?env=int' \
--header 'Content-Type: application/json' \
--header 'X-IBM-Client-Id: bc44396bed3a0c0ed403479db1d46895' \
--header 'X-CVS-Scope: VIN:SSDP5065847128744' \
--header 'X-IBM-Client-Secret: f2e4573260154732de1d50c793eaafe1' \
--header 'Cookie: PSACountry=IT; PSACountry=FR; JSESSIONID=9XgquvRPcf9lO2l8pdh3_UiLuwDgY5n32EM2RQXO' \
--header 'X-Introspect-Realm: {{X-Introspect-Realm}}' \
--header 'X-Supersede-CVS-User-Id: AC-ACNT200000248728' \
--header 'X-Customer-Context: {{X-Customer-Context}}' \
--data '{
    "label": "Channel Remote 755",
    "channel": {
        "webhook": {
            "target": "https://webhook.site/a1fd8eac-a1a7-452c-9169-441ef8fdd098",
            "name": "webhook",
            "attributes": [
                {
                    "type": "Header",
                    "key": "x-vehicle-id",
                    "value": "$vin"
                }
            ]
        }
    }
}'    </code></pre></div>
    </div>
  </div>
</div>



## Delete a Monitor

The {% if page.subsection == 'data-treatment' %} `/accounts/channels/{chId}/monitors/{mid}`{% elsif page.subsection == 'b2c' %} `/user/vehicles/{id}/monitors/{mid}`{% endif %} endpoint allows you to retrieve a list of alerts for a vehicle.

Checkout the [dedicated tutorial]({{site.baseurl}}/specifications/data-treatment/monitor/about-monitors) for information about **Monitors**

<div
  id="delete-monitor-example"
  class="api-content-code api-code-content-webapi"
  style="margin-bottom: 1.5rem;"
>
  <div class="api-code-header">
    <a 
      class="api-code-header-text api-code-header-delete"
      href="{{site.baseurl}}
      {%- if page.subsection == "data-treatment" -%}/webapi/b2c/api-reference/specification/#operation/deleteVehicleVehicleMonitor
      {%- elsif page.subsection == "b2b" -%}/webapi/b2b/api-reference-v3/specification/#operation/deleteFleetVehicleMonitor{%- endif -%}"
    >
      DELETE | {% if page.subsection == 'data-treatment' %}/accounts/channels/{chId}/monitors/{mid}{% elsif page.subsection == 'b2c' %}/user/vehicles/{id}/monitors/{mid}{% endif %}
</a>
  </div>
  <div class="code-block first-block kotlin">
    <div class="api-code-header">
      <div class="api-code-tabs-container">
        <nav class="api-code-tabs">
          <div class="api-code-tab kotlin">
            <span class="api-code-tab-icon is-white">
              <i class="fas fa-long-arrow-alt-up"></i>
            </span>
            <span class="api-code-tab-text">HTTP Request</span>
          </div>
        </nav>
      </div>
    </div>
    <div class="api-content-code-example api-content-code-example-req-kotlin">
      <div class="highlight shell"><pre class="highlight"><code>$ curl \
 --location --globoff --request DELETE '/v1/accounts/channels/{chId}/monitors/{mid}?env={env}' \
 --header 'X-IBM-Client-Id: {client-id}' \
 --header 'X-CVS-Scope: MONITOR_WRITE VIN:{vin}' \
 --header 'X-CVS-User-Id: {user-id}' \
 --header 'X-IBM-Client-Secret: {client-secret}' \
 --header 'Cookie: PSACountry=IT; PSACountry=FR;' \
 --header 'X-Introspect-Realm: {realm}' \
 --header 'X-Supersede-CVS-User-Id: {user-id}' \
 --header 'X-PartnerId: {partner-id}' \
 --header 'X-Customer-Context: {customer-context}'</code></pre></div>
    </div>
  </div>
</div>




#### References

Check out this API [references]({{ site.baseurl }}/webapi/{{page.subsection}}/api-reference/references/#article) to discover Stellantis Connected Vehicles features.