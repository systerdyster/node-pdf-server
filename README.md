### node-pdf-server
Takes multiple templates with individual options, render and merge to one pdf. For
example create separate cover, main and back piece. Also got support for header & footer.

Written in TypeScript and with Swagger documentation (or a start of).

Running Puppeteer for Pdf render.


Example Body.
```javascript
[
    {
        "htmlTemplate": "<div>Content goes here blub.</div>",
        "pdfOptions": {
            "format": "a4",
            "preferCSSPageSize": true,
            "displayHeaderFooter": true,
            "footerTemplate": "<div>Your footer text</div>",
            "headerTemplate": "<div>Your Header text</div>"
        }
    },
    {
        "htmlTemplate": "<div>Content goes here blub.</div>",
        "pdfOptions": {
            "format": "a4",
            "preferCSSPageSize": true,
            "displayHeaderFooter": true,
            "footerTemplate": "<div>Your footer text</div>",
            "headerTemplate": "<div>Your Header text</div>"
        }
    }
]
```
