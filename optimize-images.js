import { promises as fs } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import execa from 'execa';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const originalsDir = path.join(__dirname, 'originals');
const optimizedDir = path.join(__dirname, 'optimized');

const imageminCli = path.join(__dirname, 'node_modules', '.bin', 'imagemin');

async function optimizeImages() {
    try {
        await fs.mkdir(originalsDir, { recursive: true });
        await fs.mkdir(optimizedDir, { recursive: true });

        const originalFiles = await fs.readdir(originalsDir);
        const optimizedFiles = await fs.readdir(optimizedDir);

        const filesToOptimize = originalFiles.filter(file => !optimizedFiles.includes(file));

        if (filesToOptimize.length === 0) {
            console.log('All images are already optimized. Nothing to do.');
            return;
        }

        console.log(`Found ${filesToOptimize.length} new images to optimize...`);

        for (const file of filesToOptimize) {
            const sourcePath = path.join(originalsDir, file);
            const ext = path.extname(file).toLowerCase();

            console.log(`Optimizing ${file}...`);

            try {
                if (ext === '.jpg' || ext === '.jpeg') {
                                        await execa(imageminCli, [sourcePath, '--plugin=mozjpeg', `--out-dir=${optimizedDir}`]);
                } else if (ext === '.png') {
                    await execa(imageminCli, [sourcePath, '--plugin=pngquant', `--out-dir=${optimizedDir}`]);
                }
                console.log(`Successfully optimized ${file}.`);
            } catch (error) {
                console.error(`Failed to optimize ${file}:`, error.stderr || error.message);
            }
        }

        console.log('\nImage optimization complete.');

    } catch (error) {
        console.error('An error occurred during the optimization process:', error);
    }
}

optimizeImages();

