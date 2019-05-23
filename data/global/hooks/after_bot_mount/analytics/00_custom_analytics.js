//CHECKSUM:38b4436cd778f5d1f109c19ba52c5ce826990680a2f6947f7ece7cc067e2d328
/*
Below is an example of how you can register your custom analytics.
You can also use this as a template. 

If you need help, please refer to the official guide at https://botpress.io/docs/developers/analytics.

Example:

const axios = require('axios')

const registerCustomAnalytics = async () => {
  const axiosConfig = await bp.http.getAxiosConfigForBot(botId)
  const countGraph = {
    name: 'Total Users',
    type: 'count',
    description: 'Total number of users',
    variables: ['user-type']
  }
  const countUniqGraph = {
    name: 'Total Customers',
    type: 'countUniq',
    description: 'Total number of customers',
    variables: ['user-type~customer']
  }
  const percentGraph = {
    name: 'Percentage of visitors',
    type: 'percent',
    sumValues: true,
    description: 'Percentage of visitors / total users',
    variables: ['user-type~visitor', 'user-type']
  }
  const pieChart = {
    name: 'Percentage of users per type',
    type: 'piechart',
    description: 'Percentage of users per type',
    variables: ['user-type']
  }

  axios.post('/mod/analytics/graphs', countGraph, axiosConfig)
  axios.post('/mod/analytics/graphs', countUniqGraph, axiosConfig)
  axios.post('/mod/analytics/graphs', percentGraph, axiosConfig)
  axios.post('/mod/analytics/graphs', pieChart, axiosConfig)
}

return registerCustomAnalytics()
*/
"use strict";
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIjAwX2N1c3RvbV9hbmFseXRpY3MuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJzb3VyY2VSb290IjoiL3Zhci9saWIvamVua2lucy93b3Jrc3BhY2UvYnVpbGQtd2luZG93cy9tb2R1bGVzL2FuYWx5dGljcy9zcmMvYmFja2VuZCIsInNvdXJjZXNDb250ZW50IjpbIi8qXG5CZWxvdyBpcyBhbiBleGFtcGxlIG9mIGhvdyB5b3UgY2FuIHJlZ2lzdGVyIHlvdXIgY3VzdG9tIGFuYWx5dGljcy5cbllvdSBjYW4gYWxzbyB1c2UgdGhpcyBhcyBhIHRlbXBsYXRlLiBcblxuSWYgeW91IG5lZWQgaGVscCwgcGxlYXNlIHJlZmVyIHRvIHRoZSBvZmZpY2lhbCBndWlkZSBhdCBodHRwczovL2JvdHByZXNzLmlvL2RvY3MvZGV2ZWxvcGVycy9hbmFseXRpY3MuXG5cbkV4YW1wbGU6XG5cbmNvbnN0IGF4aW9zID0gcmVxdWlyZSgnYXhpb3MnKVxuXG5jb25zdCByZWdpc3RlckN1c3RvbUFuYWx5dGljcyA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgYXhpb3NDb25maWcgPSBhd2FpdCBicC5odHRwLmdldEF4aW9zQ29uZmlnRm9yQm90KGJvdElkKVxuICBjb25zdCBjb3VudEdyYXBoID0ge1xuICAgIG5hbWU6ICdUb3RhbCBVc2VycycsXG4gICAgdHlwZTogJ2NvdW50JyxcbiAgICBkZXNjcmlwdGlvbjogJ1RvdGFsIG51bWJlciBvZiB1c2VycycsXG4gICAgdmFyaWFibGVzOiBbJ3VzZXItdHlwZSddXG4gIH1cbiAgY29uc3QgY291bnRVbmlxR3JhcGggPSB7XG4gICAgbmFtZTogJ1RvdGFsIEN1c3RvbWVycycsXG4gICAgdHlwZTogJ2NvdW50VW5pcScsXG4gICAgZGVzY3JpcHRpb246ICdUb3RhbCBudW1iZXIgb2YgY3VzdG9tZXJzJyxcbiAgICB2YXJpYWJsZXM6IFsndXNlci10eXBlfmN1c3RvbWVyJ11cbiAgfVxuICBjb25zdCBwZXJjZW50R3JhcGggPSB7XG4gICAgbmFtZTogJ1BlcmNlbnRhZ2Ugb2YgdmlzaXRvcnMnLFxuICAgIHR5cGU6ICdwZXJjZW50JyxcbiAgICBzdW1WYWx1ZXM6IHRydWUsXG4gICAgZGVzY3JpcHRpb246ICdQZXJjZW50YWdlIG9mIHZpc2l0b3JzIC8gdG90YWwgdXNlcnMnLFxuICAgIHZhcmlhYmxlczogWyd1c2VyLXR5cGV+dmlzaXRvcicsICd1c2VyLXR5cGUnXVxuICB9XG4gIGNvbnN0IHBpZUNoYXJ0ID0ge1xuICAgIG5hbWU6ICdQZXJjZW50YWdlIG9mIHVzZXJzIHBlciB0eXBlJyxcbiAgICB0eXBlOiAncGllY2hhcnQnLFxuICAgIGRlc2NyaXB0aW9uOiAnUGVyY2VudGFnZSBvZiB1c2VycyBwZXIgdHlwZScsXG4gICAgdmFyaWFibGVzOiBbJ3VzZXItdHlwZSddXG4gIH1cblxuICBheGlvcy5wb3N0KCcvbW9kL2FuYWx5dGljcy9ncmFwaHMnLCBjb3VudEdyYXBoLCBheGlvc0NvbmZpZylcbiAgYXhpb3MucG9zdCgnL21vZC9hbmFseXRpY3MvZ3JhcGhzJywgY291bnRVbmlxR3JhcGgsIGF4aW9zQ29uZmlnKVxuICBheGlvcy5wb3N0KCcvbW9kL2FuYWx5dGljcy9ncmFwaHMnLCBwZXJjZW50R3JhcGgsIGF4aW9zQ29uZmlnKVxuICBheGlvcy5wb3N0KCcvbW9kL2FuYWx5dGljcy9ncmFwaHMnLCBwaWVDaGFydCwgYXhpb3NDb25maWcpXG59XG5cbnJldHVybiByZWdpc3RlckN1c3RvbUFuYWx5dGljcygpXG4qL1xuIl19