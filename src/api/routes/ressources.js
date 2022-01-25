import RessourceController from '../controllers/ressource/index.js';
import express from 'express';
var router = express.Router();

/**
* @swagger
* tags:
*  name: Ressources
*  description: Model
*/
export default (app) => {

    
    /** 
     * @swagger
     *  /api/ressources/:
     *      get:
     *          tags: [Ressources]
     *          summary: Returns all Ressources
     *          description: Returns all Ressources
     *      responses:
     *          '200':
     *              description: Successfully returned all ressource
     *          '500':
     *              description: Failed to query for Ressources
     * 
    */ 
    router.get("/", RessourceController.findAll);

    /**
     * @swagger
     *  /api/ressources/{id}:
     *      get:
     *          tags: [Ressources]
     *          summary: Use to retrieve an ressource
     *          description: Use to retrieve an ressource
     *      parameters:
     *          - name: ID
     *            in: params
     *            description: ID of the ressource
     *            required: true
     *            schema:
     *              type: integer
     *              format: integer
     *      responses:
     *          '200':
     *              description: Successfully retrieve the ressource
     *          '500':
     *              description: Bad request
     */
    router.get("/:id", RessourceController.findOne);

    /**
     * @swagger
     *  /api/ressources/:
     *      post:
     *          tags: [Ressources]
     *          summary: Use to create a new ressource
     *          description: Use to create a new ressource
     *      parameters:
     *          - name: ID
     *            in: body
     *            description: ID of the ressource
     *            required: true
     *            schema:
     *              type: integer
     *              format: integer
     *      responses:
     *          '200':
     *              description: Successfully retrieve the ressource
     *          '500':
     *              description: Bad request
     */
    router.post("/", RessourceController.create);

    /**
     * @swagger
     *  /api/ressources/{id}:
     *      put:
     *          tags: [Ressources]
     *          summary: Use to update an ressource
     *          description: Use to update an ressource
     *      parameters:
     *          - name: ID
     *            in: params
     *            description: ID of the ressource
     *            required: true
     *            schema:
     *              type: integer
     *              format: integer
     *      responses:
     *          '200':
     *              description: Successfully updated the ressource
     *          '500':
     *              description: Bad request
     */
    router.put("/:id", RessourceController.update);

    /**
     * @swagger
     *  /api/ressources/{id}:
     *      delete:
     *          tags: [Ressources]
     *          summary: Use to delete an ressource
     *          description: Use to delete an ressource
     *      parameters:
     *          - name: ID
     *            in: params
     *            description: ID of the ressource
     *            required: true
     *            schema:
     *              type: integer
     *              format: integer
     *      responses:
     *          '200':
     *              description: Successfully removed the ressource
     *          '500':
     *              description: Bad request
     */
    router.delete("/:id", RessourceController.deleteOne);

    app.use('/api/ressources', router);
}

/**   
 * @swagger
 *   components:
 *       schemas:
 *           Ressources:
 *               type: object
 *               required:
 *                 - pseudo
 *                 - mail
 *                 - createdAt
 *               properties:
 *                   id:
 *                       type: integer
 *                       description: The auto-generated id of the ressource.
 *                   pseudo:
 *                       type: string
 *                       description: The pseudo of the ressource.
 *                   mail:
 *                       type: string
 *                       description: The mail of the ressource.
 *                   createdAt:
 *                       type: string
 *                       format: date
 *                       description: The date of the ressource creation.
 *                   example:
 *                       pseudo: test76
 *                       mail: test@test.com
 *                       createdAt: 2022-01-24
 * 
 */