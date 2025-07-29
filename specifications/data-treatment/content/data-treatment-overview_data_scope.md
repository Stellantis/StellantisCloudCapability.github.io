---
layout: doc-article
permalink: /specifications/data-treatment/overview/data-scope
section: specifications
subsection: data-treatment
categorie: Overview
title: Data Scope
description: "Getting authentication in Stellantis network is required in order to use Stellantis Fleet owner API."
require: api-reference
---

# Available Data

Stellantis API is a technical interface allowing developers to create application that includes connected vehicles data and features for Stellantis.

These API are scope of possibilities, but to access the data you need authorization.

## Data Scope

A vehicle is able to subscribe *connected vehicle services*. These services are sets of data and features. Without subscribing to the relevant data scope, the API will not return the data you are looking for.

![Buy a service]({{site.baseurl}}/assets/images/services-store.jpg)

Let's take the example of TMTS (tele maintenance tele service), this *connected vehicle service* includes a scope of data related to maintenance. If a vehicle only subscribe to the TMTS service, then it will not be possible to retrieve the location of the vehicle using WEB API; indeed this data is not useful therefore not part of TMTS scope.

> **Note:** if the data you are looking for is not part of any *connected vehicle service* data scope, then it's not currently available for use.


## Data Minimization

*Connected Vehicle Services* are designed to achieve a specific goal. Like TMTS for maintenance or E-Remote Control for remote charging.

The scope of data of a service fit the goal that this service needs to achieve. However, it includes only the data and features required to this goal.
