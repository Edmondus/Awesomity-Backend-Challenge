import swaggerJSDoc from 'swagger-jsdoc';

const swaggerOptions = {
  swaggerDefinition: {
    info: {
      title: 'Awesomity Back-end Challenge',
      version: '1.0.0',
      description: 'Welcome to employee Management system',
      servers: ['https://localhost:'],
    },
  },
  apis: ['src/docs/*.js'],
};

const swaggerDocs = swaggerJSDoc(swaggerOptions);

export default swaggerDocs;