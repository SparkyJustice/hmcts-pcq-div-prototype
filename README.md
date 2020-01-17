# hmcts-pcq-div-prototype #
These are the protected characteristics questions (PCQs) to be integrated into the Divorce service 
The website is [hmcts-pcq-div-prototype.herokuapp.com](https://hmcts-pcq-div-prototype.herokuapp.com/)
The Divorce prototype that calls this service is [div-pcq-prototype.herokuapp.com](https://div-pcq-prototype.herokuapp.com/)

## Documentation ##
The project and planning documents are held on [Confluence](https://tools.hmcts.net/confluence/display/CD/Protected+Characteristics+Questions)

## Question order ##

To set the order and which questions to ask, change the value of questionOrder in the config.js file
The recommended order of the full set of questions is:
age
language
sex
gender
sexual-orientation
marriage
ethnicity
religion
disability
pregnancy
exit

Keep the exit page at the end of the array

For Divorce the marriage question has been removed

## Environment variables ##

The service is deployed with Heroku and uses Heroku process.env variables to determine the return service url and the type of user. These fields are also defined in the env-variables.env file for development testing. Which variables to use is determined in server.js by checking the environment and in routes.js for the logic shown below.

The SERVICE_USER_TYPE_A is used to define the type of user and which return url (serviceReturnUrl) is used. If there is only one user type then there will be only one return url SERVICE_RETURN_URL_A. In this case leave SERVICE_USER_TYPE_B and SERVICE_RETURN_URL_B blank.

If there are two user types then the user type is passed to the PCQs via a query string on the URL from the initiating service. It is checked against the SERVICE_USER_TYPE_B, if they match then SERVICE_RETURN_URL_B is used as the return. This means that if no query string is passed or it is not equal to SERVICE_USER_TYPE_B (i.e. only one user type for this service) the return url defaults to SERVICE_RETURN_URL_A.

The serviceUserAction is used to display the action of the user in the information panel on the introduction page e.g. application
"Your answers won't affect your {{serviceUserAction}}."  This is determined (hard coded with a switch command) in the routes.js file
applicant - application
appellant - appeal
claimant - claim
respondent - response
defendant - case
default - case

For Divorce following env_variables are used:
SERVICE_USER_TYPE_A = 'applicant'
SERVICE_USER_TYPE_B = 'respondent'

Set the return page, this will determine the destination when returning to the originating service

SERVICE_RETURN_URL_A = 'https://div-pcq-prototype.herokuapp.com/check-your-answers'
SERVICE_RETURN_URL_B = 'https://div-pcq-prototype.herokuapp.com/aos/check-your-answers'

