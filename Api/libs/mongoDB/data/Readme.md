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

<h2>File "processApi.js"</h2>

<h3>Function "getCourseData()"</h3>

<p align="justify">This function performs data import from an API for specific courses. The courses are specified in the "courseNames" array. The process involves:</p>

<ol>
    <li>Making a request to an API with course information.</li>
    <li>Processing API data and structuring it into a "course" object.</li>
    <li>Inserting the "course" object into a MongoDB database.</li>
</ol>

<p align="justify">The function uses the "determineFileType()" function from the "fileType.js" file to determine the file type associated with the videos in each section.</p>

<h2>File "conexion.js"</h2>

<h3>Class "MongoLib"</h3>

<p align="justify">This class provides an interface to connect to a MongoDB database and perform data insertion operations.</p>

<h4>Method "constructor()"</h4>

<p align="justify">Creates an instance of MongoClient and establishes a connection to the MongoDB database.</p>

<h4>Method "connect()"</h4>

<p align="justify">Establishes a connection to the MongoDB database.</p>

<h4>Method "insertData(collectionName, data)"</h4>

<p align="justify">Inserts data into a specific collection in the database.</p>

<h2>Configuration</h2>

<p align="justify">Configuration data for the database connection is obtained from the <a href="https://github.com/Davidpereznuma10/Interestelar/blob/connection/Api/config/config.js">Config.js</a> configuration file.</p>

<p align="justify">This is the summary of the structure and functions of the files in the "import" folder. Each file plays an important role in the process of importing and storing data in MongoDB.</p>
