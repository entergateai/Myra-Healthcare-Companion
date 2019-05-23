//CHECKSUM:fab8e324fcee70753a891e008247cad0c6ec3c504e8683969c62e332da35a501
"use strict";

const axios = require('axios');

const _ = require('lodash');

async function processIncoming() {
  try {
    const axiosConfig = await bp.http.getAxiosConfigForBot(event.botId);
    const {
      data
    } = await axios.post('/mod/testing/incomingEvent', event, axiosConfig);

    if (data) {
      event.state = _.merge(event.state, data);
    }
  } catch (err) {
    console.log('Error processing', err.message);
  }
}

return processIncoming();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi5yZWNvcmRlci5qcyJdLCJuYW1lcyI6WyJheGlvcyIsInJlcXVpcmUiLCJfIiwicHJvY2Vzc0luY29taW5nIiwiYXhpb3NDb25maWciLCJicCIsImh0dHAiLCJnZXRBeGlvc0NvbmZpZ0ZvckJvdCIsImV2ZW50IiwiYm90SWQiLCJkYXRhIiwicG9zdCIsInN0YXRlIiwibWVyZ2UiLCJlcnIiLCJjb25zb2xlIiwibG9nIiwibWVzc2FnZSJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxNQUFNQSxLQUFLLEdBQUdDLE9BQU8sQ0FBQyxPQUFELENBQXJCOztBQUNBLE1BQU1DLENBQUMsR0FBR0QsT0FBTyxDQUFDLFFBQUQsQ0FBakI7O0FBRUEsZUFBZUUsZUFBZixHQUFpQztBQUMvQixNQUFJO0FBQ0YsVUFBTUMsV0FBVyxHQUFHLE1BQU1DLEVBQUUsQ0FBQ0MsSUFBSCxDQUFRQyxvQkFBUixDQUE2QkMsS0FBSyxDQUFDQyxLQUFuQyxDQUExQjtBQUNBLFVBQU07QUFBRUMsTUFBQUE7QUFBRixRQUFXLE1BQU1WLEtBQUssQ0FBQ1csSUFBTixDQUFXLDRCQUFYLEVBQXlDSCxLQUF6QyxFQUFnREosV0FBaEQsQ0FBdkI7O0FBRUEsUUFBSU0sSUFBSixFQUFVO0FBQ1JGLE1BQUFBLEtBQUssQ0FBQ0ksS0FBTixHQUFjVixDQUFDLENBQUNXLEtBQUYsQ0FBUUwsS0FBSyxDQUFDSSxLQUFkLEVBQXFCRixJQUFyQixDQUFkO0FBQ0Q7QUFDRixHQVBELENBT0UsT0FBT0ksR0FBUCxFQUFZO0FBQ1pDLElBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLGtCQUFaLEVBQWdDRixHQUFHLENBQUNHLE9BQXBDO0FBQ0Q7QUFDRjs7QUFFRCxPQUFPZCxlQUFlLEVBQXRCIiwic291cmNlUm9vdCI6Ii92YXIvbGliL2plbmtpbnMvd29ya3NwYWNlL2J1aWxkLXdpbmRvd3MvbW9kdWxlcy90ZXN0aW5nL3NyYy9iYWNrZW5kIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgYXhpb3MgPSByZXF1aXJlKCdheGlvcycpXG5jb25zdCBfID0gcmVxdWlyZSgnbG9kYXNoJylcblxuYXN5bmMgZnVuY3Rpb24gcHJvY2Vzc0luY29taW5nKCkge1xuICB0cnkge1xuICAgIGNvbnN0IGF4aW9zQ29uZmlnID0gYXdhaXQgYnAuaHR0cC5nZXRBeGlvc0NvbmZpZ0ZvckJvdChldmVudC5ib3RJZClcbiAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGF4aW9zLnBvc3QoJy9tb2QvdGVzdGluZy9pbmNvbWluZ0V2ZW50JywgZXZlbnQsIGF4aW9zQ29uZmlnKVxuXG4gICAgaWYgKGRhdGEpIHtcbiAgICAgIGV2ZW50LnN0YXRlID0gXy5tZXJnZShldmVudC5zdGF0ZSwgZGF0YSlcbiAgICB9XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGNvbnNvbGUubG9nKCdFcnJvciBwcm9jZXNzaW5nJywgZXJyLm1lc3NhZ2UpXG4gIH1cbn1cblxucmV0dXJuIHByb2Nlc3NJbmNvbWluZygpXG4iXX0=