import UserController from '../controllers/UserController.js';

export default (app) => {
  app.post('/api/users/', UserController.signUp);

    // Create a catch-all route for testing the installation.
    app.all('/api', (req, res) => res.status(200).send({
    message: 'Hello World!',
    }));
};