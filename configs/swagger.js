import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

const options ={
    swaggerDefinition:{
        openapi:"3.0.0",
        info:{
            title: "APIrest para Blog de aprendizaje",
            version: "1.0.0",
            description: "APIrest para Blog de aprendizaje",
            contact:{
                name: "Daniel Sacol",
                email: "dsacol-2023010@kinal.edu.gt"
            }
        },
        servers:[
            {
                url: "http://127.0.0.1:3000/blog/v1"
            }
        ],
    },
    apis:[
        "./src/publication/publication.routes.js",
        "./src/comment/comment.routes.js",

    ]
}

const swaggerDocs = swaggerJSDoc(options)

export { swaggerDocs, swaggerUi }