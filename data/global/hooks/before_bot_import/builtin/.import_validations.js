//CHECKSUM:c12b872c9e4fae80a1a5f14166acb0885c968d66b4756f9ab112e0102f9d9c31
"use strict";

const fs = require('fs');
/**
 * This hook is called when a user uses the SDK to import a bot.
 * You can read the content of the temporary folder to analyze the bot's content. You can also change the content.
 *
 * To cancel the import, set the value `hookResult.allowImport = false`
 *
 * @param bp The botpress SDK
 * @param botId The ID of the bot
 * @param tmpFolder The submitted archive is extracted in this folder.
 */


const validateImport = async () => {
  // Read the files from the extracted archive. Check for prohibited files, etc.
  const files = fs.readdirSync(tmpFolder); // If you want to abort the import operation:
  // hookResult.allowImport = false
};

return validateImport();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi5pbXBvcnRfdmFsaWRhdGlvbnMuanMiXSwibmFtZXMiOlsiZnMiLCJyZXF1aXJlIiwidmFsaWRhdGVJbXBvcnQiLCJmaWxlcyIsInJlYWRkaXJTeW5jIiwidG1wRm9sZGVyIl0sIm1hcHBpbmdzIjoiOztBQUFBLE1BQU1BLEVBQUUsR0FBR0MsT0FBTyxDQUFDLElBQUQsQ0FBbEI7QUFFQTs7Ozs7Ozs7Ozs7O0FBVUEsTUFBTUMsY0FBYyxHQUFHLFlBQVk7QUFDakM7QUFDQSxRQUFNQyxLQUFLLEdBQUdILEVBQUUsQ0FBQ0ksV0FBSCxDQUFlQyxTQUFmLENBQWQsQ0FGaUMsQ0FJakM7QUFDQTtBQUNELENBTkQ7O0FBUUEsT0FBT0gsY0FBYyxFQUFyQiIsInNvdXJjZVJvb3QiOiIvdmFyL2xpYi9qZW5raW5zL3dvcmtzcGFjZS9idWlsZC13aW5kb3dzL21vZHVsZXMvYnVpbHRpbi9zcmMvYmFja2VuZCIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGZzID0gcmVxdWlyZSgnZnMnKVxuXG4vKipcbiAqIFRoaXMgaG9vayBpcyBjYWxsZWQgd2hlbiBhIHVzZXIgdXNlcyB0aGUgU0RLIHRvIGltcG9ydCBhIGJvdC5cbiAqIFlvdSBjYW4gcmVhZCB0aGUgY29udGVudCBvZiB0aGUgdGVtcG9yYXJ5IGZvbGRlciB0byBhbmFseXplIHRoZSBib3QncyBjb250ZW50LiBZb3UgY2FuIGFsc28gY2hhbmdlIHRoZSBjb250ZW50LlxuICpcbiAqIFRvIGNhbmNlbCB0aGUgaW1wb3J0LCBzZXQgdGhlIHZhbHVlIGBob29rUmVzdWx0LmFsbG93SW1wb3J0ID0gZmFsc2VgXG4gKlxuICogQHBhcmFtIGJwIFRoZSBib3RwcmVzcyBTREtcbiAqIEBwYXJhbSBib3RJZCBUaGUgSUQgb2YgdGhlIGJvdFxuICogQHBhcmFtIHRtcEZvbGRlciBUaGUgc3VibWl0dGVkIGFyY2hpdmUgaXMgZXh0cmFjdGVkIGluIHRoaXMgZm9sZGVyLlxuICovXG5jb25zdCB2YWxpZGF0ZUltcG9ydCA9IGFzeW5jICgpID0+IHtcbiAgLy8gUmVhZCB0aGUgZmlsZXMgZnJvbSB0aGUgZXh0cmFjdGVkIGFyY2hpdmUuIENoZWNrIGZvciBwcm9oaWJpdGVkIGZpbGVzLCBldGMuXG4gIGNvbnN0IGZpbGVzID0gZnMucmVhZGRpclN5bmModG1wRm9sZGVyKVxuXG4gIC8vIElmIHlvdSB3YW50IHRvIGFib3J0IHRoZSBpbXBvcnQgb3BlcmF0aW9uOlxuICAvLyBob29rUmVzdWx0LmFsbG93SW1wb3J0ID0gZmFsc2Vcbn1cblxucmV0dXJuIHZhbGlkYXRlSW1wb3J0KClcbiJdfQ==