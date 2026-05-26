FROM oven/bun:1.2.20-alpine AS builder

WORKDIR /app

# Copy lock files earlier for caching
COPY package.json bun.lock ./
RUN bun install --frozen-lockfile

COPY . .

RUN bun run build

FROM oven/bun:1.2.20-alpine AS runtime

WORKDIR /app

ENV NODE_ENV=production PORT=8080 HOST=0.0.0.0

COPY --from=builder /app/.output ./.output

USER bun

EXPOSE 8080

CMD ["bun", "run", "./.output/server/index.mjs"]
