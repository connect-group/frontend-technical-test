# Frontend Technical Test for [TeamITG](https://teamitg.com/)

It is a quick coding challenge. It is important to note that it is not by any means a test, and there are no trick questions. We want to understand how you write code and solve problems. You are allowed to use search engines or StackOverflow during the session.

## System requirements
You’ll want to ensure you have the following already installed on your local machine before getting started with the test:
* **Node 12+:** The current LTS (long-term support) release. We like to use a [Node Version Manager like NVM](https://github.com/nvm-sh/nvm).
* **NPM 6+ or Yarn:** Both of these package managers have ups and downs, choose whichever you prefer. Follow the installation instructions for Yarn or NPM to make sure you're using the latest version.

## Setup Instructions
1. Clone this repository
2. Type the following command to install the dependencies and run the project
````
npm install && npm start
````

## Brief
We have a simple API that returns a list of vehicles as a JSON array. We would like you to read the API and display it as per the given designs ([Mobile](https://raw.githubusercontent.com/connect-group/frontend-technical-test/master/designs/mobile.png), [Tablet](https://raw.githubusercontent.com/connect-group/frontend-technical-test/master/designs/tablet.png), [Desktop](https://raw.githubusercontent.com/connect-group/frontend-technical-test/master/designs/desktop.png)). In addition, the list of vehicles should be ordered by the lowest price. Feel free to either use our pre-configured boilerplate or any other pre-configured environment for React or VanillaJS that you are familiar with.


### API End Points
List of all vehicles:<br />
http://localhost:8080/api/vehicles.json<br />

Each vehicle has an “apiUrl” which contains the detail of a vehicle e.g. the price or description. Example of a detail endpoint:<br />
http://localhost:8080/api/vehicle_fpace.json 


## Browser Support
We expect the solution to work in the latest version of Chrome

## Acceptance criteria

**We have a high focus on attention to details in code**
* Solution should be written in either Reactjs or VanillaJS
* The formatting of the codebase should be consistent and written in a modular approach
* We expect the codebase to be written using ES6+ and libraries kept to a minimum
* We expect the code to be written with unit testing & performance in mind
* We expect the code to be included in the relevant files
* We prefer native Browser Api over JS libraries
* Mobile-first development approach using min-width media queries
* Solution should be accessible and meet WCAG 2.1
* No CSS framework allowed
* Internally, we use BEM - but we are open to other CSS naming conventions as long as it's built with scale and maintenance in mind

**We have a high focus on attention to details in design**
* We expect the designs to match as closely as possible, ready for a designer to review
* Correct semantic HTML mark-up and/or CSS should be used to achieve the size and aspect ratio of the images in the design
* Interactions and animations to be considered but not distracting users away from the experience
* Minimal visual bugs when going resizing to mobile and large screen sizes

## Nice to have
If you have achieved primary tasks and would like to showcase your skills by implementing additional feature(s) then you can consider the following:
- An [accessible modal implementation](https://www.w3.org/TR/wai-aria-practices-1.1/#dialog_modal) which displays the additional vehicle information e.g. emission, bodystyle
- Implement "Read more" which Show/Hide additional vehicle information
- A staggered fade in vehicle cards on load
- Redux
- Anything else which we cannot think of!

## Tips
Use linting to format the code and autofix most of the formatting issues
```shell script
npm run lint
```
