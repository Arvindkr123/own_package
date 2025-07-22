import { defineConfig } from "rollup"
import typescript from "@rollup/plugin-typescript"
export default defineConfig({
    input: 'src/index.tsx',
    output: {
        dir: 'dist',
        format: 'es',
        name: 'own-package'
    },
    external: ['react', 'react-dom'],
    plugins: [typescript({tsconfig:'tsconfig.json'})]
})