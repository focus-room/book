---
sidebar_position: 1
---

# 设置您的 Focus-Room

创建合适的环境对于成功的 Focus-Room 体验至关重要。

## 物理设置

Focus-Room 需要周密安排空间：

- **选择适当的房间大小**：足够大，让所有参与者都有个人空间，但又足够小，可以营造社区感
- **个人工作站**：每个人需要一个明确的区域，包括：
  - 舒适的椅子和桌子
  - 充足的照明
  - 视野中的干扰最小化
- **中央计时器显示**：放在每个人都能轻松看到的地方
- **隔板（可选）**：在空间之间的微妙分隔，同时保持共享环境的感觉

## 数字替代方案

对于远程团队，您可以创建虚拟 Focus-Room：

- **视频会议工具**：在专注会话期间保持摄像头开启但麦克风静音
- **共享计时器应用程序**：每个人都应该看到相同的倒计时
- **数字状态指示器**：显示人们何时处于深度专注模式

## 基本设备

- **计时器系统**：物理计时器板或数字计时器应用程序
- **转换信号**：指示专注/休息时间开始和结束的温和声音
- **会话指南**：Focus-Room 原则的可见提醒

## 房间氛围

- **温度**：保持房间稍微凉爽（68-72°F / 20-22°C）以保持警觉
- **声音级别**：安静的环境或一致的背景噪音（白噪音效果很好）
- **照明**：自然光最理想，但如果需要，确保均匀、不闪烁的人工照明

在下一节中，我们将讨论如何为您的 Focus-Room 会话建立有效的规则和协议。

## 创建您的第一个文档

在 `docs/hello.md` 创建一个 Markdown 文件：

```md title="docs/hello.md"
# Hello

这是我的 **第一个 Docusaurus 文档**！
```

现在可以在 [http://localhost:3000/docs/hello](http://localhost:3000/docs/hello) 访问新文档。

## 配置侧边栏

Docusaurus 自动从 `docs` 文件夹 **创建侧边栏**。

添加元数据以自定义侧边栏标签和位置：

```md title="docs/hello.md" {1-4}
---
sidebar_label: '嗨！'
sidebar_position: 3
---

# Hello

这是我的 **第一个 Docusaurus 文档**！
```

也可以在 `sidebars.js` 中明确创建侧边栏：

```js title="sidebars.js"
export default {
  tutorialSidebar: [
    'intro',
    // highlight-next-line
    'hello',
    {
      type: 'category',
      label: 'Tutorial',
      items: ['tutorial-basics/create-a-document'],
    },
  ],
};
``` 