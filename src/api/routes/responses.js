import ResponseController from '../controllers/response/index.js';
import express from 'express';
var router = express.Router();

/**
* @swagger
* tags:
*  name: Responses
*  description: Model
*/
export default (app) => {

    
    /** 
     * @swagger
     *  /api/responses/:
     *      get:
     *          tags: [Responses]
     *          summary: Returns all Responses
     *          description: Returns all Responses
     *      responses:
     *          '200':
     *              description: Successfully returned all response
     *          '500':
     *              description: Failed to query for Responses
     * 
    */ 
    router.get("/", ResponseController.findAll);

    /**
     * @swagger
     *  /api/responses/{id}:
     *      get:
     *          tags: [Responses]
     *          summary: Use to retrieve a response
     *          description: Use to retrieve a response
     *      parameters:
     *          - name: ID
     *            in: params
     *            description: ID of the response
     *            required: true
     *            schema:
     *              type: integer
     *              format: integer
     *      responses:
     *          '200':
     *              description: Successfully retrieve the response
     *          '500':
     *              description: Bad request
     */
    router.get("/:id", ResponseController.findOne);

    /**
     * @swagger
     *  /api/responses/:
     *      post:
     *          tags: [Responses]
     *          summary: Use to create a new response
     *          description: Use to create a new response
     *      parameters:
     *          - name: ID
     *            in: body
     *            description: ID of the response
     *            required: true
     *            schema:
     *              type: integer
     *              format: integer
     *      responses:
     *          '200':
     *              description: Successfully retrieve the response
     *          '500':
     *              description: Bad request
     */
    router.post("/", ResponseController.create);

    /**
     * @swagger
     *  /api/responses/{id}:
     *      put:
     *          tags: [Responses]
     *          summary: Use to update an response
     *          description: Use to update an response
     *      parameters:
     *          - name: ID
     *            in: params
     *            description: ID of the response
     *            required: true
     *            schema:
     *              type: integer
     *              format: integer
     *      responses:
     *          '200':
     *              description: Successfully updated the response
     *          '500':
     *              description: Bad request
     */
    router.put("/:id", ResponseController.update);

    /**
     * @swagger
     *  /api/responses/{id}:
     *      delete:
     *          tags: [Responses]
     *          summary: Use to delete an response
     *          description: Use to delete an response
     *      parameters:
     *          - name: ID
     *            in: params
     *            description: ID of the response
     *            required: true
     *            schema:
     *              type: integer
     *              format: integer
     *      responses:
     *          '200':
     *              description: Successfully removed the response
     *          '500':
     *              description: Bad request
     */
    router.delete("/:id", ResponseController.deleteOne);

    app.use('/api/responses', router);
}

/**   
 * @swagger
 *   components:
 *       schemas:
 *           Responses:
 *               type: object
 *               required:
 *                 - pseudo
 *                 - mail
 *                 - createdAt
 *               properties:
 *                   id:
 *                       type: integer
 *                       description: The auto-generated id of the response.
 *                   pseudo:
 *                       type: string
 *                       description: The pseudo of the response.
 *                   mail:
 *                       type: string
 *                       description: The mail of the response.
 *                   createdAt:
 *                       type: string
 *                       format: date
 *                       description: The date of the response creation.
 *                   example:
 *                       pseudo: test76
 *                       mail: test@test.com
 *                       createdAt: 2022-01-24
 * 
 */