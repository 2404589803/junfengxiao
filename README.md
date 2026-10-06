# junfengxiao｜肖君枫学术主页

这是一个基于 Vue 3 和 Vite 构建的学术个人主页，内容来自个人简历，涵盖 AI 工程、模型评测、Agent 系统、项目经历、开源贡献与教育经历。

## 在线地址

- [GitHub Pages](https://2404589803.github.io/junfengxiao/)

向 `master` 或 `main` 分支推送后，会触发 `.github/workflows/deploy-github-pages.yml`，自动构建并发布到 GitHub Pages。

GitHub Pages 使用项目路径和 Hash 路由，项目页地址为 `/junfengxiao/`；Cloudflare Pages 使用根路径和普通 History 路由。

## 技术栈

- Vue 3
- TypeScript
- Vue Router
- Vue I18n（中文 / English）
- Vite
- CSS 响应式布局

## 本地开发

安装依赖并启动开发服务器：

```bash
npm install
npm run dev
```

构建生产文件：

```bash
npm run build
```

预览生产构建：

```bash
npm run preview
```

## 内容位置

- `src/i18n/index.ts`：中文和英文简历内容
- `src/components/Home.vue`：主页结构
- `src/components/Projects.vue`：项目与成果页面
- `src/style.css`：学术风格与响应式样式
- `public/0007.jpg`：主页头像

## 部署说明

仓库为公开仓库，因此 GitHub Pages 使用 GitHub Free 即可运行。工作流执行 `npm install` 和 `npm run build`，代码推送后自动发布到 GitHub Pages。

## 许可证

MIT
