# WHAT
CEP Console is an Adobe CEP Extension that allows developers to execute console functions while developing their own scripts or Extensions.

# WHY
Currently, there is no way to execute Console methods inside of Adobe apps to debug Scripts and Extensions. A common alternative is to use 'alert()', which is an extremely tedious and innefficient method to debug your code.

# HOW
CEP Console offers a console interface that displays logs and errors in your Script file or Extension.
## ExtendScript Runtime:
  For JSX scripting files, CEP Console offers a global Console object that can be used from any script file. All variables are globally shared in this runtime so simply having the CEP Console open makes the integration work.
   
## Javascript Runtime:
  For the Javascript runtime available to CEP Extensions, installing the CEP Console npm package is necessary in order to be able to make use of the global Console object over on the Extendscript runtime. The npm package offer a proxy Console object which redirects console calls from the javascript Runtime to the Extendscript runtime through CSInterface.