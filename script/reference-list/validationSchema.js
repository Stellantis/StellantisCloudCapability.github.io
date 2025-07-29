// TD add description field (from readme)

const notEmptyString = {
  type:'string',
  minLength: 1,
}

const refTypes = {
  type: 'array',
  items: {type: 'string', enum: ['get', 'set', 'subscribe']},
  minItems: 1,
  maxItems: 3,
  uniqueItems: true,
}

const refData = {
  anyOf: [
    {
      type: 'array',
      items: {
        anyOf: [
          {
            type: 'object',
            properties: {
              name: notEmptyString,
              type: notEmptyString,
              description: notEmptyString,
              'unit-value': {
                anyOf: [
                  notEmptyString,
                  {
                    type: 'array',
                    minItems: 1,
                    uniqueItems: true
                  }
                ]
              },
              example: true,
            },
            additionalProperties: false,
            required: ['name', 'type', 'description', 'unit-value', 'example']
          },
          {
            type: 'object',
            properties: {
              name: notEmptyString,
              description: notEmptyString,
              type: notEmptyString,
              fields: {type: 'array'},
            },
            additionalProperties: false,
            required: ['name', 'type', 'description', 'fields'],
          },
          {
            type: 'object',
            properties: {
              ref: notEmptyString,
              name: notEmptyString,
              description: notEmptyString,
            },
            additionalProperties: true,
            required: ['ref', 'name', 'description'],
          },
          {
            type: 'object',
            properties: {
              ref: notEmptyString,
            },
            additionalProperties: false,
            required: ['ref'],
          },
        ]
      },
      minItems: 1,
      uniqueItems: true,
    },
    {type: 'string', enum: ['none']}
  ]
}

let refParams = JSON.parse(JSON.stringify(refData));
[0, 1, 2].forEach(i => {
  refParams.anyOf[0].items.anyOf[i].properties.required = {type: 'boolean'}
  refParams.anyOf[0].items.anyOf[i].required.push('required');
})

const refName = notEmptyString;

const refSubName = notEmptyString;

const refDomain = notEmptyString;

const refExample = notEmptyString;

const paramExample = {
  anyOf: [
    {
      type: 'object',
      properties: {
        kotlin: {
          type:'string',
          minLength: 1,
        },
        swift: {
          type:'string',
          minLength: 1,
        }
      },
      additionalProperties: false,
    },
    {type: 'string', minLength: 1}
  ]
}

const refText = notEmptyString;

const refShort = notEmptyString;

const refLayout = {
  type:'string',
  enum: ['api-reference']
}

const refSection = {
  type:'string',
  enum: ['webportal', 'mobile-sdk']
}

const refSubSection = {
  type:'string',
  enum: ['v2']
}

const refCategorie = {
  type:'string',
  enum: ['API Reference']
}

const refSecurity = {
  type:'string',
  enum: ['none', 'authentication', 'subscription']
}

const refVersion = {
  type:'object',
  properties: {
    'available-since': notEmptyString,
  },
  additionalProperties: false,
  required: ['available-since'],
}



const refSchema = {
  title: 'SDKReference',
  description: 'Reference of an API in one of the GET/SET/SUBSCRIBE Stellantis SDK.',
  type: 'object',
  properties: {
    name: refName,
    subname: refSubName,
    domain: refDomain,
    layout: refLayout,
    section: refSection,
    subsection: refSubSection,
    categorie: refCategorie,
    security: refSecurity,
    version: refVersion,
    type: refTypes,
    params: refParams,
    paramsget: refParams,
    paramsset: refParams,
    paramssubscribe: refParams,
    data: refData,
    dataget: refData,
    dataset: refData,
    datasubscribe: refData,
    params_example: paramExample,
    paramsget_example: paramExample,
    paramsset_example: paramExample,
    paramssubscribe_example: paramExample,
    data_example: refExample,
    dataget_example: refExample,
    dataset_example: refExample,
    datasubscribe_example: refExample,
    text: refText,
    textget: refText,
    textset: refText,
    textsubscribe: refText,
    short: refShort,
  },
  required: ['name', 'domain', 'type', 'short'],
  additionalProperties: false,
};

const refPrivacy = {
  type: 'string',
  enum: ['Full Private', 'Geolocation Private', 'Public']
};

let refTypesAvailability = JSON.parse(JSON.stringify(refTypes));;
refTypesAvailability.maxItems = 2;

const refAvailability = {
  anyOf: [
    {type: 'string', enum: ['available', 'notAvailable', 'sdkOnly']},
    {
      type: 'object',
      properties: {
        available: refTypesAvailability,
        notAvailable: refTypesAvailability,
      },
      additionalProperties: false,
      required: ['available', 'notAvailable'],
    },
  ]
};

let refSchemaWebportalV2 = JSON.parse(JSON.stringify(refSchema));
refSchemaWebportalV2.properties.availability = refAvailability;
refSchemaWebportalV2.properties.privacy = refPrivacy;
refSchemaWebportalV2.required.push('privacy');

const refComponents = {
  type: 'array',
  items: {type: 'string', minLength: 1},
  minItems: 1,
  uniqueItems: true,
};

const refErrors = {
  type: 'array',
  items: {
    type: 'object',
    properties: {
      code: {type: 'integer'}
    },
    additionalProperties: false,
    required: ['code']
  },
  minItems: 1,
  uniqueItems: true,
};

let refSchemaMobileSdk = JSON.parse(JSON.stringify(refSchema));
refSchemaMobileSdk.properties.component = refComponents
refSchemaMobileSdk.properties.componentget = refComponents
refSchemaMobileSdk.properties.componentset = refComponents
refSchemaMobileSdk.properties.componentsubscribe = refComponents
refSchemaMobileSdk.properties.error = refErrors
refSchemaMobileSdk.properties.errorget = refErrors
refSchemaMobileSdk.properties.errorset = refErrors
refSchemaMobileSdk.properties.errorsubscribe = refErrors

//  end ref schema


//  ref proxi schema

const proxificationVerbTemplate = {
  type: 'object',
  properties: {
    params: refParams,
    paramsget: refParams,
    paramsset: refParams,
    paramssubscribe: refParams,
    data: refData,
    dataget: refData,
    dataset: refData,
    datasubscribe: refData,
    params_example: refExample,
    paramsget_example: refExample,
    paramsset_example: refExample,
    paramssubscribe_example: refExample,
    data_example: refExample,
    dataget_example: refExample,
    dataset_example: refExample,
    datasubscribe_example: refExample,
    text: refText,
    textget: refText,
    textset: refText,
    textsubscribe: refText,
  },
  additionalProperties: false,
  minProperties: 1,
}

let proxificationAdd = JSON.parse(JSON.stringify(proxificationVerbTemplate))

const paramsDataLists = ['params','paramsget','paramsset','paramssubscribe','data','dataget','dataset','datasubscribe']

let proxificationModify = createProxificationModify(JSON.parse(JSON.stringify(proxificationVerbTemplate)))
function createProxificationModify(proxificationVerbTemplate) {
  for (refProxiRootField in proxificationVerbTemplate.properties) {
    if (paramsDataLists.includes(refProxiRootField)) {
      [0, 2].forEach(i => {
        let paramData = proxificationVerbTemplate.properties[refProxiRootField].anyOf[0].items.anyOf[i];
        const paramDataProp = paramData.properties;
        for (proxiParamsDataField in paramDataProp) {
          paramData.required = ['name'];
          paramData.minProperties = 2;
        }
      });
    }
  }
  proxificationVerbTemplate.properties.name = refName;
  proxificationVerbTemplate.properties.domain = refDomain;
  proxificationVerbTemplate.properties.short = refShort;
  proxificationVerbTemplate.properties.privacy = refPrivacy;
  return proxificationVerbTemplate;
}

const proxificationRemove = createProxificationRemove(JSON.parse(JSON.stringify(proxificationVerbTemplate)));

function createProxificationRemove(proxificationVerbTemplate) {
  for (refProxiRootField in proxificationVerbTemplate.properties) {
    if (paramsDataLists.includes(refProxiRootField)) {
      [0, 2].forEach(i => {
        let paramData = proxificationVerbTemplate.properties[refProxiRootField].anyOf[0].items.anyOf[i];
        const paramDataProp = paramData.properties;
        for (proxiParamsDataField in paramDataProp) {
          delete paramDataProp['description']
          delete paramDataProp['unit-value']
          delete paramDataProp['example']
          if (paramDataProp['required']) delete paramDataProp['required']
          paramData.required = ['name']
        };
      })
    }
  }
  return proxificationVerbTemplate;
}

const refProxification = {
  type: 'object',
  properties: {
    add: proxificationAdd,
    modify: proxificationModify,
    remove: proxificationRemove,
  },
  minProperties: 1,
  additionalProperties: false,
}

let refSchemaWebportalV2Availability = JSON.parse(JSON.stringify(refSchemaWebportalV2));
refSchemaWebportalV2Availability.properties.proxification = refProxification;
refSchemaWebportalV2Availability.required.push('availability');

function validationSchema(sdkName, availability){
  console.log(sdkName + availability)
  if (sdkName == 'webportal_v2' && availability == 'external') return refSchemaWebportalV2;
  if (sdkName == 'webportal_v2' && availability == 'internal') return refSchemaWebportalV2Availability;
  if (sdkName == 'mobile_sdk' && availability == 'external') return refSchemaMobileSdk;
  if (sdkName == 'mobile_sdk' && availability == 'internal') return refSchemaMobileSdk;
  else throw new Error('[Validation Schema] needs you to provide a name and availability parameters.');
}

// const util = require('util')
// console.log(util.inspect(validationSchema('webportal_v2', false), false, null, true /* enable colors */))

module.exports = validationSchema;