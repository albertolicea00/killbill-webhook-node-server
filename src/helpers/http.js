import pkg from 'follow-redirects';
import fs from 'fs';

const { http } = pkg;

/**
 * Makes an HTTP request and processes the response.
 *
 * @param {Object} requestOptions - The options for the HTTP request.
 * @param {Function} resolve - The function to call when the request is successful.
 * @param {Function} reject - The function to call when the request fails.
 * @param {Function} fun - The function to process the response body.
 */
export function httpReqValidation(requestOptions, resolve, reject, fun) {
  http
    .request(requestOptions, function (response) {
      var chunks = [];

      response.on('data', function (chunk) {
        chunks.push(chunk);
      });

      response.on('end', function (chunk) {
        const body = Buffer.concat(chunks);
        const result = body.toString();
        fun(result);
        resolve();
      });

      response.on('error', function (error) {
        console.error(error);
        reject(error);
      });
    })
    .end();
}
