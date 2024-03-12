# WHAT
CEP Console is an Adobe CEP extension that helps developers to debug their code faster and more easily by allowing them to execute console methods in scripts and extension projects.

# WHY
Currently, there is no way to execute Console methods suh as 'console.log' inside of Adobe apps to debug Scripts and Extensions. A common alternative is to use 'alert()', which is a tedious and innefficient strategy.

# HOW
CEP Console offers a console interface that displays logs and errors for your project.

### Scripts:
Global 'cepConsole' object available that can be used in your scripts out of the box.
   
### CEP Extensions:
For the Javascript runtime available to CEP Extensions, installing the CEPConsole npm package is necessary in order to be able to make use of cepConsole object over on the ExtenJavascript Runtime to the Extendscript runtime through CSInterface.

# FOR WHO
Those who are developing Extendscript code and want a more native smoother experience debugging their Scripts and CEP Extensions