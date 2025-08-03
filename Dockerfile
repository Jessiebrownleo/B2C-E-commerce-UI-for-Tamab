# Use Node.js base image for building
FROM node:22 AS builder

# Set working directory
WORKDIR /app
# Copy package.json and package-lock.json (or yarn.lock)
COPY package.json package-lock.json node_modules ./
# If using Yarn, replace with: COPY package.json yarn.lock ./

# Install dependencies
RUN npm install --force --loglevel=verbose
# If using Yarn, replace with: RUN yarn install

# Copy the rest of the application code
COPY . .

# Build the Vite project
RUN npm run build
# If using Yarn, replace with: RUN yarn build

# Use Nginx to serve the built files
FROM nginx:alpine

# Copy built files from the builder stage
COPY --from=builder /app/dist /usr/share/nginx/html
# Adjust the above path if your Vite build output directory is different (e.g., /app/build)

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]