# Prod

Currently Survey Shrike hosted on http://www.surveyshrike.somee.com Private Cloud server

we can create new user or use the sample credential provided below.
User Name : kiran1205
Password : kiran@1234

every login session will expires in 15 mins

given sample survey created and below are the url to access

event
http://www.surveyshrike.somee.com/#/anonymossurvey?survey=031200e2-da0a-4e7d-9bf3-33c285bcb43f

traning 
http://www.surveyshrike.somee.com/#/anonymossurvey?survey=1b0f6b41-f8d1-40f4-a47f-307d4145456e


# Enviorment Setup
Pre-requiste:
following softwares need to installed on devlopment machine.

Dotnet Core 2.2
Visula studio 2017 with .Net Core Development 
SQl Server 2016
NodeJS
NPM
Visual studio code front end devlopment

# Database setup
create data base name SurveyDB

execute the following scripts fto setup sql server data base tables.all scripts available path
https://github.com/Kiran1205/SurveyAPI/blob/master/DBScript.sql

# Clinet Project Setup
check out the master branch from repository  https://github.com/Kiran1205/SurveyClient

open the project in command prompt and run npm install

the above command will install all depedent package for running front end application 

to run application in dev machine ,run the following command

npm start

the above command will launch  application under http://localhost:4200

# Server Project setup
check out the master branch from repository  https://github.com/Kiran1205/SurveyAPI

open project in visual studio in admin mode and run mange nuget package manger .

change connection settings to local data base 

build the project and run it will run under  http://localhost:50366

# SurveyShrike 
SurveyShrike help businesses conduct surveys. SurveyShrike believes every customer has different views or comments about services and over all products.
 And every business needs to know right customer mindset to engage customers for long run. 

An authenticated user required to create a survey and display (including results) various surveys created by authenticated user.

# current features
Login
registration
dashboard
Create Survey
	->Add Queston
	->modify created Survey
	->delete the survey
	->generate survey link

Manage Survey
Currently repose count only displaying need to do result analysis

Anonymous user can participate the survey link provided by authenticated user

Every survey has expiry date or close data if you click the link after that it wont work

# Pending
valaidations
Response Analaysis	

flow Digram
![alt text](https://github.com/Kiran1205/SurveyClient/blob/master/ArchitectureDigram.jpg)
