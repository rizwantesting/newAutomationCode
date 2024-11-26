# Use the official Node.js image
FROM node:alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package files and install dependencies
COPY package.json package-lock.json* ./
RUN npm install

# Copy the application source code
COPY . .

# Expose the port your application will run on
ENV PORT=5000
EXPOSE $PORT

# Run the application
CMD ["node", "index.js"]
