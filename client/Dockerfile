FROM node:18-alpine

WORKDIR /app

# Install dependencies
COPY package.json ./
RUN npm install

# Copy application files
COPY . .

# Build the app
RUN npm run build

# Set environment and expose port
ENV PORT=3000
EXPOSE 3000

# Start the app
CMD ["npm", "start"]
