# Degree Project Bakfull.nu - full stack React, API and MongoDB

Degree Project – “Bakfull.nu” (Hangover.nu)
This is my degree project from Frontend development program at Medieinstitutet in Stockholm, Sweden.

The project matches the “hangover” people that book the service, with cleaning companies and food and drink orders from restaurants.

I also want it to be able to be used both for desktop and mobile. The key is that the customer flows are to be used for mobile. The key focus has been to get all the flows and the back- and front-end up and not all the details mainly for time reasons. 

I have realized that it is a big job to do a full stack project with several parts. I have learnt that to do the backend part together with the admin part of the system takes a large part of the work and this is before starting with the frontend towards the end customer.

Motivation
I wanted to do a full stack development project including the administrative flows. A complete system to cover all areas. I also wanted to do something that is a little “fun” and eye opening…

Build Status
All the flows and pages are there, including:
•	Customer booking flow – complete and fast track
•	Login for cleaners and restaurant to see orders
•	Administration of cleaners, restaurants/menu and bookings/orders

However, there are some known and also planned limitations, for example connection to credit card payment (just a dummy now). There is also limited security implemented and where it is mostly as symbolic reasons. There is also a couple of known errors around but the major functionality of new, update, find and delete with connecting API works for cleaners, menus and orders.
There is also so that I would have wanted to put more effort on the actual design since it is my key competence, but I kept it clean and for both desktop and mobile.

Code Style
I have used a structure with different parts that we have learnt and used in a full stack React development with Mongo DB and REST API.
If I want to continue on this, I know that there are several places to facilitate the code. There are a number of duplicate codes in components and pages that with “code re-engineering” can be simplified but this is as far I got during this time period.

Screenshots
There are as mentioned 12 pages. I have uploaded a predsentation with screenshots here as well
 
Tech/Framework used
●	Design tool: Figma
●	Project Management Tool: Jira
●	Programming language/framework: React Typescript
●	Database: Mongo DB
●	Testing: Manual based on test cases, Postman to test API
●	Deployment tools and pipelines: GitHub
●	Configuration setups for development: Vite

Features
The system includes all parts from database, API (18 API:s), React JS components (13) and 12 pages.
There is a flow with navbar/menu structures. I have also used a geolocation API.
I think and hope it can be used to look at what a full stack development in React JS with REST API and Mongo DB imvolvs.

Code Examples
The names in the code are hopefully self-explanatory. I have used pre-fix for my own sake of development. I was planning on taking them away but I left them because it clarifies what I have developed.

Installation
I have used NPM and Visual studio during development. To run the system Mongo DB needs be available and installed (and connected).
There are mock data for cleaners and restaurants/menus and programs to read them into the database (see Backend SeedDB).

API reference
There are 18 API and they are Find All or specific search criteria, Update, Create and Delete for Orders, Cleaners and Restaurants/Menus.

How to Use?
Use it to look at the code and mainly to see how a flow can work.

Credits and Contribution
I want to thank all my teachers at Medieinstitutet for all the things you have taught us. I also want to thank Karin and the team in Asia that I worked with during my two LIA periods (internship) and my family and especially my father for pushing me to complete this on the agreed deadline 7 June 2024.
