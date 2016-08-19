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
To initialize a Jasmine project, type in the command line:
```
$jasmine init
```

To run tests through Jasmine, type in the command line:
```
$jasmine
```

### Mocha
Mocha is the back end framework for running tests. 

To install, use npm:
```
$npm install -g mocha
```
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
To run the local version of Karma, type the following into the command line:
```
$karma
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

To run Protractor, type the following:
```
$protractor conf.js
```
where conf.js is the configuration file. 

# Writing Tests in Jasmine
Here is an overview of how to construct a test in Jasmine.

The different elements of Jasmine tests include: suites, specs, expectations, spies, clock, and asynchronous support. Each of these provides its own unique function in ensuring that the tests properly ensure that the program runs as planned.

## Suites
A suite is a Jasmine function that is identified by describe. The parameters of a suite are a string, which is the title of the test, and a function, which is the code that is implemented within the suite block. For example, here is a suite with the title "This is the title" and the function which would contain additional code:
```
describe("This is the title", function(){
    ...additional code...
}
```
Suites can contain any code within them which is necessary to actually implement the tests. The rules for scoping are those of Javascript. 

## Specs
A spec is a Jasmine function that is identified by it. For it, the parameters are again the title of the test and a function which contains the actual test. This test is composed of one or more expectations which produce a Boolean response, where true is a passing test and false fails. Here is an example of a spec, within a suite, with the title "and this is the title of the spec" and the function which would contain code to test whatever aspect is under scrutiny :
```
describe("This is the title", function(){
    ...code...
    it("and this is the title of the spec", function(){
        ...code...
    }
}
```
Like suites, specs can contain any code within them that is needed for the tests and Javascript scoping applies. The variables that are created in the describe function are available to the specs within the suite. If planned wisely, the title of the describe parameters and that of the it paramaters can form a sentence to explain the tests being performed.  

## Expectations

The expectations are the code within the describe and it blocks which actually execute the desired tests. This expect function is paired with a matcher value, which will hopefully prove the expected value to be true when compared to the actual value.

### Matchers
Matchers are different functions that implement a boolean comparison between the value expected to be produced and the value that is actually produced. When the matchers are called, Jasmine passes or fails the spec it is within.

There are many various types of matchers, all following the code:
```
expect(value).
```
where value is the actual value produced.

Here are some examples of matchers that can be called through Jasmine:

- expect(actualValue).toBe(expectedValue), which holds the same function as == in Java, meaning the test checks if the actual value is equal to the expected value.
- expect(actualValue).not.toBe(expectedValue), which produces the opposite of the toBe function, meaning this checks if the actual value is not equal to the expected value. This matcher can be used to negate any other matcher.
- expect(actualValue).toEqual(expectedValue), which checks if the actual and expected values are equal for literals, variables, and objects.
- expect(actualValue).toMatch(expectedValue), which checks if the actual and expected values are equal for regular expressions. 
- expect(actualValue).toBeDefined(), which compares the value against the undefined,
- expect(actualValue).toBeUndefined(), which compares the value against the undefined as well, but with undefined as passing the test and defined as failing. 
- expect(actualValue).toBeNull(), which compares the value to null.
- expect(actualValue).toBeTruthy(), which tests if the value is true, which in this case means it is not falsy.
- expect(actualValue).toBeFalsy(), which tests if the value is falsy, meaning the value is equal to false, -, "", undefined, null, or NaN.
- expect(actualArray).toContain("expected"), which tests if the item "expected" is found in the array, actualArray.
- expect(actualValue).toBeLessThan(expectedValue), which is equivalent to the mathematical computation <, so testing if actualValue < expectedValue.
- expect(actualValue).toBeGreaterThan(expectedValue), which is equivalent to the mathematical computation >, so testing if actualValue > expectedValue.
- expect(actualValue).toBeCloseTo(expectedValue, decimalPlaces), which rounds the actual value to see if it is within decimalPlaces decimal places rounded to the expectedValue.
- expect(actualFunction).toThrow(), which tests if when actualFunction is called, an exception is thrown.
- expect(actualFunction).toThrowError("error"), which tests for a specific thrown exception.

#### Creating new matchers
If the necessary function is not performed by one of the provided matchers, it is possible to create a new matcher. The actual value will still be compared to the expected value. The call to Jasmine is made within beforeEach functions so that it can be accessed in the describe function. 

In the matcher factory, 2 parameters need to be passed.
- util, which is the set of utility functions that the matcher will use
-  and customEqualityTesters, which are passed if util.equals is called.

The matcher header, match, should look like this:
```
match: function(util, customEqualityTesters){
```
The matcher should return an object that includes a compare function with the actual and expected values, such as:
```
return{
    compare: function(actual, expected){
```
which gets the value passed to be tested as the first argument and the value the matcher will use as a comparison as the second argument.
The result must be an object with a pass property that can tell if the matcher was successful (true) or not. For example:
```
result.pass = util.equals(actual.property, "expectedProperty" + expected, customEqualityTesters)
```
When the tests fails, the failure message for a custom matcher is undefined. Jasmine will try to make its own failure messages for created matchers. If the matcher succeeds but the .not or an equivalent is used, the message should have a negative expectation. If the matcher fails, the failure message must have a positive expectations. Below is an example of how to form those messgaes:
```
if(result.pass){
    result.message = "expected " + actual + " was more true than expected."
} else{
    result.message = "expected " + actual + " was not what was expected."
}
```

Negative comparators can also be used to invoke when .not is present as negativeCompare.

To register the newly created matcher with Jasmine, define it within the describe block in a beforeEach function as so:
```
beforeEach(function(){
    jasmine.addMatchers(customMatchers);
}
```
After registered in that way, the matcher can be used throughout the describe block. 

### Fail functions
If the fail function is called, it causes the spec to fail with a message or an error object, like so:
```
fail("Insert message here.");
```

## Group related specs within describes
Specs can be grouped together within describes when they are related. If the specs are named well, they should read as full sentences with the strings of the describes.

### Set up
In setting up the describe code for the function to be performed, somethings may need to be done before the specs. There are two ways to do so.
```
beforeEach(function(){
    ...function code...
}
``` 
The beforeEach function performs the given code once before each spec.
```
beforeAll(function(){
    ...function code...
}
```
The beforeAll function performs the given code only once before all specs.

### Tear down
Similarly, when tearing down the code, certain functions may need to be perfomed. There are two ways to do this as well in the same manner. 
```
afterEach(function(){
    ... function code...
}
```
This function is called once after each spec. 
```
afterAll(function(){
    ...function code...
}
```
The afterAll() call is made only once after all specs are finsihed. 

### This
The this function for each spec in the beforeEach, it, and afterEach calls is the same object. For the next spec, this is set back to empty.

## Nesting describe blocks
Describes and specs can be found at any level of the code, allowing the testing code to be a tree of functionality. Before a spec, the beforeEach() calls are made in the order the tree presents and the afterEach() calls are made the same way after the spec. There can be multiple expectations within a spec. Describes can be nested in other describes to explain the code within, and that code can reference the scopes for either as is needed. 

## Disabling suites
To disable a suite, a special command can be used so that the suites and specs inside are skipped when the test is ran and the results do not appear:
```
xdescribe("disabled", function(){
    ...disabled code...
});
```

## Pending specs
There are multiple ways to show that a spec is pending. 

- The xit code causes a pending spec that does not run, but the name "pending spec" shows up as pending in the results. 
```
xit("pending spec", function(){
    ...pending spec...
})
```

- When a spec has a function without a body, it shows up in the results as pending.
```
it("bodiless spec", function(){});
```
- When a function contains a call pending, no matter what the function will be considered pending and the string passed is considered the reason. This string is displayed after the suite. 
```
it("calls pending", function(){
    expect(a).toBe(b);
    pending('This is the reason the spec is pending.');
});
```

## Spies
Spies are tests for double functions, meaning it can stub any function and track the calls that are made to it and its arguments. These are only defined within their specific suite or spec. 
The function to call to a spy is:
```
spyOn(var, "function");
```
where var is the variabke that is being spied on and the function is actual function within the variable.

Within this call, a few expect statements can occur. They are:
```
expect(var, "function").toHaveBeenCalled();
```
which passes as true if the spy was called, 
```
expect(var, "function").toHaveBeenCalledTimes(num);
```
which passes if the spy is called num number of times, and
```
expect(var, "function").toHaveBeenCalledWith(params);
```
which would return true if the arguments list matches any calls to the spy. 

Additionally, there are more calls that can be used with spies. Some examples are:
- callThrough, which tracks all calls to the spy, var.function, but delegates to the actual implementation:
```
spyOn(var, "function").and.callThrough();
```
- returnValue/ returnValues, in which all calls to the function return the value or values until the end of values which then returns undefined value:
```
spyOn(var, function).and.returnValue(value);
spyOn(var, "function").and.returnValues(value1, value2...);
```
- callFake, which causes all calls to the spy to supply the given function:
```
spyOn(var, "function").and.callFake(function(){
    return fakeReturn
    });
);
```
- throwError, which makes all calls to the spy throw the specified error with a spec that afterwards contains the .toThrowError("error") call:
```
spyOn(var, "function").and.throwError("errorValue");
```
- stub, which calls the original callThrough command but then the original stub behavior is returned. 
```
spyOn(var, "function").and.callThrough();
var.function.and.stub();
```

There are other tracking calls which call to spies tracked on calls. These follow the spyOn(var, "function")... syntax. Some are as follows:
- .calls.any(), which retunrs as false if the spy has not been called and is trye if the spy is called at least once. 
- .calls.count(), which returns the number of times the spy is valled. It can be followed by the .toEqual call or any comparison call if needed.
- .calls.argsFor(index), which returns the arguments passed to the call number index.
- .calls.allArgs(), which returns all arguments for all calls.
- .calls.all(), which returns context, which is the variable this, and the arguments passed for all calls. 
- calls.mostRecent(), which is a shortcut to the most recent this object and arguments.
- .calls.first(), which automatically gets te first this and arguments. 
- .calls.reset(), which clears the spy tracking.

### Creating a new spy
The Jasmine call
```
jasmine.createSpy
```
creates a bare spy which acts like the other spies but without any implementation behind it. The implementation should be Javascript. 

The createSpy object is used to create mock with multiple spies. This passes an array of strings and returns the onject with the property for each string as a spy.
```
jasmine.createSpyObj(...)
```
The toBeDefined() call creates spies. 

## Match anything 
Through
```
jasmine.any(...);
```
the constructor or class name is taken as expected. The test is passed as true if the constructor matches the constructor of the actual value within the any, an object, number, or function can be put within. 

## Match existence
With the call
```
jasmine.anything();
```
the returned value is true if the actual value is not null or undefined. 

## Partial matching
When the expectation needs a cretain key and value pair in the actual value, the call:
```
jasmine.objectContaining({
    var:"value"
})
```
can be used, where var is the object name and value is that var's value.

## Partial array matching
When the expectation only cares about some values in an array, the call:
```
jasmine.arrayContaining([value1, value2,...]);
```
should be used with the value1, value2,... values as the values that are being looked for in the array.

## String matching
When a string is not needed to match exactly in the large object or match a portion in the string in a spy expectation, two things can be done. The first is used with the .not function and the second is the regular function. The toHaveBeenCalled function is used here but any could be used. 
```
expect(function).toHaveBeenCalledWith(jasmine.stringMatching('var'));
expect(function).not.toHaveBeenCalledWith(jasmine.stringMatching(/^var$/));
```

## Custom asymmetric equality tester
This tester can be used to check that something meets the criteria without strictly being equal.
```
asymmetricMatch: function(actual){...}
```

## Jasmine clock
This clock tests code depending on time.

To install the clock, use the call in a spec or suite:
```
jasmine.clock();
```
The clock must be uninstalled after the use is done to restore functions. 

The clock's functions are the same as Javascript functions:
- setTimeout or setInterval, which synchronizes and registers the functions when the clock ticks forward. 
- jasmine.clock().tick(num), which executes the registered functions to move time forward, where num is the number of milliseconds. 

The date can also be set through this clock with this code:
```
var sampleDate = new Date(2000, 1, 1);
jasmine.clock.mockDate(sampleDate);
```

## Asynchronous support
The before, after, and it functions have an option argument called when the asynchronous work is done:
```
done();
```
This done function means that the spec does not start until done is called in every beforeEach function or end until the done is called as well. 

The Jasmine default setting for async specs to finish before timing out is 5 seconds. If there is a timeout before the done is called, the current spec fails and the suite continues as if the done was called. If the spec fails faster than the timeout or needs more time, a timeout value can be passed to it. If every part of the code needs a different timeout value, the call jasmine.DEFAULT_TIMEOUT_INTERVAL will set globally out of the descibe. 

The call:
```
done.fail
```
will fail the spec but indicate it as completed. 

# Writing Code in Mocha

This is how to write code in Mocha, 

The writing for Mocha is similar to constructing that of Jasmine. Here is a guide on the properties:

## Assertion Libraries
There are various libraries for assertions that can be used for Mocha testing. They are:
- should.js
- expect.js
- chai
- better-assert
- unexpected

## Synchronous vs Asynchronous code
- Synchronous: does not require a callback to continue to the next test
```
describe('test', function(){
    describe('#functionTested()', function(){
        it('should perform the function', function(){
            ...function being tested..
        }
    }
}
```
- Asynchronous: call a callback after completion, causing Mocha to know to wait
```
describe('test', function(){
    describe('#functionTested()', function(){
        it('should perform function', function(done){
            ...function...
            variable.functionTested(done);
        }
    }
}
```
Alternatively, a Promise could be used.

## Hooks
The same hooks as explained in the Jasmine tutorial apply here, which are:
    - before()
    - after()
    - beforeEach()
    - afterEach()
    
These can be described through names. Also, these hooks can be asynchronous. They can be defined in the root level as well.

## Pending Tests
Pending tests are also a possibility. Tests that should show up as pending simply just do not have a callback statement. 

## Exclusive and Inclusive Tests
- Exclusive testing uses the .only() function to specify that only those specified blocks should run in this particular test.
- Inclusive tests, on the completely opposite side, use the .skip() call to skip the specific block in the test.

## Dynamically Generated Tests
Tests can be created dynamically within the code. This can be done in 3 easy steps.
- defining the function with the correct parameters that the test should look for, 
- creating a suite for that function with an array containing whatever is desired to be tested in the function and the expected value, 
- and testing each variable in the array using the forEach() call seeing if after the function is called, the value equals the value that is expected. 

## Timeouts
Timeouts can be set up in the suite, test, and hook levels. This can be done by doing as follows:
```
this.timeout(#);
setTimeout(done, time);
```
where # is the maximum time for the timeout and time is the specific time for this timeout. 

# Example CRUD Testing
Through this section, CRUD testing using Mocha as discussed before will be explained. The application being worked on is a University of Florida directory that stores data within a database. These Mocha tests will check that the create, read, update, and delete functions are working properly. 

#### Setup
Before the actual tests, the application must be set up so the tests can run properly. Some variables and test requirements should be defined. 

A sample listing should be created to be able to be used throughout. In this example, that listing will be:
```
var listing = {
name: 'Example',
code: 'EX',
address: '123 Sample Road, Gainesville, FL 32601, United States',
};
```

As in every Mocha test setup, there are describe() blocks and it() blocks. So, the describe block for this example would look like:
```
describe('Listings', function(){
    ...it blocks...
}
```
Within these it blocks will be the code for the various functions. 

#### Create
The create section of the test would test if the items are added to the database correctly. This function could be the equivalent to the POST function. The it() line should look like:
```
it('should create a new listing', function(done){...}
```

Since this works as the post function, a call to the application that sends the data and returns a response. To do so in this example, the following code is produced within the block:
```
agent.post(/api/listings)
.send(listing)
.end(function(err, res){
    ...
}
```
The post call calls to create the listing within /api/listings. The send function establishes the example listing as that being created. The end call contains the function that will have the qualifications that the test must meet involving err, the error that should be thrown, and res, the result that should be returned. 

Within this end function, there are various properties that should be looked at in testing if the listing was created properly. For our create test, here are the qualifications tested:
- status check - This should check that the status of the response is 200, meaning it was successful.
```
res.should.have.status(200);
```
- error and result check - There should be no error and a result body.
```
should.not.exist(err);
should.exist(res.body._id);
```
- properties check - The different properties of a listing, name, code, and address, should be created as expected. 
```
res.body.name.should.equal('Example');
res.body.code.should.equal('EX');
res.body.address.should.equal('123 Sample Road, Gainesville, FL 32601, United States');
```

Lastly, the callback done() must be made to complete the function.

Once implemented, this should ensure that the listings are being created correctly. 

#### Read

The read functionality tests if the application can get the listings, all or a single one, making it call GET. 

The it() block should begin with this line:
```
it('should get all listings', function(done){...}
```

For the GET function, certain calls must be made as follows:
```
agent.get('/api/listings')
.end(function(err, res){...}
```
which gets the listings from the api and calls the function where err is the error that would be received and res is the result.

The end function has many properties as has been shown before. These are the properties tested:
- status check - This should check that the status of the response is 200, meaning it was successful.
```
res.should.have.status(200);
```
- error and result check - There should be no error and a result body.
```
should.not.exist(err);
should.exist(res.body._id);
```

Lastly, a done() should be added to complete the callback.


#### Update
The update functionality allows the listings to be updated after already created if necessary. This update relates to the PUT call. 

The it() block would start like so:
```
it('should update a listing', function(done){...}
```

An updated listing must be created. This could be done as shown here:
```
var updatedListing = {
    name: 'Updated Example',
    code: 'UEX',
    address: '123 Update Ave, Gainesville, FL 32601, United States'
};
```

The call to the server now must use the PUT call with the id of the listing. The entire call can be made like this:
```
agent.put('/api/listings/' +id)
.send(updatedListing)
.end(function(err, res){}
```

This end function will contain the properites to be checked, which includes:

- status check - This should check that the status of the response is 200, meaning it was successful.
```
res.should.have.status(200);
```
- error and result check - There should be no error and a result body.
```
should.not.exist(err);
should.exist(res.body._id);
```
- updated listing - The properties, name, code, and address, should be saved as their updated version.
```
res.body.name.should.equal('Updated Example');
res.body.code.should.equal('UEX');
res.body.address.should.equal('123 Update Ave, Gainesville, FL 32601, United States');
```
Lastly, a done() should be added to complete the callback.

In conclusion, this test will be successful if the listing updated. 

#### Delete
Delete removes a specific listing by id when called. This update relates to the DELETE call. 

The it() line should look like this:
```
it('should delete a listing', function(done){...}
```

The test must call the application now and specify that it wants to delete the specific id provided. Here is an example of how to make that call:
```
agent.delete('/api/listings/' +id)
.end(function(err, res){}
```

In this end function, the following qualities should be tested:

- status check - This should check that the status of the response is 200, meaning it was successful.
```
res.should.have.status(200);
```
- error and result check - There should be no error and a result body.
```
should.not.exist(err);
should.exist(res.body._id);
```

- a GET test - This should check to make sure the id is now undefined. This also includes its own end function with a status check to ensure and undefined value and a specfic check.
```
agent.get('/api/listings/' + id) 
          .end(function(err, res) {
            res.should.have.status(400);
            id = undefined;
            }
```

Lastly, the callback done() must be made to complete the function.

These can all the tested to ensure the listings can be deleted. 

This is one of the many ways to test. There are other tests within the code that are written through the same ideology. 

### Links

For additional information on installation and the testing systems to be used.

- Jasmine: http://jasmine.github.io/
- Mocha: https://github.com/mochajs/mocha
- Karma: https://karma-runner.github.io/0.13/index.html
- Protractor: http://www.protractortest.org/#/
