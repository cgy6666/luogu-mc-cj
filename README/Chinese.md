Language: [English](https://github.com/cgy6666/luogu-mc-cj/blob/main/README.md) | 简体中文

<h1 align="center">LMAC - 洛谷 MC 成就系统</h1>
<p align="center">轻量级洛谷油猴脚本 —— 在你 AC 时弹出 Minecraft 风格的成就提示！</p>

<p align="center">
  <a href="https://github.com/cgy6666/luogu-mc-cj/blob/main/LICENSE">
    <img src="https://img.shields.io/github/license/cgy6666/luogu-mc-cj" alt="GitHub license" />
  </a>
  <a href="https://github.com/cgy6666/luogu-mc-cj">
    <img src="https://img.shields.io/github/languages/code-size/cgy6666/luogu-mc-cj" alt="GitHub code size" />
  </a>
  <a href="https://github.com/cgy6666/luogu-mc-cj/stargazers">
    <img src="https://img.shields.io/github/stars/cgy6666/luogu-mc-cj" alt="GitHub stars" />
  </a>
</p>

---

## 项目简介

**LMAC (Luogu MC Achievements)** 是一款为 [洛谷](https://www.luogu.com.cn) 打造的轻量级油猴脚本。它将经典的 Minecraft 成就弹窗引入了洛谷，目前支持在题目获得 `Accepted` (AC) 时，于屏幕右上角弹出精美的成就图片。

## 功能亮点

- **AC 成就弹窗**：在洛谷判定 AC 时，自动滑出 Minecraft 风格的成就提示图。
- **自定义图片**：支持在代码配置区直接修改 `IMG_URL`，替换为你喜欢的任何成就图片。
- **精准匹配与防误判**：精准锁定 `record/数字` 页面，且严格拦截 `Unaccepted` 和部分分情况，无论题目满分多少，全对才会弹窗。
- **永久防重机制**：内置 `localStorage` 本地永久记忆，只要弹过一次的记录（ID），刷新页面或重新打开绝不重复弹窗。
- **极速测速官网**：提供独立的下载页面，自动并发测速各大 CDN 节点，为你优选最快线路进行安装。

## 安装方法

### 方法一：官网测速安装（推荐）
前往我们的官网，系统会自动检测并为你选择当前网络环境下最快的 CDN 节点，支持一键唤起篡改猴安装：
👉 **[LMAC - 极速安装](https://luogumc.xqyhcc.qzz.io/)**

### 方法二：脚本猫安装
前往 [脚本猫 (ScriptCat)](https://scriptcat.org/zh-CN/script-show-page/8782) 页面，点击“安装脚本”即可。

### 方法三：手动安装
1. 确保你的浏览器已安装 **Tampermonkey**（篡改猴）或 **Violentmonkey** 扩展。
2. 点击此处导入脚本：[`luogu-mc-cj.user.js`](https://fastly.jsdelivr.net/gh/cgy6666/luogu-mc-cj@main/luogu-mc-cj.user.js) *(注：该链接自带自动更新功能)*
3. 刷新洛谷页面即可生效。

## 更新日志

- **2026.10.29 (v1.3.1)**：
  - 🐛 防重机制终极修复：升级为 `localStorage` 浏览器永久缓存，彻底解决关闭浏览器后再次误弹的问题。
- **2026.10.29 (v1.3.0)**：
  - 🐛 解决漏判 Bug：时间校验放宽至 1 小时，并引入按记录 ID 防重机制，应对评测机排队。
  - ✨ 规范化：引入 `@license` 与 `@icon`。
- **2026.10.29 (v1.2.0)**：
  - 🐛 严重修复：解决 `Unaccepted`（部分分）误弹窗问题。移除“满分 100”死板限制。
- **2026.10.27 (v1.1.0)**：
  - 🚀 项目首发：实现 AC 状态获取与 MC 弹窗渲染。

## 贡献与反馈

- 欢迎提交 Issue 和 Pull Request 反馈问题，或提出新的成就建议。
- 开发者：[cgy20140502](https://www.luogu.com.cn/user/1048914) & [cyx_20131003](https://www.luogu.com.cn/user/1215733)。
- 本脚本及文档在开发过程中使用了 **DeepSeek** 辅助编写。

## 开源协议

本项目采用 MIT License 开源协议。详情请参阅 [LICENSE](https://github.com/cgy6666/luogu-mc-cj/blob/main/LICENSE) 文件。
