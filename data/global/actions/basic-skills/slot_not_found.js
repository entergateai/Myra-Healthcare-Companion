//CHECKSUM:34d836711103445b8300f6c607d2e7865c4b617333adba463c1d150a8021fa31
"use strict";

const hardLimit = 10;
/**
 * Increment the "slot not found" counter.
 * When the counter reach its limit, the "notExtracted" flag is set and will make trigger the "On not found" transition.
 * @hidden true
 * @param retryAttempts The maximum number of times a slot extraction gets retried
 */

const slotNotFound = async retryAttempts => {
  if (retryAttempts > hardLimit) {
    temp.notExtracted = 'true';
    return;
  }

  if (!session.extractedSlots.notFound) {
    session.extractedSlots.notFound = 1;
  }

  if (session.extractedSlots.notFound < Number(retryAttempts)) {
    session.extractedSlots.notFound++;
  } else {
    temp.notExtracted = 'true';
  }
};

return slotNotFound(args.retryAttempts);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNsb3Rfbm90X2ZvdW5kLmpzIl0sIm5hbWVzIjpbImhhcmRMaW1pdCIsInNsb3ROb3RGb3VuZCIsInJldHJ5QXR0ZW1wdHMiLCJ0ZW1wIiwibm90RXh0cmFjdGVkIiwic2Vzc2lvbiIsImV4dHJhY3RlZFNsb3RzIiwibm90Rm91bmQiLCJOdW1iZXIiLCJhcmdzIl0sIm1hcHBpbmdzIjoiOztBQUFBLE1BQU1BLFNBQVMsR0FBRyxFQUFsQjtBQUVBOzs7Ozs7O0FBTUEsTUFBTUMsWUFBWSxHQUFHLE1BQU1DLGFBQU4sSUFBdUI7QUFDMUMsTUFBSUEsYUFBYSxHQUFHRixTQUFwQixFQUErQjtBQUM3QkcsSUFBQUEsSUFBSSxDQUFDQyxZQUFMLEdBQW9CLE1BQXBCO0FBQ0E7QUFDRDs7QUFFRCxNQUFJLENBQUNDLE9BQU8sQ0FBQ0MsY0FBUixDQUF1QkMsUUFBNUIsRUFBc0M7QUFDcENGLElBQUFBLE9BQU8sQ0FBQ0MsY0FBUixDQUF1QkMsUUFBdkIsR0FBa0MsQ0FBbEM7QUFDRDs7QUFFRCxNQUFJRixPQUFPLENBQUNDLGNBQVIsQ0FBdUJDLFFBQXZCLEdBQWtDQyxNQUFNLENBQUNOLGFBQUQsQ0FBNUMsRUFBNkQ7QUFDM0RHLElBQUFBLE9BQU8sQ0FBQ0MsY0FBUixDQUF1QkMsUUFBdkI7QUFDRCxHQUZELE1BRU87QUFDTEosSUFBQUEsSUFBSSxDQUFDQyxZQUFMLEdBQW9CLE1BQXBCO0FBQ0Q7QUFDRixDQWZEOztBQWlCQSxPQUFPSCxZQUFZLENBQUNRLElBQUksQ0FBQ1AsYUFBTixDQUFuQiIsInNvdXJjZVJvb3QiOiIvdmFyL2xpYi9qZW5raW5zL3dvcmtzcGFjZS9idWlsZC13aW5kb3dzL21vZHVsZXMvYmFzaWMtc2tpbGxzL3NyYy9iYWNrZW5kIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgaGFyZExpbWl0ID0gMTBcblxuLyoqXG4gKiBJbmNyZW1lbnQgdGhlIFwic2xvdCBub3QgZm91bmRcIiBjb3VudGVyLlxuICogV2hlbiB0aGUgY291bnRlciByZWFjaCBpdHMgbGltaXQsIHRoZSBcIm5vdEV4dHJhY3RlZFwiIGZsYWcgaXMgc2V0IGFuZCB3aWxsIG1ha2UgdHJpZ2dlciB0aGUgXCJPbiBub3QgZm91bmRcIiB0cmFuc2l0aW9uLlxuICogQGhpZGRlbiB0cnVlXG4gKiBAcGFyYW0gcmV0cnlBdHRlbXB0cyBUaGUgbWF4aW11bSBudW1iZXIgb2YgdGltZXMgYSBzbG90IGV4dHJhY3Rpb24gZ2V0cyByZXRyaWVkXG4gKi9cbmNvbnN0IHNsb3ROb3RGb3VuZCA9IGFzeW5jIHJldHJ5QXR0ZW1wdHMgPT4ge1xuICBpZiAocmV0cnlBdHRlbXB0cyA+IGhhcmRMaW1pdCkge1xuICAgIHRlbXAubm90RXh0cmFjdGVkID0gJ3RydWUnXG4gICAgcmV0dXJuXG4gIH1cblxuICBpZiAoIXNlc3Npb24uZXh0cmFjdGVkU2xvdHMubm90Rm91bmQpIHtcbiAgICBzZXNzaW9uLmV4dHJhY3RlZFNsb3RzLm5vdEZvdW5kID0gMVxuICB9XG5cbiAgaWYgKHNlc3Npb24uZXh0cmFjdGVkU2xvdHMubm90Rm91bmQgPCBOdW1iZXIocmV0cnlBdHRlbXB0cykpIHtcbiAgICBzZXNzaW9uLmV4dHJhY3RlZFNsb3RzLm5vdEZvdW5kKytcbiAgfSBlbHNlIHtcbiAgICB0ZW1wLm5vdEV4dHJhY3RlZCA9ICd0cnVlJ1xuICB9XG59XG5cbnJldHVybiBzbG90Tm90Rm91bmQoYXJncy5yZXRyeUF0dGVtcHRzKVxuIl19