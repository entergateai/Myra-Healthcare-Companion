//CHECKSUM:008f36faf09d25b5533bcc59c771b8374747a929c523c818fadd77f3ed6e56e5
"use strict";

/**
 * This is an example of how to use Rasa NLU instead of Botpress NLU
 * To enable this, remove the 'dot' before the name of this file
 */
const axios = require('axios');

const eventTypes = ['text']; // Process only 'text' events

async function rasaExtract() {
  if (eventTypes.includes(event.type)) {
    const {
      data
    } = await axios.post('http://142.93.216.68:5000/parse', {
      q: event.preview
    });

    if (data) {
      /** TODO Here you will need to manipulate the format of these objects
       * so that they use the same format as Botpress NLU */
      event.nlu = event.nlu || {}; //event.nlu.intents = data.intent_ranking;

      event.nlu.intent = {};
      if (data.intent.name) event.nlu.intent.name = data.intent.name;else event.nlu.intent.name = 'none'; //event.nlu.entities = data.entities
      //event.nlu.language = data.results.language
      //event.nlu.sentiment = data.results.sentiment
      // Disable Native NLU

      event.setFlag(bp.IO.WellKnownFlags.SKIP_NATIVE_NLU, true);
    }
  }
}

return rasaExtract();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4wNl9yYXNhX25sdS5qcyJdLCJuYW1lcyI6WyJheGlvcyIsInJlcXVpcmUiLCJldmVudFR5cGVzIiwicmFzYUV4dHJhY3QiLCJpbmNsdWRlcyIsImV2ZW50IiwidHlwZSIsImRhdGEiLCJwb3N0IiwicSIsInByZXZpZXciLCJubHUiLCJpbnRlbnQiLCJuYW1lIiwic2V0RmxhZyIsImJwIiwiSU8iLCJXZWxsS25vd25GbGFncyIsIlNLSVBfTkFUSVZFX05MVSJdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7OztBQUtBLE1BQU1BLEtBQUssR0FBR0MsT0FBTyxDQUFDLE9BQUQsQ0FBckI7O0FBRUEsTUFBTUMsVUFBVSxHQUFHLENBQUMsTUFBRCxDQUFuQixDLENBQTRCOztBQUU1QixlQUFlQyxXQUFmLEdBQTZCO0FBQzNCLE1BQUlELFVBQVUsQ0FBQ0UsUUFBWCxDQUFvQkMsS0FBSyxDQUFDQyxJQUExQixDQUFKLEVBQXFDO0FBQ25DLFVBQU07QUFBRUMsTUFBQUE7QUFBRixRQUFXLE1BQU1QLEtBQUssQ0FBQ1EsSUFBTixDQUNyQixpQ0FEcUIsRUFFckI7QUFBRUMsTUFBQUEsQ0FBQyxFQUFFSixLQUFLLENBQUNLO0FBQVgsS0FGcUIsQ0FBdkI7O0FBSUEsUUFBSUgsSUFBSixFQUFVO0FBQ1I7O0FBRUFGLE1BQUFBLEtBQUssQ0FBQ00sR0FBTixHQUFZTixLQUFLLENBQUNNLEdBQU4sSUFBYSxFQUF6QixDQUhRLENBSVI7O0FBQ0FOLE1BQUFBLEtBQUssQ0FBQ00sR0FBTixDQUFVQyxNQUFWLEdBQW1CLEVBQW5CO0FBQ0EsVUFBR0wsSUFBSSxDQUFDSyxNQUFMLENBQVlDLElBQWYsRUFDQ1IsS0FBSyxDQUFDTSxHQUFOLENBQVVDLE1BQVYsQ0FBaUJDLElBQWpCLEdBQXdCTixJQUFJLENBQUNLLE1BQUwsQ0FBWUMsSUFBcEMsQ0FERCxLQUdMUixLQUFLLENBQUNNLEdBQU4sQ0FBVUMsTUFBVixDQUFpQkMsSUFBakIsR0FBd0IsTUFBeEIsQ0FUYSxDQVVSO0FBQ0E7QUFDQTtBQUNBOztBQUNBUixNQUFBQSxLQUFLLENBQUNTLE9BQU4sQ0FBY0MsRUFBRSxDQUFDQyxFQUFILENBQU1DLGNBQU4sQ0FBcUJDLGVBQW5DLEVBQW9ELElBQXBEO0FBQ0Q7QUFDRjtBQUNGOztBQUVELE9BQU9mLFdBQVcsRUFBbEIiLCJzb3VyY2VSb290IjoiL3Zhci9saWIvamVua2lucy93b3Jrc3BhY2UvYnVpbGQtd2luZG93cy9tb2R1bGVzL2J1aWx0aW4vc3JjL2JhY2tlbmQiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFRoaXMgaXMgYW4gZXhhbXBsZSBvZiBob3cgdG8gdXNlIFJhc2EgTkxVIGluc3RlYWQgb2YgQm90cHJlc3MgTkxVXG4gKiBUbyBlbmFibGUgdGhpcywgcmVtb3ZlIHRoZSAnZG90JyBiZWZvcmUgdGhlIG5hbWUgb2YgdGhpcyBmaWxlXG4gKi9cblxuY29uc3QgYXhpb3MgPSByZXF1aXJlKCdheGlvcycpXG5cbmNvbnN0IGV2ZW50VHlwZXMgPSBbJ3RleHQnXSAvLyBQcm9jZXNzIG9ubHkgJ3RleHQnIGV2ZW50c1xuXG5hc3luYyBmdW5jdGlvbiByYXNhRXh0cmFjdCgpIHtcbiAgaWYgKGV2ZW50VHlwZXMuaW5jbHVkZXMoZXZlbnQudHlwZSkpIHtcbiAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGF4aW9zLnBvc3QoXG4gICAgICAnaHR0cDovLzE0Mi45My4yMTYuNjg6NTAwMC9wYXJzZScsXG4gICAgICB7IHE6IGV2ZW50LnByZXZpZXcgfVxuXHQpXG4gICAgaWYgKGRhdGEpIHtcbiAgICAgIC8qKiBUT0RPIEhlcmUgeW91IHdpbGwgbmVlZCB0byBtYW5pcHVsYXRlIHRoZSBmb3JtYXQgb2YgdGhlc2Ugb2JqZWN0c1xuICAgICAgICogc28gdGhhdCB0aGV5IHVzZSB0aGUgc2FtZSBmb3JtYXQgYXMgQm90cHJlc3MgTkxVICovXG4gICAgICBldmVudC5ubHUgPSBldmVudC5ubHUgfHwge31cbiAgICAgIC8vZXZlbnQubmx1LmludGVudHMgPSBkYXRhLmludGVudF9yYW5raW5nO1xuICAgICAgZXZlbnQubmx1LmludGVudCA9IHt9O1xuICAgICAgaWYoZGF0YS5pbnRlbnQubmFtZSlcbiAgICAgIFx0ZXZlbnQubmx1LmludGVudC5uYW1lID0gZGF0YS5pbnRlbnQubmFtZTtcbiAgICAgIGVsc2Vcblx0ZXZlbnQubmx1LmludGVudC5uYW1lID0gJ25vbmUnOyBcbiAgICAgIC8vZXZlbnQubmx1LmVudGl0aWVzID0gZGF0YS5lbnRpdGllc1xuICAgICAgLy9ldmVudC5ubHUubGFuZ3VhZ2UgPSBkYXRhLnJlc3VsdHMubGFuZ3VhZ2VcbiAgICAgIC8vZXZlbnQubmx1LnNlbnRpbWVudCA9IGRhdGEucmVzdWx0cy5zZW50aW1lbnRcbiAgICAgIC8vIERpc2FibGUgTmF0aXZlIE5MVVxuICAgICAgZXZlbnQuc2V0RmxhZyhicC5JTy5XZWxsS25vd25GbGFncy5TS0lQX05BVElWRV9OTFUsIHRydWUpXG4gICAgfVxuICB9XG59XG5cbnJldHVybiByYXNhRXh0cmFjdCgpXG4iXX0=