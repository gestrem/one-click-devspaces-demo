# To-Do App


## Run in DevSpaces with zero set up!

[![Contribute](https://www.eclipse.org/che/contribute.svg)]([[https://devspaces.apps.rm3.7wse.p1.openshiftapps.com](https://devspaces.apps.cluster-kql8t.dyn.redhatworkshops.io)](https://devspaces.apps.cluster-kql8t.dyn.redhatworkshops.io)//#https://github.com/slallemand/one-click-devspaces-demo.git)

## Technology Stack

- **Backend**: Node.js, Express.js
- **Database**: PostgreSQL
- **Frontend**: HTML, CSS, JavaScript 

## Project Structure

```
todo-app/
├── devfile.yaml          # OpenShift Dev Spaces configuration
├── package.json          # Node.js dependencies and scripts
├── server.js            # Express server and API endpoints
├── init-db.js           # Database initialization script
├── public/
│   └── index.html       # Frontend application
├── .gitignore          # Git ignore rules
└── README.md           # Project documentation
```

## Getting Started

### Prerequisites

- OpenShift Dev Spaces environment
- Node.js 18 or higher
- PostgreSQL 13 or higher

### Install and Run The App

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Initialize the database**
   ```bash
   npm run init-db
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```


### OpenShift Dev Spaces Setup

The project includes a `devfile.yaml` that automatically sets up:
- Node.js 18 runtime environment
- PostgreSQL 13 database
- Required environment variables
- Port forwarding for the web application

When you open this project in OpenShift Dev Spaces, the environment will be automatically configured and dependencies will be installed.

## Environment Variables

The application uses the following environment variables (defaults provided):

- `DATABASE_URL`: PostgreSQL connection string
- `POSTGRES_HOST`: Database host (default: `postgres`)
- `POSTGRES_DB`: Database name (default: `todoapp`)
- `POSTGRES_USER`: Database user (default: `postgres`)
- `POSTGRES_PASSWORD`: Database password (default: `password`)
- `POSTGRES_PORT`: Database port (default: `5432`)
- `PORT`: Server port (default: `3000`)
- `NODE_ENV`: Environment mode (default: `development`)


## Development

### Available Scripts

- `npm start` - Start the production server
- `npm run dev` - Start the development server with hot reload
- `npm run init-db` - Initialize the database and create tables
