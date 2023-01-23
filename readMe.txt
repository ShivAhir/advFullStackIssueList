WEEK-2:
we made the watcher and made it recompile the jsx files so that we dont need the babel dependencies to again and again make changes to the jsx file and make them to js.
we basically need to convert the jsx file to js to make the browser understand it.
babel links will take a lot of time to load on webpage loading, to tackle that we add babel dependencies and compile them already from jsx to js. 
    - we changed the package file by adding "compile": "babel src --presets @babel/react --watch --out-dir public"
        so that the compilation will work!!!
    - we certainly removed the links from the header and added the dependencies in place of it. it will perform the same tasks of babel.
        "@babel/cli": "^7.20.7",
        "@babel/core": "^7.20.12",
        "@babel/preset-react": "^7.18.6"

we made the issuelist program and make it similar to the demoapp and make changes according to the need of the issuelist code
    - we made a table componenent and then later on made another component for the repetative code of the table so that we can later on simply call that component whenever needed
    
We used a const to pass the values of issuelist and also later passed the style using the props arguement and used it in the issueList component
    - we passed multiple objects to a component and later on accessed it using the props arguement to access each of them