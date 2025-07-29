---
layout: doc-article
permalink: /specifications/data-treatment/quickstart/b2b2c/end-user-journey/
section: specifications
subsection: data-treatment
categorie: Quickstart
title: End-User Journey
description: "Explanation about End Users journey to authorize access to its account and consume third-party App."
---

<div class="notification notification-empty-bg">

{% capture short %}
**Tutorial Output**:
  - 👩🏽‍💻 As an Accessing Party you'll have a better understanding of the End User journey in the [Enrollment Prompt]({{site.baseurl}}/specifications/data-treatment/quickstart/b2b2c/enroll-end-users/#article).
{% endcapture %}
{{ short | markdownify}}

</div>

As an [Accessing Party]({{site.baseurl}}/specifications/data-treatment/overview/about/#end-users-api-roles), this page will explain the expected **consent journey** of an End-User of your App when the consent **prompt** is triggered. 

This page helps you to understand what is happening on the End User side when the prompt is triggered.

## Consent Journey

In the [enrollment tutorial]({{site.baseurl}}/specifications/data-treatment/quickstart/b2b2c/enroll-end-users/#article), the Accessing Party requests the Resource Owner consents to **access its Stellantis Account** data including vehicles data linked to the account.

Once triggered, the [prompt](#trigger-prompt) will perform and guide the End User in the following process:
- 👤 [Sign In](#sign-in) or [create](#account-creation) a Stellantis Account.
- 📡 Activate the required [vehicle services](#vehicle-service-activation) for 3rd party App.
- 🚗 Perform the required [certification process](#certificiation-process) in the manufacturer App.
- 🔓 Finally, accept or deny the [scope authorization request](#consent-acceptance).

Once the consent has been accepted, you should also be aware that:
- 🚪 You should provide a [logout feature](#account-logout) in your App.
- ❌ The User is able to [revoke access](#revoke-access) to your App at any time.

<img src="{{site.baseurl}}/assets/images/b2c-prompt-journey.svg" alt="b2c-prompt-journey" style="width: 520px">

> **Note:** during this process, the end user might need to quit your App. In this case, the flow is lost and the Authorization Process needs to be restarted from the start.

## Trigger Prompt

First of all, the Accessing Party should **trigger the consent prompt** by following the instruction of the [enrollment process]({{site.baseurl}}/specifications/data-treatment/quickstart/b2b2c/enroll-end-users/#2️⃣-request-consent) tutorial.

The prompt is configured by the Accessing Party, it should include the list of scopes requested to the user.

The following screenshot details the user **journey in the prompt**, first screen will always be [signed in](#sign-in)

## Sign In

First of all the prompt will display a Sign In page, the User should login using **Stellantis credentials**. These credentials are never transmitted to the Accessing Party.

In case the user doesn't have a Stellantis Account, the prompt allows **creating one** using the [sign up button](#account-creation).

<figure>
      <img alt="ask-consent" src="{{site.baseurl}}/assets/images/b2c-screenshot-enroll-consent-login.jpg" style="max-width: 250px; padding-bottom: 0">
    <figcaption>Sign In</figcaption>
</figure>


## Account Creation

If the User doesn't have a Stellantis account, it can be created using the **Sign Up** link:
- First email & password should be chosen.
- Then, the user should verify the account with an activation email.
- Finally, when the account has been successfully activated, the prompt should be **triggered again** and the user will be able [to sign in](#sign-in).

<div style="display: flex; align-items: baseline; justify-content: space-around;">
  <figure style="max-width: 45%; margin-right: 0; margin-left: 0;">
    <img alt="ask-consent" src="{{site.baseurl}}/assets/images/b2c-screenshot-sign-up.jpg" style="width: 100%; max-width: 250px; padding-bottom: 0">
    <figcaption>Sign Up</figcaption>
  </figure>

  <figure style="max-width: 45%; margin-right: 0; margin-left: 0;">
    <img alt="ask-consent" src="{{site.baseurl}}/assets/images/b2c-screenshot-account-activation-required.jpg" style="width: 100%; max-width: 250px; padding-bottom: 0">
    <figcaption>Activation Required</figcaption>
  </figure>
</div>

## Vehicle Service Activation

Vehicles don't upload data to Stellantis servers if no services are activated for the vehicle. This behavior ensure that only the required data are uploaded and is required to comply with RGPD regulation.

Vehicle data are uploaded only if the End User has activated the appropriate services for the vehicle, checkout [data availability & scopes]({{site.baseurl}}/specifications/data-treatment/quickstart/b2b2c/data-availability-scopes/#article) for more information about data available for a vehicle.

Vehicle services need to be **enabled only once**, it means that if the user has already activated the services on a vehicle, this step will not be asked again.

The prompt will guide the user to enable the appropriate services:


<div style="display: flex; align-items: baseline; justify-content: space-around;">
  <figure style="max-width: 45%; margin-right: 0; margin-left: 0;">
    <img alt="subscribtion-required" src="{{site.baseurl}}/assets/images/b2c-screenshot-subscribe-service.jpg" style="width: 100%; max-width: 250px; padding-bottom: 0">
    <figcaption>Subscribtion Required</figcaption>
  </figure>

  <figure style="max-width: 45%; margin-right: 0; margin-left: 0;">
    <img alt="Service subscribed" src="{{site.baseurl}}/assets/images/b2c-screenshot-service-subscribed.jpg" style="width: 100%; max-width: 250px; padding-bottom: 0">
    <figcaption>Services subscribed</figcaption>
  </figure>
</div>

## Certificiation Process

Certification Process is a security layer allowing Stellantis to make sure that the user is the owner of the vehicle. This certification only needs to be performed once and will not be asked again if the user has already certified the vehicle.

The prompt will guide the user to download the manufacturer App to perform the **Certification process**. These are the certification steps:
- 📞 Trusted Phone verification.
- 🔑 Define a Safety Code.
- 🔗 Perform Device pairing to Vehicle.

<div style="display: flex; align-items: baseline; justify-content: space-around;">
  <figure style="max-width: 30%; margin-right: 0; margin-left: 0;">
    <img alt="ask-consent" src="{{site.baseurl}}/assets/images/b2c-screenshot-ownership-verification-1.jpg" style="width: 100%; max-width: 250px; padding-bottom: 0">
    <figcaption>Start Certification</figcaption>
  </figure>

  <figure style="max-width: 30%; margin-right: 0; margin-left: 0;">
    <img alt="ask-consent" src="{{site.baseurl}}/assets/images/b2c-screenshot-ownership-verification-2.jpg" style="width: 100%; max-width: 250px; padding-bottom: 0">
    <figcaption>Certification Steps</figcaption>
  </figure>

  <figure style="max-width: 30%; margin-right: 0; margin-left: 0;">
    <img alt="ask-consent" src="{{site.baseurl}}/assets/images/b2c-screenshot-ownership-verification-3.jpg" style="width: 100%; max-width: 250px; padding-bottom: 0">
    <figcaption>Pairing Process</figcaption>
  </figure>
</div>

## Consent Acceptance

The consent screen is displayed if the previous steps have been performed, or if they have been performed for another 3rd party already:
  - [Sign In](#sign-in)
  - [Service Activation](#vehicle-service-activation)
  - [Vehicle Certification](#certificiation-process)

The consent prompt contains the list of data scope the Accessing Party is requesting to the user. The user can only accept or decline the entire list of scope requested. It's not possible to select only some scopes of the list:


<figure>
  <img alt="ask-consent" src="{{site.baseurl}}/assets/images/b2c-screenshot-enroll-ask-consent.jpg" style="max-width: 250px; padding-bottom: 0">
  <figcaption>Ask Consent</figcaption>
</figure>

## Account Logout

As an Accessing Party, you should implement a logout function in your App. 

Theses features should revoke token, check out [**revoke tokens**]({{site.baseurl}}/specifications/data-treatment/quickstart/b2b2c/enroll-end-users/#revoke-token-logout-user).

## Revoke Access

At any time, the End User can use the manufacturer application to revoke access to a third-party App. 

In this case, the associated access token is revoked and your App will not be able to access the user data anymore. In this case, if the Ressource Owner wants to access the Third Party App, you need to restart the [enrollment process]({{site.baseurl}}/specifications/data-treatment/quickstart/b2b2c/enroll-end-users/#article) from start.

<figure>
  <img alt="revoke-access" src="{{site.baseurl}}/assets/images/b2c-screenshot-revoke-access.jpg" style="max-width: 250px; padding-bottom: 0">
  <figcaption>Revoke Access</figcaption>
</figure>
