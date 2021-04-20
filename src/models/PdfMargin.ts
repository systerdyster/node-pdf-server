import { ApiModel, ApiModelProperty, SwaggerDefinitionConstant } from "swagger-express-ts";


@ApiModel({
    description: "Puppeteer PDF Margin",
    name: "PdfMargin"
})
export class PdfMargin {
    @ApiModelProperty({
        description: "String or number"
    })
    top?: string | number;

    @ApiModelProperty({
        description: "String or number",
        type: SwaggerDefinitionConstant.Model.Property.Type.BOOLEAN
    })
    bottom?: string | number;

    @ApiModelProperty({
        description: "String or number",
        type: SwaggerDefinitionConstant.Model.Property.Type.BOOLEAN
    })
    left?: string | number;

    @ApiModelProperty({
        description: "String or number",
        type: SwaggerDefinitionConstant.Model.Property.Type.BOOLEAN
    })
    right?: string | number;
}
