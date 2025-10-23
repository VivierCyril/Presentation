import { defineConfig } from 'vite';
import { viteStaticCopy } from 'vite-plugin-static-copy';
import { resolve } from 'path';
import { globby } from 'globby';

async function getSlidePaths() {
    // Liste tous les dossiers de slides dans src/slides/
    const slideFolders = await globby(['src/*/index.html']);
    return slideFolders.map((path) => path.replace('src/', ''));
}
export default defineConfig(async () => {

    const slidePaths = await getSlidePaths();

    return {
        server: {
            port: 3000,
            open: true,
        },
        base: '/presentation/', // Ajuste selon le nom de ton dépôt
        plugins: [
            viteStaticCopy({
                targets: [
                    {
                        src: 'src/**/*', // Copie tous les fichiers et sous-dossiers
                        dest: 'slides',
                    },
                ],
            }),
        ],
        build: {
            outDir: 'dist',
            emptyOutDir: true,
        },
    }
});
