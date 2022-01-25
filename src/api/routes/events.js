import EventController from '../controllers/event/index.js';
import express from 'express';
var router = express.Router();

/**
* @swagger
* tags:
*  name: Events
*  description: Model
*/
export default (app) => {

    
    /** 
     * @swagger
     *  /api/events/:
     *      get:
     *          tags: [Events]
     *          summary: Returns all Events
     *          description: Returns all Events
     *      responses:
     *          '200':
     *              description: Successfully returned all event
     *          '500':
     *              description: Failed to query for Events
     * 
    */ 
    router.get("/", EventController.findAll);

    /**
     * @swagger
     *  /api/events/{id}:
     *      get:
     *          tags: [Events]
     *          summary: Use to retrieve a event
     *          description: Use to retrieve a event
     *      parameters:
     *          - name: ID
     *            in: params
     *            description: ID of the event
     *            required: true
     *            schema:
     *              type: integer
     *              format: integer
     *      responses:
     *          '200':
     *              description: Successfully retrieve the event
     *          '500':
     *              description: Bad request
     */
    router.get("/:id", EventController.findOne);

    /**
     * @swagger
     *  /api/events/:
     *      post:
     *          tags: [Events]
     *          summary: Use to create a new event
     *          description: Use to create a new event
     *      parameters:
     *          - name: ID
     *            in: body
     *            description: ID of the event
     *            required: true
     *            schema:
     *              type: integer
     *              format: integer
     *      responses:
     *          '200':
     *              description: Successfully retrieve the event
     *          '500':
     *              description: Bad request
     */
    router.post("/", EventController.create);

    /**
     * @swagger
     *  /api/events/{id}:
     *      put:
     *          tags: [Events]
     *          summary: Use to update an event
     *          description: Use to update an event
     *      parameters:
     *          - name: ID
     *            in: params
     *            description: ID of the event
     *            required: true
     *            schema:
     *              type: integer
     *              format: integer
     *      responses:
     *          '200':
     *              description: Successfully updated the event
     *          '500':
     *              description: Bad request
     */
    router.put("/:id", EventController.update);

    /**
     * @swagger
     *  /api/events/{id}:
     *      delete:
     *          tags: [Events]
     *          summary: Use to delete an event
     *          description: Use to delete an event
     *      parameters:
     *          - name: ID
     *            in: params
     *            description: ID of the event
     *            required: true
     *            schema:
     *              type: integer
     *              format: integer
     *      responses:
     *          '200':
     *              description: Successfully removed the event
     *          '500':
     *              description: Bad request
     */
    router.delete("/:id", EventController.deleteOne);

    app.use('/api/events', router);
}

/**   
 * @swagger
 *   components:
 *       schemas:
 *           Events:
 *               type: object
 *               required:
 *                 - pseudo
 *                 - mail
 *                 - createdAt
 *               properties:
 *                   id:
 *                       type: integer
 *                       description: The auto-generated id of the event.
 *                   pseudo:
 *                       type: string
 *                       description: The pseudo of the event.
 *                   mail:
 *                       type: string
 *                       description: The mail of the event.
 *                   createdAt:
 *                       type: string
 *                       format: date
 *                       description: The date of the event creation.
 *                   example:
 *                       pseudo: test76
 *                       mail: test@test.com
 *                       createdAt: 2022-01-24
 * 
 */