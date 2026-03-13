# ---------- Build stage ----------
FROM node:20-alpine AS builder

WORKDIR /app

# Copy dependency files first (better caching)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy project files
COPY . .

# Build Nuxt app
RUN npm run build


# ---------- Runtime stage ----------
FROM node:20-alpine

WORKDIR /app
ENV NODE_ENV=production

# Copy Nuxt Nitro output
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/package*.json ./

# Install only production dependencies
RUN npm install --omit=dev

# Cloud Run port
ENV PORT=8080
EXPOSE 8080

# Start Nuxt server
CMD ["node", "dist/server/index.mjs"]