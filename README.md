<p align="center">
  <img width="220px" src="https://i.ibb.co/wWQbf6t/i-va-7.png" />
</p>
<p align="center"><b>✨@hometownjs/command 💥</b></p>
<p align="center">HoMeTownJS's command tools..</p>

### What

@hometownjs/command is a command tools, Built-in multiple auxiliary scripts for developers to use, including git, npm and other dimensions.

Provide commands:

- 🦋 [hometown set-npmreg](https://github.com/HoMeTownJS/hometown-command#set-npmreg)
- 🐞 [hometown set-npmreg-taobao](https://github.com/HoMeTownJS/hometown-command#set-npmreg-taobao)
- 🐝 [hometown git-commit](https://github.com/HoMeTownJS/hometown-command#git-commit)
- 🦇 [hometown cleanup](https://github.com/HoMeTownJS/hometown-command#cleanup)
- 🪱 [hometown git-commit-verify](https://github.com/HoMeTownJS/hometown-command#git-commit-verify)
- 🐬 [hometown init-git-hooks](https://github.com/HoMeTownJS/hometown-command#init-git-hooks)
- ...

### Install

```bash
npm install @hometownjs/command --save-dev
```

### Usage

#### Terminal

```bash
hmt [commandname]
# or
hometown [commandname]
```

#### package.json (**more recommend**)

Because of the configuration of some items, the error that the command cannot be found may be reported when directly used at the terminal. Therefore, it is more recommended to configure scripts in package.json.

```json
{
  "scripts": {
    "set-npmreg": "hometown set-npmreg"
  }
}
```

Execute command

```bash
# npm
npm run set-npmreg
# pnpm
pnpm set-npmreg
# yarn
yarn set-npmreg
```

### Commands

#### set-npmreg

Set the official image source of npm.When the setting is successful, you will be prompted `success!!!`

#### set-npmreg-taobao

Set the TaoBao image source of npm.When the setting is successful, you will be prompted `success!!!`

#### git-commit

Generate git commit conforming to Angular specification.

There are three steps to generate git-commit：

- types
- scopes
- description

The configuration is as follows:

```js
export const types = [
  { value: 'init', title: 'init:     项目初始化' },
  { value: 'feat', title: 'feat:     添加新特性' },
  { value: 'fix', title: 'fix:      修复bug' },
  { value: 'docs', title: 'docs:     仅仅修改文档' },
  { value: 'style', title: 'style:    仅仅修改了空格、格式缩进、逗号等等，不改变代码逻辑' },
  { value: 'refactor', title: 'refactor: 代码重构，没有加新功能或者修复bug' },
  { value: 'perf', title: 'perf:     优化相关，比如提升性能、体验' },
  { value: 'test', title: 'test:     添加测试用例' },
  { value: 'build', title: 'build:    依赖相关的内容' },
  { value: 'ci', title: 'ci:       CI配置相关，例如对k8s，docker的配置文件的修改' },
  { value: 'chore', title: 'chore:    改变构建流程、或者增加依赖库、工具等' },
  { value: 'revert', title: 'revert:   回滚到上一个版本' }
];
export const scopes = [
  ['projects', '项目搭建'],
  ['components', '组件相关'],
  ['hooks', 'hook 相关'],
  ['utils', 'utils 相关'],
  ['types', 'ts类型相关'],
  ['styles', '样式相关'],
  ['deps', '项目依赖'],
  ['auth', '对 auth 修改'],
  ['release', '版本发布'],
  ['other', '其他修改']
]
```

#### cleanup

Emptying dependencies and building artifacts.

tagrgets:

```text
node_modules
dist
package-lock.json
yarn.lock
pnpm-lock.yaml
./**/node_modules
./**/dist
./**/package-lock.json
./**/yarn.lock
./**/pnpm-lock.yaml
```

#### git-commit-verify

Verify whether the commit of git conforms to the Angular specification.

#### init-git-hooks

Initialize git hook.

Firsd u need install this:

```bash
npm install simple-git-hooks --save-dev
```

Then add config to package.json:

```text
  "simple-git-hooks": {
    "commit-msg": "pnpm hometown git-commit-verify",
    "pre-commit": "pnpm exec lint-staged --concurrent false"
  }
```

Final just commit.Commit will execute the hook here.

#### update-pkg(use with caution)

Upgrade Dependency, This operation will update all your dependent versions. **So be careful!!!**.

## Author

[HoMeTown](https://juejin.cn/user/4116184668057390) 🙊
