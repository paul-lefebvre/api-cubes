import UserController from "../controllers/user/index.js";
import express from "express";
import { authenticateToken, checkUser } from "../modules/MiddleWare.js";
var router = express.Router();

/**
 * @swagger
 * tags:
 *  name: Users
 *  description: Model
 */
export default (app) => {
  /**
   * @swagger
   *  /api/users/:
   *      get:
   *          tags: [Users]
   *          summary: Returns all users
   *          description: Returns all users
   *      responses:
   *          '200':
   *              description: Successfully returned all user
   *          '500':
   *              description: Failed to query for users
   *
   */
  router.get("/", UserController.findAll);

  //   router.get("/me", authenticateToken, ((req, res) => {
  //     res.send(req.user);
  //   }));

  // jwt
  router.get("*", checkUser);
  router.get("/me", authenticateToken, (req, res) => {
    res.send(req.id);
  });
router.get("/logout", UserController.logout);

  /**
   * @swagger
   *  /api/users/:
   *      get:
   *          tags: [Users]
   *          summary: Returns all users
   *          description: Returns all users
   *      responses:
   *          '200':
   *              description: Successfully returned all user
   *          '500':
   *              description: Failed to query for users
   *
   */
  router.get("/:id", UserController.findOne);

  /**
   * @swagger
   *  /api/users/{id}:
   *      get:
   *          tags: [Users]
   *          summary: Use to retrieve an user
   *          description: Use to retrieve an user
   *      parameters:
   *          - name: ID
   *            in: params
   *            description: ID of the user
   *            required: true
   *            schema:
   *              type: integer
   *              format: integer
   *      responses:
   *          '200':
   *              description: Successfully retrieve the user
   *          '500':
   *              description: Bad request
   */
  router.get("/:id", UserController.findOne);

  /**
   * @swagger
   *  /api/users/:
   *      post:
   *          tags: [Users]
   *          summary: Use to create a new user
   *          description: Use to create a new user
   *      parameters:
   *          - name: ID
   *            in: body
   *            description: ID of the user
   *            required: true
   *            schema:
   *              type: integer
   *              format: integer
   *      responses:
   *          '200':
   *              description: Successfully retrieve the user
   *          '500':
   *              description: Bad request
   */
  router.post("/", UserController.create);

  /**
   * @swagger
   * /api/users/login
   *      post
   *          tags:
   *          summary: Use to login acount
   *          descritpion : Use to login acount
   *      parametres:
   *          -name: Id
   *          in: body
   *          description: ID of the user
   *          required: true
   *          schema:
   *              type: integer
   *              format: integer
   *      responses:
   *          '200':
   *              description: Successfully login the user
   *          '500':
   *              description: Bad request
   */
  router.post("/login", UserController.logIn);

  /**
   * @swagger
   *  /api/users/{id}:
   *      put:
   *          tags: [Users]
   *          summary: Use to update an user
   *          description: Use to update an user
   *      parameters:
   *          - name: ID
   *            in: params
   *            description: ID of the user
   *            required: true
   *            schema:
   *              type: integer
   *              format: integer
   *      responses:
   *          '200':
   *              description: Successfully updated the user
   *          '500':
   *              description: Bad request
   */
  router.put("/:id", UserController.update);

  /**
   * @swagger
   *  /api/users/{id}:
   *      delete:
   *          tags: [Users]
   *          summary: Use to delete an user
   *          description: Use to delete an user
   *      parameters:
   *          - name: ID
   *            in: params
   *            description: ID of the user
   *            required: true
   *            schema:
   *              type: integer
   *              format: integer
   *      responses:
   *          '200':
   *              description: Successfully removed the user
   *          '500':
   *              description: Bad request
   */
  router.delete("/:id", UserController.deleteOne);

  app.use("/api/users", router);
};

/**
 * @swagger
 *   components:
 *       schemas:
 *           Users:
 *               type: object
 *               required:
 *                 - pseudo
 *                 - mail
 *                 - createdAt
 *               properties:
 *                   id:
 *                       type: integer
 *                       description: The auto-generated id of the user.
 *                   pseudo:
 *                       type: string
 *                       description: The pseudo of the user.
 *                   mail:
 *                       type: string
 *                       description: The mail of the user.
 *                   createdAt:
 *                       type: string
 *                       format: date
 *                       description: The date of the user creation.
 *                   example:
 *                       pseudo: test76
 *                       mail: test@test.com
 *                       createdAt: 2022-01-24
 *
 */
