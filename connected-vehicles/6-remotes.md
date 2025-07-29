---
layout: simple-article
permalink: /connected-vehicles/overview/remotes-control/
section: connected-vehicles
title: Remote Control
subsection: overview
on_this_page: false
menu: false
require: highlighted-link
description: "Send remote command to a vehicle."
subtitle: Remote commands
---

Using [Stellantis API]({{site.baseurl}}/specifications/data-treatment/remote/about-remotes) you are able to send remote control command to your vehicle(s)! 

The remote feature allows to control your vehicle trough cellular network. 

Using this tool, it is possible to add remote control features to your mobile application or web application.


### Remote Features
<ul style="list-style: none">

  <li>🔌 <strong>Charging</strong>: Start and stop the recharge of the vehicle.</li>
  <li>🥷 <strong>Stolen</strong>: Remote operation to update stolen state and immobilization. Only one attribute can be used at a time.</li>
  <li>💡 <strong>Lights</strong>: Remote to switch on / off lights.</li>
  <li>❄️ <strong>Preconditioning</strong>: Remote preconditioning of the vehicle.</li>
  <li>🔒 <strong>Locking</strong>: Remote Lock & Unlock allows to lock and unlock the vehicle.</li>
  <li>🔈 <strong>Horn</strong>: Remote vehicle horn activation. The eligibility API will provide possible state values for the vehicle.</li>
  <li>🔒 <strong>Immobilization</strong>: Requesting the vehicle for immobilization.</li>
  <li>📍 <strong>Navigation</strong>: Share GPS positions with the vehicle so it can navigate through them, from the start (1st) to the end (last) position.</li>
  <li>🔄 <strong>State</strong>: Refresh and retrieve vehicle status information.</li>
  <li>🥱 <strong>WakeUp</strong>: Remote to wake up a vehicle (so it can update its data).</li>
  <li>🚗 <strong>VehicleFinder</strong>: Remote to get the vehicle’s current location.</li>
  <li>🚨 <strong>Tan</strong>: Remote operation to update Theft Alarm Notification suppression and confirmation state. Only one attribute can be used at a time.</li>
  <li>👤 <strong>OnboardPersonalData</strong>: Enables the user to delete personal data stored in the vehicle.</li>

</ul>

<div>
    {% include highlighted-link.html link_label="Retrieve the remote commands!" link_url="/specifications/data-treatment/remote/set-up/#remote-actions" %}
</div>

### How Does it Works?

This feature is fully compatible with our REST API, it means that you can configure all your remote action using simple HTTP request. 

In addition, remote control provides notification messages during the process of the remote action. You will receive these notification messages on your server, you can understand more about it by reading the [webhook references]({{site.baseurl}}/webapi/b2b/remote/server-specification/#/article).

**Example sending a remote navigation:**

![remote-action-sequence]({{site.baseurl}}/assets/images/remote-action-simple-sequence.svg)

<div>
    {% include highlighted-link.html link_label="Learn how to use Remotes!" link_url="/specifications/data-treatment/remote/about-remotes/#article" %}
</div>