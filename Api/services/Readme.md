# SERVICES

## CourseService.js

`CourseService.js` is a JavaScript file that provides a service for managing course-related data within the application. This service handles various operations related to courses, such as retrieving course details, sections, videos, and adding comments to videos.

The key functionality and endpoints provided by the `CourseService` class include:
- Retrieving a list of all available courses.
- Retrieving detailed information about a specific course by its name.
- Fetching sections of a course.
- Getting information about a specific section within a course.
- Retrieving videos within a section of a course.
- Accessing details of a specific video within a section.
- Adding comments to videos within a course section.

The service is designed to interact with a MongoDB database using the `MongoLib` class from the `../libs/mongoDB/data/conexion.js` file. It handles errors and exceptions gracefully using the `Boom` library to provide meaningful responses to client requests.

## UserService.js

`UserService.js` is another JavaScript file that provides a service for managing user-related data within the application. This service is responsible for retrieving user information based on a provided username.

Key functionality and features of the `UserService` class include:
- Retrieving user information by username.
- Handling errors gracefully and returning appropriate responses using the `Boom` library.
- Interaction with a MongoDB database using the `MongoLib` class from the `../libs/mongoDB/data/conexion.js` file.

These services play a crucial role in the application's functionality, allowing users to access course-related information and retrieve their user profiles by username.

Both `CourseService.js` and `UserService.js` contribute to the overall functionality of the application by providing data retrieval and management capabilities related to courses and users, respectively.