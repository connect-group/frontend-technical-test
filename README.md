Frontend Technical Test for Connect Group [www.connect-group.com](http://www.connect-group.com/)

#### Requirements
* [Node.js](https://nodejs.org/en/)(6.x.x)
* Gulp

### Setup Instructions
Clone this repository. Then in command line type.
````
npm install && gulp default

````

Once complete navigation to [http://localhost:9988/](http://localhost:9988/)

### Task Instructions

The task is to pull vehicle information out the express server running at the above url. You will receive a list of general vehicle information. You are now required to traverse the API and make further calls to get vehicle-specific information such as price and description. Example mobile, tablet & desktop designs have been provided. You are required to produce a similar layout for your component.

* 'src/api/index.js' -> This is where you will make all your API calls from. An example ajax request has been provided for you.
* 'src/components/VehicleList.js' -> Here is your example view file. We have provided an example on how to get data to your component.

**The example app is using React. You can change this to whatever framework you feel comfortable with**

#### API URLS
* [http://localhost:9988/api/vehicle](http://localhost:9988/api/vehicle)
* [http://localhost:9988/api/vehicle/{id}](http://localhost:9988/api/vehicle/xe)

### Testing:

You have the following test libraries available through ```` gulp test ````
* Mocha [https://github.com/mochajs/mocha](https://github.com/mochajs/mocha)
* Chai [https://github.com/chaijs/chai](https://github.com/chaijs/chai)
* Sinon [https://github.com/sinonjs/sinon](https://github.com/sinonjs/sinon)
* Enzyme [https://github.com/airbnb/enzyme](https://github.com/airbnb/enzyme)
