# Stage 1: Build the application
FROM node:18 AS builder

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the SvelteKit application
RUN npm run build

# Stage 2: Serve the application
FROM node:18 AS runner

# Set the working directory
WORKDIR /app

# Copy the built application from the builder stage
COPY --from=builder /app/.svelte-kit ./build
COPY --from=builder /app/package*.json ./

# Install only production dependencies
RUN npm install --production

# Expose the port the app runs on
EXPOSE 4173

# Start the application
CMD ["node", "build"]