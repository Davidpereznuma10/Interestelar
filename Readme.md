 <h1 align="center">🌌INTERESTELAR🌌</h1>

<div style="text-align:center;">
    <img src="https://e0.pxfuel.com/wallpapers/139/697/desktop-wallpaper-interstellar.jpg" alt="Interestelar" style="width:100%;">
</div>

<p align="justify">"Interstellar" is an innovative learning platform designed to revolutionize the educational experience in the "Campusland" environment. This project aims to centralize all the available courses within the campus, providing students, teachers, and administrative staff with a comprehensive solution to access and manage their education efficiently.</p>

<details>
<summary><strong style="font-size: 30px;">Implementation</strong ></summary>

<details>
<summary><strong>Download the Repo</strong></summary>

To download the repository, run the following command in your terminal:

```bash
git clone https://github.com/Davidpereznuma10/Interestelar.git
```

This will clone the repository to your local directory.
</details>

<details>
<summary><strong>Run Container</strong></summary>

Within the folder where the repository was downloaded, build the container using Docker Compose:

```bash
docker-compose build
```

Once the containers are successfully built, you can run the application with the following command:

```bash
docker-compose up
```
</details>

<details>
<summary><strong>Access the App</strong></summary>

<details>
<summary>Front-End</summary>

- The user interface (Frontend) is available at the following URL: [http://172.18.0.3:5163/](http://172.18.0.3:5163/)

<details>
<summary>Views</summary>

- [Login](http://172.18.0.3:5163/Login)
- [Home](http://172.18.0.3:5163/Home)
- [Multimedia/:courseName](http://172.18.0.3:5163/Multimedia/:courseName)

</details>
</details>

<details>
<summary>Back-End</summary>

- The backend is located at: [http://127.9.63.7:5161/api/v1](http://127.9.63.7:5161/api/v1)

- The database is hosted at: `mongodb+srv://user:password@interestelar.ah7byfz.mongodb.net/interestelar`

</details>

</details>

<details>
<summary><strong>Stop the Container</strong></summary>

To stop and bring down the containers, open another terminal and execute the following command:

```bash
docker-compose down
```

You can also use `Ctrl + C` in the terminal where `docker-compose up` is running to stop the containers and then run `docker-compose down`.
</details>

</details>

<details>
<summary><strong style="font-size: 30px;">Schemas</strong ></summary>

<details>
<summary><spam>MongoDB Users</spam></summary>

#### 👨‍🎓👩‍🎓 Users

- **discordUserID**: User's Discord ID.
- **username**: User's Discord username.
- **guild**: User's guilds (servers) in Discord.
- **avatar**: User's avatar.
- **multimedia**: Array of multimedia entries.

##### Example of Users

```json
{
    "discordUserID": "1234567890",
    "username": "JohnDoe",
    "guild": [
        {
            "name": "Server 1",
            "id": "server1id"
        },
        {
            "name": "Server 2",
            "id": "server2id"
        }
    ],
    "avatar": "https://example.com/avatar.jpg",
    "multimedia": [
        {
            "apiCourseName": "Course 1",
            "title": "Video 1",
            "link": "https://example.com/video1",
            "text": "This is a sample video.",
        },
        {
            "apiCourseName": "Course 2",
            "title": "Video 2",
            "link": "https://example.com/video2",
            "text": "Another sample video.",
        }
    ]
}
```

</details>

<details>
<summary><spam>MongoDB Courses</spam></summary>

#### 📚📚 Courses

- **courseName**: Name of the course.
- **apiCourseName**: Name of the course in API.
- **description**: Course description.
- **image**: Image associated with the course.
- **studentsEnrolled**: Number of students enrolled in the course.
- **sections**: Course sections and their videos.

##### Example of Courses

```json
{
    "courseName": "React Course",
    "apiCourseName": "React: De cero a experto (Hooks y MERN)",
    "description": "This is a React course description.",
    "image": "",
    "studentsEnrolled": 0,
    "sections": {
        "1": {
            "sectionName": "Section 1: Introduction",
            "videos": [
                {
                    "title": "Introduction to the course",
                    "fileType": "video",
                    "video": "react-1-01-Introduction",
                    "text": "",
                    "links": [],
                    "length": "",
                    "comments": []
                },
                {
                    "title": "How the course works?",
                    "fileType": "video",
                    "video": "",
                    "text": "",
                    "links": [],
                    "length": "",
                    "comments": []
                }
                // More videos...
            ]
        },
        // More sections...
    }
}

```

</details>

</details>

---

<details>
<summary><strong style="font-size: 30px;">Architecture</strong ></summary>

My project follows the Clean Architecture pattern with the following layers:

- **Entities**: Represent domain entities and business logic.
- **Use Cases**: Define application-specific use cases and interact with entities.
- **Interfaces**: Define contracts and interfaces for external dependencies.
- **Frameworks & Drivers**: Contains external frameworks and adapters.

<div align="center">
    <img src="https://cdn.discordapp.com/attachments/1088108120254980148/1161293179514007643/image.png?ex=6537c58d&is=6525508d&hm=47f0d9343723696f31cfbac999f86864dd866c09f5f5a5fcd92cc4a753fcd1e1&" alt="Interestelar">
</div>

</details>

---

<details>
<summary><strong style="font-size: 30px;">Docker & docker-compose</strong ></summary>

### Command `docker-compose build`

The `docker-compose build` command is used to build the Docker images defined in the `docker-compose.yml` file. This ensures that all images are ready for use before starting the containers.

To use this command, navigate to the directory containing your `docker-compose.yml` file and execute:

```bash
docker-compose build
```

### Command `docker-compose up`

The `docker-compose up` command is used to start all containers defined in the `docker-compose.yml` file. If the images have not been built previously, this command will automatically build them before starting the containers.

To use this command, also navigate to the directory containing your `docker-compose.yml` file and execute:

```bash
docker-compose up
```

You can also find specific information about Docker in the [README](https://github.com/Davidpereznuma10/Interestelar/blob/Master/docker/Readme.md) file of my GitHub repository.

</details>

---

<details>
<summary><strong style="font-size: 30px;">mongoDB</strong ></summary>

Connection to MongoDB was successfully established, creating the 'Interestelar' database and the 'cursos' collection with documents for courses like:

- 'react'
- 'docker'
- 'git'
- 'nodejs'
- 'sql'
- 'javascript'

To learn more about the implementation process and usage, please consult the [README](./Api/libs/mongoDB/data/Readme.md) file.
</details>

---

<details>
<summary><strong style="font-size: 30px;">Documentations</strong ></summary>

- [Config](./Api/config/Readme.md)
- [Mibs](./Api/libs/mongoDB/data/Readme.md)
- [Middlewares](./Api/middlewares/Readme.md)
- [Routers](./Api/routers/Readme.md)
- [Services](./Api/services/Readme.md)
- [App.js](./Api/Readme.md)
- [Docker](./docker/Readme.md)

</details>

---