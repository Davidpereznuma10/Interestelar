<h1 align="center">Documentation for the "data" Folder</h1>

<p align="justify">In this folder, you will find several files that are part of the data import process from an API and its subsequent storage in a MongoDB database. Below, each file and its functions are described:</p>

<h2>File "fileType.js"</h2>

<h3>Function "determineFileType(video)"</h3>

<p align="justify">This function determines the file type associated with a "video" object based on its content. It can return one of the following values:</p>

<ul>
    <li>'video and text' if the object has both a video and text.</li>
    <li>'video' if the object has a video but no text.</li>
    <li>'txt' if the object has neither a video nor text.</li>
</ul>


<h2>File "coursesData.js"</h2>

<h3>Function "getCourseData()"</h3>

<p align="justify">The "getCourseData" function is responsible for importing data from an API for specific courses and storing it in a MongoDB database. The process involves the following steps:</p>

<ol>
    <li>Making a request to an API with course information using the course names specified in the "courseNames" array.</li>
    <li>Processing the API response and structuring it into a "course" object.</li>
    <li>Inserting the "course" object into a MongoDB database using the "MongoLib" class from the "conexion.js" file.</li>
</ol>

<p align="justify">The function iterates through the specified courses, fetches data from the API, and organizes it into a structured format. It utilizes the "determineFileType()" function from the "fileType.js" file to identify the file type associated with the videos in each course section.</p>


<h2>File "setUser.js"</h2>

<h3>Function "setUserData(profile)"</h3>

<p align="justify">The "setUserData" function takes a "profile" object as input and returns a user data object with the provided information. The fields of the user data object include:</p>

<ul>
    <li>discordUserID: The Discord user ID.</li>
    <li>username: The Discord username.</li>
    <li>guild: The servers the user belongs to.</li>
    <li>avatar: The user's avatar.</li>
    <li>multimedia: An array that can contain information about courses or multimedia content associated with the user.</li>
</ul>

<p align="justify">This function is used to create user objects from Discord profiles and is employed elsewhere in the code to insert or update user information in the MongoDB database.</p>


<h2>File "UserData.js"</h2>

<p align="justify">The "UserData.js" file contains the configuration and logic related to user authentication using Passport and the Discord authentication strategy.</p>

<p align="justify">Key functions and configurations in this file include:</p>

<ul>
    <li>Serialization and deserialization of users using Passport.</li>
    <li>Configuration of the Discord authentication strategy using the provided credentials in the configuration.</li>
    <li>Checking if the user is in the desired Discord server.</li>
    <li>Creation or updating of user data in the MongoDB database.</li>
</ul>

<p align="justify">This file handles user authentication and user data management in the application, utilizing Passport and the MongoDB database through the "MongoLib" class from the "conexion.js" file.</p>


<h2>File "conexion.js"</h2>

<h3>Class "MongoLib"</h3>

<p align="justify">The "MongoLib" class provides an interface to connect to a MongoDB database and perform various data operations.</p>

<h4>Method "constructor()"</h4>

<p align="justify">The "constructor" method initializes an instance of MongoClient and establishes a connection to the MongoDB database specified in the configuration.</p>

<h4>Method "connect()"</h4>

<p align="justify">The "connect" method is responsible for establishing a connection to the MongoDB database using the connection URI provided in the configuration.</p>

<h4>Method "find(collection, query)"</h4>

<p align="justify">The "find" method allows you to query a specific collection in the database and retrieve data that matches the given query. It returns an array of documents that match the query criteria.</p>

<h4>Method "findOne(collection, filter)"</h4>

<p align="justify">The "findOne" method retrieves a single document from the specified collection in the database based on the provided filter criteria. It returns the first document that matches the filter.</p>

<h4>Method "updateOne(collection, filter, data)"</h4>

<p align="justify">The "updateOne" method updates a single document in the specified collection that matches the given filter criteria with the provided data. It uses the `$set` operator to update specific fields in the document.</p>

<h4>Method "insertData(collectionName, data)"</h4>

<p align="justify">The "insertData" method allows you to insert multiple documents (data) into a specific collection in the database. It is designed for bulk data insertion and provides feedback on the success of the operation.</p>

<h2>Configuration</h2>

<p align="justify">The configuration data required for establishing a connection to the MongoDB database is obtained from the <a href="https://github.com/Davidpereznuma10/Interestelar/blob/Master/Api/config/config.js">Config.js</a> configuration file. Ensure that the configuration file contains the necessary information for the database connection, such as the database user, password, host, and database name.</p>
