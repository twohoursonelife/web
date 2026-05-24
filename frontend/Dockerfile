# Multi-stage build using Alpine for minimal size and high security
FROM oven/bun:1.2.20-alpine AS builder

WORKDIR /app

# Copy lock and package file to cache layers
COPY package.json bun.lock ./

# Install dependencies
RUN bun install --frozen-lockfile

# Copy the rest of the application
COPY . .

# Run production build (which triggers pre-rendering of static pages via Nitro)
RUN bun run build

# Runtime Stage
FROM oven/bun:1.2.20-alpine AS runner

WORKDIR /app

# Set production environment
ENV NODE_ENV=production
ENV PORT=8080
ENV HOST=0.0.0.0

# Copy only the compiled output from builder
COPY --from=builder /app/.output ./.output

# Use a non-root user for security (the bun user is pre-configured in oven/bun)
USER bun

# Expose the correct port
EXPOSE 8080

# Run the Nitro production server
CMD ["bun", "run", "./.output/server/index.mjs"]
