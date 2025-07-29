

Version|Name
-|-
[v1.0.12](#v1.0.12) | Latest Version
[v1.0.11](#v1.0.11) |
[v1.0.10](#v1.0.10) |
[v1.0.9](#v1.0.9) |
[v1.0.8](#v1.0.8) |
[v1.0.7](#v1.0.7) | 
[v1.0.6](#v1.0.6) | 
[v1.0.5](#v1.0.5) | 
[v1.0.4](#v1.0.4) | 
[v1.0.3](#v1.0.3) | 
[v1.0.2](#v1.0.2) | 
[v1.0.1](#v1.0.1) | 
[v1.0.0](#v1.0.0) | initial version


<hr>

## v1.0.133
**Vehicle API**
- Removed Vehicle Config remote command as Digital key related APIs are not supported by APIM test

## v1.0.12
**Trip API and Telemetry API**
- Added recurrence field to time trigger for creating monitor
- Added new entries to door state enum
- Remove Ecocoaching & Offroad as trip types from trip filter

## v1.0.11
**Trip API**
- Removed Unused APIs
- Removed paging parameters from API to get specific trip details.

## v1.0.10
**Telemetries and LatestTelemetries APIs**
- PreconditioningProgram: temperature (temp) and startCondition (startCond) added; slot and occurrence marked as required
- Updated Alerts structure to add report and active alerts


## v1.0.9
**Remote API**
- Remove offroad from trip Kinetic & tripContext.
- Marked minChargingLevel & maxChargingLevel as mandatory.
- Updated trip type to only support normal trip type.

## v1.0.8
**Remote API**
- Remote Charging text update to accept only one of immediate/program/settings
- Fields marked mandatory in remote charging command for program section
- Remote Preconditioning text update to accept only one of immediate/program/settings.
- Removed Eco Coaching related APIs and from trips response
- Tracking period removed from stolen remote command
- Extended Event Params removed from Remote Command
- UpdatedAt field added to latest telemetry API response
- Sort spelling correction
- minChargingLevel & maxChargingLevel added to Remote Charging Programs

## v1.0.7
**Remote API**
- Remote Preconditioning mark mandatory fields
- Remote Charging marking mandatory fields
- Remote navigation update field data type of placeId/postalCode from string to int
- Update description of remote charging
- Removed additional fields from Remote Navigation Object

## v1.0.6
**Trip API**
- Add startEnergy/endEnergy/startMileage to trips response
- Trigger parameters updated to support Digital Key & Last mile navigation
- Devices marked as mandatory for push notif section while creating channel

## v1.0.5
**Vehicles API**
- Updated state field from boolena to string for preconditioning
- Corrected spelling mistake of enum value from confort to comfort in driving behavior
- Updated description for create monitor & create channel to provide information on max channel & monitor to be created
- Added field updatedAt for get monitor by Id end point
- A channel wouldn't be allowed to delete  if its attached remotes are in pending state or monitors in running state.


## v1.0.4
**Monitor and Telemetry API**
- Corrected type from occurence to occurrence
- Added createdAt and updatedAt in POST and PUT in monitor APIs respectively
- Tire Status removal from Telemetry Enum

## v1.0.3
**Vehicles API**
- Added pnc Scope for B2B2C to be able to retrieve pcid/mac address information
- Add pageSize,  pageToken, timestamp and indexRange as query parameters for stolen waypoints end point-
- Removed TripContext from position object for end points supporting stolen feature
  - /accounts/vehicles/{id}/stolen/{sid}/waypoints
  - /accounts/vehicles/{id}/stolen/{sid}
  - /accounts/vehicles/{id}/stolen
- Added mac address to devices object to be used for auto charge feature
- Latest telemetry Energy Charging block
  - Removed Charge Schedule
  - Renamed chargingRate field to chargingSpeed
  - programs and settings moved out of schedule and put into root level
  - Removed type field  as it was redundant with ChargeLimit


## v1.0.2
**Vehicles API**
- API changes to expose pcid information for PnC
- Fixed data trigger op issues
- Removed Remote.action.locking.identifier
- Removed Remote.action.locking.identifier
- Removed Remote.action.locking.identifier
- Removed Remote.action.locking.identifier
- Removed Remote.action.locking.identifier
- Removed Remote.action.locking.identifier
- Removed Remote.action.Ignition
- Removed Remote.action.panic
- Removed Remote.action.preconditioning.airConditioning.immediate.identifier
- Removed Remote.action.preconditioning.airConditioning.schedules.programs.duration
- Removed Remote.action.preconditioning.airConditioning.schedules.programs.recurrence
- Removed Remote.action.preconditioning.airConditioning.schedules.programs.scheduleType
- Removed Remote.action.preconditioning.airConditioning.schedules.programs.config.batterySaver
- Removed Modified airConditioning to have only immediate, programs and settings 
- Removed Remote.action.charging.charge.programs.scheduleType
- Removed Remote.action.charging.charge.programs.recurrence
- Removed Modified charging to have only immediate, programs and settings
- Removed Remote.action.navigation
- Removed Remote.action.vehicleFinder
- Removed action query string

## v1.0.1
**Vehicles API**
- API changes to expose pcid information for PnC
- Fixed data trigger op issues
