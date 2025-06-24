# Wikipedia Search Engine

A full-stack web application that allows users to search Wikipedia articles using a React frontend and an Express backend that acts as a proxy to the Wikipedia API.

## Project Structure

```
├── backend/          #Express.js backend
│   └── index.js
├── frontend/         #React frontend built with Vite
│   └── vite.config.js
├── package.json      #Root scripts and combined dev setup
```

## Features

- Search Wikipedia using the official API
- React 19 frontend (with Vite)
- Express backend handles API proxying
- Unified deployment on a single server (e.g. Render)

## Local Development

### 1. Clone the Repository

```bash
git clone https://github.com/ahtishamul-haque/wikipedia-search-engine.git
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

**Build Command:**

```
npm install && npm run build
```

**Start Command:**

```
npm start --prefix backend
```

## Tech Stack

- React 19
- Vite
- Express
- Axios
- Wikipedia API
- Render (for deployment)

## Live Demo
🔗 [View Live Site]([https://major-project-trip-mate.onrender.com/listings](https://project-wikipedia.onrender.com/))


## License
This project is licensed under the [MIT License](https://opensource.org/license/mit/).
