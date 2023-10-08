import { determineFileType } from './fileType.js';
import { MongoLib } from '../conexion.js';

async function getCourseData() {
  const courseNames = ["react", "docker", "git", "nodejs", "sql", "javascript"];
  const mongoDB = new MongoLib();

  for (const courseName of courseNames) {
    try {
      const apiUrl = `http://192.168.110.41:5010/cursos/v2?course=${courseName}`;
      const response = await fetch(apiUrl);

      if (response.ok) {
        const data = await response.json();

        const existingCourse = await mongoDB.findOne('cursos', { courseName: courseName });

        if (!existingCourse) {
          const curso = {
            courseName: courseName,
            apiCourseName: data.nameCourse,
            description: data.description || "",
            image: "",
            studentsEnrolled: 0,
            sections: [],
          };

          for (const section of data.videos) {
            const sectionInfo = {
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
                comments: [
                  {
                    username: "",
                    comment: ""
                  }
                ],
              })),
            };
            curso.sections.push(sectionInfo);
          }
          await mongoDB.insertData('cursos', [curso]);
          console.log(`Datos insertados para el curso "${courseName}" en la base de datos.`);
        } else {
          console.log(`El curso "${courseName}" ya existe en la base de datos. No se creará un duplicado.`);
        }
      } else {
        console.error(`Error al obtener datos para el curso "${courseName}": ${response.status} ${response.statusText}`);
      }
    } catch (error) {
      console.error('Error al procesar e insertar datos:', error);
    }
  }
}

export { getCourseData };
