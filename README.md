# Vue 3 + Vite TodoList 練習專案

使用 **Vue 3** 與 **Vite** 建立的 TodoList 專案，練習 **組件化設計**、**資料流管理** 與 **狀態更新**。
[展示 Demo](https://xcia4899.github.io/todolist-component/)
---

## 功能
- ➕ 新增待辦  
- ✅ 勾選完成  
- ❌ 刪除項目  
- 🧹 清除已完成  
- 📦 組件化結構 (Top / Middle / Bottom)  
- 🎨 使用 **SCSS** 撰寫樣式，支援變數、巢狀與模組化
- `vite.config.js` **全域 SCSS 變數配置範例**
---
## 技術
- `<script setup>` 語法  
- `ref` / `reactive` 狀態管理  
- `props` 父傳子  
- Scoped CSS 避免樣式衝突  
- **SCSS 模組化**：`@use` / `@import` 管理樣式  
- 可自訂 **變數 / Mixin / 巢狀選擇器** 提升可維護性  
---
## 學習重點
- Vue 3 組件化設計
- 單向資料流 (父傳子、子回父)
- 狀態更新與渲染
- SCSS 樣式管理 (變數、mixin、巢狀)
- 體驗 Vite 熱更新與快速開發

## 使用
```bash
npm install
npm run dev
npm run build

