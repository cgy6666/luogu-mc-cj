Language: English | [简体中文](https://github.com/cgy6666/luogu-mc-cj/blob/main/README_zh.md)

<h1 align="center">Luogu MC Achievements</h1>
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

Luogu MC Achievements is a lightweight user script for [Luogu](https://www.luogu.com.cn) that enhances your coding experience by bringing the classic Minecraft achievement system to the platform. Currently, it supports popping up a customizable Minecraft-style toast when you successfully get an `Accepted` (AC) verdict on a problem.

## Highlights

- **AC Achievement Toast**: Automatically displays a beautiful Minecraft-style achievement image when your submission gets AC.
- **Customizable Image**: You can easily change the achievement image URL directly in the script configuration.
- **Precise URL Matching**: Uses regular expressions to strictly match the record detail page (`/record/{id}`), preventing accidental triggers on list pages.
- **Fast & Anti-Duplicate**: Built-in image preloading ensures instant popups. A strict 15-second time verification mechanism prevents the toast from popping up again when you refresh the page or view old records.
- **CDN Speed Test**: Comes with an official website that automatically tests multiple CDN nodes and selects the fastest one for installation.

## Installation

### Method 1: Official Website (Recommended)
Visit our [Official Installation Page](https://luogumc.xqyhcc.qzz.io/) to automatically test CDN speeds and install with one click.

### Method 2: Manual Installation
1. Install a user script manager such as **Tampermonkey** or **Violentmonkey**.
2. Import [`luogu-mc-cj.user.js`](https://fastly.jsdelivr.net/gh/cgy6666/luogu-mc-cj@main/luogu-mc-cj.user.js) into the manager.
3. Open or refresh [Luogu](https://www.luogu.com.cn); the script will run automatically.

## Usage

- Ensure you have enabled the script in your Tampermonkey dashboard.
- Submit a solution to any problem on Luogu.
- When the result turns out to be **Accepted**, the Minecraft achievement toast will slide in from the top-right corner of your screen within 15 seconds of your submission.

## Contributing & Feedback

- Issues and pull requests are welcome — feel free to report bugs, suggest new achievement ideas, or propose improvements.
- Developed by [cgy20140502](https://www.luogu.com.cn/user/1215733) & [cyx_20131003](https://www.luogu.com.cn/user/1215733).
- This script was developed with the assistance of DeepSeek.

## License

This project is licensed under the MIT License. See [LICENSE](https://github.com/cgy6666/luogu-mc-cj/blob/main/LICENSE) for details.
