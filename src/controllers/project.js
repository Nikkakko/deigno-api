import Project from '../models/Project.js';

export const getAllProject = async (req, res) => {
  try {
    const data = await Project.find();
    res.status(200).json(data);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getWebProject = async (req, res) => {
  try {
    const data = await Project.find({ category: 'web' });
    res.status(200).json(data);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getAppProject = async (req, res) => {
  try {
    const data = await Project.find({ category: 'app' });
    res.status(200).json(data);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getGraphicProject = async (req, res) => {
  try {
    const data = await Project.find({ category: 'graphic' });
    res.status(200).json(data);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
