# Base image on Node.js 10.x LTS (dubnium)
FROM node:12-alpine

# Create app directory
WORKDIR /usr/src/isleward

# Bundle app source
COPY . .

# Change directory to src/server/
WORKDIR /usr/src/isleward/src/server/

# Install only production npm modules specified in package.json
RUN npm install --only=production

# Expose container's port 4000
EXPOSE 4000

# Launch Isleward server
CMD ["node", "index.js"]
