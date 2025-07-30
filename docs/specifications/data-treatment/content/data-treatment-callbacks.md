{% if page.subsection == "b2c" %}
HTTP request headers used in this tutorial require to use [realms]({{site.baseurl}}/webapi/{{page.subsection}}/quickstart/access-user-data/#manufacturers-brands--realms).
{% endif %}

## Post Channel

The first step is to configure a reusable configuration settings named *channel*.{% if page.subsection == "b2c" %} The same callback can be used for [monitors]({{site.baseurl}}/webapi/{{page.subsection}}/monitor/about/#article) and/or [remote]({{site.baseurl}}/specifications/{{page.subsection}}/remote/about/#article) features of this API.


Registering a callback can be done using the following API. They are 3 types of callback notifications: **WebHook, Push Notification, WebSocket**.
{% endif %}

{% include webapi-curl.md
   apiEndpointB2B='/fleets/{fid}/remote/callbacks'
   apiEndpointB2C='/accounts/channels'
   referenceURLResssourceB2B='setFleetVehicleRemote'
   referenceURLResssourceB2C='setUsertVehicleRemote'
   httpVerb='POST'
%}

```json
{
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
}
```

Below is a description of the JSON body to configure the channel.
- `label` is the name of the callback. {% if page.subsection == "b2c" %}
- `type` to declare a callback for *Monitor, Remote or both*.
- `callback` allows to configure notifications, they can be of 3 different types:
  - *webhook*: for HTTP notification.
  - *websocket*: for websocket callbacks.
  - *pushnotif*: using Firebase Cloud Messaging in order to trigger push notification on iOS (APNs) or Android (GCM).
- `callback.<notification_type>` allow to configure:
  - *attributes:* to setup additional attributes of the notification (*headers, query params, body*). These attributes are usually used for routing.
  - *batch:* webhook & websocket notifications can be send in batch, it's recommended to use batch over single time notification.{% elsif page.subsection == "data-treatment" and page.categorie == "Remote" %}
- `callback.webhook`: to set up the reception server and the notification attributes (headers, query params, body, usually use for routing).
- `retryPolicy` to configure how to deal with a server not receiving notifications. **Retry Policy** is described in this [dedicated page]({{site.baseurl}}/specifications/data-treatment/remote/retry-policy/#article).
- `batchNotify` if notifications needs to be received in batches instead of one by one.
- `remoteTypes` allows to set up which type of remotes  can work with this callback.

> **Be careful:** it's only possible to send **one remote action at once**. However, callbacks are re-usable for multiple those remote action.

{% if page.subsection == "b2c" %}
> **Retry Policy:** If a notification is not received on the callback server, the [retry policy]({{site.baseurl}}/webapi/b2c/{{page.categorie|downcase}}/retry-policy/#article) will be triggered.
{% endif %}

### Example of Remote Operation

This example **creates** a remote operation with the following parameters:
- If the callback **notification is not received**, the request will be sent again every 120s until it's properly delivered. 
- The callback will be **sent once** 10 callback notifications are ready to be sent or 300s after triggering.
- The callback will be **sent to** `https://my.post.callback` webhook, with the VIN of the vehicle as a query path parameter and the `Basic authentication` in HTTP headers.
- This callback can be used in order to send **remote action**: `ChargingSchedule`.

```json
{
    "label": "charging",
    "action": {
        "charging": {
            "charge": {
                "immediate": false,
                "programs": [
                    {
                        "enabled": true,
                        "start": "PT12H30M",
                        "end": "PT14H30M",
                        "chargeToFull": false,
                        "occurrence": {
                            "day": [
                                "Mon",
                                "Tue",
                                "Wed",
                                "Thu"
                            ]
                        },
                        "minChargingLevel": 20,
                        "maxChargingLevel": 80,
                        "slot": 1,
                        "actionsType":"Set"
                    }
                ]
            }
        }
    }
}
```

{% endif %}


If the remote operation is properly created the HTTP **response body** will look like:

```json
{
    "_links": {
        "channel": {
            "href": "string",
            "templated": true,
            "type": "string",
            "deprecation": "string",
            "name": "string",
            "title": "string",
            "profile": "string",
            "hreflang": "string"
        },
        "remote": {
            "href": "string",
            "templated": true,
            "type": "string",
            "deprecation": "string",
            "name": "string",
            "title": "string",
            "profile": "string",
            "hreflang": "string"
        }
    },
    "remoteActionId": "string",
    "type": "Locking"
}
```

This message indicates that the callback has been sucessfully created with a unique identifier. This identifier, called *{chid}* is required to [create a {{page.categorie | downcase}}](#post-{{page.categorie | downcase}}-request).