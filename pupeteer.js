const puppeteer = require ('puppeteer');
const wppc = require ('./modulos/wppc');
const div = require ('./modulos/div');
const api = require ('./modulos/api');
const enviar = require ('./modulos/enviar');
const { ScriptInjector } = require('puppeteer');

(async () => {
    console.log('🤖 Izza está funcionando.');
    const browser = await puppeteer.launch({
        headless: false,
        defaultViewport: null
    });
    const page = await browser.newPage();
    await page.goto('https://web.whatsapp.com/');

    await page.evaluate(wppc);
    await page.waitForSelector('._aiwn._aiwm.app-wrapper-web.font-fix.os-win._ap4q');
    await page.evaluate(div);

    setInterval(async () => {
        let resultado = await api();
        await page.evaluate(enviar, resultado);
    }, 30000);

})();