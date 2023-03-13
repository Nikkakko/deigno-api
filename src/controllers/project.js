import Project from '../models/Project.js';
import joi from 'joi';

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

const Joi = joi;
const schema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  phone: Joi.string().required(),
  message: Joi.string().required(),
});

export const validateForm = async (req, res) => {
  const { name, email, phone, message } = req.body;
  try {
    const value = await schema.validateAsync({ name, email, phone, message });

    if (!value) {
      res.status(400).json({ message: 'Please fill in all fields' });
    } else {
      res.status(200).json({ message: 'Form submitted successfully' });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
