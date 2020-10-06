const Jimp = require('jimp');

module.exports = async function createCaptcha() {
    const captcha = Math.random().toString(36).slice(2, 8);
    const image = new Jimp(175, 50, 'purple');
    const font = await Jimp.loadFont(fonts/fuente.fnt);
    const w = image.bitmap.width;
    const h = image.bitmap.height;
    const textWidth = Jimp.measureText(font, captcha);
    const textHeight = Jimp.measureTextHeight(font, captcha);
    image.print(font, (w/2 - textWidth/2), (h/2 - textHeight/2), captcha);
    image.write(`${__dirname}/captchas/${captcha}.png`);
    return captcha;
}