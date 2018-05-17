# MotorK Front End Assignment

## Assignment

You have to work on an existing application:
 
 * the application must be usable from the most common mobile, tablet and desktop devices;
 * the application must be compatible with IE11;
 * the application must contain an image gallery, located under the `gallery` tab;
 * the code must be modularized;
 * the form must go under a validation process and handle a file upload via Ajax (there's no API provided, so just mock the flow);
 * every new interaction added must get along with the existing ones;
 * refactor old legacy jQuery code (choose what you think has the major impact).
 
We've already stubbed the structure of the application, here's a rundown of the various folders:

 * `data` contains the JSON used to build the gallery
 * `src` contains all the source code (you should spend most of your time here)


## Technologies

The following technologies must be employed:

 * ES6
 * SCSS
 
The following technologies can be employed:

 * Vue.js
 * Grunt
 * Webpack


## Usage

Run `npm i`: a local server will start and serve the app at [http://0.0.0.0:8080/](http://0.0.0.0:8080/)


### API

You can retrieve a static JSON useful to build the gallery by calling `/data/cars.json`, once the local server is running.


### Tests

No test suite is provided, but introducing tests is considered a significant plus.



### Responsive design

Replicate the responsive behaviour seen in this [GIF](./responsive.gif).
