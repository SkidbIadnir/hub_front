# Stage 1: Build the application
FROM node:18 AS builder

# Set the working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the entire project
COPY . .

# Run SvelteKit sync to ensure proper setup
RUN npm run prepare

# Build the application
RUN npm run build

# Stage 2: Serve the application
FROM node:18 AS runner

WORKDIR /app

# Copy package files
COPY --from=builder /app/package*.json ./

# Install only production dependencies
RUN npm install --production

# Copy the built application
# SvelteKit typically outputs to .svelte-kit/output
COPY --from=builder /app/.svelte-kit/output ./

# Expose the port
EXPOSE 3000

# Start the application
# The exact command might vary, so we'll use a more generic approach
CMD ["node", "server/index.js"]