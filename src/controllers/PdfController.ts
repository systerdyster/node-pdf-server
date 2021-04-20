import { inject, injectable } from "inversify";
import { controller, httpPost, interfaces } from "inversify-express-utils";
import { ApiOperationPost, ApiPath, SwaggerDefinitionConstant } from "swagger-express-ts";
import { Request, Response, NextFunction } from 'express';
import { PdfDocument } from '../models/PdfDocument';
import { PdfHelper } from "../helpers/PdfHelper";

@ApiPath({
    path: "/pdf",
    name: "Pdf",
    security: { basicAuth: [] }
})
@controller("/pdf")
@injectable()
export class PdfController implements interfaces.Controller {
    public static TARGET_NAME: string = 'PdfController';

    constructor(@inject(PdfHelper.TARGET_NAME) private pdfHelper: PdfHelper) {}

    @ApiOperationPost({
        description: "Pass in one or more PdfDocuments to Render. If multiple documents are sent they will merge. Each document keep their own settings.",
        summary: "Create new Pdf Document",
        parameters: {
            body: { 
                description: "Configuration for PdfDocument", 
                required: true,
                type: SwaggerDefinitionConstant.Model.Type.ARRAY,
                model: 'PdfDocument'
            }
        },
        responses: {
            200: { description: "Success", type: 'application/pdf' },
            400: { description: "Parameters fail" }
        }
    })
    @httpPost("/")
    public async createPdf(request: Request, response: Response, next: NextFunction) {
        if (!request.body) {
            return response.status(400).end();
        }

        const documents = request.body as PdfDocument[];
        (async () => {
            const buffer = await this.pdfHelper.create(documents);
            response.type('application/pdf');
            response.send(buffer);
        })();
    }
}