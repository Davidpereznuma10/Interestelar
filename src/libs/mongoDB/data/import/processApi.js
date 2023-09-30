const { determineFileType } = require('./fileType');

async function getCourseData() {
  const courseNames = ["react", "docker", "git", "nodejs", "sql", "javascript"];
  const allCourses = [];

  for (const courseName of courseNames) {
    try {
      const apiUrl = `http://192.168.128.23:5010/cursos/v2?course=${courseName}`;
      const response = await fetch(apiUrl);

      if (response.ok) {
        const data = await response.json();

        const curso = {
          courseName: data.nameCourse,
          description: data.description || "",
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
              text: video.texto || '',
              links: video.links
                ? [
                    {
                      linkTitle: video.links[0]['titulo-link'] || '',
                      link: video.links[0]['link'] || '',
                    },
                  ]
                : [],
              comments: [],
            })),
          };
          curso.sections.push(sectionInfo);
        }

        allCourses.push(curso);
      } else {
        console.error(`Error al obtener datos para el curso "${courseName}": ${response.status} ${response.statusText}`);
      }
    } catch (error) {
      console.error('Error al procesar e insertar datos:', error);
    }
  }
return JSON.stringify(allCourses, null, 2);


}

module.exports = { getCourseData };
