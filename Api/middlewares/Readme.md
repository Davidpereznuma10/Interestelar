# Error Handler Documentation

## Introduction

The "errorHandler.js" module is responsible for handling errors that occur within your application. It provides functions to log errors, format them using the Boom library, and send appropriate responses to clients when errors are encountered.

## Table of Contents

1. [Logging Errors](#logging-errors)
2. [Handling Boom Errors](#handling-boom-errors)
3. [Generic Error Handling](#generic-error-handling)

## Logging Errors

### `logErrors(err, req, res, next)`

The `logErrors` function is a middleware that logs errors to the console and then passes them to the next middleware or error handler. It is primarily used for debugging purposes and allows you to see the details of the error in the server's console.

- Input Parameters:
  - `err`: The error object.
  - `req`: The HTTP request object.
  - `res`: The HTTP response object.
  - `next`: The callback function to pass control to the next middleware.

## Handling Boom Errors

### `boomError(err, req, res, next)`

The `boomError` function is a middleware that handles errors formatted as Boom errors. Boom is a popular library for creating HTTP-friendly error objects with specific status codes and payloads.

- If the `err` object is a Boom error, this middleware extracts the status code and payload from the error and sends an appropriate HTTP response to the client.

- If the `err` object is not a Boom error, it is passed to the next middleware or error handler in the chain.

## Generic Error Handling

### `errorHandler(err, req, res, next)`

The `errorHandler` function is a middleware that handles generic errors that don't fit the Boom error format. When an error occurs, this middleware sends a 500 Internal Server Error response to the client along with error details, including the error message and stack trace.

- Input Parameters:
  - `err`: The error object.
  - `req`: The HTTP request object.
  - `res`: The HTTP response object.
  - `next`: The callback function to pass control to the next middleware.

## Usage

To use the error handling functions provided by this module, you can include them in your Express application as middleware. Here's an example of how to use them:

```javascript
import { logErrors, boomError, errorHanlder } from './errorHandler.js';

app.use(logErrors);
app.use(boomError);
app.use(errorHandler);
```

Make sure to include these middleware functions in the appropriate order to ensure proper error handling within your application.

## Conclusion

The "errorHandler.js" module simplifies error handling in your Express application. It provides logging, Boom error handling, and generic error handling to ensure that your application responds gracefully to errors and provides meaningful feedback to clients.

---

Feel free to customize this documentation further based on your specific project's needs and any additional details you'd like to include.