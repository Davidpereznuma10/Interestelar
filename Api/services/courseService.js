import  Boom  from '@hapi/boom';
import { MongoLib } from '../libs/mongoDB/data/conexion.js';

class CoursesService {
  constructor() {
    this.collection = 'cursos';
    this.mongoDB = new MongoLib();
  }

  async find() {
    try {
      const courses = await this.mongoDB.find(this.collection, {});
      if (courses.length === 0) {
        throw Boom.notFound('No se encontraron cursos');
      }
      return courses;
    } catch (error) {
      console.error('Error al obtener cursos:', error);
      throw Boom.serverUnavailable('Error interno del servidor');
    }
  }

  async findOne(courseName) {
    try {
      const course = await this.mongoDB.findOne(this.collection, { courseName });
      if (!course) {
        throw Boom.notFound(`No se encontró información para el curso "${courseName}"`);
      }
      return course;
    } catch (error) {
      console.error(`Error al obtener información del curso "${courseName}":`, error);
      throw Boom.serverUnavailable('Error interno del servidor');
    }
  }

  async findSections(courseName) {
    try {
      const course = await this.mongoDB.findOne(this.collection, { courseName });
      if (!course) {
        throw Boom.notFound(`No se encontró información para el curso "${courseName}"`);
      }
      return course.sections;
    } catch (error) {
      console.error(`Error al obtener secciones del curso "${courseName}":`, error);
      throw Boom.serverUnavailable('Error interno del servidor');
    }
  }

  async findOneSection(sectionName, courseName) {
    try {
      const course = await this.findOne(courseName);
      const section = course.sections.find((sec) => sec.sectionName === sectionName);
      if (!section) {
        throw Boom.notFound(`No se encontró la sección "${sectionName}" en el curso "${courseName}"`);
      }
      return section;
    } catch (error) {
      console.error(`Error al obtener la sección "${sectionName}" del curso "${courseName}":`, error);
      throw Boom.serverUnavailable('Error interno del servidor');
    }
  }

  async findVideos(courseName, sectionName) {
    try {
      const section = await this.findOneSection(sectionName, courseName);
      return section.videos;
    } catch (error) {
      console.error(`Error al obtener los videos de la sección "${sectionName}" del curso "${courseName}":`, error);
      throw Boom.serverUnavailable('Error interno del servidor');
    }
  }

  async findOneVideo(courseName, sectionName, videoTitle) {
    try {
      const section = await this.findOneSection(sectionName, courseName);
      const video = section.videos.find((vid) => vid.title === videoTitle);
  
      if (!video) {
        throw Boom.notFound(`No se encontró el video "${videoTitle}" en la sección "${sectionName}" del curso "${courseName}"`);
      }
      return video;
    } catch (error) {
      console.error(`Error al obtener el video "${videoTitle}" de la sección "${sectionName}" del curso "${courseName}":`, error);
      throw Boom.serverUnavailable('Error interno del servidor');
    }
  }

  async addComment(courseName, sectionName, videoTitle, comment) {
    try {
      const course = await this.findOne(courseName);
      const section = course.sections.find((sec) => sec.sectionName === sectionName);
      if (!section) {
        throw Boom.notFound(`No se encontró la sección "${sectionName}" en el curso "${courseName}"`);
      }
      
      const video = section.videos.find((vid) => vid.title === videoTitle);
      if (!video) {
        throw Boom.notFound(`No se encontró el video "${videoTitle}" en la sección "${sectionName}" del curso "${courseName}"`);
      }
      video.comments.push(comment);
      await this.mongoDB.updateOne(this.collection, { courseName }, course);
      return { message: 'Comentario agregado correctamente' };
    } catch (error) {
      console.error(`Error al agregar comentario al video "${videoTitle}" de la sección "${sectionName}" del curso "${courseName}":`, error);
      throw Boom.serverUnavailable('Error interno del servidor');
    }
  }
}

export { CoursesService };
