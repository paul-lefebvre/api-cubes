import ConversationController from '../controllers/conversation/index.js';
import express from 'express';
var router = express.Router();

/**
* @swagger
* tags:
*  name: Conversations
*  description: Model
*/
export default (app) => {

    
    /** 
     * @swagger
     *  /api/conversations/:
     *      get:
     *          tags: [Conversations]
     *          summary: Returns all Conversations
     *          description: Returns all Conversations
     *      responses:
     *          '200':
     *              description: Successfully returned all conversation
     *          '500':
     *              description: Failed to query for Conversations
     * 
    */ 
    router.get("/", ConversationController.findAll);

    /**
     * @swagger
     *  /api/conversations/{id}:
     *      get:
     *          tags: [Conversations]
     *          summary: Use to retrieve a conversation
     *          description: Use to retrieve a conversation
     *      parameters:
     *          - name: ID
     *            in: params
     *            description: ID of the conversation
     *            required: true
     *            schema:
     *              type: integer
     *              format: integer
     *      responses:
     *          '200':
     *              description: Successfully retrieve the conversation
     *          '500':
     *              description: Bad request
     */
    router.get("/:id", ConversationController.findOne);

    /**
     * @swagger
     *  /api/conversations/:
     *      post:
     *          tags: [Conversations]
     *          summary: Use to create a new conversation
     *          description: Use to create a new conversation
     *      parameters:
     *          - name: ID
     *            in: body
     *            description: ID of the conversation
     *            required: true
     *            schema:
     *              type: integer
     *              format: integer
     *      responses:
     *          '200':
     *              description: Successfully retrieve the conversation
     *          '500':
     *              description: Bad request
     */
    router.post("/", ConversationController.create);

    /**
     * @swagger
     *  /api/conversations/{id}:
     *      put:
     *          tags: [Conversations]
     *          summary: Use to update an conversation
     *          description: Use to update an conversation
     *      parameters:
     *          - name: ID
     *            in: params
     *            description: ID of the conversation
     *            required: true
     *            schema:
     *              type: integer
     *              format: integer
     *      responses:
     *          '200':
     *              description: Successfully updated the conversation
     *          '500':
     *              description: Bad request
     */
    router.put("/:id", ConversationController.update);

    /**
     * @swagger
     *  /api/conversations/{id}:
     *      delete:
     *          tags: [Conversations]
     *          summary: Use to delete an conversation
     *          description: Use to delete an conversation
     *      parameters:
     *          - name: ID
     *            in: params
     *            description: ID of the conversation
     *            required: true
     *            schema:
     *              type: integer
     *              format: integer
     *      responses:
     *          '200':
     *              description: Successfully removed the conversation
     *          '500':
     *              description: Bad request
     */
    router.delete("/:id", ConversationController.deleteOne);

    app.use('/api/conversations', router);
}

/**   
 * @swagger
 *   components:
 *       schemas:
 *           Conversations:
 *               type: object
 *               required:
 *                 - pseudo
 *                 - mail
 *                 - createdAt
 *               properties:
 *                   id:
 *                       type: integer
 *                       description: The auto-generated id of the conversation.
 *                   pseudo:
 *                       type: string
 *                       description: The pseudo of the conversation.
 *                   mail:
 *                       type: string
 *                       description: The mail of the conversation.
 *                   createdAt:
 *                       type: string
 *                       format: date
 *                       description: The date of the conversation creation.
 *                   example:
 *                       pseudo: test76
 *                       mail: test@test.com
 *                       createdAt: 2022-01-24
 * 
 */