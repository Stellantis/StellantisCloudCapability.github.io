const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');
const util = require('util')
const readline = require("readline");

const loadRef = require('./loadRef');
const validationSchema = require('./validationSchema');
const applyValidation = require('./applyValidation');
const applyAvailabilityAndProxification = require('./applyAvailabilityAndProxification');


let rl = readline.createInterface({input: process.stdin, output: process.stdout});

function startTool() {
  console.log("");
  console.log("  --  Reference List Tool  --");
  console.log("Select Reference Source:");
  console.log('[1] Webportal V2.')
  console.log('[2] Mobile SDK.')
  console.log('[Other Input] Quit tool.')
  rl.setPrompt('Please select an action:')
  rl.prompt()
  rl.on('line', (input) => {
    if (input == '1') selectRefSource('webportal_v2')
    if (input == '2') selectRefSource('mobile_sdk')
  });
}

function selectRefSource(sdkName) {
  console.log("  --  Reference List Tool  --");
  console.log('[1] Run internal references validation.')
  console.log('[2] Run proxification & availability test.')
  console.log('[3] Output external references.')
  console.log('[4] Run external references validation.')
  console.log('[Other Input] Quit tool.')
  rl.setPrompt('Please select an action:')
  rl.prompt()
  rl.on('line', (input) => {
    refToolActions(input, sdkName);
    rl.close()
  });
}

function refToolActions(userInput, sdkName){
  switch (userInput){
    case '1':
      console.log(`[${userInput}] Running internal references validation.`);
      loadRef({
        sdkName,
        availability: 'internal',
        action: 'validation',
        callback: applyValidation,
        schema: validationSchema(sdkName, 'internal')
      });
      break;
    case '2':
      console.log(`[${userInput}] Runnning proxification & availability test.`);
      loadRef({
        sdkName,
        availability: 'internal',
        action: 'proxiAvaTest',
        callback: applyAvailabilityAndProxification,
        schema: validationSchema(sdkName, 'internal')
      });
      break;
    case '3':
      console.log(`[${userInput}] Outputing external references.`);
      loadRef({
        sdkName,
        availability: 'internal',
        action: 'proxiAvaOutput',
        callback: applyAvailabilityAndProxification,
        schema: validationSchema(sdkName, 'internal')
      });
      break;
    case '4':
      console.log(`[${userInput}] Running external references validation.`);
      loadRef({
        sdkName,
        availability: 'external',
        action: 'validation',
        callback: applyValidation,
        schema: validationSchema(sdkName, 'external')
      });
      break;
    default:
      break;
  }
}

startTool();