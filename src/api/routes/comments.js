import CommentController from '../controllers/comment/index.js';
import express from 'express';
var router = express.Router();

/**
* @swagger
* tags:
*  name: Comments
*  description: Model
*/
export default (app) => {

    
    /** 
     * @swagger
     *  /api/comments/:
     *      get:
     *          tags: [Comments]
     *          summary: Returns all Comments
     *          description: Returns all Comments
     *      responses:
     *          '200':
     *              description: Successfully returned all comment
     *          '500':
     *              description: Failed to query for Comments
     * 
    */ 
    router.get("/", CommentController.findAll);

    /**
     * @swagger
     *  /api/comments/{id}:
     *      get:
     *          tags: [Comments]
     *          summary: Use to retrieve a comment
     *          description: Use to retrieve a comment
     *      parameters:
     *          - name: ID
     *            in: params
     *            description: ID of the comment
     *            required: true
     *            schema:
     *              type: integer
     *              format: integer
     *      responses:
     *          '200':
     *              description: Successfully retrieve the comment
     *          '500':
     *              description: Bad request
     */
    router.get("/:id", CommentController.findOne);

    /**
     * @swagger
     *  /api/comments/:
     *      post:
     *          tags: [Comments]
     *          summary: Use to create a new comment
     *          description: Use to create a new comment
     *      parameters:
     *          - name: ID
     *            in: body
     *            description: ID of the comment
     *            required: true
     *            schema:
     *              type: integer
     *              format: integer
     *      responses:
     *          '200':
     *              description: Successfully retrieve the comment
     *          '500':
     *              description: Bad request
     */
    router.post("/", CommentController.create);

    /**
     * @swagger
     *  /api/comments/{id}:
     *      put:
     *          tags: [Comments]
     *          summary: Use to update an comment
     *          description: Use to update an comment
     *      parameters:
     *          - name: ID
     *            in: params
     *            description: ID of the comment
     *            required: true
     *            schema:
     *              type: integer
     *              format: integer
     *      responses:
     *          '200':
     *              description: Successfully updated the comment
     *          '500':
     *              description: Bad request
     */
    router.put("/:id", CommentController.update);

    /**
     * @swagger
     *  /api/comments/{id}:
     *      delete:
     *          tags: [Comments]
     *          summary: Use to delete an comment
     *          description: Use to delete an comment
     *      parameters:
     *          - name: ID
     *            in: params
     *            description: ID of the comment
     *            required: true
     *            schema:
     *              type: integer
     *              format: integer
     *      responses:
     *          '200':
     *              description: Successfully removed the comment
     *          '500':
     *              description: Bad request
     */
    router.delete("/:id", CommentController.deleteOne);

    app.use('/api/comments', router);
}

/**   
 * @swagger
 *   components:
 *       schemas:
 *           Comments:
 *               type: object
 *               required:
 *                 - pseudo
 *                 - mail
 *                 - createdAt
 *               properties:
 *                   id:
 *                       type: integer
 *                       description: The auto-generated id of the comment.
 *                   pseudo:
 *                       type: string
 *                       description: The pseudo of the comment.
 *                   mail:
 *                       type: string
 *                       description: The mail of the comment.
 *                   createdAt:
 *                       type: string
 *                       format: date
 *                       description: The date of the comment creation.
 *                   example:
 *                       pseudo: test76
 *                       mail: test@test.com
 *                       createdAt: 2022-01-24
 * 
 */