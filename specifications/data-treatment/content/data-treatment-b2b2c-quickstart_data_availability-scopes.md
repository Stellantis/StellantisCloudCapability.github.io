---
layout: doc-article
permalink: /specifications/data-treatment/quickstart/b2b2c/data-availability-scopes/
section: specifications
subsection: data-treatment
categorie: Quickstart
title: Data Availability & Scope
description: "Data available in the End User API depends on data production, submission & authorization."
---

[References]({{site.baseurl}}/webapi/b2c/api-reference/references/#article) expose the set of all possibilities of the Accessing Party for End-Users API, but all these **data & features are not always available**. This page explains how data are made available in the API.

In order for a data to be available in the API response, it should meet all the following conditions:
- [📋 Reference](#-api-references-list), it should be part of the API reference list.
- [🚗 Produced](#-vehicle-data-production) by the vehicle. Not all vehicle models are able to produce all the data.
- [📡 Uploaded](#-vehicle-data-upload) on the server, it depends on the vehicle services activated on the vehicle by the End User.
- [👤 Authorized](#-user-authorization), by the End User to the requesting Application, during the enrollment process.

If a data does not meet these **4 conditions**, then it will not be available when requesting Stellantis API.

<img src="{{site.baseurl}}/assets/images/b2c-available-data.svg" alt="b2c-available-data" style="width: 400px">

## 📋 API References list

The [API reference]({{site.baseurl}}/specifications/data-treatment/api-reference/#article) is an exhaustive list of the capabilities of Stellantis API.

This reference list is the barebone of the system, it displays the structure of **all data potentially available**.

## 🚗 Vehicle Data Production

Stellantis Accessing Party for End-Users API is intended to work with a **wide variety of vehicles** of different generations, shape and motorization. All these vehicles are not equipped with the same features and sensors.

Real life vehicles only produce part of the data exposed in the API references. That's why the API can only **output data actually produced** by the vehicle.

***For example**, electric vehicles do not have a gearbox; therefore gear recommendation is not a data available when requesting [GET /accounts/vehicles/{id}/telemetries]({{site.baseurl}}/webapi/b2c/api-reference/references/#tag/Vehicles/operation/getTelemetry).*

## 📡 Vehicle Data Upload

By default vehicle's data are not uploaded on Stellantis servers. In order to be available online, the vehicle owner needs to activate the appropriates **vehicle services**. Once a service is activated on the vehicle, the corresponding group of data will be uploaded on Stellantis servers.

As an Accessing Party you don't have to handle *vehicle services subscription*, the subscription is automatically asked to the end user during the [Enrollment Process]({{site.baseurl}}/specifications/data-treatment/quickstart/b2b2c/enroll-end-users/#article).

> **Vehicle Service Availability:** service availability depends on the user account. Some services might not always be available for subscription. *"Partner Services"* (allowing third-party applications) is not available in all countries.

## 👤 User Authorization

As a developer, you should enroll End Users in your application in order to access their vehicle data. The End User (Ressource Owner) accepts or deny access to a list of **requested scopes**. Even when accepted, the End User can still [revoke]({{site.baseurl}}/webapi/b2c/quickstart/enroll-users#revoke-token-logout-user) your access at any time.

{% comment %}
***For example**, if an End User has activated *"Partner Services"* but vehicle service doesn't allow access to the remote scopes, the Application will only be able to retrieve vehicle data but not to remote control the vehicle.*
{% endcomment %}

> **Consent Prompt:** during the enrollment process, in the consent prompt, the End User can only accept or decline the **entire set** of requested scopes. In the future, End Users will be able to *cherry-pick* scopes on the list.

## Scopes or Vehicle Services?

Scopes and Vehicle Services might look similar but achieve two different goals:
- 📡 **Vehicle Services: Data Upload**: vehicle service activation will enable the upload of the corresponding dataset from the vehicle to Stellantis servers.
- 👤 **Scopes: Authorizing Data**: an end-user (Ressource Owner) can authorize a third-party application (Accessing Party) to access its vehicle data. This is done during the enrollment process.

Vehicle service activation & user authorization of data scopes are both managed during the [enrollment process]({{site.baseurl}}/specifications/data-treatment/quickstart/b2b2c/enroll-end-users/#article), checkout [user journey]({{site.baseurl}}/specifications/data-treatment/quickstart/b2b2c/end-user-journey) for more information about vehicle services activation on the vehicle side.

## List of Scopes

Scopes are **groups of data** that a Ressource Owner can decide to share or not to a Third Party Application (Accessing Party).

You can find out the scope to which an individual data belongs by browsing the **[Data Catalog]({{site.baseurl}}/connected-vehicles/data-catalog/#article)**.

Scopes exist under two different categories:
- 🚙 **Data:** allowing retrieving vehicle data.
  - `data:vehicle `
  - `data:telemetry`
  - `data:telemetry:environment`
  - `data:telemetry:privacy`
  - `data:telemetry:vehicle`
  - `data:telemetry:vehicle:ignition`
  - `data:telemetry:vehicle:location`
  - `data:telemetry:vehicle:preconditioning`
  - `data:telemetry:vehicle:tyreState`
  - `data:telemetry:vehicle:energies`
  - `data:telemetry:vehicle:engines`
  - `data:telemetry:vehicle:doorsState`
  - `data:telemetry:vehicle:battery`
  - `data:telemetry:vehicle:safety`
  - `data:telemetry:vehicle:odometer`
  - `data:telemetry:vehicle:kinetic`
  - `data:telemetry:vehicle:propulsion`
  - `data:telemetry:vehicle:braking`
  - `data:telemetry:vehicle:wipingBlades`
  - `data:telemetry:vehicle:transmission`
  - `data:telemetry:vehicle:adas`
  - `data:telemetry:vehicle:lightingSystem`
  - `data:telemetry:vehicle:maintenance`
  - `data:telemetry:vehicle:drivingBehavior`
  - `data:telemetry:vehicle:alert`
  - `data:telemetry:vehicle:alarm`
  - `data:trip`
  - `data:iision`
- 🕹 **Remote:** for remote command access to the vehicle.
  - `remote`
  - `remote:locking`
  - `remote:locking:write`
  - `remote:horn`
  - `remote:horn:write`
  - `remote:lights`
  - `remote:lights:write`
  - `remote:preconditioning`
  - `remote:preconditioning:write`
  - `remote:onboardPersonalData`
  - `remote:onboardPersonalData:write`
  - `remote:charging`
  - `remote:charging:write`
  - `remote:wakeUp`
  - `remote:wakeUp:write`
  - `remote:navigation`
  - `remote:navigation:write`
  - `remote:vehicleFinder`
  - `remote:vehicleFinder:write`
  - `remote:pnc:contractInfo:write`
  - `remote:driveAlert`
  - `remote:driveAlert:write`

#### App registration

The first step to use this API is to [register your Application]({{site.baseurl}}/specifications/data-treatment/quickstart/b2b2c/app-registration/#article).