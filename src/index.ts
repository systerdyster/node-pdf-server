'use strict';

import express from 'express';
import 'reflect-metadata';
import { Container } from 'inversify';
import { interfaces, InversifyExpressServer, TYPE } from 'inversify-express-utils';
import * as swagger from 'swagger-express-ts';

import { PdfHelper } from './helpers/PdfHelper';
import { PdfController } from './controllers/PdfController';

import './models/PdfDocument';

const container = new Container ();

container.bind<interfaces.Controller> ( TYPE.Controller )
    .to(PdfController)
    .inSingletonScope()
    .whenTargetNamed(PdfController.TARGET_NAME);

container.bind<PdfHelper>(PdfHelper.TARGET_NAME)
    .to(PdfHelper)
    .inSingletonScope();

// create server
const server = new InversifyExpressServer ( container );

server.setConfig( ( app : any ) => {
    app.use( '/api-docs/swagger' , express.static( 'swagger' ) );
    app.use( '/api-docs/swagger/assets' , express.static( 'node_modules/swagger-ui-dist' ) );
    app.use( express.json() );
    app.use( swagger.express(
        {
            definition: {
                info: {
                    title: 'Pdf Generator',
                    version: '1.0',
                },
                responses: {
                    500: {},
                },
                models: {
                }
            },
        }
    ) );
} );

server.setErrorConfig( ( app : any ) => {
    app.use( ( err : Error , request : express.Request , response : express.Response , next : express.NextFunction ) => {
        console.error( err.stack );
        response.status( 500 ).send( "Something broke!" );
    } );
} );

const app = server.build();

app.listen(3000);
console.info( "Server is listening on port : " + 3000);