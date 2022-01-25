import RelationController from '../controllers/relation/index.js';
import express from 'express';
var router = express.Router();

/**
* @swagger
* tags:
*  name: Relations
*  description: Model
*/
export default (app) => {

    
    /** 
     * @swagger
     *  /api/relations/:
     *      get:
     *          tags: [Relations]
     *          summary: Returns all Relations
     *          description: Returns all Relations
     *      responses:
     *          '200':
     *              description: Successfully returned all relation
     *          '500':
     *              description: Failed to query for Relations
     * 
    */ 
    router.get("/", RelationController.findAll);

    /**
     * @swagger
     *  /api/relations/{id}:
     *      get:
     *          tags: [Relations]
     *          summary: Use to retrieve a relation
     *          description: Use to retrieve a relation
     *      parameters:
     *          - name: ID
     *            in: params
     *            description: ID of the relation
     *            required: true
     *            schema:
     *              type: integer
     *              format: integer
     *      responses:
     *          '200':
     *              description: Successfully retrieve the relation
     *          '500':
     *              description: Bad request
     */
    router.get("/:id", RelationController.findOne);

    /**
     * @swagger
     *  /api/relations/:
     *      post:
     *          tags: [Relations]
     *          summary: Use to create a new relation
     *          description: Use to create a new relation
     *      parameters:
     *          - name: ID
     *            in: body
     *            description: ID of the relation
     *            required: true
     *            schema:
     *              type: integer
     *              format: integer
     *      responses:
     *          '200':
     *              description: Successfully retrieve the relation
     *          '500':
     *              description: Bad request
     */
    router.post("/", RelationController.create);

    /**
     * @swagger
     *  /api/relations/{id}:
     *      put:
     *          tags: [Relations]
     *          summary: Use to update an relation
     *          description: Use to update an relation
     *      parameters:
     *          - name: ID
     *            in: params
     *            description: ID of the relation
     *            required: true
     *            schema:
     *              type: integer
     *              format: integer
     *      responses:
     *          '200':
     *              description: Successfully updated the relation
     *          '500':
     *              description: Bad request
     */
    router.put("/:id", RelationController.update);

    /**
     * @swagger
     *  /api/relations/{id}:
     *      delete:
     *          tags: [Relations]
     *          summary: Use to delete an relation
     *          description: Use to delete an relation
     *      parameters:
     *          - name: ID
     *            in: params
     *            description: ID of the relation
     *            required: true
     *            schema:
     *              type: integer
     *              format: integer
     *      responses:
     *          '200':
     *              description: Successfully removed the relation
     *          '500':
     *              description: Bad request
     */
    router.delete("/:id", RelationController.deleteOne);

    app.use('/api/relations', router);
}

/**   
 * @swagger
 *   components:
 *       schemas:
 *           Relations:
 *               type: object
 *               required:
 *                 - pseudo
 *                 - mail
 *                 - createdAt
 *               properties:
 *                   id:
 *                       type: integer
 *                       description: The auto-generated id of the relation.
 *                   pseudo:
 *                       type: string
 *                       description: The pseudo of the relation.
 *                   mail:
 *                       type: string
 *                       description: The mail of the relation.
 *                   createdAt:
 *                       type: string
 *                       format: date
 *                       description: The date of the relation creation.
 *                   example:
 *                       pseudo: test76
 *                       mail: test@test.com
 *                       createdAt: 2022-01-24
 * 
 */