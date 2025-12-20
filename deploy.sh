#!/bin/bash

# Deploy script for Azure VM
# Usage: ./deploy.sh

echo "🚀 Starting deployment..."

# Pull latest changes
echo "📥 Pulling latest changes from git..."
git pull origin main

# Stop and remove old containers
echo "🛑 Stopping old containers..."
docker-compose down

# Remove old images
echo "🗑️ Cleaning up old images..."
docker image prune -f

# Build and start containers
echo "🏗️ Building and starting containers..."
docker-compose up --build -d

# Show container status
echo "✅ Deployment complete! Container status:"
docker-compose ps

# Show logs
echo "📋 Recent logs:"
docker-compose logs --tail=50

echo "🎉 Portfolio is now running!"
echo "Access it at: http://your-domain.com"
