#!/bin/bash

echo "🚀 Starting Full-Stack Application with MongoDB..."

# Check if Docker is running
if ! docker info > /dev/null 2>&1; then
    echo "❌ Docker is not running. Please start Docker Desktop first."
    exit 1
fi

# Start MongoDB container
echo "📦 Starting MongoDB container..."
docker-compose up -d mongodb

# Wait for MongoDB to be ready
echo "⏳ Waiting for MongoDB to be ready..."
until docker exec todo-mongodb mongosh --eval "db.adminCommand('ping')" > /dev/null 2>&1; do
    echo "   MongoDB not ready yet, waiting..."
    sleep 2
done

echo "✅ MongoDB is ready!"

# Start the server and client
echo "🔌 Starting Express server and React client..."
concurrently "npm run server" "npm run client" 