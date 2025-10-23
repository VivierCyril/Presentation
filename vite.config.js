import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
    server: {
        port: 3000,
        open: 'src/index.html',
    },
    base: '/Presentation/',
    build: {
        outDir: 'dist',
        emptyOutDir: true,
        rollupOptions: {
            output: {
                assetFileNames: "assets/[name][extname]",
                chunkFileNames: "[name].js"
            },
            input: {
                main: resolve(__dirname, 'index.html'),
            },
        },
    },
});
