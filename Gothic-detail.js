// 获取所有的 section 和 导航点
const sections = document.querySelectorAll('.content-section');
const navDots = document.querySelectorAll('.nav-dot');

// 配置：当区块进入屏幕 50% 时触发
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5 
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // 移除所有 active 类
            navDots.forEach(dot => dot.classList.remove('active'));
            // 找到当前展示的 section 的 id
            const id = entry.target.getAttribute('id');
            // 让对应 id 的导航点亮起
            document.querySelector(`.nav-dot[href="#${id}"]`).classList.add('active');
        }
    });
}, observerOptions);

// 监听所有 section
sections.forEach(section => {
    observer.observe(section);
});