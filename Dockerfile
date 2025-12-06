FROM node:22-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
RUN npm install
RUN npm run build
RUN ls -la dist/tools-website && ls -la dist/tools-website/browser

FROM node:22-alpine
WORKDIR /app
RUN npm install -g serve@14
COPY --from=builder /app/dist/tools-website ./dist/tools-website
EXPOSE 3000
CMD ["serve", "-s", "dist/tools-website/browser", "-l", "3000"]
