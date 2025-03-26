# Stage 1: Build the application
FROM node:18-alpine AS builder

# Set the working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy the entire project
COPY . .

# Build the application
RUN npm run build

# Stage 2: Create production image
FROM node:18-alpine AS runner

# Set the working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install only production dependencies
RUN npm ci --only=production

# Copy built artifacts from builder stage
COPY --from=builder /app/.svelte-kit/output ./

# Expose the port
EXPOSE 3000

# Set environment to production
ENV NODE_ENV=production

# Command to run the application
CMD ["node", "server/index.js"]