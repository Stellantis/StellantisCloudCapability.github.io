> # Stellantis Connected Car API
Connected Car API 
    
   
# Introduction

This is the description of the *Stellantis Connected Car V2 API*. The speccification is  is based on **OpenAPI Specification version 3** and can be displayed using [ReDoc](https://github.com/Rebilly/ReDoc)a or [Swagger](http://swagger.io).
    
This API allows applications to fetch data from the Connected Vehicles Data Platform. It is designed to be **a declarative data and function specification**, so they are understood and consumed by stakeholders without knowledge of manufacturer onboard vehicle specification

## API Features:
- **VEHICLE IOT**
- **DATA TREATMENT**
- **DEVICE MANAGEMENT**
- **Subscription, Commercial Capabilites, Management**:
    - SAMS:
        Subscription management, it includes frontend/backend/Catalog(Zuora). As well as API exposition for Eligibility, Catalog, Cart, Payment, Contract. In PRODUCTION
    - CPA:
        Technical enabler responsible for onboarding and processing the reconciliation between a token and an ID Digital (Customer ID in C1ST).  In DEVELOPMENT
    - OMS:
        Technical enabler responsible for managing the link between the vehicle pre-command until delivery to the client.  In DEVELOPMENT
    - PROMAN:
         Technical enabler responsible for managing the workflow of services activation.  In DEVELOPMENT
- **ABC**

## API Authentication
Stellantis Connected Car APIs uses the OAuth 2.0 protocol for authentication and authorization. Any application require a valid Access Token to access to data.

- Hierarchical Scopes
    - Since api resources are hierarchical, API uses also hierarchical scopes. Colon characters are used to navigate to subresource scopes.

- Filtering Scopes
    - When the API caller requests a set of scopes. The owner may not grant access to all of the requested scopes, so the application will have to adapt to the restricted access or request for a larger set of scopes again.

    - API backend will deliver the data related to the granted scopes only.

    - If no scope has been granted with the caller token then an unauthorized error will be returned.

## API Errors
Error codes returned by all APIs comply with the standard. Nevertheless, PSA Services (callers) need to have more detailed data structures (even when the answer is not Http-OK) to better categorize the type of error by providing application code, message and debugging code(for investigation purposes). The HTTP code of the response is managed by the protocol itself (in the header).

These APIS are likely to report the following HTTP code:
## Tables

|Code..|Description...|Case..|
|200|The request has succeeded and the resource data has been sent.|GET APIs.|
|202|	The request has been accepted for processing, but not yet acted upon. An id of processing is returned.|	POST/PUT requests: <br> -Create monitor <br> -Create a callback|
|204|	The request has been accepted and there is no additional content|	DELTE APIs: <br> -Delete monitor <br> -Delete a callback||
|400|	Request cannot be processed due to invalid query parameter value of body content (for POST/PUT verbs)|	ALL APIs.
|401|	Unauthorized request due to lack of valid authentication credentials.|	All APIs.
|403|	Unauthorized request due to insufficient credentials to grant access.|	All APIs.
|404|	Target resource not found.|	All APIs. Even POST, PUT or DELETE if the resource id is uncknown.
|500|	Unexpected condition that prevented from fulfilling the reques.|	All APIs.


## API Output
Data format

**All APIs return data in JSON format. The application who uses them must take into account the evolving character of them and more precisely regarding the schemas of the exposed data. Indeed:**

- The missing of known data fields should not cause an error.
- It should (correctly) deal with JSON content with unknown properties also. Indeed, data schema extensions should be supported without errors even if they are not used.

**For example:**
Assuming a given exposed resource with this data schema:
```json
  { data:
        type: object
        description: Data model
        properties:
            field1:
                type: string
            field2:
                type: number
  }
```
The application should be able to deal with those possible valid JSON contents:

>All fields: <code>"field1":"value1", "field2": 1</code> <br>
>Missing field2: <code>"field1":"value1" </code><br>
>Unknown field3: <code>"field1":"value1", "field3": 2.5 </code>
