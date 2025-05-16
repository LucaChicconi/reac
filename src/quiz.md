1. Where does React put all of the elements I create in JSX when I 
   call `root.render()`?

It puts them inside of the div with id "root"

2. What would show up in my console if I were to run this line of code:
```
console.log(<h1>Hello world!</h1>)
```
just <h1>Hello world!</h1> with the tag included. Its an object

3. What's wrong with this code:
```
root.render(
    <h1>Hi there</h1>
    <p>This is my website!</p>
)
```
There are multiple html elements without a parent

4. What does it mean for something to be "declarative" instead of "imperative"?

declarative : Telling what needs to be done
imperative : Telling how it needs to be done with step by step instructions

5. What does it mean for something to be "composable"?

