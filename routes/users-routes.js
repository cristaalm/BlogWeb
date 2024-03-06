const Express = require("express");

const routes = Express.Router();
const {
  createUsers,
  findAllUsers,
  findtUsersById,
  updateUsers,
  removeUsers,
  findUsersByName,
} = require("../controllers/users-controller");

/**
 *  @swagger
 *  components:
 *    schemas:
 *      Users:
 *        type: object
 *        properties:
 *          username:
 *            type: string
 *            description: enter your username
 *            example: andi17x
 *          password:
 *            type: string
 *            description: enter your password
 *            example: adminpassword12
 *          email:
 *            type: string
 *            description: enter your email
 *            example: andi@gmail.com
 */

/**
 * @swagger
 * /api/users:
 *  get:
 *    tags:
 *      - Users
 *    summary: Retrieve a list of users
 *    description: Retrieve a list of task froma users table
 *    responses:
 *      200:
 *        description: A list of users.
 *        content: 
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                description:
 *                  type: string
 *                  example: Successfully fetched all data!
 *                data:
 *                  type: array
 *                  items:
 *                    $ref: '#/components/schemas/Users'
 * 
 */
routes.get("/", findAllUsers);
/**
 * @swagger
 * /api/users/{id}:
 *    get:
 *      tags:
 *        - Users
 *      summary: Retrieve users data by id
 *      description: Retrieve users by id from users table
 *      parameters:
 *        - name: id
 *          in: path
 *          required: true
 *          description: user id
 *          schema:
 *            type: integer
 *            format: int64
 *      responses:
 *        200:
 *          description: single user data.
 *          content: 
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  description:
 *                    type: string
 *                    example: Successfully fetched users data by id!
 *                  data:
 *                    type: object
 *                    properties:
 *                      username:
 *                        type: string
 *                        description: enter your username
 *                        example: andi17x
 *                      password:
 *                        type: string
 *                        description: enter your password
 *                        example: adminpassword12
 *                      email:
 *                        type: string
 *                        description: enter your email
 *                        example: andi@gmail.com
 * 
 */
routes.get("/:id", findtUsersById);

/**
 * @swagger
 * /api/users/login:
 *    post:
 *      tags:
 *        - Users
 *      description: Get users API
 *      summary: Get users data
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                nombreusuario:
 *                  type: string
 *                  description: enter your nombreusuario
 *                  example: andi17x
 *                contraseña:
 *                  type: string
 *                  description: enter your contraseña
 *                  example: andi@gmail.com
 *      responses:
 *        200:
 *          description: Successfully found user data
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  description:
 *                    type: string
 *                    example: Successfully found user data!
 */
routes.post("/login", findUsersByName);

/**
 * @swagger
 * /api/users/:
 *    post:
 *      tags:
 *        - Users
 *      description: Create users API
 *      summary: Create users data
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                nombreusuario:
 *                  type: string
 *                  description: enter your nombreusuario
 *                  example: andi17x
 *                nombre:
 *                  type: string
 *                  description: enter your nombre
 *                  example: adminpassword12
 *                correoelectronico:
 *                  type: string
 *                  description: enter your correoelectronico
 *                  example: andi@gmail.com
 *                contraseña:
 *                  type: string
 *                  description: enter your contraseña
 *                  example: andi@gmail.com
 *                perfil:
 *                  type: string
 *                  description: enter your perfil
 *                  example: Editor
 *      responses:
 *        200:
 *          description: Successfully created data
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  description:
 *                    type: string
 *                    example: Successfully created data! 
 *                
 */
routes.post("/", createUsers);
/**
 * @swagger
 * /api/users/{id}:
 *    patch:
 *      tags:
 *        - Users
 *      summary: Update users data
 *      description: update users data API
 *      parameters:
 *        - name: id
 *          in: path
 *          required: true
 *          description: Users id
 *          schema:
 *            type: integer
 *            format: int64
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                nombreusuario:
 *                  type: string
 *                  description: enter your nombreusuario
 *                  example: andi17x
 *                nombre:
 *                  type: string
 *                  description: enter your nombre
 *                  example: adminpassword12
 *                correoelectronico:
 *                  type: string
 *                  description: enter your correoelectronico
 *                  example: andi@gmail.com
 *                contraseña:
 *                  type: string
 *                  description: enter your contraseña
 *                  example: andi@gmail.com
 *                perfil:
 *                  type: string
 *                  description: enter your perfil
 *                  example: andi@gmail.com
 *      responses:
 *        200:
 *          description: Successfully updated data
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  description:
 *                    type: string
 *                    example: Successfully updated data! 
 * 
 *      
 */
routes.patch("/:id", updateUsers);
/**
 * @swagger
 * /api/users/{id}:
 *    delete:
 *      tags:
 *        - Users
 *      summary: Remove Users data by id
 *      description: Remove users API  
 *      parameters:
 *        - name: id
 *          in: path
 *          required: true
 *          description: Users id
 *          schema:
 *            type: integer
 *            format: int64
 *      responses:
 *        200:
 *          description: Successfully deleted data
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  description:
 *                    type: string
 *                    example: Successfully updated data!     
 * 
 * 
 */
routes.delete("/:id", removeUsers);

module.exports = routes;
