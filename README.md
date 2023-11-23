# TypeScript + Rollup 开发工具库
## 初始化项目
```
npm init
```
## 安装依赖
依赖 | 作用
--- | --- 
rollup | JavaScript模块打包器，可以将小块代码编译成大块复杂的代码
rollup-plugin-dts | 生成`d.ts`文件
rollup-plugin-esbuild | Rollup 和 Esbuild 之间的集成
rollup-plugin-typescript2 | Rollup 和 TypeScript 之间的集成
@rollup/plugin-node-resolve | 在 node_modules 中找到并捆绑第三方依赖项
@rollup/plugin-commonjs | 将 CommonJS 模块转换为 ES6
@rollup/plugin-json | 将 .json 文件转换为 ES6 模块
@rollup/plugin-alias | 定义和解析捆绑包依赖项的别名
@rollup/plugin-babel | 使用 Babel 编译文件
@babel/core | Babel 核心库
@babel/cli | 
@babel/plugin-proposal-class-properties | 
@babel/plugin-transform-classes | 
@babel/plugin-transform-runtime | 
@babel/preset-env | 
@babel/preset-typescript | 
esbuild | Esbuild 核心库
 |  

**babel 相关依赖的版本大等级需保持一致**
## Rollup 配置
```
import path from 'path'
import {fileURLToPath} from 'url'
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

import rollupTypescript from 'rollup-plugin-typescript2'
import babel, { getBabelOutputPlugin } from '@rollup/plugin-babel'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import { DEFAULT_EXTENSIONS } from '@babel/core'

import pkg from './package.json' assert { type: 'json' }

const paths = {
  input: path.join(__dirname, '/src/index.ts'),
  output: path.join(__dirname, '/lib')
}

const rollupConfig = {
  input: paths.input,
  output: [
    // 输出 commonjs 规范的代码
    {
      file: path.join(paths.output, 'index.js'),
      format: 'cjs',
      name: pkg.name
    },
    // 输出 es 规范的代码
    {
      file: path.join(paths.output, 'index.esm.js'),
      format: 'es',
      name: pkg.name
    }
  ],
  plugins: [
    // 使得 rollup 支持 commonjs 规范，识别 commonjs 规范的依赖
    commonjs(),
    // 配合 commonjs 解析第三方模块
    resolve(),
    rollupTypescript(),
    getBabelOutputPlugin({
      configFile: path.resolve(__dirname, '.babelrc'),
      allowAllFormats: true
    }),
    babel({
      babelHelpers: 'runtime',
      skipPreflightCheck: true,
      exclude: '**/node_modules/**',
      extensions: [
        ...DEFAULT_EXTENSIONS,
        '.ts'
      ]
    })
  ]
}

export default rollupConfig
```
## 配置 .babelrc
```
{
  "presets": [
    "@babel/preset-env"
  ],
  "plugins": [
    [
      "@babel/plugin-proposal-class-properties",
      { "loose": true }
    ],
    [
      "@babel/plugin-transform-runtime",
      { "corejs": 2 }
    ],
    [
      "@babel/plugin-transform-classes"
    ]
  ]
}
```