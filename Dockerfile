# ---------- Build-Stage ----------
FROM node:22-alpine AS builder
WORKDIR /app

RUN apk add --no-cache curl \
    && curl -fsSL https://bun.sh/install | bash \
    && ln -s /root/.bun/bin/bun /usr/local/bin/bun

COPY package*.json ./
RUN bun install

COPY . .
RUN bun run build
RUN ls -la dist/tools-website && ls -la dist/tools-website/browser

# ---------- Runtime-Stage ----------
FROM node:22-alpine
WORKDIR /app

RUN npm install -g serve@14

COPY --from=builder /app/dist/tools-website ./dist/tools-website

EXPOSE 3000
CMD ["serve", "-s", "dist/tools-website/browser", "-l", "3000"]
