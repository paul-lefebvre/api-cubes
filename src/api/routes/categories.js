import CategoryController from '../controllers/category/index.js';
import express from 'express';
var router = express.Router();

/**
* @swagger
* tags:
*  name: Categories
*  description: Model
*/
export default (app) => {

    
    /** 
     * @swagger
     *  /api/categories/:
     *      get:
     *          tags: [Categories]
     *          summary: Returns all Categories
     *          description: Returns all Categories
     *          security:
     *              - bearerAuth: [ ]
     *          responses:
     *              '200':
     *                  description: Successfully returned all category
     *              '500':
     *                  description: Failed to query for Categories
    */ 
    router.get("/", CategoryController.findAll);

    /**
     * @swagger
     *  /api/categories/{id}:
     *      get:
     *          tags: [Categories]
     *          summary: Use to retrieve a category
     *          description: Use to retrieve a category
     *      parameters:
     *          - name: ID
     *            in: params
     *            description: ID of the category
     *            required: true
     *            schema:
     *              type: integer
     *              format: integer
     *      responses:
     *          '200':
     *              description: Successfully retrieve the category
     *          '500':
     *              description: Bad request
     */
    router.get("/:id", CategoryController.findOne);

    /**
     * @swagger
     *  /api/categories/:
     *      post:
     *          tags: [Categories]
     *          summary: Use to create a new category
     *          description: Use to create a new category
     *      parameters:
     *          - name: ID
     *            in: body
     *            description: ID of the category
     *            required: true
     *            schema:
     *              type: integer
     *              format: integer
     *      responses:
     *          '200':
     *              description: Successfully retrieve the category
     *          '500':
     *              description: Bad request
     */
    router.post("/", CategoryController.create);

    /**
     * @swagger
     *  /api/categories/{id}:
     *      put:
     *          tags: [Categories]
     *          summary: Use to update an category
     *          description: Use to update an category
     *      parameters:
     *          - name: ID
     *            in: params
     *            description: ID of the category
     *            required: true
     *            schema:
     *              type: integer
     *              format: integer
     *      responses:
     *          '200':
     *              description: Successfully updated the category
     *          '500':
     *              description: Bad request
     */
    router.put("/:id", CategoryController.update);

    /**
     * @swagger
     *  /api/categories/{id}:
     *      delete:
     *          tags: [Categories]
     *          summary: Use to delete an category
     *          description: Use to delete an category
     *      parameters:
     *          - name: ID
     *            in: params
     *            description: ID of the category
     *            required: true
     *            schema:
     *              type: integer
     *              format: integer
     *      responses:
     *          '200':
     *              description: Successfully removed the category
     *          '500':
     *              description: Bad request
     */
    router.delete("/:id", CategoryController.deleteOne);

    app.use('/api/categories', router);
}

/**   
 * @swagger
 *   components:
 *       schemas:
 *           Categories:
 *               type: object
 *               required:
 *                 - pseudo
 *                 - mail
 *                 - createdAt
 *               properties:
 *                   id:
 *                       type: integer
 *                       description: The auto-generated id of the category.
 *                   pseudo:
 *                       type: string
 *                       description: The pseudo of the category.
 *                   mail:
 *                       type: string
 *                       description: The mail of the category.
 *                   createdAt:
 *                       type: string
 *                       format: date
 *                       description: The date of the category creation.
 *                   example:
 *                       pseudo: test76
 *                       mail: test@test.com
 *                       createdAt: 2022-01-24
 * 
 */