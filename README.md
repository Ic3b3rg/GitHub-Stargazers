## React Native app to visualize users who have starred on a GitHub repository.

This repository contains the source code for a React Native app to display users who have starred on a specific GitHub repository. To use the app, you must have a valid GitHub auth token and configure it within the .env file as described below.

## Description of the app.
The app allows the user to search for a specific GitHub repository by entering the user's name and the name of the repository. After searching, the app displays the list of users who have put the star on the repository along with their avatar and GitHub username.

## Prerequisites.
- Node.js (version 12 or higher)
- npm
- React Native CLI

## Configuration.
In order to use the app, you must create a personal access token on GitHub. Follow these steps to create one:

- Log in to your account on GitHub.
- Click on your profile picture in the upper right-hand corner and select Settings.
- On the left sidebar, select Developer settings and then Personal access tokens.
- Click Generate new token.
- Enter a name for your token and select the appropriate permissions. For the app, you must select the 
- public_repo checkbox.
- Click Generate token.
- Copy the generated token to a secure location.
Once the token is generated, you need to configure it within the .env file as follows:

```sh
AUTH_TOKEN = your_token_here
```
Where your_token_here is the previously generated token.

For production environments...

```sh
npm install --production
NODE_ENV=production node app
```
## Installation
To install the dependencies, run the following command in the root directory:
```sh
npm install
```
## Startup
To start the app, run the following command in the root of the directory:


```sh
npm start
```
Next, run one of the following commands depending on the platform on which you want to test the app:

To test the app on iOS, run the command `npm run ios`.
To test the app on Android, run the `npm run android` command.
