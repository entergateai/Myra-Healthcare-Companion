//CHECKSUM:53292f200fa55e2b14988038ccfe0591bc2778ae743f5054b3003454f0ffb355
"use strict";

const axios = require('axios');
/**
 * Decrements the value of a specific metric group.
 *
 * The group (optional) is useful when you need to compute a graph taking into account multiple variables.
 * For example, you could count the gender ratio by incrementing:
 *
 * Male -> `metric = gender` and `group = male`
 *
 * Female -> `metric = gender` and `group = female`
 *
 * @title Increment Metric
 * @category Analytics
 * @param {string} name The name of the metric
 * @param {string} [group=all] Optional group inside the metrics
 * @param {Number} [increment=1] The optional increment of the metric
 */


const increment = async (name, group, increment = 1) => {
  const axiosConfig = await bp.http.getAxiosConfigForBot(event.botId);
  await axios.post('/mod/analytics/custom_metrics/increment', {
    name: `${name}~${group}`,
    count: increment
  }, axiosConfig);
};

return increment(args.name, args.group, args.count);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluY3JlbWVudC5qcyJdLCJuYW1lcyI6WyJheGlvcyIsInJlcXVpcmUiLCJpbmNyZW1lbnQiLCJuYW1lIiwiZ3JvdXAiLCJheGlvc0NvbmZpZyIsImJwIiwiaHR0cCIsImdldEF4aW9zQ29uZmlnRm9yQm90IiwiZXZlbnQiLCJib3RJZCIsInBvc3QiLCJjb3VudCIsImFyZ3MiXSwibWFwcGluZ3MiOiI7O0FBQUEsTUFBTUEsS0FBSyxHQUFHQyxPQUFPLENBQUMsT0FBRCxDQUFyQjtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFnQkEsTUFBTUMsU0FBUyxHQUFHLE9BQU9DLElBQVAsRUFBYUMsS0FBYixFQUFvQkYsU0FBUyxHQUFHLENBQWhDLEtBQXNDO0FBQ3RELFFBQU1HLFdBQVcsR0FBRyxNQUFNQyxFQUFFLENBQUNDLElBQUgsQ0FBUUMsb0JBQVIsQ0FBNkJDLEtBQUssQ0FBQ0MsS0FBbkMsQ0FBMUI7QUFDQSxRQUFNVixLQUFLLENBQUNXLElBQU4sQ0FDSix5Q0FESSxFQUVKO0FBQUVSLElBQUFBLElBQUksRUFBRyxHQUFFQSxJQUFLLElBQUdDLEtBQU0sRUFBekI7QUFBNEJRLElBQUFBLEtBQUssRUFBRVY7QUFBbkMsR0FGSSxFQUdKRyxXQUhJLENBQU47QUFLRCxDQVBEOztBQVNBLE9BQU9ILFNBQVMsQ0FBQ1csSUFBSSxDQUFDVixJQUFOLEVBQVlVLElBQUksQ0FBQ1QsS0FBakIsRUFBd0JTLElBQUksQ0FBQ0QsS0FBN0IsQ0FBaEIiLCJzb3VyY2VSb290IjoiL3Zhci9saWIvamVua2lucy93b3Jrc3BhY2UvYnVpbGQtd2luZG93cy9tb2R1bGVzL2FuYWx5dGljcy9zcmMvYmFja2VuZCIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGF4aW9zID0gcmVxdWlyZSgnYXhpb3MnKVxuXG4vKipcbiAqIERlY3JlbWVudHMgdGhlIHZhbHVlIG9mIGEgc3BlY2lmaWMgbWV0cmljIGdyb3VwLlxuICpcbiAqIFRoZSBncm91cCAob3B0aW9uYWwpIGlzIHVzZWZ1bCB3aGVuIHlvdSBuZWVkIHRvIGNvbXB1dGUgYSBncmFwaCB0YWtpbmcgaW50byBhY2NvdW50IG11bHRpcGxlIHZhcmlhYmxlcy5cbiAqIEZvciBleGFtcGxlLCB5b3UgY291bGQgY291bnQgdGhlIGdlbmRlciByYXRpbyBieSBpbmNyZW1lbnRpbmc6XG4gKlxuICogTWFsZSAtPiBgbWV0cmljID0gZ2VuZGVyYCBhbmQgYGdyb3VwID0gbWFsZWBcbiAqXG4gKiBGZW1hbGUgLT4gYG1ldHJpYyA9IGdlbmRlcmAgYW5kIGBncm91cCA9IGZlbWFsZWBcbiAqXG4gKiBAdGl0bGUgSW5jcmVtZW50IE1ldHJpY1xuICogQGNhdGVnb3J5IEFuYWx5dGljc1xuICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgVGhlIG5hbWUgb2YgdGhlIG1ldHJpY1xuICogQHBhcmFtIHtzdHJpbmd9IFtncm91cD1hbGxdIE9wdGlvbmFsIGdyb3VwIGluc2lkZSB0aGUgbWV0cmljc1xuICogQHBhcmFtIHtOdW1iZXJ9IFtpbmNyZW1lbnQ9MV0gVGhlIG9wdGlvbmFsIGluY3JlbWVudCBvZiB0aGUgbWV0cmljXG4gKi9cbmNvbnN0IGluY3JlbWVudCA9IGFzeW5jIChuYW1lLCBncm91cCwgaW5jcmVtZW50ID0gMSkgPT4ge1xuICBjb25zdCBheGlvc0NvbmZpZyA9IGF3YWl0IGJwLmh0dHAuZ2V0QXhpb3NDb25maWdGb3JCb3QoZXZlbnQuYm90SWQpXG4gIGF3YWl0IGF4aW9zLnBvc3QoXG4gICAgJy9tb2QvYW5hbHl0aWNzL2N1c3RvbV9tZXRyaWNzL2luY3JlbWVudCcsXG4gICAgeyBuYW1lOiBgJHtuYW1lfX4ke2dyb3VwfWAsIGNvdW50OiBpbmNyZW1lbnQgfSxcbiAgICBheGlvc0NvbmZpZ1xuICApXG59XG5cbnJldHVybiBpbmNyZW1lbnQoYXJncy5uYW1lLCBhcmdzLmdyb3VwLCBhcmdzLmNvdW50KVxuIl19