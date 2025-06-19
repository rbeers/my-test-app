# Full-Stack JavaScript Demo with MongoDB

A complete full-stack JavaScript application demonstrating API-database interaction using Express.js, React, and MongoDB.

## 🚀 Features

- **Express API Server** with RESTful endpoints
- **React Frontend** with modern UI
- **MongoDB Database** with persistent storage
- **Todo List Application** demonstrating full CRUD operations
- **Real-time Development** with auto-reload

## 📋 Prerequisites

Before running this application, make sure you have the following installed:

- **Node.js** (v14 or higher)
- **npm** (comes with Node.js)
- **MongoDB** (v4.4 or higher)

### Installing MongoDB

#### macOS (using Homebrew):
```bash
brew tap mongodb/brew
brew install mongodb-community
```

#### Windows:
Download and install from [MongoDB Download Center](https://www.mongodb.com/try/download/community)

#### Linux (Ubuntu):
```bash
sudo apt update
sudo apt install mongodb
```

## 🛠️ Installation

1. **Clone or download this repository**

2. **Install dependencies:**
   ```bash
   npm run install-all
   ```

## 🚀 Running the Application

### Start Everything at Once
```bash
npm start
```

This command will start:
- MongoDB database (on port 27017)
- Express API server (on port 3001)
- React development server (on port 3000)

### Individual Commands
If you prefer to run services individually:

```bash
# Start MongoDB
npm run mongodb

# Start Express server (in another terminal)
npm run server

# Start React client (in another terminal)
npm run client
```

## 📡 API Endpoints

### Todo Endpoints
- `GET /api/todos` - Get all todos
- `GET /api/todos/:id` - Get a specific todo
- `POST /api/todos` - Create a new todo
- `PUT /api/todos/:id` - Update a todo
- `DELETE /api/todos/:id` - Delete a todo
- `PATCH /api/todos/:id/toggle` - Toggle todo completion

### Demo Endpoints
- `GET /api/hello` - Hello world endpoint
- `GET /api/health` - Health check endpoint

## 🗄️ Database Schema

### Todo Model
```javascript
{
  title: String (required),
  description: String (optional),
  completed: Boolean (default: false),
  priority: String (enum: 'low', 'medium', 'high', default: 'medium'),
  createdAt: Date (auto-generated),
  updatedAt: Date (auto-updated)
}
```

## 🎯 What This Demo Shows

### Database Integration
- **MongoDB Connection**: Automatic connection with error handling
- **Mongoose Models**: Structured data with validation
- **CRUD Operations**: Create, Read, Update, Delete todos
- **Data Persistence**: Todos survive server restarts
- **Real-time Updates**: UI updates immediately after database changes

### API Features
- **RESTful Design**: Standard HTTP methods for all operations
- **Error Handling**: Comprehensive error responses
- **Validation**: Input validation and sanitization
- **Status Codes**: Proper HTTP status codes for all responses

### Frontend Features
- **Modern UI**: Clean, responsive design
- **Real-time Updates**: Immediate feedback for all actions
- **Error Handling**: User-friendly error messages
- **Loading States**: Visual feedback during API calls
- **Responsive Design**: Works on desktop and mobile

## 🔧 Development

### Project Structure
```
my-test-app/
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/     # React components
│   │   │   ├── TodoList.js # Main todo component
│   │   │   └── TodoList.css
│   │   ├── App.js         # Main app component
│   │   └── App.css        # App styles
│   └── package.json
├── server/                 # Express backend
│   ├── config/
│   │   └── database.js    # MongoDB connection
│   ├── models/
│   │   └── Todo.js        # Todo mongoose model
│   ├── routes/
│   │   └── todos.js       # Todo API routes
│   └── index.js           # Express server
├── data/                   # MongoDB data directory
├── package.json           # Root package.json
└── README.md
```

### Adding New Features
1. **Database**: Add new models in `server/models/`
2. **API**: Add new routes in `server/routes/`
3. **Frontend**: Add new components in `client/src/components/`

## 🐛 Troubleshooting

### MongoDB Connection Issues
- Ensure MongoDB is installed and running
- Check if port 27017 is available
- Verify the data directory exists: `mkdir -p data/db`

### Port Conflicts
- If port 3000 is in use, React will automatically use the next available port
- If port 3001 is in use, change it in `server/index.js`
- If port 27017 is in use, MongoDB will fail to start

### Dependencies Issues
- Delete `node_modules` and `package-lock.json`
- Run `npm install` again
- For client issues, also run `cd client && npm install`

## 📝 License

MIT License - feel free to use this project for learning and development!