# ---
# Docker manual commands
# ---

# Create Dockerfile

# Build the app image
$ docker build . -t example-image

# List all images
$ docker images

# Run the image as container and name it
$ docker run -p 4000:4000 -d --name example-container example-image
# -d flag runs the container in detached mode / running in the background
# -p flag redirects a public port to a private port inside the container

# Request to it
$ curl -i localhost:4000

# Get container ID
$ docker ps

# Print app output
$ docker logs example-container

# Enter the container
$ docker exec -it example-container /bin/sh

# Stop or kill running container
$ docker stop example-container
$ docker kill example-container

# ---
# Docker Compose commands
# ---

# Create docker-compose.yaml file

# Build image with compose
$ docker compose build

# Run actively
$ docker compose up

# Run in the background
$ docker compose up -d

# Request to it
$ curl -i localhost:4000

# Stop docker compose
$ docker-compose down

# ---
# Docker Hub commands
# ---

# Sign into Docker Hub and create a repository
$ docker login

# Tag the local image
$ docker tag example-image mhaidarh/example-image

# Untag the local image, if necessary
$ docker rmi example-image

# Push the tagged image to Docker Hub
$ docker push mhaidarh/example-image

# Pull
$ docker pull mhaidarh/example-image

# Pull and run
$ docker run -p 4000:4000 -d --name example-container mhaidarh/example-image

# ---
# Clean up
# ---

# Delete container
$ docker rm example-container

# Delete image
$ docker rmi example-image
