# Wikipedia Search Engine

A full-stack web application that allows users to search Wikipedia articles using a React frontend and an Express backend that acts as a proxy to the Wikipedia API.

## Project Structure

```
/
├── backend/          # Express.js backend
│   └── index.js
├── frontend/         # React frontend built with Vite
│   └── vite.config.js
├── package.json      # Root scripts and combined dev setup
```

## Features

- Search Wikipedia using the official API
- React 19 frontend (with Vite)
- Express backend handles API proxying
- Unified deployment on a single server (e.g. Render)

## Local Development

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/wikipedia-search-engine.git
cd wikipedia-search-engine
```

### 2. Install Dependencies

```bash
npm install
npm install --prefix frontend
npm install --prefix backend
```

### 3. Run the Project (Frontend + Backend)

```bash
npm run dev
```

- Frontend available at: http://localhost:8080
- API available at: http://localhost:8080/search?q=your-query

## Building for Production

```bash
npm run build
```

This will:
- Install frontend and backend dependencies
- Build the frontend using Vite (output goes to `frontend/build`)
- Backend serves the built frontend along with API

## Deployment (Render)

Create a single **Web Service** on [Render.com](https://render.com) with the following settings:

**Build Command:**

```
npm install && npm run build
```

**Start Command:**

```
npm start --prefix backend
```

**Root Directory:** Leave it blank (points to the root of the repo)

The backend will automatically serve the frontend from `frontend/build`.

## API Example

```
GET /search?q=tesla
```

Returns Wikipedia search results in JSON format.

## Scripts Overview

Root `package.json` includes:

```json
"scripts": {
  "dev": "concurrently \"npm run dev --prefix frontend\" \"npm start --prefix backend\"",
  "build": "npm install --prefix frontend && npm install --prefix backend && npm run build --prefix frontend"
}
```

## Tech Stack

- React 19
- Vite
- Express
- Axios
- Wikipedia API
- Render (for deployment)

## License

MIT © 2025 Your Name
