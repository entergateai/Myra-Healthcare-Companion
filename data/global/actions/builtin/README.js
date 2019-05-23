//CHECKSUM:b9d606b2509943769628f27933d6739415a2a91bdc8b83a40a12c689a92e0ec7
"use strict";

/**
 * This is just an example of how to create custom actions.
 * If you're reading this from the Flow Editor and wonder how you can create an new action,
 * See the `{botpressDir}/data/global/actions/builtin/README.js` file.
 *
 * @title Custom Action Example
 * @category tutorial
 * @param {string} [pageToFetch=https://google.com] - The page to fetch
 */

/** @ignore
 * @var temp
 * @var user
 *
 * ----------------------------
 * ---- Creating an Action ----
 * ----------------------------
 *
 * -- STORAGE --
 * In the global scope you have access to the following storage objects:
 * @var temp     Temporary flow-level storage.  Unique to every flow execution.  Ideal for logic implementation such as data returned from APIs.
 * @var user     Permanent user-level storage.  Unique to every users.  Ideal for remembering things specific to a user such as email, name, customerId, etc.
 * @var session  Temporary session-level storage.  Unique to every dialog sessions, which is time-bound (defaults to 15 minutes).  Ideal for remembering things specific to a conversation.
 *
 * -- CONTEXT --
 * In the global scope you have access to the @var event variable.
 *
 * -- PARAMETERS --
 * In the global scope you have access to the @var args object.
 * The @var args object is a key-value-pair of parameters defined when calling the action from the Flow Editor.
 *
 * -- ASYNC --
 * Actions can run asynchronously by returning a Promise.  If you want to use the `await` keyword, you need to declare an async function
 * and return a call to that function. @file `./builtin/getGlobalVariable.js` for a concrete example.
 *
 * -- REQUIRE MODULES --
 * You can require external modules by using `require('module-name')`.  A `node_modules` directory needs to be present next to the action
 * and the dependency needs to be present in this directory.  You can use npm/yarn inside the actions directory to manage dependencies.
 * Some modules are available by default such as axios and lodash
 *
 * -- REQUIRE FILES --
 * You can require adjacent .js and .json files, simply use `require('./path_to_file.js')`.  If the adjacent file is a .js file and is not intended to be an action in itself,
 * consider prefixing the file with a dot (.) so Botpress ignores it when looking for actions.
 *
 * -- METADATA --
 * You can change how the action will be presented in the Flow Editor by using JSDoc comments.  See example at the top of the file.
 */
const util = require('util');

const axios = require('axios');

console.log('Arguments =', util.inspect(args, false, 2, true));

if ('pageSource' in temp) {
  // Mutate the `temp` object
  delete temp.pageSource;
}

async function makeHttpRequest() {
  // args.pageToFetch is an optional parameter that can be overwritten by the user in the Flow Editor
  const {
    data
  } = await axios.get(args.pageToFetch || 'https://google.com');
  temp.pageSource = data;
} // Making an async HTTP request


return makeHttpRequest();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlJFQURNRS5qcyJdLCJuYW1lcyI6WyJ1dGlsIiwicmVxdWlyZSIsImF4aW9zIiwiY29uc29sZSIsImxvZyIsImluc3BlY3QiLCJhcmdzIiwidGVtcCIsInBhZ2VTb3VyY2UiLCJtYWtlSHR0cFJlcXVlc3QiLCJkYXRhIiwiZ2V0IiwicGFnZVRvRmV0Y2giXSwibWFwcGluZ3MiOiI7O0FBQUE7Ozs7Ozs7Ozs7QUFVQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXNDQSxNQUFNQSxJQUFJLEdBQUdDLE9BQU8sQ0FBQyxNQUFELENBQXBCOztBQUNBLE1BQU1DLEtBQUssR0FBR0QsT0FBTyxDQUFDLE9BQUQsQ0FBckI7O0FBRUFFLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLGFBQVosRUFBMkJKLElBQUksQ0FBQ0ssT0FBTCxDQUFhQyxJQUFiLEVBQW1CLEtBQW5CLEVBQTBCLENBQTFCLEVBQTZCLElBQTdCLENBQTNCOztBQUVBLElBQUksZ0JBQWdCQyxJQUFwQixFQUEwQjtBQUN4QjtBQUNBLFNBQU9BLElBQUksQ0FBQ0MsVUFBWjtBQUNEOztBQUVELGVBQWVDLGVBQWYsR0FBaUM7QUFDL0I7QUFDQSxRQUFNO0FBQUVDLElBQUFBO0FBQUYsTUFBVyxNQUFNUixLQUFLLENBQUNTLEdBQU4sQ0FBVUwsSUFBSSxDQUFDTSxXQUFMLElBQW9CLG9CQUE5QixDQUF2QjtBQUNBTCxFQUFBQSxJQUFJLENBQUNDLFVBQUwsR0FBa0JFLElBQWxCO0FBQ0QsQyxDQUVEOzs7QUFDQSxPQUFPRCxlQUFlLEVBQXRCIiwic291cmNlUm9vdCI6Ii92YXIvbGliL2plbmtpbnMvd29ya3NwYWNlL2J1aWxkLXdpbmRvd3MvbW9kdWxlcy9idWlsdGluL3NyYy9iYWNrZW5kIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBUaGlzIGlzIGp1c3QgYW4gZXhhbXBsZSBvZiBob3cgdG8gY3JlYXRlIGN1c3RvbSBhY3Rpb25zLlxuICogSWYgeW91J3JlIHJlYWRpbmcgdGhpcyBmcm9tIHRoZSBGbG93IEVkaXRvciBhbmQgd29uZGVyIGhvdyB5b3UgY2FuIGNyZWF0ZSBhbiBuZXcgYWN0aW9uLFxuICogU2VlIHRoZSBge2JvdHByZXNzRGlyfS9kYXRhL2dsb2JhbC9hY3Rpb25zL2J1aWx0aW4vUkVBRE1FLmpzYCBmaWxlLlxuICpcbiAqIEB0aXRsZSBDdXN0b20gQWN0aW9uIEV4YW1wbGVcbiAqIEBjYXRlZ29yeSB0dXRvcmlhbFxuICogQHBhcmFtIHtzdHJpbmd9IFtwYWdlVG9GZXRjaD1odHRwczovL2dvb2dsZS5jb21dIC0gVGhlIHBhZ2UgdG8gZmV0Y2hcbiAqL1xuXG4vKiogQGlnbm9yZVxuICogQHZhciB0ZW1wXG4gKiBAdmFyIHVzZXJcbiAqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiAtLS0tIENyZWF0aW5nIGFuIEFjdGlvbiAtLS0tXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKlxuICogLS0gU1RPUkFHRSAtLVxuICogSW4gdGhlIGdsb2JhbCBzY29wZSB5b3UgaGF2ZSBhY2Nlc3MgdG8gdGhlIGZvbGxvd2luZyBzdG9yYWdlIG9iamVjdHM6XG4gKiBAdmFyIHRlbXAgICAgIFRlbXBvcmFyeSBmbG93LWxldmVsIHN0b3JhZ2UuICBVbmlxdWUgdG8gZXZlcnkgZmxvdyBleGVjdXRpb24uICBJZGVhbCBmb3IgbG9naWMgaW1wbGVtZW50YXRpb24gc3VjaCBhcyBkYXRhIHJldHVybmVkIGZyb20gQVBJcy5cbiAqIEB2YXIgdXNlciAgICAgUGVybWFuZW50IHVzZXItbGV2ZWwgc3RvcmFnZS4gIFVuaXF1ZSB0byBldmVyeSB1c2Vycy4gIElkZWFsIGZvciByZW1lbWJlcmluZyB0aGluZ3Mgc3BlY2lmaWMgdG8gYSB1c2VyIHN1Y2ggYXMgZW1haWwsIG5hbWUsIGN1c3RvbWVySWQsIGV0Yy5cbiAqIEB2YXIgc2Vzc2lvbiAgVGVtcG9yYXJ5IHNlc3Npb24tbGV2ZWwgc3RvcmFnZS4gIFVuaXF1ZSB0byBldmVyeSBkaWFsb2cgc2Vzc2lvbnMsIHdoaWNoIGlzIHRpbWUtYm91bmQgKGRlZmF1bHRzIHRvIDE1IG1pbnV0ZXMpLiAgSWRlYWwgZm9yIHJlbWVtYmVyaW5nIHRoaW5ncyBzcGVjaWZpYyB0byBhIGNvbnZlcnNhdGlvbi5cbiAqXG4gKiAtLSBDT05URVhUIC0tXG4gKiBJbiB0aGUgZ2xvYmFsIHNjb3BlIHlvdSBoYXZlIGFjY2VzcyB0byB0aGUgQHZhciBldmVudCB2YXJpYWJsZS5cbiAqXG4gKiAtLSBQQVJBTUVURVJTIC0tXG4gKiBJbiB0aGUgZ2xvYmFsIHNjb3BlIHlvdSBoYXZlIGFjY2VzcyB0byB0aGUgQHZhciBhcmdzIG9iamVjdC5cbiAqIFRoZSBAdmFyIGFyZ3Mgb2JqZWN0IGlzIGEga2V5LXZhbHVlLXBhaXIgb2YgcGFyYW1ldGVycyBkZWZpbmVkIHdoZW4gY2FsbGluZyB0aGUgYWN0aW9uIGZyb20gdGhlIEZsb3cgRWRpdG9yLlxuICpcbiAqIC0tIEFTWU5DIC0tXG4gKiBBY3Rpb25zIGNhbiBydW4gYXN5bmNocm9ub3VzbHkgYnkgcmV0dXJuaW5nIGEgUHJvbWlzZS4gIElmIHlvdSB3YW50IHRvIHVzZSB0aGUgYGF3YWl0YCBrZXl3b3JkLCB5b3UgbmVlZCB0byBkZWNsYXJlIGFuIGFzeW5jIGZ1bmN0aW9uXG4gKiBhbmQgcmV0dXJuIGEgY2FsbCB0byB0aGF0IGZ1bmN0aW9uLiBAZmlsZSBgLi9idWlsdGluL2dldEdsb2JhbFZhcmlhYmxlLmpzYCBmb3IgYSBjb25jcmV0ZSBleGFtcGxlLlxuICpcbiAqIC0tIFJFUVVJUkUgTU9EVUxFUyAtLVxuICogWW91IGNhbiByZXF1aXJlIGV4dGVybmFsIG1vZHVsZXMgYnkgdXNpbmcgYHJlcXVpcmUoJ21vZHVsZS1uYW1lJylgLiAgQSBgbm9kZV9tb2R1bGVzYCBkaXJlY3RvcnkgbmVlZHMgdG8gYmUgcHJlc2VudCBuZXh0IHRvIHRoZSBhY3Rpb25cbiAqIGFuZCB0aGUgZGVwZW5kZW5jeSBuZWVkcyB0byBiZSBwcmVzZW50IGluIHRoaXMgZGlyZWN0b3J5LiAgWW91IGNhbiB1c2UgbnBtL3lhcm4gaW5zaWRlIHRoZSBhY3Rpb25zIGRpcmVjdG9yeSB0byBtYW5hZ2UgZGVwZW5kZW5jaWVzLlxuICogU29tZSBtb2R1bGVzIGFyZSBhdmFpbGFibGUgYnkgZGVmYXVsdCBzdWNoIGFzIGF4aW9zIGFuZCBsb2Rhc2hcbiAqXG4gKiAtLSBSRVFVSVJFIEZJTEVTIC0tXG4gKiBZb3UgY2FuIHJlcXVpcmUgYWRqYWNlbnQgLmpzIGFuZCAuanNvbiBmaWxlcywgc2ltcGx5IHVzZSBgcmVxdWlyZSgnLi9wYXRoX3RvX2ZpbGUuanMnKWAuICBJZiB0aGUgYWRqYWNlbnQgZmlsZSBpcyBhIC5qcyBmaWxlIGFuZCBpcyBub3QgaW50ZW5kZWQgdG8gYmUgYW4gYWN0aW9uIGluIGl0c2VsZixcbiAqIGNvbnNpZGVyIHByZWZpeGluZyB0aGUgZmlsZSB3aXRoIGEgZG90ICguKSBzbyBCb3RwcmVzcyBpZ25vcmVzIGl0IHdoZW4gbG9va2luZyBmb3IgYWN0aW9ucy5cbiAqXG4gKiAtLSBNRVRBREFUQSAtLVxuICogWW91IGNhbiBjaGFuZ2UgaG93IHRoZSBhY3Rpb24gd2lsbCBiZSBwcmVzZW50ZWQgaW4gdGhlIEZsb3cgRWRpdG9yIGJ5IHVzaW5nIEpTRG9jIGNvbW1lbnRzLiAgU2VlIGV4YW1wbGUgYXQgdGhlIHRvcCBvZiB0aGUgZmlsZS5cbiAqL1xuXG5jb25zdCB1dGlsID0gcmVxdWlyZSgndXRpbCcpXG5jb25zdCBheGlvcyA9IHJlcXVpcmUoJ2F4aW9zJylcblxuY29uc29sZS5sb2coJ0FyZ3VtZW50cyA9JywgdXRpbC5pbnNwZWN0KGFyZ3MsIGZhbHNlLCAyLCB0cnVlKSlcblxuaWYgKCdwYWdlU291cmNlJyBpbiB0ZW1wKSB7XG4gIC8vIE11dGF0ZSB0aGUgYHRlbXBgIG9iamVjdFxuICBkZWxldGUgdGVtcC5wYWdlU291cmNlXG59XG5cbmFzeW5jIGZ1bmN0aW9uIG1ha2VIdHRwUmVxdWVzdCgpIHtcbiAgLy8gYXJncy5wYWdlVG9GZXRjaCBpcyBhbiBvcHRpb25hbCBwYXJhbWV0ZXIgdGhhdCBjYW4gYmUgb3ZlcndyaXR0ZW4gYnkgdGhlIHVzZXIgaW4gdGhlIEZsb3cgRWRpdG9yXG4gIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgYXhpb3MuZ2V0KGFyZ3MucGFnZVRvRmV0Y2ggfHwgJ2h0dHBzOi8vZ29vZ2xlLmNvbScpXG4gIHRlbXAucGFnZVNvdXJjZSA9IGRhdGFcbn1cblxuLy8gTWFraW5nIGFuIGFzeW5jIEhUVFAgcmVxdWVzdFxucmV0dXJuIG1ha2VIdHRwUmVxdWVzdCgpXG4iXX0=