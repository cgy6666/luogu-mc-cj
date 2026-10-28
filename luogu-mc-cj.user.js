// ==UserScript==
// @name         洛谷 MC 成就图片
// @namespace    https://www.luogu.com.cn/
// @version      1.1
// @icon         https://cdn.xqyhcc.qzz.io/img/luogumc.png
// @author       cgy20140502&cyx20131003
// @description  AC 就出现 MC 成就
// @match        https://www.luogu.com.cn/*
// @grant        none
// @run-at       document-start
// ==/UserScript==

(function () {
    'use strict';

    const IMG_URL = 'https://www.mcmod.cn/pages/tools/achievements/images/achievements/0_QpjUsXuG.png';//在这里输入你自定义图片地址
    const imgPreload = new Image();
    imgPreload.src = IMG_URL;
    const style = document.createElement('style');
    style.textContent = `
        #mc-achv {
            position: fixed !important;
            top: 16px !important;
            right: 16px !important;
            z-index: 2147483647 !important;
            width: 320px !important;
            margin: 0 !important;
            padding: 0 !important;
            transform: translateX(360px) !important;
            opacity: 0 !important;
            transition: transform 0.25s cubic-bezier(0.22,1,0.36,1), opacity 0.25s cubic-bezier(0.22,1,0.36,1) !important;
            pointer-events: none !important;
            box-sizing: border-box !important;
            background-color: #ffffff !important;
            border-radius: 6px !important;
            overflow: hidden !important;
            box-shadow: 0 4px 12px rgba(0,0,0,0.5) !important;
        }
        #mc-achv.show {
            transform: translateX(0) !important;
            opacity: 1 !important;
        }
        #mc-achv.hide {
            transition: transform 0.15s ease-in, opacity 0.15s ease-in !important;
            transform: translateX(400px) !important;
            opacity: 0 !important;
        }
        #mc-achv img {
            display: block !important;
            width: 100% !important;
            height: auto !important;
            max-width: none !important;
            max-height: none !important;
            image-rendering: pixelated !important;
        }
    `;
    (document.head || document.documentElement).appendChild(style);

    let isShown = false;
    let currentUrl = location.href;
    function showToast() {
        if (isShown) return;
        isShown = true;

        const el = document.createElement('div');
        el.id = 'mc-achv';
        el.innerHTML = `<img src="${IMG_URL}" alt="AC">`;
        document.documentElement.appendChild(el);

        void el.offsetWidth;
        el.classList.add('show');

        setTimeout(() => {
            el.classList.remove('show');
            el.classList.add('hide');
            setTimeout(() => el.remove(), 150);
        }, 5000);
    }
    function checkAC() {
        if (isShown) return;
        if (!/^\/record\/\d+\/?$/.test(window.location.pathname)) return;

        if (!document.body) return;
        const text = document.body.innerText || '';
        if (!text.includes('Accepted') || text.includes('Pretests')) return;
        const timeMatch = text.match(/(\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2})/);

        if (timeMatch) {
            const submitTimeStr = timeMatch[1].replace(/-/g, '/');
            const submitTime = new Date(submitTimeStr).getTime();
            const now = Date.now();
            // 如果在提交后 15 秒内，才触发弹窗
            // （15秒足够覆盖网络延迟和页面加载时间。若你觉得网速很慢，可改成 20000 或 30000）
            if (now - submitTime <= 15000) {
                showToast();
            }
        }
    }
    let throttleTimer = null;
    const observer = new MutationObserver(() => {
        if (location.href !== currentUrl) {
            currentUrl = location.href;
            isShown = false;
            const oldEl = document.getElementById('mc-achv');
            if (oldEl) oldEl.remove();
        }

        if (!throttleTimer) {
            throttleTimer = setTimeout(() => {
                checkAC();
                throttleTimer = null;
            }, 50);
        }
    });

    if (document.body) {
        observer.observe(document.body, { childList: true, subtree: true, characterData: true });
    } else {
        const initObserver = new MutationObserver(() => {
            if (document.body) {
                observer.observe(document.body, { childList: true, subtree: true, characterData: true });
                initObserver.disconnect();
                checkAC();
            }
        });
        initObserver.observe(document.documentElement, { childList: true, subtree: true });
    }
})();
