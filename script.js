// script.js
window.addEventListener('load', () => {
    const leftCurtain = document.querySelector('.curtain-left');
    const rightCurtain = document.querySelector('.curtain-right');

    // 用 SVG 画出完美的“被绑起来”的 S 型曲线
    // 这段代码会自动把非规则的边缘遮罩应用到你的帷幕上
    const svgMaskLeft = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100' preserveAspectRatio='none'%3E%3Cpath d='M0,0 L100,0 C70,30 80,60 40,80 C20,90 10,95 0,100 Z' fill='black'/%3E%3C/svg%3E")`;
    const svgMaskRight = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100' preserveAspectRatio='none'%3E%3Cpath d='M0,0 L100,0 L100,100 C90,95 80,90 60,80 C20,60 30,30 0,0 Z' fill='black'/%3E%3C/svg%3E")`;

    // 应用遮罩 (兼容大部分现代浏览器)
    leftCurtain.style.webkitMaskImage = svgMaskLeft;
    leftCurtain.style.maskImage = svgMaskLeft;
    
    rightCurtain.style.webkitMaskImage = svgMaskRight;
    rightCurtain.style.maskImage = svgMaskRight;
});

window.addEventListener('DOMContentLoaded', () => {
    // 等过场动画（0.5s延迟 + 2s滑动）结束后
    setTimeout(() => {
        const transitionLayer = document.querySelector('.transition-layer');
        if (transitionLayer) {
            // 把用完的动画层销毁
            transitionLayer.remove();
        }
    }, 2500);
});