import SurveyController from '../controllers/survey/index.js';
import express from 'express';
var router = express.Router();

/**
* @swagger
* tags:
*  name: Surveys
*  description: Model
*/
export default (app) => {

    
    /** 
     * @swagger
     *  /api/surveys/:
     *      get:
     *          tags: [Surveys]
     *          summary: Returns all surveys
     *          description: Returns all surveys
     *      responses:
     *          '200':
     *              description: Successfully returned all surveys
     *          '500':
     *              description: Failed to query for surveys
     * 
    */ 
    router.get("/", SurveyController.findAll);

    /**
     * @swagger
     *  /api/surveys/{id}:
     *      get:
     *          tags: [Surveys]
     *          summary: Use to retrieve an survey
     *          description: Use to retrieve an survey
     *      parameters:
     *          - name: ID
     *            in: params
     *            description: ID of the survey
     *            required: true
     *            schema:
     *              type: integer
     *              format: integer
     *      responses:
     *          '200':
     *              description: Successfully retrieve the survey
     *          '500':
     *              description: Bad request
     */
    router.get("/:id", SurveyController.findOne);

    /**
     * @swagger
     *  /api/surveys/:
     *      post:
     *          tags: [Surveys]
     *          summary: Use to create a new survey
     *          description: Use to create a new survey
     *      parameters:
     *          - name: ID
     *            in: body
     *            description: ID of the survey
     *            required: true
     *            schema:
     *              type: integer
     *              format: integer
     *      responses:
     *          '200':
     *              description: Successfully retrieve the survey
     *          '500':
     *              description: Bad request
     */
    router.post("/", SurveyController.create);

    /**
     * @swagger
     *  /api/surveys/{id}:
     *      put:
     *          tags: [Surveys]
     *          summary: Use to update a survey
     *          description: Use to update a survey
     *      parameters:
     *          - name: ID
     *            in: params
     *            description: ID of the survey
     *            required: true
     *            schema:
     *              type: integer
     *              format: integer
     *      responses:
     *          '200':
     *              description: Successfully updated the survey
     *          '500':
     *              description: Bad request
     */
    router.put("/:id", SurveyController.update);

    /**
     * @swagger
     *  /api/surveys/{id}:
     *      delete:
     *          tags: [Surveys]
     *          summary: Use to delete a survey
     *          description: Use to delete a survey
     *      parameters:
     *          - name: ID
     *            in: params
     *            description: ID of the survey
     *            required: true
     *            schema:
     *              type: integer
     *              format: integer
     *      responses:
     *          '200':
     *              description: Successfully removed the survey
     *          '500':
     *              description: Bad request
     */
    router.delete("/:id", SurveyController.deleteOne);

    app.use('/api/surveys', router);
}

/**   
 * @swagger
 *   components:
 *       schemas:
 *           Surveys:
 *               type: object
 *               required:
 *                 - pseudo
 *                 - mail
 *                 - createdAt
 *               properties:
 *                   id:
 *                       type: integer
 *                       description: The auto-generated id of the survey.
 *                   pseudo:
 *                       type: string
 *                       description: The pseudo of the survey.
 *                   mail:
 *                       type: string
 *                       description: The mail of the survey.
 *                   createdAt:
 *                       type: string
 *                       format: date
 *                       description: The date of the survey creation.
 *                   example:
 *                       pseudo: test76
 *                       mail: test@test.com
 *                       createdAt: 2022-01-24
 * 
 */