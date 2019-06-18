```
npx create-react-app my-app --typescript

# or

yarn create react-app bismillah-app --typescript

cd bismillah-app
yarn start
```


### VS Code Extensions

Extensions
1. Debugger for chrome



#### Configure the Chrome debugger

We need to initially configure the debugger. To do so, go to the Debug view (Ctrl+Shift+D) and click on the gear button to create a launch.json debugger configuration file. Choose Chrome from the Select Environment drop-down list. This will create a launch.json file in a new .vscode folder in your project which includes a configuration to launch the website.

We need to make one change for our example: change the port of the url from 8080 to 3000. Your launch.json should look like this:

```
{
    // Use IntelliSense to learn about possible attributes.
    // Hover to view descriptions of existing attributes.
    // For more information, visit: https://go.microsoft.com/fwlink/?linkid=830387
    "version": "0.2.0",
    "configurations": [
        {
            "type": "chrome",
            "request": "launch",
            "name": "Launch Chrome against localhost",
            "url": "http://localhost:8080",
            "webRoot": "${workspaceFolder}"
        }
    ]
}
```

Ensure that your development server is running ("npm start"). Then press F5 or the green arrow to launch the debugger and open a new browser instance. The source code where the breakpoint is set runs on startup before the debugger was attached so we won't hit the breakpoint until we refresh the web page. Refresh the page and you should hit your breakpoint.