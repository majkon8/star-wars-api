# Star Wars API task

Star Wars API task

## Prerequisites

-   Node.js - ^20.0.0
-   NPM - ^10.0.0
-   Docker - ^24.0.0 (optional)
-   Docker compose - ^2.20.0 (optional)

## Installation

Follow steps listed below for installation.

### Clone repository

`git clone git@github.com:majkon8/star-wars-api-task.git`

### Install backend

-   Go to backend directory: `cd backend/`
-   Install NPM dependiences: `npm i`
-   Copy `.env` file from `.env.example` by `cp .env.example .env` and edit `.env` file with your variables (you can use default variables without changing anything)

#### If you are using Docker please follow steps below

-   Run `npm run dc-up` - this command will build docker-compose and will connect MySQL master with MySQL slave by replication. Please note that during building replica there can be some warnings because docker needs some time to run (and when it's not running yet, script is not able to connect to mysql and build replica), so do not worry - this step can take up to 1 minute.

## Run

### Backend

You can run backend with `npm run dev`.

## Tests

### Backend

-   Go to backend directory: `cd backend/`
-   Copy `.env.test` file from `.env.example` by `cp .env.example .env.test` and edit `.env.test` file with your variables (you can use default variables without changing anything)
-   You can run tests with `npm run test`.

## Documentation

You can generate documentation by running `npm run generate-docs` command in root project directory when the project running. By default the documentation configuration gets port 3000 as the port that the app is running on so if you changed that in .env file remember to also change it in `magidoc.mjs` file. After generating you can access documentation at `http://localhost:4000`.
