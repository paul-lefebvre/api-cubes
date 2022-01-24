import UserController from '../controllers/user/index.js';
import express from 'express';
var router = express.Router();

export default (app) => {

  // Create a new User
  router.post("/", UserController.create);

  // Retrieve all User
  router.get("/", UserController.findAll);

  // Retrieve a single User with id
  router.get("/:id", UserController.findOne);

  // Update a User with id
  router.put("/:id", UserController.update);

  // Delete a User with id
  router.delete("/:id", UserController.deleteOne);

  app.use('/api/users', router);
};