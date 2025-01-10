# Stage 1: Build Tailwind CSS and other assets
FROM node:18 as builder

WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run build:css

FROM nginx:alpine
WORKDIR /usr/share/nginx/html
RUN rm -rf *

COPY --from=builder /app /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
