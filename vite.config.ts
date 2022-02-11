import { defineConfig } from 'vite';
import path from "path";
import solidPlugin from 'vite-plugin-solid';

export default defineConfig({
  plugins: [solidPlugin()],
	root:path.join(__dirname, "src/pages"),
  build: {
    target: 'esnext',
		outDir: path.join(__dirname, "dist"),
		rollupOptions: {
			input: {
				index: path.resolve(`${__dirname}`, 'src/pages/index.html')
			},
		},
  },
});
