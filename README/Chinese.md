Language: [English](https://github.com/cgy6666/luogu-mc-cj/blob/main/README.md) | 简体中文

<h1 align="center">洛谷 MC 成就系统 (Luogu MC Achievements)</h1>
<p align="center">轻量级洛谷油猴脚本 —— 在你 AC 时弹出 Minecraft 风格的成就提示！</p>

<p align="center">
  <a href="https://github.com/cgy6666/luogu-mc-cj/blob/main/LICENSE">
    <img src="https://img.shields.io/github/license/cgy6666/luogu-mc-cj" alt="GitHub license" />
  </a>
  <a href="https://github.com/cgy6666/luogu-mc-cj">
    <img src="https://img.shields.io/github/languages/code-size/cgy6666/luogu-mc-cj" alt="GitHub code size" />
  </a>
  <a href="https://github.com/cgy6666/luogu-mc-cj/issues">
    <img src="https://img.shields.io/github/issues/cgy6666/luogu-mc-cj" alt="GitHub issues" />
  </a>
  <a href="https://github.com/cgy6666/luogu-mc-cj/pulls">
    <img src="https://img.shields.io/github/issues-pr/cgy6666/luogu-mc-cj" alt="GitHub pull requests" />
  </a>
  <a href="https://github.com/cgy6666/luogu-mc-cj/stargazers">
    <img src="https://img.shields.io/github/stars/cgy6666/luogu-mc-cj" alt="GitHub stars" />
  </a>
  <a href="https://github.com/cgy6666/luogu-mc-cj/forks">
    <img src="https://img.shields.io/github/forks/cgy6666/luogu-mc-cj" alt="GitHub forks" />
  </a>
</p>

---

## 项目简介

**洛谷 MC 成就系统** 是一款为 [洛谷](https://www.luogu.com.cn) 打造的轻量级油猴脚本。它将经典的 Minecraft 成就弹窗引入了洛谷，目前支持在题目获得 `Accepted` (AC) 时，于屏幕右上角弹出精美的成就图片。

## 功能亮点

- **AC 成就弹窗**：在洛谷判定 AC 时，自动滑出 Minecraft 风格的成就提示图。
- **自定义图片**：支持在代码配置区直接修改 `IMG_URL`，替换为你喜欢的任何成就图片。
- **精准正则匹配**：使用正则精准锁定 `record/数字` 页面，避免在记录列表页或其他页面误触。
- **极速防误弹**：内置图片预加载机制，保证弹窗秒出；加入 15 秒时间校验，刷新页面或打开历史记录绝不重复弹窗。
- **极速测速官网**：提供独立的下载页面，自动并发测速各大 CDN 节点，为你优选最快线路进行安装。

## 安装方法

### 方法一：官网测速安装（推荐）
前往我们的官网，系统会自动检测并为你选择当前网络环境下最快的 CDN 节点，支持一键唤起篡改猴安装：
👉 **[洛谷 MC 成就 - 极速安装](https://luogumc.xqyhcc.qzz.io/)**

### 方法二：手动安装
1. 确保你的浏览器已安装 **Tampermonkey**（篡改猴）或 **Violentmonkey** 扩展。
2. 点击此处导入脚本：[`luogu-mc-cj.user.js`](https://fastly.jsdelivr.net/gh/cgy6666/luogu-mc-cj@main/luogu-mc-cj.user.js) 
   *(注：该链接自带自动更新功能)*
3. 刷新洛谷页面即可生效。

## 使用说明

- 确保你已在篡改猴面板中启用了本脚本。
- 在洛谷提交任意题目的代码。
- 当评测结果变为 **Accepted** 时，屏幕右上角会自动弹出 MC 成就图片。

## 贡献与反馈

- 欢迎提交 Issue 和 Pull Request 反馈问题，或提出新的成就建议。
- 开发者：[cgy20140502](https://www.luogu.com.cn/user/1215733) & [cyx_20131003](https://www.luogu.com.cn/user/1215733)。
- 本脚本及文档在开发过程中使用了 **DeepSeek** 辅助编写。

## 开源协议

本项目采用 MIT License 开源协议。详情请参阅 [LICENSE](https://github.com/cgy6666/luogu-mc-cj/blob/main/LICENSE) 文件。
