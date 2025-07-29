---
layout: doc-article
permalink: /specifications/data-treatment/remote/set-up/
section: specifications
subsection: data-treatment
require: swagger
categorie: Remote
title: Set Up
description: "Learn how to set-up remotes in Fleet Owner API."
require: api-reference
---
This tutorial explains how to set up remotes using the REST API. In order to do so, we will need to understand how to configure the **callback** and send a **remote command**.

{% include_relative data-treatment-callbacks.md %}

## Post Remote Request

The following example is the structure of the HTTP request intended to send a remote command. 

The following **path parameters are required**, they need to be replaced by the appropriate value:
{% if page.subsection == 'data-treatment' %}- **{id}** is the id.{% endif %}
- **{{'{'}}{% if page.subsection == 'data-treatment' %}v{% endif %}id}** is the id of the vehicle to send a remote to.
- **{cbid}** is the id of a callback, this id is received when a [callback is created](#post-callback).

{% include webapi-curl.md
   apiEndpointB2B='/fleets/{fid}/vehicles/{vid}/callbacks/{cbid}/remotes'
   apiEndpointB2C='/accounts/vehicles/{id}/channels/{chId}/remotes'
   referenceURLResssourceB2B='sendRemoteToVhl'
   referenceURLResssourceB2C='sendRemoteToVhl'
   httpVerb='POST'
%}

```js
{
    "label": "doors",
    "action": {
        "locking": {
        "state": "Unlocked"
        }
    }
}
```

Below is a description of the JSON body to configure the remote, refers to [API Reference]({{site.baseurl}}/webapi/{{page.subsection}}/api-reference/references/#operation/sendRemoteToVhl) for the specification of this endpoint.

- `label` is the name of the remote.
{% if page.subsection == "b2c" %}
- `attributes` & `callbackAttributes`: allows adding or to overwrite key/value attributes declared in the [callback creation](#post-callback), it will be available in the notification as query parameters, headers or body. Attributes (*vin, CallbackID & CallbackLabel*) are useful to perform the routing of the notification.
{% endif %}
- `<remote-type>` objects allow configuring the remote action to send, checkout [remote actions](#remote-actions). Only one remote can be sent at once.


## Post Remote Response

This is an example of HTTP response when sending a remote action:

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

This message indicates that the remote has been successfully created with a unique identifier. This identifier is sent with every notification; therefore, it allows tracking this remote.

## Remote Actions

| Object Name               | Description                                                                | Example                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| ------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| remoteLocking             | Lock or unlock the vehicle remotely.                                       | `{ "locking": { "state": "Unlocked" } }`                                                                                                                                                                                                                                                                                                                                                                                                                 |
| remoteHorn                | Activate the vehicle’s horn remotely.                                      | `{ "horn": { "state": "Activated" } }`                                                                                                                                                                                                                                                                                                                                                                                                                   |
| remoteLights              | Blink the vehicle’s lights remotely.                                       | `{ "lights": { "state": "Activated" } }`                                                                                                                                                                                                                                                                                                                                                                                                                 |
| remotePreconditioning     | Start or schedule climate preconditioning with temperature and recurrence. | `{ "preconditioning": { "airConditioning": { "immediate": false, "programs": [ { "start": "string", "occurrence": { "day": ["Mon"] }, "enabled": true, "temp": 0, "slot": 4, "actionsType": "Set" } ], "settings": { "temp": 0, "mode": "Auto", "state": "Activated" } } } }`                                                                                                                                                                            |
| remoteOnboardPersonalData | Delete user’s personal data from the vehicle.                              | `{ "onboardPersonalData": { "action": "Delete" } }`                                                                                                                                                                                                                                                                                                                                                                                                      |
| remoteCharging            | Start, stop, or schedule a charging session with preferences.              | `{ "charging": { "charge": { "immediate": false, "programs": [ { "start": "string", "occurrence": { "day": ["Mon"] }, "enabled": true, "end": "string", "chargeToFull": true, "minChargingLevel": 50, "maxChargingLevel": 100, "chargeType": "Regular", "slot": 2, "actionsType": "Set" } ], "settings": { "chargePreferenceRate": "Low", "chargeLimit": "MedPlus" } } } }`                                                                              |
| remoteWakeup              | Wake up the vehicle for remote actions or data sync.                       | `{ "wakeup": { "action": "Wakeup" } }`                                                                                                                                                                                                                                                                                                                                                                                                                   |
| remoteImmobilization      | Prevent the vehicle from being started or moved.                           | `{ "immobilization": { "activate": true } }`                                                                                                                                                                                                                                                                                                                                                                                                             |
| remoteNavigation          | Send GPS points to guide the vehicle using in-car navigation.              | `{ "navigation": { "positions": [ { "type": "Feature", "geometry": { "type": "Point", "coordinates": [5.970338, -62.536239] }, "properties": { "address": { "houseNumber": "string", "postalCode": 0, "streetName": "string", "cityName": "string", "countryName": "string", "provinceName": "string" }, "placeid": 0, "name": "Doltone House", "category": "Restraunt", "description": "", "phoneNumber": "+61 2 1234 5678", "url": "string" } } ] } }` |
| remoteVehicleFinder       | Get the current GPS location of the vehicle.                               | `{ "vehicleFinder": { "action": "GetPresentLocation" } }`                                                                                                                                                                                                                                                                                                                                                                                                |
| remoteStolen              | Mark the vehicle as stolen and optionally disable ignition.                | `{ "stolen": { "state": true, "crankInhibit": { "activate": true } } }`                                                                                                                                                                                                                                                                                                                                                                                  |
| remoteTan                 | Manage Theft Alarm Notification suppression or confirmation.               | `{ "tan": { "suppress": { "state": true, "duration": 5 }, "confirm": { "state": true } } }`                                                                                                                                                                                                                                                                                                                                                              |
