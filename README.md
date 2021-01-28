Frontend Technical Test for [TeamITG](https://teamitg.com/)

## System requirements
You’ll want to ensure you have the following already installed on your local machine before getting started with the test:
* **Node 12+:** The current LTS (long-term support) release. We like to use a [Node Version Manager like NVM](https://github.com/nvm-sh/nvm).
* **NPM 6+ or Yarn:** Both of these package managers have ups and downs, choose whichever you prefer. Follow the installation instructions for Yarn or NPM to make sure you're using the latest version.

## Setup Instructions
1. Clone this repository
2. If your strength is Vanilla JS then switch branch using following command
```
git checkout feature/vanillajs
```
3. Type following command to install dependencies and run the project
````
npm install && npm start
````

## Task Instructions
1. You will receive a list of general vehicle information.
You are now required to traverse the API and make further calls to get vehicle-specific details such as price and description.
Ignore vehicles with broken apiUrl or without any price information from the results. All API related logic should be implemented
inside `getData()` available at `src/api/index.js`. React component `VehicleList` use `getData()` inside a custom hook `useData`.
No components are allowed to make any network request.

2. You are required to produce following design on a different viewport to match as closely as they can.
- [Mobile](https://raw.githubusercontent.com/connect-group/frontend-technical-test/master/designs/mobile.png)
- [Tablet](https://raw.githubusercontent.com/connect-group/frontend-technical-test/master/designs/tablet.png)
- [Desktop](https://raw.githubusercontent.com/connect-group/frontend-technical-test/master/designs/desktop.png)

## Browser Support
We expect solution to work in the latest version of Chrome

## Acceptance criteria

**We have a high focus on attention to detail in code**
* Solution should be written in either Reactjs or VanillaJS
* The formatting of the codebase should be consistent and written in a modular approach
* Internally, we use BEM - but we are open to other CSS naming conventions as long as it's built with scale and maintenance in mind
* We expect the codebase to be written using ES6+ and libraries kept to a minimum
* We expect code to be written with unit testing & performance in mind
* We expect the code to be included in the relevant files
* We prefer a native Browser Api over JS library
* Mobile-first development approach using min-width media queries
* Solution should be accessible and meet WCAG Level A
* No CSS framework allowed

**We have a high focus on attention to detail in design**
* We expect the designs to match as closely as they can
* Images to be cropped and sized correctly to designs using responsive picture
* Interactions and animations to be considered but not distracting users away from the experience
* Minimal visual bugs when going resizing to mobile and large screen sizes

## Nice to have
If you have achieved primary tasks and would like to showcase your skills by implementing additional feature(s) then you can consider following.
- An [accessible modal implementation](https://www.w3.org/TR/wai-aria-practices-1.1/#dialog_modal) which displays the additional vehicle information e.g. emission, bodystyle
- Implement "Read more" which Show/Hide additional vehicle information
- A staggered fade in vehicle cards on load
- Redux
- Anything else which we cannot think of!

## Tips
Use linting to format code and autofix most of the formatting issues
```shell script
npm run lint
```
