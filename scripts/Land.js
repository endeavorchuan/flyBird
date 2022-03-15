/**
 * @name: Land
 * @author: chuanchuan
 * @date: 2022-01-06 11:32
 * @description：Land
 * @update: 2022-01-06 11:32
 */

const landDom = document.querySelector(".land");
const landStyles = getComputedStyle(landDom);   // 获取天空的所有样式
const landWidth = parseFloat(landStyles.width);
const landHeight = parseFloat(landStyles.height);
const landTop = parseFloat(landStyles.top);

class Land extends Rectangle {
    constructor(speed) {
        super(landWidth, landHeight, 0, landTop, speed, 0, landDom);
    }

    onMove() {
        if(this.left <= -skyWidth / 2) {
            this.left = 0;
        }
    }
}
