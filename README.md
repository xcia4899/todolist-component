# Vue 3 + Vite TodoList 練習專案

使用 **Vue 3** 與 **Vite** 建立的 TodoList 專案，練習 **組件化設計**、**資料流管理** 與 **狀態更新**。
[展示 Demo](https://xcia4899.github.io/todolist-component/)
---

## 功能
-  新增待辦  
-  勾選完成  
-  刪除項目  
-  清除已完成  
-  編輯功能
---
## 技術要點
### Vue 3 語法與資料流
- **`<script setup>`**：簡化組件語法  
- **狀態管理**
  - `ref`：單一值或基本型別的響應式數據
- **組件溝通**
  - `props`：父元件傳資料到子元件
  - `emit`：子元件觸發事件回傳給父元件
- **資料保存**
  - `localStorage`：儲存待辦清單，重整後仍能保留  
### 樣式管理
- **Scoped CSS**：避免樣式互相污染  
- **全域 SCSS 變數配置**  
  - 在 `vite.config.js` 中設定 `preprocessorOptions` 引入全域變數
- **SCSS 模組化**  
  - `@use` / `@import` 拆分樣式檔案  
  - 支援變數、巢狀與模組化寫法  

---
## 學習重點
- Vue 3 組件化設計
- 單向資料流 (父傳子、子回父)
- 狀態更新與渲染
- SCSS 樣式管理 (變數、mixin、巢狀)
- 體驗 Vite 熱更新與快速開發

## 📂 專案架構
- src/
- ├─ components/ # 組件 (Top / Middle / Bottom)
- ├─ stores/ # Pinia 或狀態集中管理
- ├─ styles/ # 全域 SCSS、模組化樣式
- ├─ App.vue # 主結構
- └─ main.js # 入口
## 使用
```bash
# 安裝依賴
npm install

# 啟動開發伺服器
npm run dev

# 打包專案
npm run build

