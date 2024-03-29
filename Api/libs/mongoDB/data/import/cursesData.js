import { determineFileType } from './fileType.js';
import { MongoLib } from '../conexion.js'; 

async function getCourseData() {
  const courseNames = ["react", "docker", "git", "nodejs", "sql", "javascript"];
  const mongoDB = new MongoLib(); 
  await mongoDB.connect()

  for (const courseName of courseNames) {
    try {
      const apiUrl = `http://192.168.110.14:5010/cursos/v2?course=${courseName}`;
      const response = await fetch(apiUrl);

      if (response.ok) {
        const data = await response.json();

        const curso = {
          courseName: courseName,
          apiCourseName: data.nameCourse,
          description: data.description || "",
          image: '',
          studentsEnrolled: 0,
          sections: {},
        };

        let sectionNumber = 1;
        for (const section of data.videos) {
          curso.sections[sectionNumber] = {
            sectionName: section.sectionName,
            videos: section.videos.map((video) => ({
              title: video.Titulo,
              fileType: determineFileType(video),
              video: video.video || '',
              text: video.Texto || '',
              links: video.links
                ? [
                    {
                      linkTitle: video.links[0]['titulo-link'] || '',
                      link: video.links[0]['link'] || '',
                    },
                  ]
                : [],
              length: video.duracion || "", 
              comments: [],
            })),
          };
          sectionNumber++;
        }

        await mongoDB.insertData('cursos', [curso]);

      } else {
        console.error(`Error al obtener datos para el curso "${courseName}": ${response.status} ${response.statusText}`);
      }
    } catch (error) {
      console.error('Error al procesar e insertar datos:', error);
    }
  }
}

export { getCourseData }
