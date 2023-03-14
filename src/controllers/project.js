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
  name: Joi.string().required().messages({
    'string.empty': '{#label} field is required',
  }),
  email: Joi.string().email().required().messages({
    'string.email': 'Please enter a valid email address for {#label}',
    'string.empty': '{#label} field is required',
  }),
  phone: Joi.string()
    .pattern(/^[0-9]{10}$/)
    .required()
    .messages({
      'string.pattern.base': '{#label} must be a 10-digit phone number',
      'string.empty': '{#label} field is required',
    }),
  message: Joi.string().required().messages({
    'string.empty': '{#label} field is required',
  }),
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
