import { ApiModel, ApiModelProperty, SwaggerDefinitionConstant } from "swagger-express-ts";
import { PdfOptions } from "./PdfOptions";

@ApiModel( {
    description : "Version description" ,
    name : "PdfDocument"
})
export class PdfDocument {

    @ApiModelProperty( {
        description : "Pdf Options" ,
        required : true,
        type: SwaggerDefinitionConstant.Model.Property.Type.OBJECT,
        model: 'PdfOptions'
    })
    pdfOptions? : PdfOptions;

    @ApiModelProperty( {
        description : "Pdf Template" ,
        required : true,
        type: SwaggerDefinitionConstant.Model.Property.Type.STRING
    })
    htmlTemplate?: string;
}