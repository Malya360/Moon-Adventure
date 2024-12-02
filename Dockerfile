# Use Node.js 14 as base image
FROM node:14-buster

# Set the working directory
WORKDIR /app

# Install Python 2.7 and build dependencies
RUN apt-get update && \
    apt-get install -y python2.7 python2.7-dev build-essential && \
    rm -f /usr/bin/python && \
    ln -s /usr/bin/python2.7 /usr/bin/python && \
    apt-get clean && \
    apt-get autoremove -y

# Set Python environment variable for node-gyp
ENV PYTHON /usr/bin/python2.7

# Install gulp-cli globally
RUN npm install -g gulp-cli

# Copy package files
COPY package.json ./

# Install dependencies
RUN npm install && \
    # Verify node_modules exists and contains gulp
    ls -la node_modules && \
    ls -la node_modules/gulp && \
    # Install gulp locally if it's missing
    npm install gulp --save-dev && \
    # Verify gulp installation
    gulp --version

# Copy the rest of the application
COPY . .

# Double-check node_modules after copy
RUN ls -la && \
    ls -la node_modules && \
    npm list gulp

# Install serve globally
RUN npm install -g serve

# Serve the index.html file using serve
CMD ["serve", "-s", "."]
