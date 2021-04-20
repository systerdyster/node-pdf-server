import { injectable } from 'inversify';
import puppeteer from 'puppeteer';
import { merge } from 'merge-pdf-buffers';
import { PdfDocument } from '../models/PdfDocument';



@injectable()
export class PdfHelper {
    public static TARGET_NAME: string = 'PdfHelper';

    private _defaultSettings: puppeteer.PDFOptions = {
        format: 'a4',
        preferCSSPageSize: true,
        displayHeaderFooter: false,
        printBackground: true,
        margin: { top: '2cm', bottom: '2cm', left: '2cm', right: '2cm' },
        scale: 1,
        landscape: false
    }

    public create = async (documents: PdfDocument[]) : Promise<Buffer> => {
        const buffers = await Promise.all(documents.map(x => this.render(x)));
        if (buffers.length > 1) {
            const buffer = await this.merge(buffers);
            return buffer;
        }
        return buffers[0];
    }

    private render = async (pdfDocument: PdfDocument) => {
        const settings = {
            ...this._defaultSettings,
            ...pdfDocument.pdfOptions
        };

        try {
            const browser = await puppeteer.launch({
                args: [
                    '--no-sandbox',
                    '--disable-setuid-sandbox',
                    '--disable-dev-shm-usage'
                ],
                headless: true
            });
            const page = await browser.newPage();
            await page.setContent(pdfDocument.htmlTemplate!);
            const buffer = await page.pdf(settings);
            browser.close();
            return buffer;
        } catch (e) {
            throw e;
        }
    }

    private merge = async (buffers: Buffer[]) : Promise<Buffer> => {
        const merged = await merge(buffers);
        return merged;
    }
}