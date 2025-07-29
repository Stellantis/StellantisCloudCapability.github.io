---
layout: doc-article
permalink: /specifications/data-treatment/remote/about-remotes/
redirect_from: 
    - /specifications/data-treatment/remote/
section: specifications
subsection: data-treatment
require: swagger
gitHubPath: webapi/content/webapi-remote_about.md
categorie: Remote
title: About Remotes
description: "Remote API allows to send online commands to your connected vehicles."
---
The remote feature of this API allows sending remote action to Stellantis vehicles using an internet connection.

## Remote Features

- **❄️ Preconditioning**: Remote preconditioning the vehicle.
- **🔌 Charging**: Start and Stop the recharge of the vehicle.
- **💡 Lights**: Remote to swith on / off lights.
- **🔈 Horn**: Remote vehicle horn activation.The eligibility api will provide possible state values for the vehicle.
- **🔒 Immobilization**: Requesting the vehicle for immobilization.
- **🥷 Stolen**: Remote operation to update stolen state and immobilization. Only one attribute can be used at a time.
- **🔄 State**: Refresh and retrieve vehicle status info.
- **📍 Navigation**: A remote to share GPS positions with the vehicle so it can navigate through those positions by driving from start (1st) to end (last) position.
- **🔒 Locking**: Remote Lock & Unlock allows to lock and unlock their vehicle.
- **🥱 WakeUp**: Remote to wake up a vehicle (so it can update its data).
- **🚗 VehicleFinder**: Remote to get vehicle’s present location.
- **🚨 Tan**: Remote operation to update Theft Alarm Notification suppression state and confirmation state. Only one attribute can be used at a time.
- **👤 OnboardPersonalData**: Enable user to delete personal data for the vehicle.

# How does it work?

When a remote action is sent to a vehicle, it will trigger notifications during the process. That's why, before sending any remote, it's necessary to set up a **remote callback channel**. If you are working with monitors already, {% if page.subsection == 'data-treatment' %}it is almost the same as posting a [monitor]({{site.baseurl}}/specifications/data-treatment/monitor/set-up/#post-monitor-request){% elsif page.subsection == 'b2c' %} it's the [same process]({{site.baseurl}}/webapi/b2c/monitor/set-up/#post-monitor-request){% endif %}.

Callbacks allow to setup the notifications sent by the remote and the address of the targeted server{% if page.subsection == "data-treatment" %} and the retryPolicy and batch sending. Callbacks can be configured to be specific to certain remote types.{% endif %}

![remote-callback-sequence](/mph05/ApiSpec/assets/images/Remote-channel-config.png)

Then, it's possible to send a **remote action** request using a vehicle ID and the channel ID.

When a remote command is sent to a vehicle, the callback server will receive several notifications as the action is being processed, checkout [Notification and Errors]({{site.baseurl}}/specifications/{{page.subsection | downcase}}/remote/notifications-and-errors/) for more information about these events.
- **Pending:** The remote action is in processing (*Accepted*, *Waking-Up*, *Send* etc.). Several *Pending* events will be received.
- **Done:** The remote action is complete (*Success*, *Failure* etc.).

![remote-action-sequence]({{site.baseurl}}/assets/images/remote-action-sequence.svg)
