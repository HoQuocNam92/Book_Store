import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/Book_Store/', // Đảm bảo chỉ sử dụng tên repository, không phải URL đầy đủ
});
