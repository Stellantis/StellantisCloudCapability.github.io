const Ajv = require("ajv");

const ajv = new Ajv();
let counter = 0;

// const util = require('util')
// console.log(util.inspect(validationSchema('availability'), false, null, true /* enable colors */))

function applyValidation(schema, ref, fileName, action) {
  const refAvailability = ref.data.availability;
    if (ref.data.type == "domain") {
      console.log(`             --- Domain: ${ref.data.name} ---`);
      return ref;
    }
    else {
      if (ref.data.name){
        const validate = ajv.compile(schema)
        const valid = validate(ref.data)
        console.log(`[ ${ref.data.name} - ${++counter}]`);
        if (!valid ) {
          if(action == 'validation') {
            console.log(`    ⨯ Invalid JSON Schema :'(`);
            console.log(validate.errors);
          }
          else {
            console.error(validate.errors);
            throw new Error('References Files needs to validate the schema.')
          }
        }
        else {
          console.log(`    ✓ Valid JSON Schema!`);
        }
      } else {
        console.log(`[ no.name - ${++counter}]`)
        console.log(`    - Schema not evaluated.`);
      }
  }
};

module.exports = applyValidation;