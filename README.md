# Slur Detect for Twitch and Discord
A system to detect slurs that bypass automod on twitch and discord using a discord bot and a lightweight twitch API
<body id="ssseal-c">This site is created and maintained by <a href="https://seall.dev">SSSEAL-C</a> contact them <a href="mailto:seall.developer@gmail.com">here</a></body>


# To Do

### Enable link detect and slur detect options per platform
### Discord Link Detection Only

# Setup/Installation



## Clone the library into slur-detect


`git clone https://SSSEAL-C/slur-detect/`



## Install the Packages


`npm i`



## Make a Twitch Bot Account


Register a normal Twitch account and write down its username.



## Edit the `config.json` file


The `config.json` is located in the `files/` folder.

You want to replace the `config.json` values with your own.



`logchannelid` should be the Discord Channel ID for where it should log when a slur is detected.

`token` should be your Discord Bot Token.

`twitchchannel` should be the Twitch Channel Name on twitch, eg. https://twitch.tv/Fortnite, Fortnite would be put here.

`slursfile` leave as default unless you rename or move the `slurs.txt` file.

`ignoredchannels` these values should be the id's for Discord Channels the bot should ignore.

`twitchusername` make this the Twitch Account Username from earlier.

`twitchpass` use [this site](https://twitchapps.com/tmi/) to get the oauth token for the Twitch Bot Account.

`linkdetect` put `y` or `n` for if you want this enabled.

`linkwhitelist` don't change this if your not moving or renaming these files.

`suffixs` don't change this if your not moving or renaming these files.


## Edit the `slurs.txt` file


Remove the pre-existing example slurs and add your own in here, a new line for each slur.

## Run the program

Go back to the main folder and run `node .`

# When reporting issues

Please use the command `slur-version` in a Discord Channel the Bot can see and report the Version Responded in your issue.
