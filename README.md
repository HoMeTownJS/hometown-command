<p align="center">
  <img width="220px" src="https://github.com/HoMeTownJS/site/blob/main/public/images/logo-vertical.png?raw=true" />
</p>
<p align="center"><b>β¨@hometownjs/command π₯</b></p>
<p align="center">HoMeTownJS's command tools..</p>

### What

@hometownjs/command is a command tools, Built-in multiple auxiliary scripts for developers to use, including git, npm and other dimensions.

Provide commands:

- π¦ [hometown set-npmreg](https://github.com/HoMeTownJS/hometown-command#set-npmreg)
- π [hometown set-npmreg-taobao](https://github.com/HoMeTownJS/hometown-command#set-npmreg-taobao)
- π [hometown git-commit](https://github.com/HoMeTownJS/hometown-command#git-commit)
- π¦ [hometown cleanup](https://github.com/HoMeTownJS/hometown-command#cleanup)
- πͺ± [hometown git-commit-verify](https://github.com/HoMeTownJS/hometown-command#git-commit-verify)
- π¬ [hometown init-git-hooks](https://github.com/HoMeTownJS/hometown-command#init-git-hooks)
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

There are three steps to generate git-commitοΌ

- types
- scopes
- description

The configuration is as follows:

```js
export const types = [
  { value: 'init', title: 'init:     ι‘Ήη?εε§ε' },
  { value: 'feat', title: 'feat:     ζ·»ε ζ°ηΉζ§' },
  { value: 'fix', title: 'fix:      δΏ?ε€bug' },
  { value: 'docs', title: 'docs:     δ»δ»δΏ?ζΉζζ‘£' },
  { value: 'style', title: 'style:    δ»δ»δΏ?ζΉδΊη©Ίζ Όγζ ΌεΌηΌ©θΏγιε·η­η­οΌδΈζΉεδ»£η ι»θΎ' },
  { value: 'refactor', title: 'refactor: δ»£η ιζοΌζ²‘ζε ζ°εθ½ζθδΏ?ε€bug' },
  { value: 'perf', title: 'perf:     δΌεηΈε³οΌζ―ε¦ζεζ§θ½γδ½ιͺ' },
  { value: 'test', title: 'test:     ζ·»ε ζ΅θ―η¨δΎ' },
  { value: 'build', title: 'build:    δΎθ΅ηΈε³ηεε?Ή' },
  { value: 'ci', title: 'ci:       CIιη½?ηΈε³οΌδΎε¦ε―Ήk8sοΌdockerηιη½?ζδ»ΆηδΏ?ζΉ' },
  { value: 'chore', title: 'chore:    ζΉεζε»Ίζ΅η¨γζθε’ε δΎθ΅εΊγε·₯ε·η­' },
  { value: 'revert', title: 'revert:   εζ»ε°δΈδΈδΈͺηζ¬' }
];
export const scopes = [
  ['projects', 'ι‘Ήη?ζ­ε»Ί'],
  ['components', 'η»δ»ΆηΈε³'],
  ['hooks', 'hook ηΈε³'],
  ['utils', 'utils ηΈε³'],
  ['types', 'tsη±»εηΈε³'],
  ['styles', 'ζ ·εΌηΈε³'],
  ['deps', 'ι‘Ήη?δΎθ΅'],
  ['auth', 'ε―Ή auth δΏ?ζΉ'],
  ['release', 'ηζ¬εεΈ'],
  ['other', 'εΆδ»δΏ?ζΉ']
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

[HoMeTown](https://juejin.cn/user/4116184668057390) π
