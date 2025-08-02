# Stage 1: Build the React Vite application
FROM node:20-alpine as builder

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run build

# Stage 2: Serve the built application with Nginx
FROM nginx:alpine

# Copy built Vite assets
COPY --from=builder /app/dist /usr/share/nginx/html

# ✅ Overwrite default nginx config with SPA-compatible one
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
