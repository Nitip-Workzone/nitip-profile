# Stage 1: Build
FROM node:20-alpine AS builder

WORKDIR /app

# Copy package files and install dependencies (npm only)
COPY package.json package-lock.json* ./
RUN npm ci || npm install

# Copy source code
COPY . .

# Disable Nuxt devtools for production build
ENV NUXT_DEVTOOLS=false

# Build Nuxt for production (SSR)
RUN npm run build

# Stage 2: Runtime
FROM node:20-alpine

WORKDIR /app

# Install dumb-init for proper signal handling
RUN apk add --no-cache dumb-init

# Copy built output from builder
COPY --from=builder /app/.output ./.output

# Set environment
ENV NODE_ENV=production
ENV PORT=3000
ENV HOST=0.0.0.0
ENV NUXT_DEVTOOLS=false

# Expose port
EXPOSE 3000

# Use dumb-init to handle PID 1 properly
ENTRYPOINT ["dumb-init", "--"]

# Start Nuxt Nitro server
CMD ["node", ".output/server/index.mjs"]