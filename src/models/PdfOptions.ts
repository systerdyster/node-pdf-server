import { ApiModel, ApiModelProperty, SwaggerDefinitionConstant } from "swagger-express-ts";
import { PdfMargin } from "./PdfMargin";

@ApiModel( {
    description : "Puppeteer PDF Options" ,
    name : "PdfOptions"
})
export class PdfOptions {
    
     @ApiModelProperty( {
        description : "Scales the rendering of the web page. Amount must be between `0.1` and `2`",
        type: SwaggerDefinitionConstant.Model.Property.Type.NUMBER,
        format: '0.1 or 2',
        example: 1
    })
    scale?: number;
    
     @ApiModelProperty( {
        description : "Whether to show the header and footer.",
        type: SwaggerDefinitionConstant.Model.Property.Type.BOOLEAN,
        example: true
    })
    displayHeaderFooter?: boolean;
    
    @ApiModelProperty( {
        description : "HTML template for the print header. Should be valid HTML",
        type: SwaggerDefinitionConstant.Model.Property.Type.STRING,
        example: '<div>Header</div>'
    })
    headerTemplate?: string;
    
     @ApiModelProperty( {
        description : "HTML template for the print footer.",
        type: SwaggerDefinitionConstant.Model.Property.Type.STRING,
        example: '<div>Footer</div>'
    })
    footerTemplate?: string;
    
     @ApiModelProperty( {
        description : "Set to `true` to print background graphics.",
        type: SwaggerDefinitionConstant.Model.Property.Type.BOOLEAN,
        example: true
    })
    printBackground?: boolean;
    
     @ApiModelProperty( {
        description : "Whether to print in landscape orientation.",
        type: SwaggerDefinitionConstant.Model.Property.Type.BOOLEAN
    })
    landscape?: boolean;
    
     @ApiModelProperty( {
        description : "Paper ranges to print, e.g. `1-5, 8, 11-13`",
        type: SwaggerDefinitionConstant.Model.Property.Type.STRING,
        example: "1-5"
    })
    pageRanges?: string;

     @ApiModelProperty( {
        description : "If set, this takes priority over the `width` and `height` options.",
        type: SwaggerDefinitionConstant.Model.Property.Type.STRING,
        example: 'a4'
    })
    format?: 'letter' | 'legal' | 'tabloid' | 'ledger' | 'a0' | 'a1' | 'a2' | 'a3' | 'a4' | 'a5' | 'a6';
    
     @ApiModelProperty( {
        description : "Sets the width of paper. You can pass in a number or a string with a unit",
        type: SwaggerDefinitionConstant.Model.Property.Type.STRING,
        example: '19cm'
    })
    width?: string | number;

     @ApiModelProperty( {
        description : "Sets the height of paper. You can pass in a number or a string with a unit.",
        type: SwaggerDefinitionConstant.Model.Property.Type.STRING,
        example: '17cm'
    })
    height?: string | number;

     @ApiModelProperty( {
        description : "Give any CSS `@page` size declared in the page priority over what is declared in the `width` or `height` or `format` option.",
        type: SwaggerDefinitionConstant.Model.Property.Type.BOOLEAN,
        example: true
    })
    preferCSSPageSize?: boolean;

     @ApiModelProperty( {
        description : "Set the PDF margins",
        type: SwaggerDefinitionConstant.Model.Property.Type.OBJECT,
        model: 'PdfMargin',
        example: { top: 0, left: '2cm', right: '2cm', bottom: '3cm' }
    })
    margin?: PdfMargin;

     @ApiModelProperty( {
        description : "The path to save the file to. If the path is relative, it's resolved relative to the current working directory. Empty means the PDF will not be written to disk",
        type: SwaggerDefinitionConstant.Model.Property.Type.STRING,
        example: ''
    })
    path?: string;
}