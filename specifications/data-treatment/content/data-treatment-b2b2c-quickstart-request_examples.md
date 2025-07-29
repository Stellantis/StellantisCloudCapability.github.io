---
layout: doc-article
permalink: /specifications/data-treatment/quickstart/b2b2c/request-examples/
section: specifications
subsection: data-treatment
categorie: Quickstart
title: Request Examples
gitHubPath: webapi/content/webapi-quickstart_examples.md
description: "This page contains examples (single objects, collections, geo-json object) of curl requests to Stellantis Accessing Party for End-Users API."
require: api-reference
---

This page is a list of examples of HTTP requests to Stellantis {% if page.subsection == 'b2b' %}Fleet Owners{% elsif page.subsection == 'data-treatment' %}Accessing Party for End-Users {% endif %} API.

These examples will show you how to deal with:
- **Single** objects
- **Collections** objects, and pagination
- **GeoJSON**
- **Post** and **Delete** verbs HTTP verbs

Check out the following pages to learn about the concepts of [single objects]({{site.baseurl}}/specifications/data-treatment/overview/api-concepts/#single-object), [collection]({{site.baseurl}}/webapi/b2c/overview/api-concepts/#collection) and [paginations]({{site.baseurl}}/webapi/b2c/overview/api-concepts/#pagination) in this API.

{% if page.subsection == "data-treatment" %}
{% include realms.md %}
{% endif %}

## Get a List of Vehicles


The {% if page.subsection == 'b2b' %} `/accounts/vehicles`{% elsif page.subsection == 'data-treatment' %} `/accounts/vehicles` {% endif %} endpoint allows you to retrieve a list of your vehicles.

This endpoint returns a [collection]({{site.baseurl}}/webapi/{{page.subsection}}/overview/api-concepts/#collection), checkout [pagination]({{site.baseurl}}/webapi/{{page.subsection}}/overview/api-concepts#pagination) for more information about `indexRange` and `pageSize`.

{% assign getVehicleListQueryParams = 'indexRange=<element_per_page>, pageSize=<nb_of_pages>' | split: ", " %}


<div
  id="delete-monitor-example"
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


The {% if page.subsection == 'b2b' %} `/accounts/vehicles/{id}/alerts` {% elsif page.subsection == 'data-treatment' %} `/accounts/vehicles/{id}/alerts` {% endif %} endpoint allows to retrieve a list of alerts for a vehicle.
- Path parameter **{id}** is the unique identifier of a vehicle.
- Query parameter `locale` will change the language of the alert message.

{% assign getAlertsQueryParams = 'indexRange=<element_per_page>, pageSize=<nb_of_pages>, locale=<language>' | split: ", " %}

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


The {% if page.subsection == 'b2b' %} `/accounts/channels/{chId}/monitors`{% elsif page.subsection == 'data-treatment' %} `/accounts/channels/{chId}/monitors`{% endif %} endpoint allows you to create a new monitor.

Checkout the [dedicated tutorial]({{site.baseurl}}/webapi/{{page.subsection}}/monitor/about) for information about **Monitors**.

## Post New Monitor - WebSocket

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
      POST | {% if page.subsection == 'data-treatment' %}/accounts/vehicles/{id}/alerts{% elsif page.subsection == 'b2c' %}/user/vehicles/{id}/monitors/{mid}{% endif %}
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
--location --globoff '{{BASE_URL}}/v1/accounts/channels/{{CHANNEL_ID}}/monitors?env={{env}}' \
--header 'X-IBM-Client-Id: {{X-IBM-Client-Id}}' \
--header 'X-CVS-Scope: {{MONITOR_WRITE_SCOPE}} VIN:{{SSDP_VIN}}' \
--header 'X-IBM-Client-Secret: {{X-IBM-Client-Secret}}' \
--header 'X-Introspect-Realm: {{X-Introspect-Realm}}' \
--header 'X-Supersede-CVS-User-Id: {{X-Supersede-RCZ-SSDP-CVS-User-Id}}' \
--header 'X-PartnerId: {{X_PARTNER_ID}}' \
--header 'X-Customer-Context: {{X-Customer-Context}}' \
--header 'Content-Type: application/json' \
--data '{
    "label": "Monitor 409",
    "subscribeParam": {
        "refreshEvent": 60,
        "channelAttributes": {
            "websocket": [
                {
                    "type": "Header",
                    "key": "X-Vehicle_Id",
                    "value": "$Vin"
                }
            ]
        }
    },
    "onEvent": {
        "actions": [
            {
                "type": "Notify",
                "monitorAction": {
                    "changeType": "Pause",
                    "monitorId": "string"
                },
                "remoteAction": {
                    "ChannelId": "{{CHANNEL_ID}}",
                    "remote": {
                        "label": "Remote 56",
                        "attributes": [
                            {
                                "type": "Header",
                                "key": "X-Vehicle_Id",
                                "value": "$Vin"
                            }
                        ],
                        "channelAttributes": {
                            "websocket": [
                                {
                                    "type": "Header",
                                    "key": "X-Vehicle_Id",
                                    "value": "$Vin"
                                }
                            ]
                        },
                        "extendedEventParam": [
                            "vehicle.alerts.active"
                        ],
                        "action": {
                            "locking": {
                                "state": "Unlocked",
                                "identifier": "AllDoors"
                            }
                        }
                    }
                }
            }
        ],
        "onRefresh": false
    },
    "attributes": [
        {
            "type": "Header",
            "key": "X-Vehicle_Id",
            "value": "$Vin"
        }
    ],
    "extendedEventParam": [
        "vehicle.alerts.active"
    ],
    "triggerParam": {
        "triggers": [
            {
                "name": "t6",
                "data": {
                    "op": "includedIn",
                    "value": [
                        "AssistanceButtonFault"
                    ],
                    "data": "vehicle.alert",
                    "previous": {
                        "op": "equalsTo",
                        "value": [
                            "AssistanceButtonFault"
                        ]
                    }
                }
            }
        ],
        "boolExp": "t6"
    }
}'   </code></pre></div>
    </div>
  </div>
</div>

## Post New Monitor - PushNotification

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
      POST | {% if page.subsection == 'data-treatment' %}/accounts/vehicles/{id}/alerts{% elsif page.subsection == 'b2c' %}/user/vehicles/{id}/monitors/{mid}{% endif %}
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
--location --globoff '{{BASE_URL}}/v1/accounts/channels/{{CHANNEL_ID}}/monitors?env={{env}}' \
--header 'X-IBM-Client-Id: {{X-IBM-Client-Id}}' \
--header 'X-CVS-Scope: {{MONITOR_WRITE_SCOPE}} VIN:{{SSDP_VIN}}' \
--header 'X-CVS-User-Id: {{X-Supersede-RCZ-SSDP-CVS-User-Id}}' \
--header 'X-IBM-Client-Secret: {{X-IBM-Client-Secret}}' \
--header 'Cookie: PSACountry=IT; PSACountry=FR;' \
--header 'X-Introspect-Realm: {{X-Introspect-Realm}}' \
--header 'X-Supersede-CVS-User-Id: {{X-Supersede-RCZ-SSDP-CVS-User-Id}}' \
--header 'X-PartnerId: {{X_PARTNER_ID}}' \
--header 'X-Customer-Context: {{X-Customer-Context}}' \
--header 'Content-Type: application/json' \
--data '{
    "label": "Monitor 790",
    "subscribeParam": {
        "refreshEvent": 60,
        "channelAttributes": {
            "pushnotif": [
                {
                    "type": "Body",
                    "key": "disableNotificationPayload",
                    "value": "true"
                },
                {
                    "type": "Query",
                    "key": "deliveryPriority",
                    "value": "low"
                }
            ]
        }
    },
    "onEvent": {
        "actions": [
            {
                "type": "Remote",
                "monitorAction": {
                    "changeType": "Resume",
                    "monitorId": "string"
                },
                "remoteAction": {
                    "ChannelId": "{{ChannelId}}",
                    "remote": {
                        "label": "Remote 412",
                        "attributes": [
                            {
                                "type": "Header",
                                "key": "X-Vehicle_Id",
                                "value": "$Vin"
                            }
                        ],
                        "channelAttributes": {
                            "pushnotif": [
                                {
                                    "type": "Body",
                                    "key": "mutable",
                                    "value": "true"
                                },
                                {
                                    "type": "Body",
                                    "key": "contentAvailable",
                                    "value": "false"
                                },
                                {
                                    "type": "Body",
                                    "key": "title",
                                    "value": "Push Notification Title"
                                }
                            ]
                        },
                        "extendedEventParam": [
                            "vehicle.alarm"
                        ],
                        "action": {
                            "ignition": {
                                "state": "Activated"
                            }
                        }
                    }
                }
            }
        ],
        "onRefresh": false
    },
    "attributes": [
        {
            "type": "Body",
            "key": "X-monitorID",
            "value": "$MonitorID"
        }
    ],
    "extendedEventParam": [
        "vehicle.alarm"
    ],
    "triggerParam": {
        "triggers": [
            {
                "name": "t6",
                "zone": {
                    "transition": "In",
                    "place": {
                        "radius": 10,
                        "center": {
                            "longitude": -80,
                            "latitude": 68
                        }
                    }
                }
            }
        ],
        "boolExp": "t6"
    }
}'   </code></pre></div>
    </div>
  </div>
</div>

## Post New Monitor - WebHook

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
      POST | {% if page.subsection == 'data-treatment' %}/accounts/vehicles/{id}/alerts{% elsif page.subsection == 'b2c' %}/user/vehicles/{id}/monitors/{mid}{% endif %}
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
--location --globoff '{{BASE_URL}}/v1/accounts/channels/{{CHANNEL_ID}}/monitors?env={{env}}' \
--header 'X-IBM-Client-Id: {{X-IBM-Client-Id}}' \
--header 'X-CVS-Scope: {{MONITOR_WRITE_SCOPE}} VIN:{{SSDP_VIN}}' \
--header 'X-CVS-User-Id: {{X-Supersede-RCZ-SSDP-CVS-User-Id}}' \
--header 'X-IBM-Client-Secret: {{X-IBM-Client-Secret}}' \
--header 'Cookie: PSACountry=IT; PSACountry=FR;' \
--header 'X-Introspect-Realm: {{X-Introspect-Realm}}' \
--header 'X-Supersede-CVS-User-Id: {{X-Supersede-RCZ-SSDP-CVS-User-Id}}' \
--header 'X-PartnerId: {{X_PARTNER_ID}}' \
--header 'X-Customer-Context: {{X-Customer-Context}}' \
--header 'Content-Type: application/json' \
--data '{
    "label": "Monitor 711",
    "subscribeParam": {
        "refreshEvent": 80,
        "channelAttributes": {
            "webhook": [
                {
                    "type": "Header",
                    "key": "X-vehicle-id",
                    "value": "$Vin"
                }
            ]
        }
    },
    "onEvent": {
        "actions": [
            {
                "type": "Monitor",
                "monitorAction": {
                    "changeType": "Delete",
                    "monitorId": "string"
                },
                "remoteAction": {
                    "ChannelId": "{{ChannelId}}",
                    "remote": {
                        "label": "Remote 296",
                        "attributes": [
                            {
                                "type": "Body",
                                "key": "X-remoteType",
                                "value": "$remoteType"
                            },
                            {
                                "type": "Header",
                                "key": "X-remoteStatus",
                                "value": "$remoteStatus"
                            }
                        ],
                        "channelAttributes": {
                            "webhook": [
                                {
                                    "type": "Header",
                                    "key": "X-channel-id",
                                    "value": "$ChannelId"
                                },
                                {
                                    "type": "Header",
                                    "key": "X-channel-label",
                                    "value": "$ChannelLabel"
                                }
                            ]
                        },
                        "extendedEventParam": [
                            "vehicle.alarm"
                        ],
                        "action": {
                            "horn": {
                                "state": "Activated"
                            }
                        }
                    }
                }
            }
        ],
        "onRefresh": true
    },
    "attributes": [
        {
            "type": "Body",
            "key": "X-monitorLabel",
            "value": "$MonitorLabel"
        }
    ],
    "extendedEventParam": [
        "vehicle.telemetry.environment"
    ],
    "triggerParam": {
        "triggers": [
            {
                "name": "t1",
                "time": {
                    "times": [
                        {
                            "duration": "PT3H12M",
                            "start": "1990-05-25T15:30:00Z",
                            "recurrence": "None",
                            "occurrence": {
                                "day": [
                                    "Tue"
                                ]
                            },
                            "enabled": true
                        }
                    ],
                    "timeZone": "Europe/Paris"
                }
            }
        ],
        "boolExp": "t1"
    }
}'   </code></pre></div>
    </div>
  </div>
</div>

## Delete a Monitor

The {% if page.subsection == 'b2b' %} `/accounts/channels/{chId}/monitors/{mid}`{% elsif page.subsection == 'data-treatment' %} `/accounts/channels/{chId}/monitors/{mid}`{% endif %} endpoint allows you to retrieve a list of alerts for a vehicle.

Checkout the [dedicated tutorial]({{site.baseurl}}/specifications/{{page.subsection}}/monitor/about-monitors) for information about **Monitors**

{% assign deleteMonitorQueryParams = 'indexRange=<element_per_page>, pageSize=<nb_of_pages>, locale=<language>' | split: ", " %}


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

Check out this API [references]({{ site.baseurl }}/specifications/{{page.subsection}}/api-reference/#article) to discover Stellantis Connected Vehicles features.