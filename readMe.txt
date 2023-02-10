WEEK-2:
we made the watcher and made it recompile the jsx files so that we dont need the babel dependencies to again and again make changes to the jsx file and make them to js.
we basically need to convert the jsx file to js to make the browser understand it.
babel links will take a lot of time to load on webpage loading, to tackle that we add babel dependencies and compile them already from jsx to js. 
    - we changed the package file by adding "compile": "babel src --presets @babel/react --watch --out-dir public"
        so that the compilation will work!!!
    - we certainly removed the links from the header and added the dependencies in place of it. it will perform the same tasks of babel.
        npm install --save-dev @babel/core@7 @babel/cli@7
        npm install --save-dev @babel/preset-react@7

we made the issuelist program and make it similar to the demoapp and make changes according to the need of the issuelist code
    - we made a table componenent and then later on made another component for the repetative code of the table so that we can later on simply call that component whenever needed
    
We used a const to pass the values of issuelist and also later passed the style using the props arguement and used it in the issueList component
    - we passed multiple objects to a component and later on accessed it using the props arguement to access each of them
    - we used props as arguement to access the multiple objects that are passsed among the components, this objects can be accessed by props as a normal arguement variable 
    
WEEK-3:

    - we made the react hook with the help of react.useState to maintain the state of the component and make it refresh whenever needed 
    - we added a function to add a new single issuelist whenever button is clicked by using two useEffect but later we added the method to add a single issue on the onClick method of button itself
    - we created a form to get the user defined values and then push them to the issueList and display it on submitting the form 


WEEK-4: 
    - we made the use of grapgQL for basically connection of client and the web-server(in our case express)
    - grapgQL is like a middleware between client and database 
    - UI -> GhraphQL -> web server(express)
    - installing graphql by - npm install graphql apollo-server-express


WEEK