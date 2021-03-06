//CHECKSUM:b3d0d4c1a3ff65d80ba7f7564650db367ab0b70d7dcba3d587463c577842a578
"use strict";

/**
 * This is an example of how to use Recast NLU instead of Botpress NLU
 * To enable this, remove the 'dot' before the name of this file
 */
const axios = require('axios');

const RECAST_TOKEN = process.env.RECAST_TOKEN || '<<your recast token here>>';
const eventTypes = ['text']; // Process only 'text' events

async function recastExtract() {
  if (eventTypes.includes(event.type)) {
    const {
      data
    } = await axios.post('https://api.recast.ai/train/v2/request', {
      text: event.preview
    }, {
      headers: {
        Authorization: 'Token ' + RECAST_TOKEN
      }
    });

    if (data && data.results) {
      /** TODO Here you will need to manipulate the format of these objects
       * so that they use the same format as Botpress NLU */
      event.nlu = event.nlu || {};
      event.nlu.intents = data.results.intents;
      event.nlu.entities = data.results.entities;
      event.nlu.language = data.results.language;
      event.nlu.sentiment = data.results.sentiment; // Disable Native NLU

      event.setFlag(bp.IO.WellKnownFlags.SKIP_NATIVE_NLU, true);
    }
  }
}

return recastExtract();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4wNV9yZWNhc3Rfbmx1LmpzIl0sIm5hbWVzIjpbImF4aW9zIiwicmVxdWlyZSIsIlJFQ0FTVF9UT0tFTiIsInByb2Nlc3MiLCJlbnYiLCJldmVudFR5cGVzIiwicmVjYXN0RXh0cmFjdCIsImluY2x1ZGVzIiwiZXZlbnQiLCJ0eXBlIiwiZGF0YSIsInBvc3QiLCJ0ZXh0IiwicHJldmlldyIsImhlYWRlcnMiLCJBdXRob3JpemF0aW9uIiwicmVzdWx0cyIsIm5sdSIsImludGVudHMiLCJlbnRpdGllcyIsImxhbmd1YWdlIiwic2VudGltZW50Iiwic2V0RmxhZyIsImJwIiwiSU8iLCJXZWxsS25vd25GbGFncyIsIlNLSVBfTkFUSVZFX05MVSJdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7OztBQUtBLE1BQU1BLEtBQUssR0FBR0MsT0FBTyxDQUFDLE9BQUQsQ0FBckI7O0FBRUEsTUFBTUMsWUFBWSxHQUFHQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUYsWUFBWixJQUE0Qiw0QkFBakQ7QUFFQSxNQUFNRyxVQUFVLEdBQUcsQ0FBQyxNQUFELENBQW5CLEMsQ0FBNEI7O0FBRTVCLGVBQWVDLGFBQWYsR0FBK0I7QUFDN0IsTUFBSUQsVUFBVSxDQUFDRSxRQUFYLENBQW9CQyxLQUFLLENBQUNDLElBQTFCLENBQUosRUFBcUM7QUFDbkMsVUFBTTtBQUFFQyxNQUFBQTtBQUFGLFFBQVcsTUFBTVYsS0FBSyxDQUFDVyxJQUFOLENBQ3JCLHdDQURxQixFQUVyQjtBQUFFQyxNQUFBQSxJQUFJLEVBQUVKLEtBQUssQ0FBQ0s7QUFBZCxLQUZxQixFQUdyQjtBQUNFQyxNQUFBQSxPQUFPLEVBQUU7QUFDUEMsUUFBQUEsYUFBYSxFQUFFLFdBQVdiO0FBRG5CO0FBRFgsS0FIcUIsQ0FBdkI7O0FBVUEsUUFBSVEsSUFBSSxJQUFJQSxJQUFJLENBQUNNLE9BQWpCLEVBQTBCO0FBQ3hCOztBQUVBUixNQUFBQSxLQUFLLENBQUNTLEdBQU4sR0FBWVQsS0FBSyxDQUFDUyxHQUFOLElBQWEsRUFBekI7QUFDQVQsTUFBQUEsS0FBSyxDQUFDUyxHQUFOLENBQVVDLE9BQVYsR0FBb0JSLElBQUksQ0FBQ00sT0FBTCxDQUFhRSxPQUFqQztBQUNBVixNQUFBQSxLQUFLLENBQUNTLEdBQU4sQ0FBVUUsUUFBVixHQUFxQlQsSUFBSSxDQUFDTSxPQUFMLENBQWFHLFFBQWxDO0FBQ0FYLE1BQUFBLEtBQUssQ0FBQ1MsR0FBTixDQUFVRyxRQUFWLEdBQXFCVixJQUFJLENBQUNNLE9BQUwsQ0FBYUksUUFBbEM7QUFDQVosTUFBQUEsS0FBSyxDQUFDUyxHQUFOLENBQVVJLFNBQVYsR0FBc0JYLElBQUksQ0FBQ00sT0FBTCxDQUFhSyxTQUFuQyxDQVB3QixDQVF4Qjs7QUFDQWIsTUFBQUEsS0FBSyxDQUFDYyxPQUFOLENBQWNDLEVBQUUsQ0FBQ0MsRUFBSCxDQUFNQyxjQUFOLENBQXFCQyxlQUFuQyxFQUFvRCxJQUFwRDtBQUNEO0FBQ0Y7QUFDRjs7QUFFRCxPQUFPcEIsYUFBYSxFQUFwQiIsInNvdXJjZVJvb3QiOiIvdmFyL2xpYi9qZW5raW5zL3dvcmtzcGFjZS9idWlsZC13aW5kb3dzL21vZHVsZXMvYnVpbHRpbi9zcmMvYmFja2VuZCIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogVGhpcyBpcyBhbiBleGFtcGxlIG9mIGhvdyB0byB1c2UgUmVjYXN0IE5MVSBpbnN0ZWFkIG9mIEJvdHByZXNzIE5MVVxuICogVG8gZW5hYmxlIHRoaXMsIHJlbW92ZSB0aGUgJ2RvdCcgYmVmb3JlIHRoZSBuYW1lIG9mIHRoaXMgZmlsZVxuICovXG5cbmNvbnN0IGF4aW9zID0gcmVxdWlyZSgnYXhpb3MnKVxuXG5jb25zdCBSRUNBU1RfVE9LRU4gPSBwcm9jZXNzLmVudi5SRUNBU1RfVE9LRU4gfHwgJzw8eW91ciByZWNhc3QgdG9rZW4gaGVyZT4+J1xuXG5jb25zdCBldmVudFR5cGVzID0gWyd0ZXh0J10gLy8gUHJvY2VzcyBvbmx5ICd0ZXh0JyBldmVudHNcblxuYXN5bmMgZnVuY3Rpb24gcmVjYXN0RXh0cmFjdCgpIHtcbiAgaWYgKGV2ZW50VHlwZXMuaW5jbHVkZXMoZXZlbnQudHlwZSkpIHtcbiAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGF4aW9zLnBvc3QoXG4gICAgICAnaHR0cHM6Ly9hcGkucmVjYXN0LmFpL3RyYWluL3YyL3JlcXVlc3QnLFxuICAgICAgeyB0ZXh0OiBldmVudC5wcmV2aWV3IH0sXG4gICAgICB7XG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICBBdXRob3JpemF0aW9uOiAnVG9rZW4gJyArIFJFQ0FTVF9UT0tFTlxuICAgICAgICB9XG4gICAgICB9XG4gICAgKVxuXG4gICAgaWYgKGRhdGEgJiYgZGF0YS5yZXN1bHRzKSB7XG4gICAgICAvKiogVE9ETyBIZXJlIHlvdSB3aWxsIG5lZWQgdG8gbWFuaXB1bGF0ZSB0aGUgZm9ybWF0IG9mIHRoZXNlIG9iamVjdHNcbiAgICAgICAqIHNvIHRoYXQgdGhleSB1c2UgdGhlIHNhbWUgZm9ybWF0IGFzIEJvdHByZXNzIE5MVSAqL1xuICAgICAgZXZlbnQubmx1ID0gZXZlbnQubmx1IHx8IHt9XG4gICAgICBldmVudC5ubHUuaW50ZW50cyA9IGRhdGEucmVzdWx0cy5pbnRlbnRzXG4gICAgICBldmVudC5ubHUuZW50aXRpZXMgPSBkYXRhLnJlc3VsdHMuZW50aXRpZXNcbiAgICAgIGV2ZW50Lm5sdS5sYW5ndWFnZSA9IGRhdGEucmVzdWx0cy5sYW5ndWFnZVxuICAgICAgZXZlbnQubmx1LnNlbnRpbWVudCA9IGRhdGEucmVzdWx0cy5zZW50aW1lbnRcbiAgICAgIC8vIERpc2FibGUgTmF0aXZlIE5MVVxuICAgICAgZXZlbnQuc2V0RmxhZyhicC5JTy5XZWxsS25vd25GbGFncy5TS0lQX05BVElWRV9OTFUsIHRydWUpXG4gICAgfVxuICB9XG59XG5cbnJldHVybiByZWNhc3RFeHRyYWN0KClcbiJdfQ==