# serverless-email-bot
This demo serverless email bot is built with Gmail & nodemailer and deployed on AWS Lambda.

> Author: Neo  
> Date: Nov 2019

## Installation
Run `npm install` to install all dependencies

## Settings
Create a .env file in the root path and setup your own variables

## Test email bot locally
Run `npm run deploy` to deploy the serverless email bot on Lambda

## Deployment
Replace the related settings in serverless.yml file. eg.region. Run `npm run deploy` to deploy the serverless email bot on Lambda

## Tips for production 
- Add Google reCAPTCHA validation to prevent malicious attempts
- Sanitize form values in Lambda to prevent Cross-Site Scripting (XSS)
