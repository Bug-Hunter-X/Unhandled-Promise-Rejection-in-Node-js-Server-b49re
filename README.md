# Unhandled Promise Rejection in Node.js Server

This example demonstrates a common error in Node.js servers: unhandled promise rejections or exceptions within asynchronous operations.  If an asynchronous task fails and doesn't have proper error handling, the server might crash or behave unexpectedly.

## The Problem

The `serverBug.js` file contains a simple HTTP server that attempts to fetch data asynchronously. However, if `fetchData()` fails, there's no error handling implemented, which can lead to an unhandled promise rejection and potential server crashes or unexpected behavior.

## The Solution

The `serverBugSolution.js` file provides a solution by adding proper error handling.  It uses a `try...catch` block around `fetchData` to handle potential errors gracefully. It also improves the code using a Promise and `.catch()` to catch any errors.