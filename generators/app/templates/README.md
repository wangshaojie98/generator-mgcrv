## 介绍

本项目为快捷报告。上传 excel-->准备分析数据-->生成 PDF-->查看报告列表-->下载 PDF

- 上传 excel：添加考试成绩、试卷结构
- 生成 PDF：根据上传的信息，快捷的生成 PDF 报告
- 查看列表
- 下载报告

## 环境域名

- dataguide.17zuoye.com
- dataguide.staging.17zuoye.net
- dataguide.test.17zuoye.net

## 开发

```
yarn install
yarn start
```

## 构建

```
yarn build
```

## 目录结构

- 单页

1. App.tsx 是入口文件
2. router 文件夹是路由信息
3. layout 文件的 Nav 组件引入 router 的信息当做菜单
4. pages 是页面目录

```
├── public
│   ├── index.html
├── src
│   ├── App.tsx
│   ├── components
│   ├── pages
│   ├── common
│   │   ├── api
│   │   └── styles
│   ├── layouts
│   ├── index.tsx
│   ├── router
│   ├── store
│   ├── index.scss
│   ├── widgets
│   │   └── request.ts
```

## Vite + React 项目存在的问题

### 使用图片可能 404

```
import PNG from '@/assets/images/xxx.png' // NOTE vite无法使用alias引入图片
```

解决办法有两种

```
// 使用相对路径
import PNG from '../../assets/images/xxx.png'

定义一个alias解析到/assets
vite.alias: {
  '/assets': 'src/assets'
}
import PNG from '/assets/images/xxx.png'
```
