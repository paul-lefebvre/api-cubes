import MediaController from '../controllers/media/index.js';
import express from 'express';
var router = express.Router();

/**
* @swagger
* tags:
*  name: Medias
*  description: Model
*/
export default (app) => {

    
    /** 
     * @swagger
     *  /api/medias/:
     *      get:
     *          tags: [Medias]
     *          summary: Returns all Medias
     *          description: Returns all Medias
     *      responses:
     *          '200':
     *              description: Successfully returned all Media
     *          '500':
     *              description: Failed to query for Medias
     * 
    */ 
    router.get("/", MediaController.findAll);

    /**
     * @swagger
     *  /api/medias/{id}:
     *      get:
     *          tags: [Medias]
     *          summary: Use to retrieve a Media
     *          description: Use to retrieve a Media
     *      parameters:
     *          - name: ID
     *            in: params
     *            description: ID of the Media
     *            required: true
     *            schema:
     *              type: integer
     *              format: integer
     *      responses:
     *          '200':
     *              description: Successfully retrieve the Media
     *          '500':
     *              description: Bad request
     */
    router.get("/:id", MediaController.findOne);

    /**
     * @swagger
     *  /api/medias/:
     *      post:
     *          tags: [Medias]
     *          summary: Use to create a new Media
     *          description: Use to create a new Media
     *      parameters:
     *          - name: ID
     *            in: body
     *            description: ID of the Media
     *            required: true
     *            schema:
     *              type: integer
     *              format: integer
     *      responses:
     *          '200':
     *              description: Successfully retrieve the Media
     *          '500':
     *              description: Bad request
     */
    router.post("/", MediaController.create);

    /**
     * @swagger
     *  /api/medias/{id}:
     *      put:
     *          tags: [Medias]
     *          summary: Use to update an Media
     *          description: Use to update an Media
     *      parameters:
     *          - name: ID
     *            in: params
     *            description: ID of the Media
     *            required: true
     *            schema:
     *              type: integer
     *              format: integer
     *      responses:
     *          '200':
     *              description: Successfully updated the Media
     *          '500':
     *              description: Bad request
     */
    router.put("/:id", MediaController.update);

    /**
     * @swagger
     *  /api/medias/{id}:
     *      delete:
     *          tags: [Medias]
     *          summary: Use to delete an Media
     *          description: Use to delete an Media
     *      parameters:
     *          - name: ID
     *            in: params
     *            description: ID of the Media
     *            required: true
     *            schema:
     *              type: integer
     *              format: integer
     *      responses:
     *          '200':
     *              description: Successfully removed the Media
     *          '500':
     *              description: Bad request
     */
    router.delete("/:id", MediaController.deleteOne);

    app.use('/api/medias', router);
}

/**   
 * @swagger
 *   components:
 *       schemas:
 *           Medias:
 *               type: object
 *               required:
 *                 - pseudo
 *                 - mail
 *                 - createdAt
 *               properties:
 *                   id:
 *                       type: integer
 *                       description: The auto-generated id of the Media.
 *                   pseudo:
 *                       type: string
 *                       description: The pseudo of the Media.
 *                   mail:
 *                       type: string
 *                       description: The mail of the Media.
 *                   createdAt:
 *                       type: string
 *                       format: date
 *                       description: The date of the Media creation.
 *                   example:
 *                       pseudo: test76
 *                       mail: test@test.com
 *                       createdAt: 2022-01-24
 * 
 */