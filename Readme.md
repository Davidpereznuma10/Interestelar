 <h1 align="center">INTERESTELAR</h1>
 
 

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

<h4>MongoDB<h4>

<ul>
    <li>Users:</li>
        <table>
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
        <h5>Exmple of Users:</h5>

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
    
   <li>Curses:</li>
<table>
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
        <td>"React"</td>
    </tr>
    <tr>
        <td>instructor</td>
        <td>string</td>
        <td>Name of the course instructor.</td>
        <td>"John Smith"</td>
    </tr>
    <tr>
        <td>description</td>
        <td>string</td>
        <td>Course description.</td>
        <td>"Learn the fundamentals of React development."</td>
    </tr>
    <tr>
        <td>enrollmentStatus</td>
        <td>boolean</td>
        <td>Course enrollment status. True if open for enrollment, false otherwise.</td>
        <td>true</td>
    </tr>
    <tr>
        <td>startDate</td>
        <td>date</td>
        <td>Course start date.</td>
        <td>"2023-10-01"</td>
    </tr>
    <tr>
        <td>endDate</td>
        <td>date</td>
        <td>Course end date.</td>
        <td>"2023-12-15"</td>
    </tr>
    <tr>
        <td>studentsEnrolled</td>
        <td>number</td>
        <td>Number of students enrolled in the course.</td>
        <td>50</td>
    </tr>
    <tr>
        <td>sections</td>
        <td>object</td>
        <td>Course sections and their videos.</td>
        <td>See example below</td>
    </tr>
    <tr>
        <td>- 1</td>
        <td>object</td>
        <td>Section 1: Introduction</td>
        <td>See example below</td>
    </tr>
    <tr>
        <td>-- sectionName</td>
        <td>string</td>
        <td>Name of the section.</td>
        <td>"Section 1: Introduction"</td>
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
        <td>"Introduction to the Course"</td>
    </tr>
    <tr>
        <td>--- video</td>
        <td>string</td>
        <td>Video filename.</td>
        <td>"react-1-01-Introduction.mp4"</td>
    </tr>
    <tr>
        <td>--- links</td>
        <td>array</td>
        <td>Links related to the video.</td>
        <td>[]</td>
    </tr>
    <tr>
        <td>--- comments</td>
        <td>array</td>
        <td>Comments related to the video.</td>
        <td>[]</td>
    </tr>
</table>
<h5>Exmple of Courses:</h5>

```json

{
    "courseName": "React",
    "instructor": "John Smith",
    "description": "Learn the fundamentals of React development.",
    "enrollmentStatus": true,
    "startDate": "2023-10-01",
    "endDate": "2023-12-15",
    "studentsEnrolled": 50,
    "sections": {
        "1": {
            "sectionName": "Section 1: Introduction",
            "videos": [
                {
                    "1": {
                        "title": "Introduction to the Course",
                        "video": "react-1-01-Introduction.mp4",
                        "links": []
                    }
                },
                {
                    "2": {
                        "title": "How the Course Works?",
                        "video": "react-1-02-How_the_Course_Works.mp4",
                        "links": []
                    }
                }
            ]
        },
        "2": {
            "sectionName": "Section 2: Introduction to React and General Concepts",
            "videos": [
                {
                    "1": {
                        "title": "Introduction to the Section",
                        "video": "react-2-01-Introduction.mp4",
                        "links": []
                    }
                },
                {
                    "2": {
                        "title": "What is React?",
                        "video": "react-2-02-What_is_React.mp4",
                        "links": [],
                        "comments": [
                                {
                                    "user": "Miguel Angel",
                                    "comment": "This video is great!"
                                },
                                {
                                    "user": "Casimiro",
                                    "comment": "I learned a lot from this."
                                }
                            ]
                    }
                }
            ]
        }
    }
}

``````

</ul>    
