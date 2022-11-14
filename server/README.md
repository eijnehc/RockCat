# Server

A RestAPI server to simulate the operations for retrieving a user's bank accounts, account transactions and fund transfers. For simplicity, the service will serves a single mocked user.

The server is written with Node.js and Express as the HTTP middleware. It uses PostgreSQL for data persistency and the database is resided in [Supabase: Cloud Application Platform](https://app.supabase.com)

## Development

Nodemon is used to monitor for any changes in the source code and automatically restart the service.

The server resides in the server folder and its project structure is as followed:

    server/
      ├──controllers/ # Server logic
      ├──routes/      # Server endpoints
      ├──services/    # Database connection service
      └──server.js     # Main entry point
