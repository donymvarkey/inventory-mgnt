module.exports = {
    openapi: '3.0.0',
    info: {
        title: 'Node-Restful-Shop API Doc',
        version: '1.0.0',
        description:
            'A showcase to understand how to implement swagger api into node-restful project',
        license: {
            name: 'MIT',
            url: 'https://choosealicense.com/licenses/mit/'
        },
        contact: {
            name: process.env.PROJECT_OWNER,
            email: process.env.PROJECT_OWNER_EMAIL
        }
    },
    servers: [
        {
            url: `https://inventory-mgmt-dnh0.onrender.com`,
            description: 'Server Hosted'
        },
        {
            url: `http://127.0.0.1:${process.env.PORT}`,
            description: 'Server Local'
        }
    ]
};
