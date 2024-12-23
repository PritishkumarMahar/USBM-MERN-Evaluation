//  Define Middleware in Express.js
//------------------------------------
// Middleware functions execute before the final route handler. 
// They can modify requests/responses or   terminate the request cycle.

app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
  });
  