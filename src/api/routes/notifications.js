import NotificationController from '../controllers/notification/index.js';
import express from 'express';
var router = express.Router();

/**
* @swagger
* tags:
*  name: Notifications
*  description: Model
*/
export default (app) => {

    
    /** 
     * @swagger
     *  /api/notifications/:
     *      get:
     *          tags: [Notifications]
     *          summary: Returns all Notifications
     *          description: Returns all Notifications
     *      responses:
     *          '200':
     *              description: Successfully returned all Notification
     *          '500':
     *              description: Failed to query for Notifications
     * 
    */ 
    router.get("/", NotificationController.findAll);

    /**
     * @swagger
     *  /api/notifications/{id}:
     *      get:
     *          tags: [Notifications]
     *          summary: Use to retrieve a Notification
     *          description: Use to retrieve a Notification
     *      parameters:
     *          - name: ID
     *            in: params
     *            description: ID of the Notification
     *            required: true
     *            schema:
     *              type: integer
     *              format: integer
     *      responses:
     *          '200':
     *              description: Successfully retrieve the Notification
     *          '500':
     *              description: Bad request
     */
    router.get("/:id", NotificationController.findOne);

    /**
     * @swagger
     *  /api/notifications/:
     *      post:
     *          tags: [Notifications]
     *          summary: Use to create a new Notification
     *          description: Use to create a new Notification
     *      parameters:
     *          - name: ID
     *            in: body
     *            description: ID of the Notification
     *            required: true
     *            schema:
     *              type: integer
     *              format: integer
     *      responses:
     *          '200':
     *              description: Successfully retrieve the Notification
     *          '500':
     *              description: Bad request
     */
    router.post("/", NotificationController.create);

    /**
     * @swagger
     *  /api/notifications/{id}:
     *      put:
     *          tags: [Notifications]
     *          summary: Use to update an Notification
     *          description: Use to update an Notification
     *      parameters:
     *          - name: ID
     *            in: params
     *            description: ID of the Notification
     *            required: true
     *            schema:
     *              type: integer
     *              format: integer
     *      responses:
     *          '200':
     *              description: Successfully updated the Notification
     *          '500':
     *              description: Bad request
     */
    router.put("/:id", NotificationController.update);

    /**
     * @swagger
     *  /api/notifications/{id}:
     *      delete:
     *          tags: [Notifications]
     *          summary: Use to delete an Notification
     *          description: Use to delete an Notification
     *      parameters:
     *          - name: ID
     *            in: params
     *            description: ID of the Notification
     *            required: true
     *            schema:
     *              type: integer
     *              format: integer
     *      responses:
     *          '200':
     *              description: Successfully removed the Notification
     *          '500':
     *              description: Bad request
     */
    router.delete("/:id", NotificationController.deleteOne);

    app.use('/api/notifications', router);
}

/**   
 * @swagger
 *   components:
 *       schemas:
 *           Notifications:
 *               type: object
 *               required:
 *                 - pseudo
 *                 - mail
 *                 - createdAt
 *               properties:
 *                   id:
 *                       type: integer
 *                       description: The auto-generated id of the Notification.
 *                   pseudo:
 *                       type: string
 *                       description: The pseudo of the Notification.
 *                   mail:
 *                       type: string
 *                       description: The mail of the Notification.
 *                   createdAt:
 *                       type: string
 *                       format: date
 *                       description: The date of the Notification creation.
 *                   example:
 *                       pseudo: test76
 *                       mail: test@test.com
 *                       createdAt: 2022-01-24
 * 
 */