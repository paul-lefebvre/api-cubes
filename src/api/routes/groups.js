import GroupController from '../controllers/group/index.js';
import express from 'express';
var router = express.Router();

/**
* @swagger
* tags:
*  name: Groups
*  description: Model
*/
export default (app) => {

    
    /** 
     * @swagger
     *  /api/groups/:
     *      get:
     *          tags: [Groups]
     *          summary: Returns all Groups
     *          description: Returns all Groups
     *      responses:
     *          '200':
     *              description: Successfully returned all group
     *          '500':
     *              description: Failed to query for Groups
     * 
    */ 
    router.get("/", GroupController.findAll);

    /**
     * @swagger
     *  /api/groups/{id}:
     *      get:
     *          tags: [Groups]
     *          summary: Use to retrieve a group
     *          description: Use to retrieve a group
     *      parameters:
     *          - name: ID
     *            in: params
     *            description: ID of the group
     *            required: true
     *            schema:
     *              type: integer
     *              format: integer
     *      responses:
     *          '200':
     *              description: Successfully retrieve the group
     *          '500':
     *              description: Bad request
     */
    router.get("/:id", GroupController.findOne);

    /**
     * @swagger
     *  /api/groups/:
     *      post:
     *          tags: [Groups]
     *          summary: Use to create a new group
     *          description: Use to create a new group
     *      parameters:
     *          - name: ID
     *            in: body
     *            description: ID of the group
     *            required: true
     *            schema:
     *              type: integer
     *              format: integer
     *      responses:
     *          '200':
     *              description: Successfully retrieve the group
     *          '500':
     *              description: Bad request
     */
    router.post("/", GroupController.create);

    /**
     * @swagger
     *  /api/groups/{id}:
     *      put:
     *          tags: [Groups]
     *          summary: Use to update an group
     *          description: Use to update an group
     *      parameters:
     *          - name: ID
     *            in: params
     *            description: ID of the group
     *            required: true
     *            schema:
     *              type: integer
     *              format: integer
     *      responses:
     *          '200':
     *              description: Successfully updated the group
     *          '500':
     *              description: Bad request
     */
    router.put("/:id", GroupController.update);

    /**
     * @swagger
     *  /api/groups/{id}:
     *      delete:
     *          tags: [Groups]
     *          summary: Use to delete an group
     *          description: Use to delete an group
     *      parameters:
     *          - name: ID
     *            in: params
     *            description: ID of the group
     *            required: true
     *            schema:
     *              type: integer
     *              format: integer
     *      responses:
     *          '200':
     *              description: Successfully removed the group
     *          '500':
     *              description: Bad request
     */
    router.delete("/:id", GroupController.deleteOne);

    app.use('/api/groups', router);
}

/**   
 * @swagger
 *   components:
 *       schemas:
 *           Groups:
 *               type: object
 *               required:
 *                 - pseudo
 *                 - mail
 *                 - createdAt
 *               properties:
 *                   id:
 *                       type: integer
 *                       description: The auto-generated id of the group.
 *                   pseudo:
 *                       type: string
 *                       description: The pseudo of the group.
 *                   mail:
 *                       type: string
 *                       description: The mail of the group.
 *                   createdAt:
 *                       type: string
 *                       format: date
 *                       description: The date of the group creation.
 *                   example:
 *                       pseudo: test76
 *                       mail: test@test.com
 *                       createdAt: 2022-01-24
 * 
 */