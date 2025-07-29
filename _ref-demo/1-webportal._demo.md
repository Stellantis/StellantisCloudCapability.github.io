---
name: webportal.demo
domain: demo
availability: available
# or, if availability SET, GET and SUBSCRIBE is all 'available' or all 'notAvailable' use:
# availability: available
# availability: notAvailable
proxification:
  add:
    params:
      - name: added_param
        description: Param added with proxification script.
        unit-value: n/a
        type: string
        example: "example of added param"
        required: true
    data:
      - name: added_data
        type: string
        description: data added with proxification script.
        unit-value: n/a
        example: "example of added data"
    # no data example in ref file, this one is added:
    data_example: |-
      added_data_example: "example"
    # no param example in ref file, this one is added:
    params_example: |-
      added_data_example: "example"
    text: |-
      added text with proxification script
    paramsget: 
      - name: added_paramget
        type: string
        description: Paramget added with proxification script.
        unit-value: n/a
        example: "example of added paramget"
        required: true
    dataget:
      - name: added_dataget
        type: string
        description: dataget added with proxification script.
        unit-value: n/a
        example: "example of added dataget"
    # dataget_example: "added data get example"
    # paramset_example: "added param getexample"
    # textget: "added text get"
    paramsset:
      - name: added_paramset
        type: string
        description: Paramset added with proxification script.
        unit-value: n/a
        example: "example of added paramset"
        required: true
    dataset:
      - name: added_dataset
        type: string
        description: dataset added with proxification script.
        unit-value: n/a
        example: "example of added dataset"
    # dataset_example: "added data set example"
    # paramset_example: "added param setexample"
    # textset: "added text set"
    paramssubscribe:
      - name: added_subscribe_param
        type: string
        description: Paramsubscibe added with proxification script.
        unit-value: n/a
        example: "example of added paramsubscibe"
        required: true
    datasubscribe:
      - name: added_datasubscibe
        type: string
        description: datasubscibe added with proxification script.
        unit-value: n/a
        example: "example of added datasubscibe"
    # datasubscribe_example: "added data subscribe example"
    # paramsubscribe_example: "added param subscribeexample"
    # textsubscribe: "added text subscribe"
  remove:
    params: 
      - name: general_param_2
    data:
      - name: general_data_2
    paramsget: 
      - name: get_param_2
    dataget:
      - name: get_param_2
    paramsset: 
      - name: set_param_2
    dataset:
      - name: set_param_2
    paramssubscribe: 
      - name: subscribe_param_2
    datasubscribe:
      - name: subscribe_param_2
    text: "delete (any string)"
    data_example: "delete (any string)"
    params_example: "delete (any string)"
    dataget_example: "delete (any string)"
    paramsget_example: "delete (any string)"
    textget: "delete (any string)"
    dataset_example: "delete (any string)"
    paramsset_example: "delete (any string)"
    textset: "delete (any string)"
    datasubscribe_example: "delete (any string)"
    paramssubscribe_example: "delete (any string)"
    textsubscribe: "delete (any string)"
  modify: 
    # params: [{}, {}, {}]
    # data: [{}, {}, {}]
    data_example: "string"
    params_example: "string"
    text: "string"
    paramsget:
      - name: "get_param_1"
        description: "MODIFIED Get param 1 overriding general `params`."
        type: string
        unit-value: mph
        example: 2
        required: false
    # dataget: [{}, {}, {}]
    # dataget_example: "string"
    # paramsget_example: "string"
    # textget: "string"
    # paramsset: [{}, {}, {}]
    # dataset: [{}, {}, {}]
    # dataset_example: "string"
    # paramsset_example: "string"
    # textset: "string"
    # paramssubscribe: [{}, {}, {}]
    # datasubscribe: [{}, {}, {}]
    # datasubscribe_example: "string"
    # paramssubscribe_example: "string"
    # textsubscribe: "string"
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
    description: "Default second parameter for get/set/subscribe unless overidded."
    type: string
    unit-value:
      - "params2"
      - "params22"
    example: params2
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
paramssubscribe: 
  - name: "subscribe_param_1"
    description: "Subscribe param 1 overriding general `params`."
    type: int
    unit-value: km/h
    example: 1
    required: true
  - name: "subscribe_param_2"
    description: "Subscribe param 2 overriding general `params`."
    type: string
    unit-value: km/h
    example: 1
    required: true
# params_example: "Example overriding the params generated example code, use YAML syntax `|-` to keep end of line and indentation formating."
paramsget_example: "Example overriding the GET params generated example code, use YAML syntax `|-` to keep end of line and indentation formating."
paramsset_example: "Example overriding the SET params generated example code, use YAML syntax `|-` to keep end of line and indentation formating."
paramssubscribe_example: "Example overriding SUBSCRIBE params generated example code, use YAML syntax `|-` to keep end of line and indentation formating."
data:
  - name: "general_data_1"
    description: "Default data for get/set/subscribe unless overidded."
    type: int
    unit-value: n/a
    example: 42
  - name: "general_data_2"
    description: "Second Default data for get/set/subscribe unless overidded."
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
      - "1: km/h"
      - "2: mph"
    example: 2
dataset:
  - name: "set_data_1"
    description: "Set data overriding general `data`."
    type: int
    unit-value:
      - 1
      - 2
    example: 1
  - name: "set_data_2"
    description: "Set data overriding general `data`."
    type: int
    unit-value:
      - 1
      - 2
    example: 1
datasubscribe:
  - name: "subscribe_data_1"
    description: "Subscribe data overriding general `data`."
    type: int
    unit-value:
      - 1
      - 2
    example: 1
  - name: "subscribe_data_2"
    description: "Subscribe data overriding general `data`."
    type: int
    unit-value:
      - 1
      - 2
    example: 1
# data_example: "Example overriding the data generated example code, use YAML syntax `|-` to keep end of line and indentation formating."
dataset_example: "Example overriding the SET data generated example code, use YAML syntax `|-` to keep end of line and indentation formating."
datasubscribe_example: "Example overriding SUBSCRIBE data generated example code, use YAML syntax `|-` to keep end of line and indentation formating."
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
# text: "test"
textget: "Text displayed on the GET type of this API (support markdown)."
textset: "Text displayed on the SET type of this API (support markdown)."
textsubscribe: "Text displayed on the SUBSCRIBE type of this API (support markdown)."
short: "Short **description** of this API (support markdown)."
privacy: Full Private
layout: api-reference
section: webportal
subsection: v2
categorie: API Reference
---

**Markdown** Formated Text

Link Example: 
  - Link [external](https://wikipedia.org/)
  - Link [internal]({{ site.baseurl }}/webportal/v2/api-reference/list/)