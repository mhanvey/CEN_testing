# Testing 

## Installation

The first step in testing is installation. These steps will ensure that the proper tools are in place so that the tests can be run correctly and ensure the application runs as intended. 

### Prerequisite Installations
To work test with the following frameworks, Node.js and Meanjs must be properly installed and functioning. 
#### Node.js
For Windows:  
 - Install Node.jsv5.3.0 at https://nodejs.org/en/download/releases/

For Mac/ Linux:
- Make a new global npm folder:
```
$mkdir ~/.npm_global
```
- Set global prefix to previously created folder:
```
$npm config set prefix '~/.npm_global'
```

- Find either the file '.bash_profile' or '.profile' and paste the following:
```
export PATH=~/.npm_global/bin:$PATH
```
- For Linux, npm might not be bundled. If so, use the prefered package manager to install.

There are some required node packages must also be installed as follows:
```
$npm install -g bower
$npm install -g grunt-cli
$npm install -g yo
$npm install -g generator-meanjs
```
#### Meanjs
To generate the mean.js stack:
- Locate the mean stack repository.
- Run Yeoman:
```
$yo meanjs
```
- Pick 0.4.2 when prompted.
- Run as a backup to ensure all installations:
```
$npm install
```
A full tutorial of the previous installation process can be accessed here: https://docs.google.com/document/d/1Vj3NJlzzqpkeg9a73v0R26lgqnYwoV7kgZ_MxMLk6S8/edit?usp=sharing.

### Jasmine
Jasmine is the testing suite framework for testing front end application work. 

To install, use npm:
```
$npm install -g jasmine
```

### Mocha
Mocha is the back end framework for running tests. 

To install, use npm:
```
$npm install -g mocha
```

### Karma
Karma is the testing environment used for front end testing that works with the Jasmine framework. 

To install, use npm:
```
$npm install karma --save-dev
```
Additionally, Karma may require some plug ins, such as Jasmine and Chrome Launcher. This also can be installed using npm:
```
$npm install karma-jasmine karma-chrome-launcher --save-dev
```
Since it is easier and more convenient to run Karma from the command line, it can be installed with npm:
```
$npm install -g karma-cli
```

### Protractor
Protractor is the testing environment used for running end-2-end tests on an application. 

To install, use npm:
```
$npm install -g protractor
```
Additionally, a helper tool, webdriver-manager, can be installed to have a Selenium Server run, which outputs information logs and is available at http://localhost:4444/wd/hub. The necessary code to download the necessary binaries and start the server to contain the outputs, respectively, is as follows:

```
$webdriver-manager update
$webdriver-manager start
```

## Command Line Testing
The aforementioned testing mechanisms can all be run through the command line. 

### Jasmine

To initialize a Jasmine project, type in the command line:
```
$jasmine init
```

To run tests through Jasmine, type in the command line:
```
$jasmine
```

### Mocha

In order to create a test file, make a test directory and a test file, respectively, in the following way:
```
$mkdir test
$ $EDITOR test/test.js
```

To run mocha tests, type in the command line:
```
$make test
```

To run tests with interfaces included, update the code to say the following:
```
$make test-all
```

If the reporter needs to be altared, type the following in the commmand line:
```
$make test REPORTER=list
```

### Karma 

To run the local version of Karma, type the following into the command line:
```
$karma
```

### Protractor

To run Protractor, type the following:
```
$protractor conf.js
```
where conf.js is the configuration file. 

### Links

For additional information on installation and the testing systems to be used.

- Jasmine: http://jasmine.github.io/
- Mocha: https://github.com/mochajs/mocha
- Karma: https://karma-runner.github.io/0.13/index.html
- Protractor: http://www.protractortest.org/#/
