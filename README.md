<h2 align="center"><img src="./src/Screenshot%20(54).png"></h2>

# 1 Change the code so that the rotation direction of the react icon reverses each time the user clicks it.<br><br>

## To achieve this I decided to modify the standard icon from react app. As you can see in my SpinningImage.js file I used UseState to define the state variable RotateClockwise with initial value. HandleImageClick function is used to change rotation direction. ClassName attribute applies css classes for the image based on the components state. Animation for this is contained in SpinningImage.css.<br><br>

# 2 Change the code to adjust the size of the react icon depending on the position of the cursor on the page.<br><br>

## Since the image is constantly spinning I decided that the size of it  must match the dynamic style of the image. Plus it sort of keeps you engaged with the page as you have more size options to choose from furthermore it's more interactive.  UseState was used to declare the variables such as: CursorPosition and ImageSize to set up an initial size of the image and track the cursor. UseEffect was used to update cursor position, calculate the image size based on cursor position and update it. To trigger it event listener was added.<br><br>

# 3 Change the code so that the text under the icon displays the amount of time the mouse has been within the visible page, but NOT moving.<br><br>

## To achieve this I've built additional component which uses event listeners to check mouse enter, mouse leave and mouse move to update elapsed time. Name of the functions are self-explanatory. I also provided additional comments to explain it better. The timer starts when mouse pointer enters the field and only when not moving it also refreshes itself if you moved cursor and starts again if your cursor holds still. Icon component placed inside timer component to combine them. <br><br>

# 4 Add a sidebar that can be shown/hidden where any of the previous changes can be switched on or off.<br><br>

## I've created a sidebar which can be shown or hidden with help of hamburger menu button. However since everything is constantly dynamic and reverses/updates itself to original state there is nothing to reverse so I simply created a button to refresh the page which is almost the same ;-). I didn't want you to to think i cheated so i decided to develop an extra button which stops and starts spinning of the image. 
