---
layout: doc-article
permalink: /specifications/data-treatment/quickstart/b2b/auth/
redirect_from: 
    - /webapi/b2b/quickstart/
    - /webapi/b2b/authentication/
section: specifications
subsection: data-treatment
categorie: Quickstart
title: Authentication
description: "Getting authentication in Stellantis network is required in order to use Stellantis Fleet owner API."
require: api-reference
---
{% include  content/get-your-certificate.md %}

# 5. Request for OAuth2 credentials
Once you have certificate downloaded, please send it across to your Stellantis contact. Stellantis
will begin process to generate Client Credentials that can be used to generate OAuth2 token.
Certificate will be configured on Stellantis IDP side as OAuth2 token generation will be mTLS (Client
Id+ Client Certificate). Once the credentials are generated, you will receive email with details to
generate OAuth2 token (IDP URL/Client Id & scope).

# 6. Request Sample

To be able to use Stellantis API, you need to be authenticated as partner in Stellantis network.

6.1 `Generate OAuth2 token` : Using the client credentials received in Step 5, generate OAuth2 token.

```shell
https : //idfed-preprod.mpsa.com/as/token.oauth2
  POST:
  client_id=[received in step 5]
  grant_type=client_credentials
  scope=[received in step 5]
```

6.2 `Invoke the required API` sending OAuth2 token as Bearer token along with Client Id received
in Step 4. Please refer to Swagger file for request samples.

# See Also

##### Tutorial

A [Quick Start guide]({{ site.baseurl }}/specifications/data-treatment/quickstart/b2b/examples/) is provided to help you understand the basics and get started.

##### Testing the API

To test the API you can check the [API List]({{ site.baseurl }}/specifications/data-treatment/api-reference/) directly.
