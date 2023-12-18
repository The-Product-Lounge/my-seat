/// <reference types="vitest" />
import path from "path";
import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

export default defineConfig({
	plugins: [react(), stubNextAssetImport()],
	test: {
		environment: "happy-dom",
		setupFiles: "./src/setUpTests.ts",
	},
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "./src"),
		},
	},
});

function stubNextAssetImport() {
	return {
		name: "stub-next-asset-import",
		transform(_code: string, id: string) {
			if (/(jpg|jpeg|png|webp|gif|svg)$/.test(id)) {
				const imgSrc = path.relative(process.cwd(), id);
				return {
					code: `export default {
            	 	src: '/img.jpg',
            		height: 40,
            		width: 40,
            		blurDataURL: 'data:image/png;base64,imagedata',
          			}`,
				};
			}
		},
	};
}
