import express from 'express';
const router = express.Router();
import { CoursesService } from '../services/courseService.js';
const service = new CoursesService();

router.get('/', async (req, res, next) => {
    try {
        const courses = await service.find();
        res.status(200).json(courses);
    } catch (error) {
        next(error);
    }
});

router.get('/:courseName', async (req, res, next) => {
    const { courseName } = req.params;
    try {
        const course = await service.findOne(courseName);
        res.status(200).json(course);
    } catch (error) {
        next(error);
    }
});

router.get('/:courseName/sections', async (req, res, next) => {
    const { courseName } = req.params;
    try {
        const sections = await service.findSections(courseName);
        res.status(200).json(sections);
    } catch (error) {
        next(error);
    }
});

router.get('/:courseName/sections/:sectionName', async (req, res, next) => {
    const { courseName, sectionName } = req.params;
    try {
        const section = await service.findOneSection(sectionName, courseName);
        res.status(200).json(section);
    } catch (error) {
        next(error);
    }
});

router.get('/:courseName/sections/:sectionName/videos', async (req, res, next) => {
    const { courseName, sectionName } = req.params;
    try {
        const videos = await service.findVideos(courseName, sectionName);
        res.status(200).json(videos);
    } catch (error) {
        next(error);
    }
});

router.get('/:courseName/sections/:sectionName/videos/:videoTitle', async (req, res, next) => {
    const { courseName, sectionName, videoTitle } = req.params;
    try {
        const video = await service.findOneVideo(courseName, sectionName, videoTitle);
        res.status(200).json(video);
    } catch (error) {
        next(error);
    }
});

router.post('/:courseName/sections/:sectionName/videos/:videoTitle/comments', async (req, res, next) => {
    const { courseName, sectionName, videoTitle } = req.params;
    const { comment } = req.body; 
    try {
        const result = await service.addComment(courseName, sectionName, videoTitle, comment);
        res.status(200).json(result);
    } catch (error) {
        next(error);
    }
});

export default router;
