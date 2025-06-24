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

## Building for Production

```bash
npm run build
```

This will:
- Install frontend and backend dependencies
- Build the frontend using Vite (output goes to `frontend/build`)
- Backend serves the built frontend along with API

## Tech Stack

- React 19
- Vite
- Express
- Axios
- Wikipedia API
- Render (for deployment)

## Live Demo
🔗 [View Live Site](https://project-wikipedia.onrender.com/)


## License
This project is licensed under the [MIT License](https://opensource.org/license/mit/).
