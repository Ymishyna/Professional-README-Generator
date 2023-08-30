# Professional-README-Generator

## Description

When creating an open source project on GitHub, it’s important to have a high-quality README for the app. This should include what the app is for, how to use the app, how to install it, how to report issues, and how to make contributions-this last part increases the likelihood that other developers will contribute to the success of the project. 

A command-line application will allow for quick and easy generation of professional README to get started quickly.  This allows the project creator to devote more time to working on the project.

## Table of Contents 
- [User Story](#user-story)
- [Acceptance Criteria](#acceptance-criteria)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Screen Capture](#screen-capture)
- [Walkthrough Video](#walkthrough-video)
- [Questions](#questions)


## User Story

```md
AS A developer
I WANT a README generator
SO THAT I can quickly create a professional README for a new project
```

## Acceptance Criteria

```md
GIVEN a command-line application that accepts user input
WHEN I am prompted for information about my application repository
THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
WHEN I enter my project title
THEN this is displayed as the title of the README
WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
WHEN I choose a license for my application from a list of options
THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
WHEN I enter my GitHub username
THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
WHEN I enter my email address
THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
WHEN I click on the links in the Table of Contents
THEN I am taken to the corresponding section of the README
```

## Installation

1. Download the zip file and copy it to a directory of your choice or clone to a directory of your choice using your terminal. 
2. Open the file in VS Code or any editor you prefer.
3. Open the terminal in VS Code and make sure you’re in the correct directory.
4. Create a `.gitignore` file and include `node_modules/` and `.DS_Store/` so that your `node_modules` directory isn't tracked or uploaded to GitHub. Be sure to create your `.gitignore` file before installing any npm dependencies.
5. Make sure that your repo includes a `package.json` with the required dependencies. You can create one by running `npm init` when you first set up the project, before installing any dependencies.
6. Ensure inquirer is installed [Inquirer package](https://www.npmjs.com/package/inquirer/v/8.2.4). Run `npm i` to install dependencies in local project directory.

## Usage

1. Open your terminal.
2. The application will be invoked by using the following command:

```bash
node index.js
```

3. Answer questions that follow.
4. A sampleREADME.md will be generated and stored in "utils" folder.

## Contributing

Any Contribution is more than welcome!

## Screen Capture

The following gif shows the application's appearance and functionality:

![](/assets/images/Screen-Capture.gif)

## Walkthrough Video

```
Disclaimer: The following video provides an illustrative example of how to respond to prompts using the given content. It is intended solely for instructional purposes and to showcase the concept. Users are encouraged to utilize their own responses, thoughts, and ideas when interacting with prompts to achieve personalized and authentic outcomes. The video's content should not be considered prescriptive or definitive, as individual preferences, opinions, and circumstances vary. Viewer discretion is advised, and any actions taken based on the video's content are the responsibility of the user.

````
[Walkthrough Video Link](https://drive.google.com/file/d/1YaBPneuHR064uLPLOAY6Wbn2NW87WFdT/view?usp=sharing)

## Questions

If you have any question, Email me at: yana.mishina.92@gmail.com

Find me on GitHub: [Ymishyna](https://github.com/Ymishyna)




