const Generator = require('yeoman-generator')
const {mkdirp} = require("mkdirp");
const path = require("path");
const simpleGit = require('simple-git')


module.exports = class extends Generator {
  async prompting() {
    this.log(`Welcome to generator React + TS + Vite project!`)

    const prompts = [
      {
        type: 'input',
        name: "projectName",
        message: 'Please input your project name:',
        default: "React + TS + Vite"
      },
      {
        type: 'input',
        name: 'description',
        message: 'Please input project description:',
        default: 'a react + ts + vite project'
      },
      {
        type: 'input',
        name: 'author',
        message: "Author's Name",
        default: ''
      },
      {
        type: 'input',
        name: 'email',
        message: "Please input your email:",
        default: ''
      },
      {
        type: 'input',
        name: 'license',
        message: "Which license do you want to use?",
        default: 'MIT'
      }
    ]

    const answers = await this.prompt(prompts)
    this.answers = answers
  }

  writing() {
    simpleGit({
      baseDir: this.destinationRoot(),
      silent: true,
    }, (err) => {
      if (err) {
        this.log(`Failed to initialize Git repository: ${err}`);
        return;
      }

      this.log(`Git repository initialized`);
    });
    
    this.log('Writing...')
    

    this.fs.copyTpl(this.templatePath("package.json"), this.destinationPath("package.json"), {
      projectName: this.answers.projectName,
      description: this.answers.description,
      author: this.answers.author,
      email: this.answers.email,
      license: this.answers.license
    });

    const needCopyFiles = [
      '.editorconfig',
      '.eslintignore',
      '.eslintrc.js',
      '.gitignore',
      '.husky',
      '.npmrc',
      '.prettierrc',
      '.stylelintrc.js',
      '.vscode',
      'commitlint.config.js',
      'config-overrides.js',
      'index.html',
      'package.json',
      'public',
      'src',
      'test.js',
      'tsconfig.json',
      'tsconfig.node.json',
      'vite.config.ts'
    ]
    needCopyFiles.forEach(item => {
      this.fs.copyTpl(
        this.templatePath(item),
        this.destinationPath(item),
        this.answers
      )
    })
  }

  default() {
    if (path.basename(this.destinationPath()) !== this.answers.projectName) {
      this.log(`\nYour generator must be inside a folder named
        ${this.answers.projectName}\n
        I will automatically create this folder.\n`);

      mkdirp(this.answers.projectName);
      this.destinationRoot(this.destinationPath(this.answers.projectName));
    }
  }

}