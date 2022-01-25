import SignalementController from '../controllers/signalement/index.js';
import express from 'express';
var router = express.Router();

/**
* @swagger
* tags:
*  name: Signalements
*  description: Model
*/
export default (app) => {

    
    /** 
     * @swagger
     *  /api/signalements/:
     *      get:
     *          tags: [Signalements]
     *          summary: Returns all Signalements
     *          description: Returns all Signalements
     *      responses:
     *          '200':
     *              description: Successfully returned all signalement
     *          '500':
     *              description: Failed to query for Signalements
     * 
    */ 
    router.get("/", SignalementController.findAll);

    /**
     * @swagger
     *  /api/signalements/{id}:
     *      get:
     *          tags: [Signalements]
     *          summary: Use to retrieve an signalement
     *          description: Use to retrieve an signalement
     *      parameters:
     *          - name: ID
     *            in: params
     *            description: ID of the signalement
     *            required: true
     *            schema:
     *              type: integer
     *              format: integer
     *      responses:
     *          '200':
     *              description: Successfully retrieve the signalement
     *          '500':
     *              description: Bad request
     */
    router.get("/:id", SignalementController.findOne);

    /**
     * @swagger
     *  /api/signalements/:
     *      post:
     *          tags: [Signalements]
     *          summary: Use to create a new signalement
     *          description: Use to create a new signalement
     *      parameters:
     *          - name: ID
     *            in: body
     *            description: ID of the signalement
     *            required: true
     *            schema:
     *              type: integer
     *              format: integer
     *      responses:
     *          '200':
     *              description: Successfully retrieve the signalement
     *          '500':
     *              description: Bad request
     */
    router.post("/", SignalementController.create);

    /**
     * @swagger
     *  /api/signalements/{id}:
     *      put:
     *          tags: [Signalements]
     *          summary: Use to update an signalement
     *          description: Use to update an signalement
     *      parameters:
     *          - name: ID
     *            in: params
     *            description: ID of the signalement
     *            required: true
     *            schema:
     *              type: integer
     *              format: integer
     *      responses:
     *          '200':
     *              description: Successfully updated the signalement
     *          '500':
     *              description: Bad request
     */
    router.put("/:id", SignalementController.update);

    /**
     * @swagger
     *  /api/signalements/{id}:
     *      delete:
     *          tags: [Signalements]
     *          summary: Use to delete an signalement
     *          description: Use to delete an signalement
     *      parameters:
     *          - name: ID
     *            in: params
     *            description: ID of the signalement
     *            required: true
     *            schema:
     *              type: integer
     *              format: integer
     *      responses:
     *          '200':
     *              description: Successfully removed the signalement
     *          '500':
     *              description: Bad request
     */
    router.delete("/:id", SignalementController.deleteOne);

    app.use('/api/signalements', router);
}

/**   
 * @swagger
 *   components:
 *       schemas:
 *           Signalements:
 *               type: object
 *               required:
 *                 - pseudo
 *                 - mail
 *                 - createdAt
 *               properties:
 *                   id:
 *                       type: integer
 *                       description: The auto-generated id of the signalement.
 *                   pseudo:
 *                       type: string
 *                       description: The pseudo of the signalement.
 *                   mail:
 *                       type: string
 *                       description: The mail of the signalement.
 *                   createdAt:
 *                       type: string
 *                       format: date
 *                       description: The date of the signalement creation.
 *                   example:
 *                       pseudo: test76
 *                       mail: test@test.com
 *                       createdAt: 2022-01-24
 * 
 */