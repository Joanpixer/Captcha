# Captcha Bot

Captcha Bot is ready for use on Discord and can be deployed on Heroku.

## Deploying on Heroku

Setup a .env with the variable 'token' containing the Bot's API KEY

## Setting the Bot Token (When Not Using Heroku)

If you want to run it on another site or on your own workstation, you can find the token on line 6 in the `bot.js` file. This token is used to authenticate the bot with Discord.

## Setting the Role for Verified Users

You can set the role for the verified users on line 33 in the `bot.js` file. This role will be assigned to users who have successfully completed the captcha challenge.
