---
layout: doc-article
permalink: /specifications/data-treatment/monitor/set-up/
section: specifications
subsection: data-treatment
categorie: Monitor
title: Set Up
require: swagger
gitHubPath: webapi/content/webapi-monitor_setup.md
description: "Learn how to set-up monitors in Fleet owner API."
require: api-reference
---
This tutorial explains how to set up monitors using the REST API. In order to do so, we will need to understand how to configure the **notification** and set up a **triggering policy**.

{% if page.subsection == "b2c" %}
{% include_relative content/data-treatment-callbacks.md %}
{% endif %}

## Post Monitor Request

The following example is the structure of the HTTP request intended to set up the monitor according to the needs of a third party App.

The following **path parameters are required**, they need to be replaced by the appropriate value:
{% if page.subsection == 'data-treatment' %}- **{chId}** is the id of the channel.{% elsif page.subsection == "b2c" %}
- **{id}** is the id of the vehicle for which to register a monitor.
- **{cbid}** is the id of a callback, this id is received when a [callback is created](#post-callback).{% endif %}

{% include webapi-curl.md
apiEndpointB2B='/fleets/{fid}/monitors'
apiEndpointB2C='/accounts/channels/{chId}/monitors'
referenceURLResssourceB2B='createFleetVehicleMonitor'
referenceURLResssourceB2C='createVehicleVehicleMonitor'
httpVerb='POST'
%}

```js
{
  "label": "string",
  "subscribeParam": {
    "refreshEvent": 60,
    "channelAttributes": {
      "pushnotif": [
        {
          "type": "Header",
          "key": "X-Vehicle_Id",
          "value": "$Vin"
        }
      ],
      "webhook": [
        [
          {
            "type": "Header",
            "key": "X-Vehicle_Id",
            "value": "$Vin"
          }
        ]
      ],
      "websocket": [
        [
          {
            "type": "Header",
            "key": "X-Vehicle_Id",
            "value": "$Vin"
          }
        ]
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
          "ChannelId": "_-2_5B-_1_b_b_-",
          "remote": {
            "label": "string",
            "attributes": [
              {
                "type": "Body",
                "key": "string",
                "value": "string"
              }
            ],
            "channelAttributes": {
              "pushnotif": [
                {
                  "type": "Header",
                  "key": "X-Vehicle_Id",
                  "value": "$Vin"
                }
              ],
              "webhook": [
                [
                  {
                    "type": "Header",
                    "key": "X-Vehicle_Id",
                    "value": "$Vin"
                  }
                ]
              ],
              "websocket": [
                [
                  {
                    "type": "Header",
                    "key": "X-Vehicle_Id",
                    "value": "$Vin"
                  }
                ]
              ]
            },
            "extendedEventParam": [
              "vehicle.latestTelemetry"
            ],
            "action": {
              "locking": {
                "state": "Unlocked"
              },
              "horn": {
                "state": "Activated"
              },
              "lights": {
                "state": "Activated"
              },
              "preconditioning": {
                "airConditioning": {
                  "immediate": false,
                  "programs": [
                    {
                      "start": "string",
                      "occurrence": {
                        "day": [
                          "Mon"
                        ]
                      },
                      "enabled": true,
                      "temp": 0,
                      "slot": 4,
                      "actionsType": "Set"
                    }
                  ],
                  "settings": {
                    "temp": 0,
                    "mode": "Auto",
                    "state": "Activated"
                  }
                }
              },
              "onboardPersonalData": {
                "action": "Delete"
              },
              "charging": {
                "charge": {
                  "immediate": false,
                  "programs": [
                    {
                      "start": "string",
                      "occurrence": {
                        "day": [
                          "Mon"
                        ]
                      },
                      "enabled": true,
                      "end": "string",
                      "chargeToFull": true,
                      "minChargingLevel": 50,
                      "maxChargingLevel": 100,
                      "chargeType": "Regular",
                      "slot": 2,
                      "actionsType": "Set"
                    }
                  ],
                  "settings": {
                    "chargePreferenceRate": "Low",
                    "chargeLimit": "MedPlus"
                  }
                }
              },
              "wakeup": {
                "action": "Wakeup"
              },
              "immobilization": {
                "activate": true
              },
              "navigation": {
                "positions": [
                  {
                    "type": "Feature",
                    "geometry": {
                      "type": "Point",
                      "coordinates": [
                        5.970338,
                        -62.536239
                      ]
                    },
                    "properties": {
                      "address": {
                        "houseNumber": "string",
                        "postalCode": 0,
                        "streetName": "string",
                        "cityName": "string",
                        "countryName": "string",
                        "provinceName": "string"
                      },
                      "placeid": 0,
                      "name": "Doltone House",
                      "category": "Restraunt",
                      "description": "",
                      "phoneNumber": "+61 2 1234 5678",
                      "url": "string"
                    }
                  }
                ]
              },
              "vehicleFinder": {
                "action": "GetPresentLocation"
              },
              "stolen": {
                "state": true,
                "crankInhibit": {
                  "activate": true
                }
              },
              "tan": {
                "suppress": {
                  "state": true,
                  "duration": 5
                },
                "confirm": {
                  "state": true
                }
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
      "key": "string",
      "value": "string"
    }
  ],
  "extendedEventParam": [
    "vehicle.doorsState"
  ],
  "triggerParam": {
    "triggers": [
      {
        "name": "\"yjxQQocgGqRlISqlhebicbuMdrXKiVCViAVXwCaLEUZMhctLJsccHsJZRKClpTbbOWgGuqgwqdCnZkiaaZwOIYmpV_39627472988157946618827322834207962461611165\"",
        "zone": {
          "transition": "Out",
          "place": {
            "radius": 20,
            "center": {
              "longitude": 2.333333,
              "latitude": 48.866667
            }
          }
        },
        "time": {
          "times": [
            {
              "recurrence": "Daily",
              "start": "PT8H30M",
              "duration": "PT7H30M",
              "occurrence": [
                "Mon",
                "Tue",
                "Thu",
                "Fri"
              ]
            }
          ],
          "timeZone": "Europe/Paris"
        },
        "data": {
          "data": "vehicle.energy.electric.level",
          "op": "greaterThan",
          "value": [
            "75"
          ]
        },
        "setting": {
          "type": "DigitalKey"
        }
      }
    ],
    "boolExp": "((z1 & t1) | (z2 & !t1) | (f & z1) | (a & (z1|t))  | (o & (z1 | z2)))"
  }
}

```

Below is a description of the JSON body to configure the monitor, refer to [API Reference]({{site.baseurl}}/specifications/{{page.subsection}}/api-reference/references/#operation/{% if page.subsection == "data-treatment" %}createFleetVehicleMonitor{% elsif page.subsection == "b2c" %}createVehicleVehicleMonitor{% endif %}) for the specification of this endpoint.

- `label` is the name of the monitor.
- `subscribeParam` is the Monitor channel subscription extension:
    - *refreshEvent*: Define the period (in sec.) between two refresh events. The refresh events are sent when the condition of the monitor is satisfied(Trigger -> toggled true) after a period >= refresh time because the monitor triggering is conditioned by the vehicle activity and so its data availability . A kind of periodic reminder.
    - *channelAttributes*: Additional attributes that will add to or replace the specific channel (pushnotif, webhook or websocket) ones when sending the event.
- `extendedEventParam`: Allow to set extra vehicle data (defined in data model) to add to the monitor event when publishing.
- `triggerParam`: Monitor trigger-param that allows to compound triggers by applying a boolean expression to evaluate them:
    - *triggers* is where to declare the [triggering event blocs](#triggering-events-blocs).
    - *boolExp* allows to setup the [triggering policy](#triggering-policy).

{% if page.subsection == 'data-treatment' %}
> **Note:** Each monitor can target only fleet only. However, it's possible to create multiple monitors for multiple fleets.
{% elsif page.subsection == 'b2c' %}
> **Retry Policy:** if the notification is not received by the server, the retry policy is enabled. Checkout the [dedicated page]({{site.baseurl}}/specifications/{{page.subsection}}/monitor/retry-policy/#article) for the description of this policy.
{% endif %}

## Post Monitor Response

If the monitor request is properly set-up, the monitor will be created and an HTTP response will be returned:

```json
{
    "createdAt": "2025-07-09T04:54:40.045Z",
    "_links": {
        "monitor": {
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
    "monitorId": "string",
    "status": "Running"
}
```

This message indicates that the monitor has been successfully created with a unique identifier. This identifier is sent with every notification, therefore, it allows tracking this monitor.

## Triggering Events Blocs

As seen in the [about page]({{site.baseurl}}/specifications/{{page.subsection}}/monitor/about-monitors/#monitor-features), monitors are triggered under the following patterns. Checkout the [API Reference]({{site.baseurl}}/specifications/{{page.subsection}}/api-reference/references/#operation/{% if page.subsection == "data-treatment" %}createFleetVehicleMonitor{% elsif page.subsection == "b2c" %}createVehicleVehicleMonitor{% endif %}) for the specification of trigger events.
- **🗺️ Zone**: Zone Alert parameter object.
- **⏱️ Time**: Temporal monitor for triggering vehicle moving event within a time interval.
- **🚗 Data**: A monitor for triggering the vehicle data change event.
- **⚙️ Setting**: A monitor for triggering the vehicle settings change event.

The array *triggerParam.trigger* of the [monitor creation request](#post-monitor-request) allows declaring and name the list of triggering event blocs.

Declaration of event blocs is not enough to describe the way the callback is being triggered, **they must be used in the *triggerParam.boolExp*** field in order to set up the [triggering policy](#triggering-policy) of this monitor.

## Triggering Policy

Once the triggers blocs are declared, they need to be combined together to create a triggering policy. To do so, we use a boolean expression syntax:

> **Grammar:** Here is the list of available operands for monitors configuration.
- AND: `trigger1 & trigger2` if both conditions have to be triggered
- OR: `trigger1 | trigger2` if at least one condition has to be triggered
- PARENTHESIS: `trigger1 | (trigger2 & trigger3)` to prioritize an expression over another
- NOT: `!trigger1` if the condition has to not be triggered

This is an example of boolean expression, where *z1, z2, t1, t2, o1, o2, o3* are trigger bloc names:

```json
{
  "label": "<monitor-name>",
  "subscribeParam": { },
  "triggerParam": {
    "triggers": [
      {"name": "z1" }, {"name": "z2" }, {"name": "t1" }, {"name": "t2" },
      {"name": "o1" }, {"name": "o2" }, {"name": "o3" }
    ],
    "boolExp": "((z1 & t1) | (z2 & !t1) | (o1 & z1) | (o2 & (z1 | t2))  | (o3 & (z1 | z2)))"
  }
}
```

In this boolean expression, the monitor will notify the server in all these situations:
- *(z1 & t1)* = **z1** *AND* **t1** are being triggered
- *(z2 & !t1)* = **z2** is triggered *AND* **t1** is *NOT* triggered
- *(o1 & z1)* = **o1** is triggered *AND* **z1** is triggered
- *(o2 & (z1 &#124; t2))* = **o2** is triggered *AND* either **z1** *OR* **t2** is triggered
- *(o3 & (z1 &#124; z2))* = **o3** is triggered *AND* either **z1** *OR* **z2** is triggered

## Examples: Time Trigger

The monitor Time Trigger Entry that specifies the start (relative or absolute) and duration of the time interval. The relative start time must be to midnight and the absolute must be expressed in UTC.

```json
{
    "label": "Monitor {% raw %}{{$randomInt}}{% endraw %}",
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
}
```

## Example: Zone Trigger

Zone monitoring type ('In' for monitoring entering zone and 'Out' for monitoring leaving zone).

```json
{
    "label": "Monitor {% raw %}{{$randomInt}}{% endraw %}",
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
}
```

## Example: Data Trigger 

A monitor for triggering the vehicle data change event.

```json
{
    "label": "Monitor {% raw %}{{$randomInt}}{% endraw %}",
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
}
```