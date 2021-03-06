|             |                                                                                                                                                                                                                                                                         |
| ----------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Name        | Simo Häkkinen                                                                                                                                                                                                                                                           |
| Topic       | Web application that fetches and displays data from poe.ninja api, poe.watch api and poe-antiquary api. Backend can call a Python script that returns a prediction on a given item for the whole league (90 days). Neural network was trained on data from 3.0 to 3.15, including the first 16 days of 3.16.																																						|
| API  		  | https://poe.ninja/api/data/CurrencyOverview?league=Standard&type=Currency & https://docs.poe.watch/#introduction & https://poe-antiquary.xyz/api/prices/47/9/2                                                                                                                                                                                         |
| Heroku link | https://web-ohjelmointi-projekti.herokuapp.com/                                                                                                                                                                                                                         |
| Screencast link | https://www.dropbox.com/s/8zhksj8ia3enee9/Web%20ohjelmoinnin%20screencast.mkv?dl=0                                                                                                                                                                                                                       |
|  | Video length 35 min 54 sec, playback speed of more than 1.0 recommended.                                                                                                                                                                                                                       |
|  | Video timestamps: 00:00 Intro, 02:08 UI Demonstration, 11:44 Relevant parts of the code, 30:30 Known bugs, 34:33 Self-evaluation and what grade I am aiming at                                                                                                                                                                                                                      |
| Bugs  	  | ~~poe.watch historical data is wrong, change to poe.ninja~~ **fixed**                                                                                                                                                                                                        |
|   	 	  | ~~poe.watch does not have all of the items that poe.ninja has ex. "blessing of tul", create check in backend and change date data on these items.~~ **fixed**                                                                                                                                                                                                       |
| TBD         | ~~Add past league data via poe-antiquary~~ **done**                                                                                                                                                                                                        					|
|			  | ~~Add machine learning component~~ **done**                                                                                                                                                                                                        							|
|			  | ~~Add ML components for every currency type~~ **done**                                                                                                                                                                                                       						|
|			  | ~~Add a way for the User to re-train NN model with User-given parameters~~ **done**                                                                                                                                                                                                     						|
|			  | ~~Comment JS code~~ **done**                                                                                                                                                                                                    						|
|			  | ~~Add info to home page~~ **done**                                                                                                                                                                                                    						|
|			  | ~~Comment python code~~ **done**                                                                                                                                                                                                  						|

Release 1: 2021-11-15 features
	
	- User is able to see currency data in a table
	- User is able to search the table with a search field
	- User is able to select which Leagues data is shown
	- User is able to open a page which shows the selected currency items history via a graph
	- User is able to change which Leagues data is shown in the graph, including past Leagues
	- User is able to view the predicted price of the item in Scourge League, generated by a Neural Network
	
Release 2: 2021-11-29 features
	
	- User is able to view a better prediction of the item price in Scourge League for every item
	- User is able to train a new artificial neural network with user specified parameters
	
Known Bugs

	- Currency graph may display wrong information or hang if the item cannot be found in the selected league
	- Navigating straight to an items detail page will not display the page correctly