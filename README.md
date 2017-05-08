
## Quick Reference for javascript advanced concepts
***
### BabelJs Quick Reference

#### Installing Babel globally

`npm install -g babel-cli`
 
To check the version of babel, use the following command

`babel --version`

To see the list of npm packages installed globally, use the following command

`npm ls -global --depth 0`

To uninstall babel globally, use the following command

`npm uninstall -global babel-cli`

#### Installing Babel locally
When you install babel locally, it put babel package inside the local __node_modules__ directory

Use the following command to install Babel locally

`npm install --save-dev babel-cli`

This will install babel locally to your project

### Basic Examples

To convert our ES6 code to javascript, we have created two folder. The __src__ folder will contain our ES6 code, whereas __build__ will contain the output javascript file.

Before using babel, we need to install __babel-preset-es2015__ plugin. Install the plugin using the following command :

`npm install babel-preset-es2015 --save-dev`

After installing __babel-preset-es2015__ , use the following command to convert your es6 code and save it to the build directory.

`babel src --presets es2015 -d build`

Combine multiple files using following command:

`babel src --presets es2015 -d build/combined.js`


### BabelJS Configuration

We can also include -w to watch for changes in our es6 files and compile them immediately, when we save our file.

Another useful option is to create .babelrc file and put our defaults in that file.

An example of .babelrc is shown below :

```
{
 "presets":["2015"]
}

```

Now we don't need to include __--presents es2015__ in our command.

Also, we can install individual features for ES6. For example, we can install ES2015 block scoping feature using the following command:

`npm install --save-dev babel-plugin-transform-es2015-block-scoping`

To include this functionality in .babelrc file, use the following json property in your .babelrc file

```
{
"plugins" :["transform-es2015-block-scoping"]
}
```








