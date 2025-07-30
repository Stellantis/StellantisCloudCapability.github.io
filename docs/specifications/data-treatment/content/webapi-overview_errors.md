Error codes are returned by all API endpoints when the answer is not HTTP-OK. They are displayed in {% if page.subsection == 'b2b' %}[reference page]({{ site.baseurl }}/webapi/b2b/api-reference/#article){% elsif page.subsection == "b2c" %}[reference page]({{ site.baseurl }}/webapi/b2c/api-reference/#article){% endif %} by clicking the **default** button on the right side panel.

## Error Message

This is the structure of the error message:

```json
{
    "name": "BAD_REQUEST",
    "debug": "ERROR_123456789",
    "message": "Invalid data provided."
}
```

- `name` is a human-readable, unique name for the error. It should be mapped on the server side to ensure consistency.
- `debug` is a unique error identifier generated on the server side and logged for correlation purposes. It starts with ERROR_.
- `message` is a human-readable message describing the error. This message must be a description of the problem, not a suggestion about how to fix it.

> **Note:** If you encounter any unexpected error, do not forget to save the error message. Please contact Stellantis support with the error message (name, debug and message), we will be able to investigate this.

## HTTP Error Codes

This table lists some HTTP error codes and their meaning in the context of this API.

| Response Code | Meaning                                                                                                 |
|---------------|---------------------------------------------------------------------------------------------------------|
| `200`         | The request has succeeded and the resource data has been sent.                                          |
| `202`         | The request has been accepted for processing, but not yet acted upon. An id of processing is returned.	 |
| `204`         | 	The request has been accepted and there is no additional content.	                                     |
| `400`         | Request cannot be processed due to invalid query parameter value of body content (for POST/PUT verbs)	  |
| `401`         | Unauthorized request due to lack of valid authentication credentials.	                                  |
| `403`         | Unauthorized request due to insufficient credentials to grant access.	                                  |
| `404`         | Target resource not found.	                                                                             |
| `500`         | Unexpected condition that prevented from fulfilling the reques.	                                        |
| `501`         | Feature not supported.                                                                                  |


<!--## Rate Limit

According to your subscription to Stellantis API, they are limited amounts of API calls you can send during a period of time:
- The **day** limit is a sliding window of 24 hours.
- The **burst** limit is a maximum of instantaneous requests during an interval of 1 second.

## Prevent Limiting

The rate limit of your subscription should be sized to your need in terms of requests (burst & daily). 

However, it is possible to track your number of remaining call(s) looking at the header of the HTTP response.

```http
HTTP/1.1 200 OK
X-RateLimit-Limit-1: 100000
X-RateLimit-Remaining-1: 90502
X-RateLimit-Limit-2: 100
X-RateLimit-Remaining-2: 47
```

Field Name | Description
--- | ----
**X-RateLimit-Limit-1** | Number of calls allowed during the day limit.
**X-RateLimit-Limit-2** | Number of calls allowed during the burst limit.
**X-RateLimit-Remaining-1**  | Number of calls remaining before reaching the day limit. Equals to 0 when the limit is reached.
**X-RateLimit-Remaining-2**  | Number of calls remaining before reaching the burst limit. Equals to 0 when the limit is reached.

## Reaching The Limit

When you reach the limit, you will not be able to receive normal information from the API, you will only receive *HTTP 429* responses with the following HTTP headers:

```http
HTTP/1.1 429 TOO MANY REQUESTS
X-RateLimit-Limit-1: 100000
X-RateLimit-Remaining-1: 90502
X-RateLimit-Limit-2: 100
X-RateLimit-Remaining-2: 47
X-RateLimit-Reset: 1045
Retry-After: 1045
```


Field Name | Description
--- | ----
**X-RateLimit-Limit-1** | Number of calls allowed during the day limit.
**X-RateLimit-Limit-2** | Number of calls allowed during the burst limit.
**X-RateLimit-Remaining-1**  | Number of calls remaining before reaching the day limit. Equals to 0 when the limit is reached.
**X-RateLimit-Remaining-2**  | Number of calls remaining before reaching the burst limit. Equals to 0 when the limit is reached.
**X-RateLimit-Reset** & **Retry-After**  | Number of second(s) remaining before *X-RateLimit-Remaining* will not be equals to 0 anymore. These fields are displayed only if *X-RateLimit-Remaining* is equals to 0.

Using these headers, you can wait during the *Reset time* before sending another request to the API.

If the rate limit of your subscription does not fit your needs, you should contact Stellantis in order to increase the ratios.
-->