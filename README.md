|             |                                                                                                                                                                                                                                                                         |
| ----------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Name        | Simo Häkkinen                                                                                                                                                                                                                                                           |
| Topic       | Web application that fetches and displays data from poe.ninja api, poe.watch api and poe-antiquary api. Backend can call a Python script that returns a prediction on a given item for the whole league (90 days). Neural network was trained on data from 3.0 to 3.15, including the first 16 days of 3.16.																																						|
| API  		  | https://poe.ninja/api & https://api.poe.watch/ & https://poe-antiquary.xyz/api                                                                                                                                                                                          |
| Heroku link | https://web-ohjelmointi-projekti.herokuapp.com/                                                                                                                                                                                                                         |
| Bugs  	  | ~~poe.watch historical data is wrong, change to poe.ninja~~ done                                                                                                                                                                                                        |
| TBD         | ~~Add past league data via poe-antiquary~~ done                                                                                                                                                                                                        					|
|			  | ~~Add machine learning component~~ done                                                                                                                                                                                                        							|
|			  | ~~Add ML components for every currency type~~ done                                                                                                                                                                                                       						|
|			  | Add a way for the User to re-train NN model with User-given parameters                                                                                                                                                                                                     						|

Release 1: 2021-11-15 features
	
	- User is able to see currency data in a table
	- User is able to search the table with a search field
	- User is able to select which Leagues data is shown
	- User is able to open a page which shows the selected currency items history via a graph
	- User is able to change which Leagues data is shown in the graph, including past Leagues
	- User is able to view the predicted price of the item in Scourge League, generated by a Neural Network
	