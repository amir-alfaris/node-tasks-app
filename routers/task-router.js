import express from 'express';

import Task from '../models/task-model.js';

const router = express.Router();

router.get('/', (req, res, next) => {
  Task.find({}).then((tasks) => {
      res.json(tasks);
  });
});

export default router;