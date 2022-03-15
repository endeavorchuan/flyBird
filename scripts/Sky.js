/**
 * @name: Sky
 * @author: chuanchuan
 * @date: 2022-01-05 13:15
 * @description：Sky
 * @update: 2022-01-05 13:15
 */

const skyDom = document.querySelector(".sky");
const skyStyles = getComputedStyle(skyDom);   // 获取天空的所有样式
const skyWidth = parseFloat(skyStyles.width);
const skyHeight = parseFloat(skyStyles.height);

class Sky extends Rectangle {
    constructor() {
        super(skyWidth, skyHeight, 0, 0, -50, 0, skyDom);
    }

    onMove() {
        if(this.left <= -skyWidth / 2) {
            this.left = 0;
        }
    }
}
