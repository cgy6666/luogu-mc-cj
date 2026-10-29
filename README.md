Language: English | [简体中文](https://github.com/cgy6666/luogu-mc-cj/blob/main/README_zh.md)

<h1 align="center">LMAC (Luogu MC Achievements)</h1>
<p align="center">Lightweight user script for Luogu — pop up Minecraft-style achievement toasts when you get AC.</p>

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

## Project Overview

**LMAC (Luogu MC Achievements)** is a lightweight user script for [Luogu](https://www.luogu.com.cn) that enhances your coding experience by bringing the classic Minecraft achievement system to the platform. Currently, it supports popping up a customizable Minecraft-style toast when you successfully get an `Accepted` (AC) verdict on a problem.

## Highlights

- **AC Achievement Toast**: Automatically displays a beautiful Minecraft-style achievement image when your submission gets AC.
- **Customizable Image**: You can easily change the achievement image URL directly in the script configuration.
- **Precise Matching & Anti-Misjudgment**: Strictly matches the `/record/{id}` page and intercepts `Unaccepted` or partial scores. Achieves a popup only when fully accepted, regardless of the max score.
- **Permanent Deduplication**: Uses `localStorage` for permanent local memory. Once a record ID has triggered a popup, refreshing or reopening it will never trigger it again.
- **CDN Speed Test**: Comes with an official website that automatically tests multiple CDN nodes and selects the fastest one for installation.

## Installation

### Method 1: Official Website (Recommended)
Visit our [Official Installation Page](https://luogumc.xqyhcc.qzz.io/) to automatically test CDN speeds and install with one click.

### Method 2: ScriptCat Installation
Visit the [ScriptCat](https://scriptcat.org/zh-CN/script-show-page/8782) page and click "Install Script".

### Method 3: Manual Installation
1. Install a user script manager such as **Tampermonkey** or **Violentmonkey**.
2. Import [`luogu-mc-cj.user.js`](https://fastly.jsdelivr.net/gh/cgy6666/luogu-mc-cj@main/luogu-mc-cj.user.js) into the manager. *(Note: This link supports automatic updates)*
3. Refresh the Luogu page and it will work.

## Changelog

- **2026.10.29 (v1.3.1)**:
  - 🐛 Ultimate Deduplication Fix: Upgraded to `localStorage` to permanently prevent duplicate popups even after closing the browser.
- **2026.10.29 (v1.3.0)**:
  - 🐛 Fixed missed popups: Extended time verification to 1 hour and introduced ID-based deduplication to handle judge queues.
  - ✨ Standardization: Added `@license` and `@icon` metadata.
- **2026.10.29 (v1.2.0)**:
  - 🐛 Major Fix: Resolved false popups for partial scores (`Unaccepted`). Removed the rigid "max score = 100" restriction.
- **2026.10.27 (v1.1.0)**:
  - 🚀 Initial Release: Implemented AC status detection and MC toast rendering.

## Contributing & Feedback

- Issues and pull requests are welcome — feel free to report bugs or suggest new achievement ideas.
- Developed by [cgy20140502](https://www.luogu.com.cn/user/1048914) & [cyx_20131003](https://www.luogu.com.cn/user/1215733).
- This script was developed with the assistance of **DeepSeek**.

## License

This project is licensed under the MIT License. See [LICENSE](https://github.com/cgy6666/luogu-mc-cj/blob/main/LICENSE) for details.
