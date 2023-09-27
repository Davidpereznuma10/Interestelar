
<h1 align="center">🐳Docker Documentation🐳</h1>

<h2 >What is Docker⁉️</h2>

<p align="justify">Docker is a containerization platform that revolutionizes the way we develop, deliver, and run applications. This technology allows you to package applications and their dependencies into lightweight and portable containers.</p>

<p align="justify">A Docker container is a standardized unit that includes everything needed for an application to run, such as code, libraries, and configurations. These containers can run consistently on any Docker-compatible environment, whether it's on your local computer, a testing server, or a production data center.</p>

<h3>🔐Key Features of Docker:</h3>
<ul>
    <li align="justify"><strong>Containerization:</strong> Docker encapsulates applications and their components in self-contained containers that run in isolation.</li>
    <li align="justify"><strong>Portability:</strong> Docker containers are environment-agnostic, making it easy to deploy them across different systems without changes in behavior.</li>
    <li align="justify"><strong>Efficiency:</strong> Containers are lightweight and share resources from the underlying operating system, resulting in efficient resource utilization and fast startup times.</li>
    <li align="justify"><strong>Version Control:</strong> Docker enables the creation and management of versioned images, allowing precise control over application revisions and updates.</li>
    <li align="justify"><strong>Docker Hub:</strong> Docker Hub is a public and private repository for sharing and distributing container images, simplifying the discovery and use of pre-built containers.</li>
</ul>

<p align="justify">Docker has revolutionized software development and application deployment by providing a consistent, efficient, and portable way to package and run applications. It has become a fundamental tool in modern DevOps practices and cloud-native application development.</p>


<h2 align="center">Basic Commands</h2>
    <p align="justify"> Below are some basic Docker commands and their usage:</p>
<table border="1">
    <tr>
        <th>Command</th>
        <th>Description</th>
    </tr>
    <tr>
        <td><code>docker pull &lt;image&gt;</code></td>
        <td>Download an image from Docker Hub</td>
    </tr>
    <tr>
        <td><code>docker run &lt;image&gt;</code></td>
        <td>Run a container from an image</td>
    </tr>
    <tr>
        <td><code>docker ps</code></td>
        <td>List running containers</td>
    </tr>
    <tr>
        <td><code>docker ps -a</code></td>
        <td>List all containers, including stopped ones</td>
    </tr>
    <tr>
        <td><code>docker images</code></td>
        <td>List downloaded images</td>
    </tr>
    <tr>
        <td><code>docker stop &lt;container&gt;</code></td>
        <td>Stop a running container</td>
    </tr>
    <tr>
        <td><code>docker rm &lt;container&gt;</code></td>
        <td>Remove a container</td>
    </tr>
    <tr>
        <td><code>docker build -t &lt;tag&gt; &lt;path&gt;</code></td>
        <td>Build a Docker image from a Dockerfile</td>
    </tr>
    <tr>
        <td><code>docker rmi &lt;image&gt;</code></td>
        <td>Delete a Docker image</td>
    </tr>
    <tr>
        <td><code>docker start &lt;container&gt;</code></td>
        <td>Start a stopped container</td>
    </tr>
    <tr>
        <td><code>docker exec -it &lt;container&gt; &lt;command&gt;</code></td>
        <td>Run a command inside a running container</td>
    </tr>
    <tr>
        <td><code>docker container prune</code></td>
        <td>Remove all stopped containers</td>
    </tr>
    <tr>
        <td><code>docker image prune</code></td>
        <td>Remove all unused images</td>
    </tr>
    <tr>
        <td><code>docker inspect &lt;container&gt;</code></td>
        <td>View detailed information about a container</td>
    </tr>
    <tr>
        <td><code>docker network ls</code></td>
        <td>List Docker networks</td>
    </tr>
</table>


<h2 align="center">🗄️🐳Docker Files</h2>

<h3>Dockerfile</h3>
<p align="justify"> The Dockerfile is a configuration file used to create a custom Docker image. It contains instructions for setting up the environment inside the container.</p>

<h3>.dockerignore</h3>
<p align="justify"> The .dockerignore file is used to specify files and directories to exclude when creating a Docker image. This is useful to prevent unnecessary or sensitive files from being included.</p>

<h2 align="center">Docker Compose</h2>
<p align="justify"> Docker Compose is a tool for defining and running multi-container Docker applications. It uses a docker-compose.yml file to define the application's configuration, including services, networks, and volumes.</p>

<p align="justify"> To use Docker Compose, create a docker-compose.yml file and define your services and configurations. Then, you can run the application with the following command:</p>

---

<h2>Docker Compose Commands</h2>

<table align="justify" border="1">
    <tr>
        <th>Command</th>
        <th>Description</th>
    </tr>
    <tr>
        <td><code>docker-compose up</code></td>
        <td>Builds, (re)creates, starts, and attaches to containers for a service as defined in the `docker-compose.yml` file.</td>
    </tr>
    <tr>
        <td><code>docker-compose down</code></td>
        <td>Stops and removes containers, networks, and volumes defined in the `docker-compose.yml` file.</td>
    </tr>
    <tr>
        <td><code>docker-compose build</code></td>
        <td>Build or rebuild services defined in the `docker-compose.yml` file.</td>
    </tr>
    <tr>
        <td><code>docker-compose start</code></td>
        <td>Starts services defined in the `docker-compose.yml` file.</td>
    </tr>
    <tr>
        <td><code>docker-compose stop</code></td>
        <td>Stops services defined in the `docker-compose.yml` file.</td>
    </tr>
    <tr>
        <td><code>docker-compose restart</code></td>
        <td>Restarts services defined in the `docker-compose.yml` file.</td>
    </tr>
    <tr>
        <td><code>docker-compose logs</code></td>
        <td>Displays log output from services.</td>
    </tr>
    <tr>
        <td><code>docker-compose ps</code></td>
        <td>Lists containers for services defined in the `docker-compose.yml` file, along with their status.</td>
    </tr>
</table>


<p align="justify"> This is a basic introduction to Docker and its usage. For more information and detailed examples, please refer to the <a href="https://docs.docker.com/">official Docker documentation</a>.</p>

