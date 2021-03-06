//CHECKSUM:30c116c3340b409c5583866957d57367565dca78adf1f0b05ca4efc05847078f
"use strict";

/**
 * Removes the provided context(s) from the list of contexts that will be used by the NLU Engine
 * for the next messages for that chat session.
 *
 * This method is contextual to the current user and chat session.
 *
 * You can specify more than one context by separating them with a comma.
 *
 * @title Remove Context
 * @category NLU
 * @author Botpress, Inc.
 * @param {string} contexts - Comma-separated list of contextss
 */
const removeContext = contexts => {
  const existing = event.state.session.nluContexts || [];
  const remove = contexts.split(',');
  event.state.session.nluContexts = existing.filter(x => remove.indexOf(x.context) < 0);
};

return removeContext(args.contexts);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlbW92ZUNvbnRleHQuanMiXSwibmFtZXMiOlsicmVtb3ZlQ29udGV4dCIsImNvbnRleHRzIiwiZXhpc3RpbmciLCJldmVudCIsInN0YXRlIiwic2Vzc2lvbiIsIm5sdUNvbnRleHRzIiwicmVtb3ZlIiwic3BsaXQiLCJmaWx0ZXIiLCJ4IiwiaW5kZXhPZiIsImNvbnRleHQiLCJhcmdzIl0sIm1hcHBpbmdzIjoiOztBQUFBOzs7Ozs7Ozs7Ozs7O0FBYUEsTUFBTUEsYUFBYSxHQUFHQyxRQUFRLElBQUk7QUFDaEMsUUFBTUMsUUFBUSxHQUFHQyxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsT0FBWixDQUFvQkMsV0FBcEIsSUFBbUMsRUFBcEQ7QUFDQSxRQUFNQyxNQUFNLEdBQUdOLFFBQVEsQ0FBQ08sS0FBVCxDQUFlLEdBQWYsQ0FBZjtBQUNBTCxFQUFBQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsT0FBWixDQUFvQkMsV0FBcEIsR0FBa0NKLFFBQVEsQ0FBQ08sTUFBVCxDQUFnQkMsQ0FBQyxJQUFJSCxNQUFNLENBQUNJLE9BQVAsQ0FBZUQsQ0FBQyxDQUFDRSxPQUFqQixJQUE0QixDQUFqRCxDQUFsQztBQUNELENBSkQ7O0FBTUEsT0FBT1osYUFBYSxDQUFDYSxJQUFJLENBQUNaLFFBQU4sQ0FBcEIiLCJzb3VyY2VSb290IjoiL3Zhci9saWIvamVua2lucy93b3Jrc3BhY2UvYnVpbGQtd2luZG93cy9tb2R1bGVzL2J1aWx0aW4vc3JjL2JhY2tlbmQiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFJlbW92ZXMgdGhlIHByb3ZpZGVkIGNvbnRleHQocykgZnJvbSB0aGUgbGlzdCBvZiBjb250ZXh0cyB0aGF0IHdpbGwgYmUgdXNlZCBieSB0aGUgTkxVIEVuZ2luZVxuICogZm9yIHRoZSBuZXh0IG1lc3NhZ2VzIGZvciB0aGF0IGNoYXQgc2Vzc2lvbi5cbiAqXG4gKiBUaGlzIG1ldGhvZCBpcyBjb250ZXh0dWFsIHRvIHRoZSBjdXJyZW50IHVzZXIgYW5kIGNoYXQgc2Vzc2lvbi5cbiAqXG4gKiBZb3UgY2FuIHNwZWNpZnkgbW9yZSB0aGFuIG9uZSBjb250ZXh0IGJ5IHNlcGFyYXRpbmcgdGhlbSB3aXRoIGEgY29tbWEuXG4gKlxuICogQHRpdGxlIFJlbW92ZSBDb250ZXh0XG4gKiBAY2F0ZWdvcnkgTkxVXG4gKiBAYXV0aG9yIEJvdHByZXNzLCBJbmMuXG4gKiBAcGFyYW0ge3N0cmluZ30gY29udGV4dHMgLSBDb21tYS1zZXBhcmF0ZWQgbGlzdCBvZiBjb250ZXh0c3NcbiAqL1xuY29uc3QgcmVtb3ZlQ29udGV4dCA9IGNvbnRleHRzID0+IHtcbiAgY29uc3QgZXhpc3RpbmcgPSBldmVudC5zdGF0ZS5zZXNzaW9uLm5sdUNvbnRleHRzIHx8IFtdXG4gIGNvbnN0IHJlbW92ZSA9IGNvbnRleHRzLnNwbGl0KCcsJylcbiAgZXZlbnQuc3RhdGUuc2Vzc2lvbi5ubHVDb250ZXh0cyA9IGV4aXN0aW5nLmZpbHRlcih4ID0+IHJlbW92ZS5pbmRleE9mKHguY29udGV4dCkgPCAwKVxufVxuXG5yZXR1cm4gcmVtb3ZlQ29udGV4dChhcmdzLmNvbnRleHRzKVxuIl19