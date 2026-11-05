# 1. Base image
FROM node:20-alpine

# 2. Set working directory
WORKDIR /usr/src/app

# 3. Copy package manifests first for caching
COPY package*.json ./

# 4. Install dependencies
RUN npm install --production

# 5. Copy the rest of the application code
COPY . .

# 6. Expose the port your server listens on
EXPOSE 3000

# 7. Start the application
CMD ["npm", "start"]