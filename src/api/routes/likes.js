import LikeController from '../controllers/like/index.js';
import express from 'express';
var router = express.Router();

/**
* @swagger
* tags:
*  name: Likes
*  description: Model
*/
export default (app) => {

    
    /** 
     * @swagger
     *  /api/likes/:
     *      get:
     *          tags: [Likes]
     *          summary: Returns all Likes
     *          description: Returns all Likes
     *      responses:
     *          '200':
     *              description: Successfully returned all like
     *          '500':
     *              description: Failed to query for Likes
     * 
    */ 
    router.get("/", LikeController.findAll);

    /**
     * @swagger
     *  /api/likes/{id}:
     *      get:
     *          tags: [Likes]
     *          summary: Use to retrieve a like
     *          description: Use to retrieve a like
     *      parameters:
     *          - name: ID
     *            in: params
     *            description: ID of the like
     *            required: true
     *            schema:
     *              type: integer
     *              format: integer
     *      responses:
     *          '200':
     *              description: Successfully retrieve the like
     *          '500':
     *              description: Bad request
     */
    router.get("/:id", LikeController.findOne);

    /**
     * @swagger
     *  /api/likes/:
     *      post:
     *          tags: [Likes]
     *          summary: Use to create a new like
     *          description: Use to create a new like
     *      parameters:
     *          - name: ID
     *            in: body
     *            description: ID of the like
     *            required: true
     *            schema:
     *              type: integer
     *              format: integer
     *      responses:
     *          '200':
     *              description: Successfully retrieve the like
     *          '500':
     *              description: Bad request
     */
    router.post("/", LikeController.create);

    /**
     * @swagger
     *  /api/likes/{id}:
     *      put:
     *          tags: [Likes]
     *          summary: Use to update an like
     *          description: Use to update an like
     *      parameters:
     *          - name: ID
     *            in: params
     *            description: ID of the like
     *            required: true
     *            schema:
     *              type: integer
     *              format: integer
     *      responses:
     *          '200':
     *              description: Successfully updated the like
     *          '500':
     *              description: Bad request
     */
    router.put("/:id", LikeController.update);

    /**
     * @swagger
     *  /api/likes/{id}:
     *      delete:
     *          tags: [Likes]
     *          summary: Use to delete an like
     *          description: Use to delete an like
     *      parameters:
     *          - name: ID
     *            in: params
     *            description: ID of the like
     *            required: true
     *            schema:
     *              type: integer
     *              format: integer
     *      responses:
     *          '200':
     *              description: Successfully removed the like
     *          '500':
     *              description: Bad request
     */
    router.delete("/:id", LikeController.deleteOne);

    app.use('/api/likes', router);
}

/**   
 * @swagger
 *   components:
 *       schemas:
 *           Likes:
 *               type: object
 *               required:
 *                 - pseudo
 *                 - mail
 *                 - createdAt
 *               properties:
 *                   id:
 *                       type: integer
 *                       description: The auto-generated id of the like.
 *                   pseudo:
 *                       type: string
 *                       description: The pseudo of the like.
 *                   mail:
 *                       type: string
 *                       description: The mail of the like.
 *                   createdAt:
 *                       type: string
 *                       format: date
 *                       description: The date of the like creation.
 *                   example:
 *                       pseudo: test76
 *                       mail: test@test.com
 *                       createdAt: 2022-01-24
 * 
 */