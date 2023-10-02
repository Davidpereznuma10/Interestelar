 <h1 align="center">🌌INTERESTELAR🌌</h1>
 
 

 <div style="text-align:center;">
        <img src="https://e0.pxfuel.com/wallpapers/139/697/desktop-wallpaper-interstellar.jpg" alt="Interestelar" style="width:100%;">
</div>


<p align="justify">"Interstellar" is an innovative learning platform designed to revolutionize the educational experience in the "Campusland" environment. This project aims to centralize all the available courses within the campus, providing students, teachers, and administrative staff with a comprehensive solution to access and manage their education efficiently.</p>

---

<ul>
    <li>
        <h4>Complete Course Catalog:</h4>
        <p align="justify">Interstellar hosts a wide variety of courses, from mandatory subjects to electives and professional development programs. Users can easily explore all available options in one place.</p>
    </li>
    <li>
        <h4>Personalized Course Management:</h4>
        <p align="justify">Students can customize their educational experience by selecting courses, schedules, and tracking their academic progress in an intuitive interface.</p>
    </li>
    <li>
        <h4>Online Educational Resources:</h4>
        <p align="justify">The platform provides access to online educational resources, such as reading materials, videos, and recorded lectures. This enriches the learning experience and encourages collaboration among students.</p>
    </li>
    <li>
        <h4>Community Support:</h4>
        <p align="justify">The platform fosters the educational community by facilitating communication among students, teachers, and administrative staff.</p>
    </li>
    <li>
        <h4>Security and Privacy:</h4>
        <p align="justify">Data security and user privacy are a priority. Through the Discord-based authentication system, it ensures that all members of the campus server have access.</p>
    </li>
</ul>

---

<h2 align="center">Schemas</h2>

<h3>MongoDB<h4>
<ul>
    <li style=" padding-bottom: 5%;">👨‍🎓👩‍🎓 Users:</li>
        <table align="justify">
            <tr>
                <th>Field</th>
                <th>Type</th>
                <th>Description</th>
                <th>Example</th>
            </tr>
            <tr>
                <td>nombre</td>
                <td>string</td>
                <td>User's name</td>
                <td>"John Doe"</td>
            </tr>
            <tr>
                <td>discordUser</td>
                <td>string</td>
                <td>Discord username</td>
                <td>"johndoe#1234"</td>
            </tr>
            <tr>
                <td>email</td>
                <td>string</td>
                <td>Email address</td>
                <td>"johndoe@example.com"</td>
            </tr>
            <tr>
                <td>group</td>
                <td>string</td>
                <td>User's group</td>
                <td>"M1"</td>
            </tr>
            <tr>
                <td>entries</td>
                <td>array</td>
                <td>User's activity entries</td>
                <td>See example below</td>
            </tr>
            <tr>
                <td>- date</td>
                <td>date</td>
                <td>Entry date</td>
                <td>"2023-09-25"</td>
            </tr>
            <tr>
                <td>- time</td>
                <td>time</td>
                <td>Entry time</td>
                <td>"15:30:00"</td>
            </tr>
            <tr>
                <td>- videos</td>
                <td>array</td>
                <td>Associated videos, if any</td>
                <td>See example below</td>
            </tr>
            <tr>
                <td>-- course</td>
                <td>string</td>
                <td>Course name to which the video belongs</td>
                <td>"React"</td>
            </tr>
            <tr>
                <td>-- name</td>
                <td>string</td>
                <td>Video name</td>
                <td>"Introduction to MongoDB"</td>
            </tr>
            <tr>
                <td>-- url</td>
                <td>string</td>
                <td>Video URL</td>
                <td>"https://example.com/video"</td>
            </tr>
            <tr>
                <td>-- lastWatchedTime</td>
                <td>time</td>
                <td>Last watched time in the video</td>
                <td>"2:50" for example</td>
            </tr>
        </table>
    <h5>📝Exmple of Users:</h5>

```json
{
    "date": "2023-09-26",
    "time": "10:45:00",
    "videos": [
        {
            "course": "JavaScript",
            "name": "Video 3",
            "url": "https://example.com/video3",
            "lastWatchedTime": "12:30"
        },
        {
            "course": "Node",
            "name": "Video 5",
            "url": "https://example.com/video5",
            "lastWatchedTime": "8:15"
        }
    ]
}
```
---
    
<li style="padding-bottom: 5%;">📚📚 Courses:</li>
<table align="justify">
    <tr>
        <th>Field</th>
        <th>Type</th>
        <th>Description</th>
        <th>Example</th>
    </tr>
    <tr>
        <td>courseName</td>
        <td>string</td>
        <td>Name of the course.</td>
        <td>"react"</td>
    </tr>
    <tr>
        <td>apiCourseName</td>
        <td>string</td>
        <td>Name of the course in API.</td>
        <td>"React: De cero a experto (Hooks y MERN)"</td>
    </tr>
    <tr>
        <td>description</td>
        <td>string</td>
        <td>Course description.</td>
        <td>""</td>
    </tr>
    <tr>
        <td>studentsEnrolled</td>
        <td>number</td>
        <td>Number of students enrolled in the course.</td>
        <td>0</td>
    </tr>
    <tr>
        <td>sections</td>
        <td>array</td>
        <td>Course sections and their videos.</td>
        <td>See example below</td>
    </tr>
    <tr>
        <td>- 1</td>
        <td>object</td>
        <td>Section 1: Introducción</td>
        <td>See example below</td>
    </tr>
    <tr>
        <td>-- sectionName</td>
        <td>string</td>
        <td>Name of the section.</td>
        <td>"Sección 1: Introducción"</td>
    </tr>
    <tr>
        <td>-- videos</td>
        <td>array</td>
        <td>Videos in the section.</td>
        <td>See example below</td>
    </tr>
    <tr>
        <td>-- 1</td>
        <td>object</td>
        <td>Video 1</td>
        <td>See example below</td>
    </tr>
    <tr>
        <td>--- title</td>
        <td>string</td>
        <td>Title of the video.</td>
        <td>"Introducción al curso"</td>
    </tr>
    <tr>
        <td>--- fileType</td>
        <td>string</td>
        <td>Type of the file (e.g., video, text).</td>
        <td>"video"</td>
    </tr>
    <tr>
        <td>--- video</td>
        <td>string</td>
        <td>Video filename.</td>
        <td>"react-1-01-Introducción"</td>
    </tr>
    <tr>
        <td>--- text</td>
        <td>string</td>
        <td>Text content (if fileType is "text").</td>
        <td>""</td>
    </tr>
    <tr>
        <td>--- links</td>
        <td>array</td>
        <td>Links related to the video or text.</td>
        <td>[]</td>
    </tr>
    <tr>
        <td>--- length</td>
        <td>string or number</td>
        <td>Length of the video or "No disponible" for text.</td>
        <td>105166 or "No disponible"</td>
    </tr>
    <tr>
        <td>--- comments</td>
        <td>array</td>
        <td>Comments related to the video or text.</td>
        <td>[]</td>
    </tr>
</table>
<h5>📝Example of Courses:</h5>

```json
{
    "courseName": "react",
    "apiCourseName": "React: De cero a experto ( Hooks y MERN )",
    "description": "",
    "studentsEnrolled": 0,
    "sections": [
        {
            "sectionName": "Sección 1: Introducción",
            "videos": [
                {
                    "title": "Introducción al curso",
                    "fileType": "video",
                    "video": "react-1-01-Introducción",
                    "text": "",
                    "links": [],
                    "length": 105166,
                    "comments": []
                },
                {
                    "title": "¿Cómo funcionará el curso?",
                    "fileType": "video",
                    "video": "react-1-02-Como_funcionara_el_curso",
                    "text": "",
                    "links": [],
                    "length": 211433,
                    "comments": []
                },
                {
                    "title": "¿Cómo hacer preguntas?",
                    "fileType": "video",
                    "video": "react-1-03-Como-hacer-preguntas",
                    "text": "",
                    "links": [],
                    "length": 194366,
                    "comments": []
                },
                {
                    "title": "Instalaciones necesarias y recomendadas",
                    "fileType": "video",
                    "video": "react-1-04-Instalaciones_necesarias_y_recomendadas",
                    "text": "",
                    "links": [
                        {
                            "linkTitle": "Instalaciones necesarias",
                            "link": "https://gist.github.com/Klerith/4a4abfd88a88b2d1f16efd95fea41362"
                        }
                    ],
                    "length": 541966,
                    "comments": []
                }
            ]
        },
        {
            "sectionName": "Sección 2: Introducción a React y conceptos generales",
            "videos": [
                {
                    "title": "Introducción a la sección",
                    "fileType": "video",
                    "video": "react-2-01-Introducción",
                    "text": "",
                    "links": [],
                    "length": 71016,
                    "comments": []
                },
                {
                    "title": "Temas puntuales de la sección",
                    "fileType": "text",
                    "video": "",
                    "text": "Temas puntuales de la sección\n¿Qué aprenderemos en esta sección?\n\n¿Qué es React?\n\nConceptos generales\n\nBabel\n\nJSX\n\nDaremos nuestros primeros pasos y una pequeña aplicación que nos ayudará a perderle el miedo a React rápidamente",
                    "links": [],
                    "length": "No disponible",
                    "comments": []
                }
            ]
        }
    ]
}


``````

</ul>

---

<h2 align="center">🏗️Architecture🏗️</h2>

<spam>
    My project follows the Clean Architecture pattern with the following layers:
</spam>
<ul>
    <li><strong>Entities:</strong> Represent domain entities and business logic.</li>
    <li><strong>Use Cases:</strong> Define application-specific use cases and interact with entities.</li>
    <li><strong>Interfaces:</strong> Define contracts and interfaces for external dependencies.</li>
    <li><strong>Frameworks & Drivers:</strong> Contains external frameworks and adapters.</li>
</ul>
<div  align="center">
        <img src="https://cdn.discordapp.com/attachments/1088108120254980148/1156628588829868062/image.png?ex=6515a9d0&is=65145850&hm=66766d989d02d72bed2d3d38f11eb2e28c7d9471d4030755e9cb61810938bea8&" alt="Interestelar" >
</div>

---

<h2 align="center">🐳Docker & docker-compose🐳</h2>

<h3>Command `docker-compose build`</h3>
<p>The `docker-compose build` command is used to build the Docker images defined in the `docker-compose.yml` file. This ensures that all images are ready for use before starting the containers.</p>

<p>To use this command, navigate to the directory containing your `docker-compose.yml` file and execute:</p>

```bash
docker-compose build
```

<h3>Command `docker-compose up`</h3>
<p>The `docker-compose up` command is used to start all containers defined in the `docker-compose.yml` file. If the images have not been built previously, this command will automatically build them before starting the containers.</p>

<p>To use this command, also navigate to the directory containing your `docker-compose.yml` file and execute:</p>

```bash
docker-compose up
```


<p>You can also find specific information about Docker in the <a href="https://github.com/Davidpereznuma10/Interestelar/blob/Master/docker/Readme.md">README</a> file of my GitHub repository.</p>

<h2 align="center">mongoDB</h2>

<p>Connection to MongoDB was successfully established, creating the 'Interestelar' database and the 'cursos' collection with documents for courses like:</p>

<ul>
  <li>'react'</li>
  <li>'docker'</li>
  <li>'git'</li>
  <li>'nodejs'</li>
  <li>'sql'</li>
  <li>'javascript'</li>
</ul>

<p>To learn more about the implementation process and usage, please consult the <a href="./Api/libs/mongoDB/data/Readme.md">README</a> file.</p>

