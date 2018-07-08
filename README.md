ionic-maphilight-example
========================

Example of using [Angular Maphilight](http://abdallamohamed.github.io/Angular-Maphilight) in an Ionic app

View the running app on [Heroku](https://ionic-maphilight-example.herokuapp.com/)

Development
-----------

Ensure you have executables on path:

    npm install -g cordova ionic gulp bower

Do once to initialize the app:

    ionic platform add ios
    ionic platform add android

    ionic plugin add https://github.com/apache/cordova-plugin-whitelist.git

Do each time dependencies have changed:

    npm install

See the app in the browser:

    ionic serve

To see the app on a device, connect a device with USB and run using one of the following commands:

    ionic cordova run android
    ionic cordova run ios

Continuous Integration
----------------------

### Circle CI

[Circle CI](https://circleci.com/) is a continuous integration service, which can monitor GitHub for new commits
to your repository and execute scripts such as building the app or running tests. Circle is 
configured using the `circle.yml` file. You need to sign up for Circle and enable this project, then
set up Heroku deployment from Circle. To make this work, you need to create a herokuapp and put the
name of that app in `circle.yml`.
