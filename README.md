# Neighborhood Map Project
## Ren's Happy Doggy Places In and Around Tokyo

### Description
This project introduces favorite neighborhood hangouts in Tokyo and some distant places that my dog Ren recommends to other dogs/dog owners.

### Getting Started
You can access the app at https://yom79.github.io/Neighborhood-Map/. Alternatively, you can host the app locally and access it using the browser. To do this,
1. Open a command prompt and install the http-server package by typing `npm install -g http-server`
2. Save the neighborhood map folder on your computer.
3. Go back to the command prompt and navigate to the folder from step 2.
4. Type `http-server`
5. Go to http://localhost:8080 using the browser.

### Changes from Last Submission
* Updated this README to include detail instructions on how to use the app.
* Added <main> to index.html to cover the map div.
* Separated map styles in a separate file. Styles are now loaded using $.getJSON.
* Made the view model observables accessible to getDirections to eliminate remaining DOM manipulations

### More on What You Can Do
This project provides for slightly different experiences on larger screens and on smaller (<630px) screens.

#### Larger Screen Experience
* By default, markers for all places in the data are displayed. Displayed markers correspond with the list of places in text on the left pane.
* You can search for places within a certain minutes of travel from the origin of your choice. Travel modes available are walking and driving (other modes are not available through Google Maps API). Small infowindows will appear to tell you how far each place is and how long the expected duration of the trip is from where you leave from by the mode of travel you chose.
* You can view the route from the origin to the chosen destination by ciicking on the view route button in the small infowindow.
* You can obtain additional information about each place by clicking on the marker or on the entry in the text list on the left pane. The additional information will be provided in an infowindow. You can also access the relevant Foursquare page via the link provided in the infowindow to get more information and photos.
* To display all places and clear previous history, click on the "Reset/See All Places" button at the top or close and reopen browser.

#### Smaller Screen Experience
* By default, the search function and text list are available on the primary screen. Map is available by clicking on an entry in the text list and then on the "See Map" button in the description that appears under in the place's name. To go back to the primary page from the map page, click on the "<" icon at top left.
* The search function displays all places within the specified travel time by the travel mode you choose from the origin of your choice. Results are provided in text. Pictures of the chosen place are not displayed on a small screen. You'll have to click through to Foursquare to see images.
* On the map page, you can view route from the origin that you provide and the chosen destination by provided required information and clicking on the "View Route" button in the header.
* Search parameters (origin and travel mode) are passed to the map page, if you entered them in the primary view. Similarly, the parameters provided on the map page are passed back to the primary page. A new search, however, is not conducted and the results in text that are displayed on the primary page are not updated automatically in response to the changes you make to the parameters on the map page. You'll have to hit the "Find" button again on the primary page to have the text list reflect the changes you made on the map page.
* To display all places and clear previous history, click on the "Reset/See All Places" button at the top of the primary page or close and reopen browser.
