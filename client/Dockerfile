# Use a specific node version
FROM node:18.19-alpine3.18

# Set working directory
WORKDIR /app

# Copy package files first
COPY package*.json ./

# Install dependencies with specific flags for production
RUN npm ci --only=production

# Copy the rest of the application
COPY . .

# Build the application
RUN npm run build

# Expose the port
EXPOSE 3000

# Start the application
CMD ["npm", "start"]
