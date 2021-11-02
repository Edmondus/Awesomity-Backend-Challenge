/**
 * @swagger
 * /api/signup:
 *  post:
 *      tags:
 *      - Employee Routes
 *      summary: "Creates an employee"
 *      description: "Needed is your name, National_id, Phone Number, email, password, status and date of birth"
 *      consumes:
 *       - application/json
 *      parameters:
 *       - name: body
 *         in: body
 *         schema:
 *             type: object
 *             properties:
 *                "name":
 *                 type: string
 *                 required: true
 *                "national_id":
 *                 type: string
 *                 required: true
 *                "phone_number":
 *                 type: string
 *                 required: true
 *                "email":
 *                 type: string
 *                 required: true
 *                "password":
 *                 type: string
 *                 required: true
 *                "dob":
 *                 type: string
 *                 required: true
 *                "status":
 *                 type: string
 *                 required: true
 *      responses:
 *       "201":
 *         description: "account created successfully"
 *       "400":
 *         description: "failed"
 *       "500":
 *         description: "server error"
 *
 */
