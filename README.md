# my-test-app

A full-stack JavaScript demonstration application featuring an Express API backend and React frontend with auto-reload capabilities.

## 🚀 Quick Start

### Prerequisites

- **Node.js** (version 14 or higher)
- **npm** (comes with Node.js)

To check if you have Node.js installed:
```bash
node --version
npm --version
```

If Node.js is not installed, download it from [nodejs.org](https://nodejs.org/).

### Installation & Setup

1. **Install all dependencies** (both server and client):
```bash
npm run install-all
```

2. **Start both the API server and React app** with a single command:
```bash
npm start
```

This will launch:
- **Express API Server** on `http://localhost:3001` (with auto-reload via nodemon)
- **React Frontend** on `http://localhost:3000` (with hot reload)

## 📁 Project Structure

```
my-test-app/
├── server/
│   └── index.js          # Express API server
├── client/
│   ├── public/
│   │   └── index.html    # React app HTML template
│   ├── src/
│   │   ├── App.js        # Main React component
│   │   ├── App.css       # React app styles
│   │   ├── index.js      # React entry point
│   │   └── index.css     # Global styles
│   └── package.json      # React dependencies
├── package.json          # Main project dependencies
└── README.md            # This file
```

## 🔧 Available Scripts

### Main Commands
- `npm start` - Start both API server and React app concurrently
- `npm run install-all` - Install dependencies for both server and client

### Individual Commands
- `npm run server` - Start only the Express API server (port 3001)
- `npm run client` - Start only the React app (port 3000)
- `npm run build` - Build the React app for production

## 🌐 API Endpoints

The Express server provides the following endpoints:

- **GET** `/api/hello` - Returns a greeting message with timestamp
- **GET** `/api/health` - Returns server health status and uptime

### Example API Response
```json
{
  "message": "Hello from the Express API!",
  "timestamp": "2024-01-15T10:30:00.000Z",
  "status": "success"
}
```

## 🔄 Auto-Reload Features

### Server Auto-Reload
- The Express server uses **nodemon** for automatic restart when files change
- Any changes to `server/index.js` will trigger an immediate server restart

### Client Hot Reload
- The React app uses **react-scripts** with hot reload
- Changes to React components will be reflected immediately in the browser
- No page refresh required for most changes

## 🎨 Features

- **Modern UI**: Beautiful gradient design with responsive layout
- **Interactive API Testing**: Buttons to test both API endpoints
- **Real-time Response Display**: Shows API responses in formatted JSON
- **Error Handling**: Displays user-friendly error messages
- **Loading States**: Visual feedback during API calls
- **Responsive Design**: Works on desktop and mobile devices

## 🛠️ Development

### Making Changes

1. **API Changes**: Edit `server/index.js` - server will auto-restart
2. **Frontend Changes**: Edit files in `client/src/` - browser will hot reload
3. **Styling Changes**: Edit `client/src/App.css` - changes appear immediately

### Adding New API Endpoints

To add new endpoints, edit `server/index.js`:

```javascript
app.get('/api/new-endpoint', (req, res) => {
  res.json({
    message: 'New endpoint response',
    timestamp: new Date().toISOString()
  });
});
```

### Adding New React Components

Create new components in `client/src/` and import them in `App.js`.

## 🚀 Deployment

### Building for Production
```bash
npm run build
```

This creates an optimized production build in `client/build/`.

### Environment Variables
- Server port can be set via `PORT` environment variable
- Default server port: 3001
- Default client port: 3000

## 📝 Troubleshooting

### Common Issues

1. **Port already in use**: 
   - Kill processes using ports 3000 or 3001
   - Or change ports in the respective configuration files

2. **Dependencies not installed**:
   - Run `npm run install-all` to install all dependencies

3. **API not responding**:
   - Check if the server is running on port 3001
   - Verify CORS is enabled in the server configuration

### Getting Help

- Check the browser console for client-side errors
- Check the terminal for server-side errors
- Ensure both server and client are running simultaneously

## 🎯 Learning Objectives

This project demonstrates:
- **Express.js** API development
- **React** frontend development
- **Full-stack** JavaScript architecture
- **Auto-reload** development workflow
- **API integration** between frontend and backend
- **Modern CSS** styling and responsive design
- **Error handling** and loading states
- **Concurrent** development server management