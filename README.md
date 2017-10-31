# placerank-api

An API for community based ranking of locations on a map. This API is created for the placerank-mobile project.

This project uses the serverless.com framework for creating aws lambda functions.

## Requirements:
- NodeJS V6.10
- AWS command line interface


### Setup aws credentials

First install awscli https://docs.aws.amazon.com/cli/latest/userguide/installing.html

Run the following in the command line and enter the credentials for a user with admin rights

`aws configure --profile serverless-admin`

## Deploy

`serverless deploy --aws-profile serverless-admin`
