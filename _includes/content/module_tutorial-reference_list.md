# Documentation System

{{page.section|capitalize}} {{page.subsection}} reference system is build using [Jekyll](https://jekyllrb.com/). 

Source files for this references are available in this {%- if page.section == "webportal" AND page.subsection == "v2" %} [folder](https://github.psa-cloud.com/p4d00/doc/tree/master/_webportal-ivi-reference) {% elsif page.section=="mobile-sdk" %} [folder](https://github.psa-cloud.com/p4d00/doc/tree/master/_mobile-sdk-reference) {% endif %} of the documentation repo.

## How to help!

You can (and you should!) **help editing** these references using the "Edit" button available when clicking on the *Get, Set or Subscribe* dropdown button of each API.

Then it's easy to update or correct this documentation either using:
  - the github user interface (see [tutorial](https://training.galaxyproject.org/training-material/topics/contributing/tutorials/github-interface-contribution/tutorial.html))
  - you local git clone of this website

No worries, modifications are not automatic, the maintener of the repo will examine your changes before updating the website ;)


### Demo API

Check out this demo API to learn about this specification system:

<hr/>

{% if page.section == "webportal" and page.subsection == "v2" %}
  {% assign apis = site.ref-demo | where: "name", "webportal.demo" %}
  {% include 
    api-reference-list.html 
    sdk_name="webportalv2"
    githubFolder="_webportal-ivi-private-reference/"
    demo=true
    apis=apis
  %}
{% elsif page.section=="mobile-sdk" %}
  {% assign apis = site.ref-demo | where: "name", "pims.reference.demo" %}
  {% include 
    api-reference-list.html
    githubFolder="_mobile-sdk-references/"
    demo=true
    sdk_name="mobile-sdk"
    apis=apis
  %}
{% endif %}

<hr>

The demonstration above is generated using {% if page.section == "webportal" AND page.subsection == "v2" %}
[this code](https://github.psa-cloud.com/p4d00/doc/tree/master/_webportal-ivi-private-reference/1-webportal._demo.md):{% elsif page.section=="mobile-sdk" %}[this code](https://github.psa-cloud.com/p4d00/doc/blob/pims/_mobile-sdk-reference/pims._demo.md):{% endif %}

```yaml
{% if page.section == "webportal" AND page.subsection == "v2" %}---
name: webportal.demo
domain: demo
availability:
  available:
    - subscribe
  notAvailable: 
    - get
    - set
proxification:
  add:
    params: [{}, {}, {}]
    data: [{}, {}, {}]
    data_example: "string"
    params_example: "string"
    text: "string"
    paramsget: [{}, {}, {}]
    dataget: [{}, {}, {}]
    dataget_example: "string"
    paramset_example: "string"
    textget: "string"
    paramsset: [{}, {}, {}]
    dataset: [{}, {}, {}]
    dataset_example: "string"
    paramsset_example: "string"
    textset: "string"
    paramssubscribe: [{}, {}, {}]
    datasubscribe: [{}, {}, {}]
    datasubscribe_example: "string"
    paramssubscribe_example: "string"
    textsubscribe: "string"
  remove:
    params: [{}, {}, {}]
    data: [{}, {}, {}]
    data_example: "string"
    params_example: "string"
    text: "string"
    paramsget: [{}, {}, {}]
    dataget: [{}, {}, {}]
    dataget_example: "string"
    paramsget_example: "string"
    textget: "string"
    paramsset: [{}, {}, {}]
    dataset: [{}, {}, {}]
    dataset_example: "string"
    paramsset_example: "string"
    textset: "string"
    paramssubscribe: [{}, {}, {}]
    datasubscribe: [{}, {}, {}]
    datasubscribe_example: "string"
    paramssubscribe_example: "string"
    textsubscribe: "string"
  modify: 
    params: [{}, {}, {}]
    data: [{}, {}, {}]
    data_example: "string"
    params_example: "string"
    text: "string"
    paramsget: [{}, {}, {}]
    dataget: [{}, {}, {}]
    dataget_example: "string"
    paramsget_example: "string"
    textget: "string"
    paramsset: [{}, {}, {}]
    dataset: [{}, {}, {}]
    dataset_example: "string"
    paramsset_example: "string"
    textset: "string"
    paramssubscribe: [{}, {}, {}]
    datasubscribe: [{}, {}, {}]
    datasubscribe_example: "string"
    paramssubscribe_example: "string"
    textsubscribe: "string"
# or, if availability SET, GET and SUBSCRIBE is all public or all private
# availability: public
# availability: private
type: 
    - get
    - set
    - subscribe
params:
  - name: "general_param"
    description: "Default parameter for get/set/subscribe unless overidded."
    type: string
    unit-value:
      - "params1"
      - "params2"
    example: params1
    required: true
paramsget:
  - name: "get_param_1"
    description: "Get param 1 overriding general `params`."
    type: int
    unit-value: km/h
    example: 1
    required: true^
  - name: "get_param_2"
    description: "Get param 2 overriding general `params`."
    type: Enum of strings
    unit-value:
      - "get2.1"
      - "get2.2"
    example: get2.1
    required: false
paramsset:
  - name: "set_param_1"
    description: "Set params 1 overriding general `params`."
    type: string
    unit-value:
      - "set1.1"
      - "set1.2"
    example: set1.1
    required: false
  - name: "set_param_2"
    description: "Set params 2 overriding general `params`."
    type: number
    unit-value:
      - 2.1
      - 2.2
    example: 2.2
    required: false
# params_example: "Example overriding the params generated example code, use YAML syntax `|-` to keep end of line and indentation formating."
# paramsget_example: "Example overriding the GET params generated example code, use YAML syntax `|-` to keep end of line and indentation formating."
# paramsset_example: "Example overriding the SET params generated example code, use YAML syntax `|-` to keep end of line and indentation formating."
# paramssubscribe_example: "Example overriding SUBSCRIBE params generated example code, use YAML syntax `|-` to keep end of line and indentation formating."
data:
  - name: "general_data"
    description: "Default data for get/set/subscribe unless overidded."
    type: int
    unit-value: n/a
    example: 42
dataget:
  - name: "get_data_1"
    description: "Get data 1 overriding general `data`."
    type: int
    unit-value: n/a
    example: 42
  - name: "get_data_2"
    description: "Get data 2 overriding general `data`."
    type: int
    unit-value:
      - "1: 'km/h'"
      - "2: 'mph'"
    example: 2
dataset:
  - name: "set_data"
    description: "Set data overriding general `data`."
    type: int
    unit-value:
      - 1
      - 2
    example: 1
# data_example: "Example overriding the data generated example code, use YAML syntax `|-` to keep end of line and indentation formating."
# dataget_example: "Example overriding the GET data generated example code, use YAML syntax `|-` to keep end of line and indentation formating."
# dataset_example: "Example overriding the SET data generated example code, use YAML syntax `|-` to keep end of line and indentation formating."
# datasubscribe_example: "Example overriding SUBSCRIBE data generated example code, use YAML syntax `|-` to keep end of line and indentation formating."
dataget_example: |-
  {
      [
        {
          "id": 65,
          "type": "bluetooth",
          "name": "Phone of John Doe",
          "contentInfo": {}
        },
        {
          "id": 35,
          "type": "tuner",
          "name": "Radio",
        }
      ]
    }
textget: "Text displayed on the GET type of this API (support markdown)."
textset: "Text displayed on the SET type of this API (support markdown)."
textsubscribe: "Text displayed on the SUBSCRIBE type of this API (support markdown)."
short: "Short **description** of this API (support markdown)."
privacy: Full Private
---
{%- elsif page.section == "mobile-sdk" -%}
---
name: pims.demo
domain: Demo
type: 
    - get
    - set
    - subscribe
params:
  - name: "general_param"
    description: "Default parameter for get/set/subscribe unless overidded."
    type: string
    unit-value:
      - "params1"
      - "params2"
    example: params1
    required: true
  - name: "general_param_2"
    description: "Default parameter for get/set/subscribe unless overidded."
    type: string
    unit-value:
      - "params1"
      - "params2"
    example: params1
    required: true
paramsget:
  - name: "get_param_1"
    description: "Get param 1 overriding general `params`."
    type: int
    unit-value: km/h
    example: 1
    required: true
  - name: "get_param_2"
    description: "Get param 2 overriding general `params`."
    type: Enum of strings
    required: false
    fields: 
      - name: "nested_value_1"
        description: "First field of nested object of get param 2."
        type: Enum of strings
        unit-value:
          - "get2.1"
          - "get2.2"
        example: get2.1
        required: false
      - name: "nested_value_2"
        description: "Second field of nested object of get param 2."
        type: Enum of strings
        unit-value:
          - "get2.1"
          - "get2.2"
        example: get2.1
        required: false
  - ref: vin # Reference to vin (simple object) (in /_data/mobile-sdk-params.yml).
paramsset:
  - name: "set_param_1"
    description: "Set params 1 overriding general `params`."
    type: string
    unit-value:
      - "set1.1"
      - "set1.2"
    example: set1.1
    required: false
  - name: "set_param_2"
    description: "Set params 2 overriding general `params`."
    type: number
    unit-value:
      - 2.1
      - 2.2
    example: 2.2
    required: false
# params_example: "Example overriding the params generated example code, use YAML syntax `|-` to keep end of line and indentation formating."
# paramsget_example: "Example overriding the GET params generated example code, use YAML syntax `|-` to keep end of line and indentation formating."
# paramsset_example: "Example overriding the SET params generated example code, use YAML syntax `|-` to keep end of line and indentation formating."
# paramssubscribe_example: "Example overriding SUBSCRIBE params generated example code, use YAML syntax `|-` to keep end of line and indentation formating."
data:
  - name: "general_data"
    description: "Default data for get/set/subscribe unless overidded."
    type: int
    unit-value: n/a
    example: 42
dataget:
  - name: "get_data_1"
    description: "Get data 1 overriding general `data`."
    type: int
    unit-value: n/a
    example: 42
  - name: "get_data_2"
    description: "Get data 2 overriding general `data`."
    type: int
    unit-value:
      - "1: 'km/h'"
      - "2: 'mph'"
    example: 2
  - ref: trip #ref to trip complex object in (/_data/mobile-sdk-params.yml)
    name: 'previousTrips' # override trip name
    description: Previous trip list.
    type: List of Objects
dataset:
  - name: "set_data"
    description: "Set data overriding general `data`."
    type: int
    unit-value:
      - 1
      - 2
    example: 1
# data_example: "Example overriding the data generated example code, use YAML syntax `|-` to keep end of line and indentation formating."
# dataget_example: "Example overriding the GET data generated example code, use YAML syntax `|-` to keep end of line and indentation formating."
# dataset_example: "Example overriding the SET data generated example code, use YAML syntax `|-` to keep end of line and indentation formating."
# datasubscribe_example: "Example overriding SUBSCRIBE data generated example code, use YAML syntax `|-` to keep end of line and indentation formating."
dataget_example: |-
  [
      {
        "vin": "VR1AB12C3D45678909",
        "gdpr": true
      },
      {
        "vin": "VR1AB12C3D45678909",
        "gdpr": false
      }
    ]
error: 
  - code: 2000
errorget: 
  - code: 2000
  - code: 2101
  - code: 2102
errorset: 
  - code: 2000
  - code: 2006
textget: "Text displayed on the GET type of this API (support markdown)."
textset: "Text displayed on the SET type of this API (support markdown)."
textsubscribe: "Text displayed on the SUBSCRIBE type of this API (support markdown)."
short: "Short **description** of this API (support markdown)."
component : # components required for this API to work
  - First Cpmnt
  - Second Cpmnt
---
{% endif %}

**Markdown** Formated Text

Link Example: 
  - Link [external](https://wikipedia.org/)
  - Link [internal]({{'{{'}} site.baseurl }}/webportal/v2/api-reference/list/)
```

Let's understand together how this file generates the example above:

|**Field**|**Description**|**Type**|**Unit/Values**|**Required**|
|-|-|-|-|-|
|**name**| API name, will be used instead of the file name.| `String`| *n/a*| Required |
|**domain** | Domain name of this api. | `String` | *n/a* | Required|
|**type** | Availables types for this API. | `String or Array` | -&nbsp;get <br> -&nbsp;set <br> -&nbsp;subscribe | Required|
|**textget** | This field allow to add a dedicated description to this API for the type GET only. | `Sting` | *n/a* | Not required
|**textset** | This field allow to add a dedicated description to this API for the type SET only. | `Sting` | *n/a* | Not required
|**textsubscribe** | This field allow to add a dedicated description to this API for the type SUBSCRIBE only. | `Sting` | *n/a* | Not required
|**params**<br>&nbsp;&nbsp;*paramsget*<br>&nbsp;&nbsp;*paramsset*<br>&nbsp;&nbsp;*paramssubscribe* | This field allows to describe the **request** params(s) of this API. If the params are differents between get/set/susbcribe you should use the dedicated fields: `paramsget` `paramsset` `paramssubscribe`, they will be used instead of the `params` field. | `Object` | *n/a* | Not Required|
|***params.*name** | Name of this param. | `String` | *n/a* | Required|
|***params.*description** | Description of what is stored in this field. | `String` | *n/a* | Required|
|***params.*type** | Value type of this field. | `Enum` | -&nbsp;String <br> -&nbsp;Int <br> -&nbsp;Number <br> -&nbsp;Array <br> -&nbsp;Enum (of string/int etc.) <br> -&nbsp;Object | Required|
|***params.*unit-value** | Depending on the params, this field indicates the unit (km, seconds, mph etc.), or the available values for this field. | `String or Array` | unit (km, minutes etc.) <br>**OR**<br> -&nbsp;value_1: 'description value 1' <br> -&nbsp;value_2: 'description value 1' | Required|
|***params.*example** | An example of request param. | `Type of the params` | *n/a* | Required|
|***params.*required** | Indicates if this parameter is required to request the API. | `boolean` | -&nbsp;true<br>-&nbsp;false | Required|
|***params.*fields**| An array of Params object in case Params contains nested objects. In this case, follow these rules for the parent field: <br> - don't reference `unit-value` and `example`, <br> - `type` should be `Object`. | `Array of Params Object` | *n/a* | Not Required |
|***params*.ref**| A string referencing an object in another directory (in /_params of jekyll project). If referencing a simple object (not nested), just use: `- ref: '<ref_in_/_params/mobile-sdk-params.yml>'`. If it's a nested object you should use `ref, name, description, type and required` | `string` | *n/a* | Not Required |
|**params_example** | If the automatic generation of the request is wrong you should use this field to override the `"params"`field in the request example with a JSON code sample. Use the YAML syntax `params_example: |-` before writing the code example. Refere to the code demo for intentation. In case you need to override specifically set/get/subscribe you can use : `paramsset_example` `paramsget_example` `paramssubscribe_example` | `String` | *n/a* | Not required|
|**data**<br>&nbsp;&nbsp;*dataget*<br>&nbsp;&nbsp;*dataset*<br>&nbsp;&nbsp;*datasubscribe* | This field allows to describe the **response** data(s) of this API. If data are differents between get/set/susbcribe you should use the dedicated fields: `dataget` `dataset` `datasubscribe`, they will be used instead of the `data` field. | `Object` | *n/a* | Not Required|
|***data.*name** | Name of this data. | `String` | *n/a* | Required|
|***data.*description** | Description of what is stored in this field. | `String` | *n/a* | Required|
|***data.*type** | Value type of this field. | `Enum` | -&nbsp;String <br> -&nbsp;Int <br> -&nbsp;Number <br> -&nbsp;Array <br> -&nbsp;Enum (of string/int etc.) <br> -&nbsp;Object | Required|
|***data.*unit-value** | Depending on the data, this field indicates the unit (km, seconds, mph etc.), or the available values for this field. | `String or Array` | unit (km, minutes etc.) <br>**OR**<br> -&nbsp;value_1: 'description value 1' <br> -&nbsp;value_2: 'description value 1' | Required|
|***data.*example** | An example of response data. | `Type of the data` | *n/a* | Required|
|***data*.fields**| An array of data object in case data contains nested objects. In this case, follow these rules for the parent field: <br> - don't reference `unit-value` and `example`, <br> - `type` should be `Object`. | `Array of Data Object` | *n/a* | Not Required |
|***data*.ref**| A string referencing an object in another directory (in /_data of jekyll project). If referencing a simple object (not nested), just use: `- ref: '<ref_in_/_data/mobile-sdk-datas.yml>'`. If it's a nested object you should use `ref, name, description, type` | `string` | *n/a* | Not Required |
|**data_example** | If the automatic generation of the response is wrong you should use this field to override the `"data"`field in the response example with a JSON code sample. Use the YAML syntax `params_example: |-` before writing the code example. Refere to the code demo for intentation. In case you need to override specifically set/get/subscribe you can use : `dataset_example` `dataget_example` `datasubscribe_example` | `String` | *n/a* | Not required|

{% if page.section=="mobile-sdk" %}
|**error**<br>&nbsp;&nbsp;*errosget*<br>&nbsp;&nbsp;*errosset*<br>&nbsp;&nbsp;*errossubscribe*| List of error codes that can occure in this api and type. The code should reffer to one of the errors codes of [this page]({{site.baseurl}}/mobile-sdk/overview/errors/#article). The label, subcode and sublabel, will be added automatically. | `Array` | *n/a* | Not Required|
|**components**| List component(s) required for this API | `Array | *n/a* | Not Required|
{% elsif page.section == "webportal" AND page.subsection == "v2" %} 
|**privacy**| Privacy availability of this API | `Enum` | -&nbsp;Geolocation&nbsp;Private <br> -&nbsp;Full Private <br> -&nbsp;Public | Required|
{%- endif %}



<style>
  table code {
    word-wrap: normal
  }
</style>