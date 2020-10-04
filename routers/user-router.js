import express from 'express';

import User from '../models/user-model.js';

const router = express.Router();

router.get('/', (req, res, next) => {
  User.find({}).then((users) => {
      res.json(users);
  });
});

export default router;