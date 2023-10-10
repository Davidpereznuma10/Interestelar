
# API Documentation

## Introduction

This document provides documentation for the API endpoints of the application hosted at `http://127.9.63.7:5161`. The API includes the following routers:

1. [CourseRouter](#courserouter)
2. [LoginRouter](#loginrouter)
3. [UserRouter](#userrouter)
4. [Index](#index-router)

## CourseRouter

The `CourseRouter` provides endpoints for managing courses and related data.

### Endpoints

1. **GET All Courses**
   - Endpoint: `GET http://127.9.63.7:5161/api/v1/courses`
   - Description: Retrieve a list of all available courses.
   - Response: Returns an array of course objects.
   - Example Response:
   ```json
   [
     {
       "courseName": "course1",
       "description": "Course 1 Description",
       ...
     },
     {
       "courseName": "course2",
       "description": "Course 2 Description",
       ...
     },
     ...
   ]
   ```

2. **GET Course by Name**
   - Endpoint: `GET http://127.9.63.7:5161/api/v1/courses/:courseName`
   - Description: Retrieve a specific course by name.
   - Parameters:
     - `courseName`: The name of the course.
   - Response: Returns the details of the specified course.
   - Example Response:
   ```json
   {
     "courseName": "course1",
     "description": "Course 1 Description",
     ...
   }
   ```

3. **GET Sections of a Course**
   - Endpoint: `GET http://127.9.63.7:5161/api/v1/courses/:courseName/sections`
   - Description: Retrieve sections of a specific course.
   - Parameters:
     - `courseName`: The name of the course.
   - Response: Returns an array of course sections.
   - Example Response:
   ```json
   [
     {
       "sectionName": "section1",
       ...
     },
     {
       "sectionName": "section2",
       ...
     },
     ...
   ]
   ```

4. **GET Section by Name**
   - Endpoint: `GET http://127.9.63.7:5161/api/v1/courses/:courseName/sections/:sectionName`
   - Description: Retrieve a specific section of a course.
   - Parameters:
     - `courseName`: The name of the course.
     - `sectionName`: The name of the section.
   - Response: Returns the details of the specified section.
   - Example Response:
   ```json
   {
     "sectionName": "section1",
     ...
   }
   ```

5. **GET Videos of a Section**
   - Endpoint: `GET http://127.9.63.7:5161/api/v1/courses/:courseName/sections/:sectionName/videos`
   - Description: Retrieve videos of a specific section in a course.
   - Parameters:
     - `courseName`: The name of the course.
     - `sectionName`: The name of the section.
   - Response: Returns an array of videos within the section.
   - Example Response:
   ```json
   [
     {
       "videoTitle": "video1",
       ...
     },
     {
       "videoTitle": "video2",
       ...
     },
     ...
   ]
   ```

6. **GET Video by Title**
   - Endpoint: `GET http://127.9.63.7:5161/api/v1/courses/:courseName/sections/:sectionName/videos/:videoTitle`
   - Description: Retrieve a specific video within a section of a course.
   - Parameters:
     - `courseName`: The name of the course.
     - `sectionName`: The name of the section.
     - `videoTitle`: The title of the video.
   - Response: Returns the details of the specified video.
   - Example Response:
   ```json
   {
     "videoTitle": "video1",
     ...
   }
   ```

7. **Add Comment to Video**
   - Endpoint: `POST http://127.9.63.7:5161/api/v1/courses/:courseName/sections/:sectionName/videos/:videoTitle/comments`
   - Description: Add a comment to a specific video within a section of a course.
   - Parameters:
     - `courseName`: The name of the course.
     - `sectionName`: The name of the section.
     - `videoTitle`: The title of the video.
   - Request Body: JSON object containing the comment.
   - Response: Returns a confirmation of the comment addition.
   - Example Response:
   ```json
   {
     "message": "Comment added successfully.",
     ...
   }
   ```

## LoginRouter

The `LoginRouter` handles user authentication using Discord authentication strategy.

### Endpoints

1. **Initiate Discord Authentication**
   - Endpoint: `GET http://127.9.63.7:5161/api/v1/login`
   - Description: Initiates the Discord authentication process.
   - Response: Redirects users to Discord for authentication.

2. **Discord Authentication Callback (Successful)**
   - Endpoint: `GET http://127.9.63.7:5161/api/v1/login/auth/redirect`
   - Description: Handles

 the redirect URL after successful Discord authentication.
   - Response: Redirects users to a success URL.

3. **Discord Authentication Callback (Failure)**
   - Endpoint: `GET http://127.9.63.7:5161/api/v1/login/auth/redirect`
   - Description: Handles the redirect URL after failed Discord authentication.
   - Response: Redirects users to a failure URL.

4. **Logout**
   - Endpoint: `GET http://127.9.63.7:5161/api/v1/login/logout`
   - Description: Logs the user out of the application.
   - Response: Redirects users to the login page after logout.

## UserRouter

The `UserRouter` handles user-related routes, specifically fetching user data.

### Endpoints

1. **Get User by Username**
   - Endpoint: `GET http://127.9.63.7:5161/api/v1/user/:username`
   - Description: Retrieve user data by username.
   - Parameters:
     - `username`: The username of the user.
   - Response: Returns the details of the specified user.
   - Example Response:
   ```json
   {
     "username": "user1",
     "discordUserID": "123456789",
     ...
   }
   ```

## Index Router

The `index.js` file serves as the entry point for routing within the application. It imports and configures the following routers:

1. **CourseRouter**: Handles routes related to managing courses and related data.
2. **LoginRouter**: Manages user authentication using the Discord authentication strategy.
3. **UserRouter**: Handles routes for retrieving user-related data.

### Routing Configuration

The `RouterApi` function configures the routing structure for the API. It sets up the following base routes:

- `/api/v1/login`: Routes for user authentication and login.
- `/api/v1/user`: Routes for fetching user-related data.
- `/api/v1/courses`: Routes for managing courses and course-related data.

The [Index.js](https://github.com/Davidpereznuma10/Interestelar/blob/Master/Api/routers/index.js) file plays a crucial role in organizing and directing incoming API requests to the respective routers for processing.
```