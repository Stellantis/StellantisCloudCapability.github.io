const applyValidation = require('./applyValidation');

let counter = 0;

function applyAvailabilityAndProxification(schema, ref, fileName, action){
  applyValidation(schema, ref, fileName, action);
  const availabledRefObject = applyAvailability(ref);
  if (availabledRefObject != 'notAvailable') {
    if (availabledRefObject.data.proxification) return applyProxification(availabledRefObject);
  }
  return availabledRefObject;
}

function applyAvailability(ref) {
  const refAvailability = ref.data.availability;
  try {

    if (ref.data.name && ref.data.name.includes('.demo')) return "notAvailable"
    else if (ref.data.type == "domain") return ref;
    else if (refAvailability == "available") {
      delete ref.data.availability;
      console.log('[ available - '+ ++counter +'] ' +ref.data.name)
      return ref;
    } 
    else if (refAvailability == "notAvailable") {
      console.log('[ notAva    - '+ ++counter +'] ' +ref.data.name)
      return "notAvailable";
    }
    else if (refAvailability == "sdkOnly") {
      console.log('[ sdkOnly   - '+ ++counter +'] ' +ref.data.name)
      return ref;
    }
    else if(typeof refAvailability == "object" && refAvailability != null) {
      console.log('[ mixedAva  - '+ ++counter +'] ' +ref.data.name)
      return applyComplexAvailability(ref);
    } 
    else throw new Error("["+ref.data.name+"] this file simple availability field seems malformed.");
  }
 catch (e) {
  throw e;
  }
}

function fieldsToHandle(type){
  switch (type){
    case "all":
      return 
    case "get":
      return ["dataget", "paramsget", "dataget_example", "paramsget_example", "textget"]
    case "set":
      return ["dataset", "paramsset", "dataset_example", "paramsset_example", "textset"]
    case "subscribe":
      return ["datasubscribe", "paramssubscribe", "datasubscribe_example", "paramssubscribe_example", "textsubscribe"]
  }
}

function applyComplexAvailability(ref){
  const refAva = ref.data.availability;
  if (refAva.available && refAva.notAvailable) {
    ref.data.type = refAva.available;
    refAva.notAvailable.forEach(notAvaType => {
      ref.data = removeFields(fieldsToHandle(notAvaType), ref.data);
    });
  } else {
    throw new Error("["+ref.data.name+"] this file complex availability field seems malformed.");
  }
  delete ref.data.availability;
  return ref;
}

function removeFields(fields, data) {
  fields.forEach(field => {
    delete data[field];
  });
  return data;
}

function applyProxification(ref){
  if (ref.data.proxification.add) applyProxiAdd(ref.data, ref.data.proxification.add)
  if (ref.data.proxification.modify) applyProxiModify(ref.data, ref.data.proxification.modify)
  if (ref.data.proxification.remove) applyProxiRemove(ref.data, ref.data.proxification.remove)
  delete ref.data.proxification;
  return ref;
}


function applyProxiAdd(ref, add) {
  for (addType in add) { // where to add (data/dataset.../param/parmget...)
    for (addField in add[addType]) { // element property to add
      // if the prop is not an array create array
      if (!Array.isArray(ref[addType])) ref[addType] = [];
      // in the original category where to add 
      ref[addType].forEach(refField => {
        // field to add already exist in the ref equi obj > throw err
        if (refField.name == add[addType][addField].name) {
          throw new Error("["+ref.name+"] (addition) -"+refField.name+"- field already exists in the ref file."); 
        }
      });
      // add item in ref equi obj
      ref[addType].push(add[addType][addField])
    }
  }
  return ref;
}

function applyProxiModify(ref, modify) {
  for (modifiedField in modify) { //items in modify
    if (ref[modifiedField]) { // if ref equi exist
      if (Array.isArray(modify[modifiedField])) {  //complex field
        modify[modifiedField].forEach((modifyListElement, index) => { //iterate on modify items
          ref[modifiedField].forEach(previousListElement => { //iterate on ref equi object
            if (previousListElement.name == modifyListElement.name)  ref[modifiedField][index] = modifyListElement; //if same name, replace object
          });
        });
      }
      else { //simple field
        ref[modifiedField] = modify[modifiedField]; //replace field
      }
    }
    else throw new Error("["+ref.name+"] (modification)  -"+modifiedField+"- fields needs to exist in the ref file."); //ref equi doesnt exists
  }
  return ref;
}

function applyProxiRemove(ref, remove) {
  for (removeField in remove) { //items in remove
    if (ref[removeField]) { // if ref equi exist
      if (Array.isArray(remove[removeField])) {  //complex field
        remove[removeField].forEach(removeListElement => { //iterate on remove items
          ref[removeField].forEach((previousListElement, index) => { //iterate on ref equi object
            if (previousListElement.name == removeListElement.name) {
              ref[removeField].splice(index, 1) //if same name, remove element
            }
          });
        });
        if (!ref[removeField].length) delete ref[removeField]
      }
      else { //simple field
        delete ref[removeField]; // remove field
      }
    }
    else throw new Error("["+ref.name+"] (remove)  -"+removeField+"- fields needs to exist in the ref file."); //ref equi doesnt exists
  }
  return ref;
}

module.exports = applyAvailabilityAndProxification;