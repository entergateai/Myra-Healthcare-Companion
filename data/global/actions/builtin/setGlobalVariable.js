//CHECKSUM:32bd474304e956ba57b38f1f390675b6c9508fffbbd8fc1afe7d473d2b0b754a
"use strict";

/**
 * Stores a variable globally, with optional expiry
 * @title Set global variable
 * @category Storage
 * @author Botpress, Inc.
 * @param {string} name - The name of the variable
 * @param {any} value - Set the value of the variable
 * @param {string} [expiry=never] - Set the expiry of the data, can be "never" or a short string like "6 hours"
 * @param {string} [output] - The state variable to output to
 */
const setGlobalVariable = async (name, value, expiry, output) => {
  const key = bp.kvs.getGlobalStorageKey(name);
  await bp.kvs.setStorageWithExpiry(event.botId, key, value, expiry);

  if (output) {
    temp[output] = value;
  }
};

return setGlobalVariable(args.name, args.value, args.expiry, args.output);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNldEdsb2JhbFZhcmlhYmxlLmpzIl0sIm5hbWVzIjpbInNldEdsb2JhbFZhcmlhYmxlIiwibmFtZSIsInZhbHVlIiwiZXhwaXJ5Iiwib3V0cHV0Iiwia2V5IiwiYnAiLCJrdnMiLCJnZXRHbG9iYWxTdG9yYWdlS2V5Iiwic2V0U3RvcmFnZVdpdGhFeHBpcnkiLCJldmVudCIsImJvdElkIiwidGVtcCIsImFyZ3MiXSwibWFwcGluZ3MiOiI7O0FBQUE7Ozs7Ozs7Ozs7QUFVQSxNQUFNQSxpQkFBaUIsR0FBRyxPQUFPQyxJQUFQLEVBQWFDLEtBQWIsRUFBb0JDLE1BQXBCLEVBQTRCQyxNQUE1QixLQUF1QztBQUMvRCxRQUFNQyxHQUFHLEdBQUdDLEVBQUUsQ0FBQ0MsR0FBSCxDQUFPQyxtQkFBUCxDQUEyQlAsSUFBM0IsQ0FBWjtBQUNBLFFBQU1LLEVBQUUsQ0FBQ0MsR0FBSCxDQUFPRSxvQkFBUCxDQUE0QkMsS0FBSyxDQUFDQyxLQUFsQyxFQUF5Q04sR0FBekMsRUFBOENILEtBQTlDLEVBQXFEQyxNQUFyRCxDQUFOOztBQUNBLE1BQUlDLE1BQUosRUFBWTtBQUNWUSxJQUFBQSxJQUFJLENBQUNSLE1BQUQsQ0FBSixHQUFlRixLQUFmO0FBQ0Q7QUFDRixDQU5EOztBQVFBLE9BQU9GLGlCQUFpQixDQUFDYSxJQUFJLENBQUNaLElBQU4sRUFBWVksSUFBSSxDQUFDWCxLQUFqQixFQUF3QlcsSUFBSSxDQUFDVixNQUE3QixFQUFxQ1UsSUFBSSxDQUFDVCxNQUExQyxDQUF4QiIsInNvdXJjZVJvb3QiOiIvdmFyL2xpYi9qZW5raW5zL3dvcmtzcGFjZS9idWlsZC13aW5kb3dzL21vZHVsZXMvYnVpbHRpbi9zcmMvYmFja2VuZCIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogU3RvcmVzIGEgdmFyaWFibGUgZ2xvYmFsbHksIHdpdGggb3B0aW9uYWwgZXhwaXJ5XG4gKiBAdGl0bGUgU2V0IGdsb2JhbCB2YXJpYWJsZVxuICogQGNhdGVnb3J5IFN0b3JhZ2VcbiAqIEBhdXRob3IgQm90cHJlc3MsIEluYy5cbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIC0gVGhlIG5hbWUgb2YgdGhlIHZhcmlhYmxlXG4gKiBAcGFyYW0ge2FueX0gdmFsdWUgLSBTZXQgdGhlIHZhbHVlIG9mIHRoZSB2YXJpYWJsZVxuICogQHBhcmFtIHtzdHJpbmd9IFtleHBpcnk9bmV2ZXJdIC0gU2V0IHRoZSBleHBpcnkgb2YgdGhlIGRhdGEsIGNhbiBiZSBcIm5ldmVyXCIgb3IgYSBzaG9ydCBzdHJpbmcgbGlrZSBcIjYgaG91cnNcIlxuICogQHBhcmFtIHtzdHJpbmd9IFtvdXRwdXRdIC0gVGhlIHN0YXRlIHZhcmlhYmxlIHRvIG91dHB1dCB0b1xuICovXG5jb25zdCBzZXRHbG9iYWxWYXJpYWJsZSA9IGFzeW5jIChuYW1lLCB2YWx1ZSwgZXhwaXJ5LCBvdXRwdXQpID0+IHtcbiAgY29uc3Qga2V5ID0gYnAua3ZzLmdldEdsb2JhbFN0b3JhZ2VLZXkobmFtZSlcbiAgYXdhaXQgYnAua3ZzLnNldFN0b3JhZ2VXaXRoRXhwaXJ5KGV2ZW50LmJvdElkLCBrZXksIHZhbHVlLCBleHBpcnkpXG4gIGlmIChvdXRwdXQpIHtcbiAgICB0ZW1wW291dHB1dF0gPSB2YWx1ZVxuICB9XG59XG5cbnJldHVybiBzZXRHbG9iYWxWYXJpYWJsZShhcmdzLm5hbWUsIGFyZ3MudmFsdWUsIGFyZ3MuZXhwaXJ5LCBhcmdzLm91dHB1dClcbiJdfQ==