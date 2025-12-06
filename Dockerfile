FROM node:22-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
RUN npm install 
RUN npm run build
# Debug + Verify
RUN ls -la dist/ && ls -la dist/tools-website/ || echo "FEHLER: dist/tool-website nicht gefunden"

FROM node:22-alpine
WORKDIR /app
RUN npm install -g serve@14
# Explizit korrekten Pfad kopieren
COPY --from=builder /app/dist/tools-website ./dist/tools-website
EXPOSE 3000
CMD ["serve", "-s", "dist/tools-website", "-l", "3000"]
