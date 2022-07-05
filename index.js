const version = "v2.1.58"
const tmi = require('tmi.js');
const fs = require('fs')
const Discord = require('discord.js')
const bot = new Discord.Client();
const config = require("./files/config.json")
var express = require("express");
const path = require('path');
const app = express();
const discordslurs = [];
const twitchslurs = [];
const twitchlist = [];
const discordlist = [];
console.log(fs.readFileSync('./files/emblem.txt').toString())
console.log("Version " + version + " loaded!")
const suffixes = []

function alterations_set(list, slurs, platform) {
    list.forEach(function(item) {
        slurs.push(item)
    })
    let g = 0
    slurs.forEach(function(item) {
        textreplace = item + "ing"
        if (textreplace === item) { return }
        slurs.push(textreplace)
        g++
    })
    slurs.forEach(function(item) {
        textreplace = item + "s"
        if (textreplace === item) { return }
        slurs.push(textreplace)
        g++
    })
    slurs.forEach(function(item) {
        textreplace = item + "es"
        if (textreplace === item) { return }
        slurs.push(textreplace)
        g++
    })
    slurs.forEach(function(item) {
        textreplace = item + "ies"
        if (textreplace === item) { return }
        slurs.push(textreplace)
        g++
    })
    slurs.forEach(function(item) {
        textreplace = item + "ed"
        if (textreplace === item) { return }
        slurs.push(textreplace)
        g++
    })
    slurs.forEach(function(item) {
        textreplace = item.replace(/a/g, '@');
        if (textreplace === item) { return }
        slurs.push(textreplace)
        g++
    })
    slurs.forEach(function(item) {
        textreplace = item.replace(/s/g, '$');
        if (textreplace === item) { return }
        slurs.push(textreplace)
        g++
    })
    slurs.forEach(function(item) {
        textreplace = item.replace('s', '$');
        if (textreplace === item) { return }
        slurs.push(textreplace)
        g++
    })
    slurs.forEach(function(item) {
        textreplace = item.replace(/l/g, 'i');
        if (textreplace === item) { return }
        slurs.push(textreplace)
        g++
    })
    slurs.forEach(function(item) {
        textreplace = item.replace('l', 'i');
        if (textreplace === item) { return }
        slurs.push(textreplace)
        g++
    })
    slurs.forEach(function(item) {
        textreplace = item.replace(/l/g, '!');
        if (textreplace === item) { return }
        slurs.push(textreplace)
        g++
    })
    slurs.forEach(function(item) {
        textreplace = item.replace('l', '!');
        if (textreplace === item) { return }
        slurs.push(textreplace)
        g++
    })
    slurs.forEach(function(item) {
        textreplace = item.replace(/i/g, '!');
        if (textreplace === item) { return }
        slurs.push(textreplace)
        g++
    })
    slurs.forEach(function(item) {
        textreplace = item.replace('i', '!');
        if (textreplace === item) { return }
        slurs.push(textreplace)
        g++
    })
    slurs.forEach(function(item) {
        textreplace = item.replace('a', '@');
        if (textreplace === item) { return }
        slurs.push(textreplace)
        g++
    })
    slurs.forEach(function(item) {
        textreplace = item.replace(/i/g, '1');
        if (textreplace === item) { return }
        slurs.push(textreplace)
        g++
    })
    slurs.forEach(function(item) {
        textreplace = item.replace('i', '1');
        if (textreplace === item) { return }
        slurs.push(textreplace)
        g++
    })
    slurs.forEach(function(item) {
        textreplace = item.replace(/i/g, 'l');
        if (textreplace === item) { return }
        slurs.push(textreplace)
        g++
    })
    slurs.forEach(function(item) {
        textreplace = item.replace('i', 'l');
        if (textreplace === item) { return }
        slurs.push(textreplace)
        g++
    })
    slurs.forEach(function(item) {
        textreplace = item.replace(/o/g, '0');
        if (textreplace === item) { return }
        slurs.push(textreplace)
        g++
    })
    slurs.forEach(function(item) {
        textreplace = item.replace('o', '0');
        if (textreplace === item) { return }
        slurs.push(textreplace)
        g++
    })
    slurs.forEach(function(item) {
        textreplace = item.replace(/a/g, 'q');
        if (textreplace === item) { return }
        slurs.push(textreplace)
        g++
    })
    slurs.forEach(function(item) {
        textreplace = item.replace('a', 'q');
        if (textreplace === item) { return }
        slurs.push(textreplace)
        g++
    })
    slurs.forEach(function(item) {
        textreplace = item.replace(/u/g, 'v');
        if (textreplace === item) { return }
        slurs.push(textreplace)
        g++
    })
    slurs.forEach(function(item) {
        textreplace = item.replace('u', 'v');
        if (textreplace === item) { return }
        slurs.push(textreplace)
        g++
    })
    slurs.forEach(function(item) {
        textreplac = item.split("")
        textreplace = textreplac.join("_")
        if (textreplace === item) { return }
        slurs.push(textreplace)
        g++
    })
    slurs.forEach(function(item) {
        textreplac = item.split("")
        textreplace = textreplac.join(".")
        if (textreplace === item) { return }
        slurs.push(textreplace)
        g++
    })
    slurs.forEach(function(item) {
        textreplac = item.split("")
        textreplace = textreplac.join("-")
        if (textreplace === item) { return }
        slurs.push(textreplace)
        g++
    })
    console.log(g + ' slur alterations loaded for ' + platform + '!');
    return
}

function whitelist_setup(whitelist_config, newwhitelist) {
    var arr = require(whitelist_config)
    var array = arr.whitelist
    array_set(array, newwhitelist, 'whitelist', 'link')
    console.log('-- ' + platform + " Whitelist Initialised");
    return
}

function discord_slur_setup() {
    var discordslursfile = require(config.discord_slurs_file)
    var discordarray = discordslursfile.slurs
    array_set(discordarray, discordlist, "Discord", "y")
    alterations_set(discordlist, discordslurs, 'Discord')
    console.log('-- Discord Slur Detect initialied!')
    return
}

function twitch_slur_setup() {
    var twitchslursfile = require(config.twitch_slurs_file)
    var twitcharray = twitchslursfile.slurs
    array_set(twitcharray, twitchlist, "Twitch", "y")
    alterations_set(twitchlist, twitchslurs, 'Twitch')
    console.log('-- Twitch Slur Detect initialied!')
    return
}

function array_set(array, list, platform, log) {
    let f = 0
    for (i in array) {
        list.push(array[i])
        f++
    }
    if (log === "y") {
        console.log(f + " slurs loaded into " + platform + " blocking!");
        return
    }
    if (log === "link") {
        console.log(f + " links whitelisted!");
        return
    }
    if (log === "suffixes") {
        console.log(f + " domain suffixes loaded!");
        return
    }
    return
}
if (config.slur_detect === "none" && config.link_detect === "none") {
    console.warn('\n\nBoth link_detect and slur_detect are set to none, and the program will do nothing.\n\n')
    process.exit()
}
if (config.slur_detect === "both" || config.slur_detect === "discord" || config.slur_detect === "twitch") {
    if (config.slur_detect === "discord") { discord_slur_setup(); }
    if (config.slur_detect === "twitch") { twitch_slur_setup(); }
    if (config.slur_detect === "both") {
        twitch_slur_setup();
        discord_slur_setup();
    }
    console.log('-- Slur Detect initialised!')
}
if (config.link_detect === "both" || config.link_detect === "discord" || config.link_detect === "twitch") {
    var sufarray = require(config.suffixes)
    var array = sufarray.suffixes
    array_set(array, suffixes, 'suffixes', 'suffixes')
    const twitchwhitelist = []
    const discordwhitelist = []
    if (config.link_detect === "both") {
        s
        whitelist_setup(config.twitch_link_whitelist, twitchwhitelist, "Twitch")
        whitelist_setup(config.discord_link_whitelist, discordwhitelist, "Discord")
    }
    if (config.link_detect === "discord") { whitelist_setup(config.discord_link_whitelist, discordwhitelist, "Discord") }
    if (config.link_detect === "twitch") { whitelist_setup(config.twitch_link_whitelist, twitchwhitelist, "Twitch") }
    console.log("-- Link Detect initiaslied!")
}
if (config.link_detect === "twitch" || config.slur_detect === "twitch" || config.link_detect === "both" || config.slur_detect === "both") {
    const client = new tmi.Client({
        options: { debug: false },
        identity: { username: config.twitch_username, password: config.twitch_password },
        channels: [config.twitch_channel]
    });
    client.connect();
    console.log('Twitch Bot Online!')
    client.on('message', (channel, tags, message, self) => {
        (async() => {
            try {
                if (self) return
                username = tags['display-name'];
                if (config.link_detect === "twitch" || config.link_detect === "both") {
                    twitchwhitelist.forEach(function(link) {
                        if (message.content === link) { return }
                    })
                    suffixes.forEach(function(suffix) {
                        if (message.includes(suffix)) {
                            client.timeout(config.twitch_channel, username, 1, "link detected by bot (" + suffix + ")").catch((err) => {
                                if (err === "bad_timeout_mod") {
                                    console.warn("The mod `" + username + "` sent a link but I cannot time them out!")
                                    return bot.channels.cache.get(config.log_channel_id).send("The mod `" + username + "` sent a link but I cannot time them out!")
                                }
                                console.warn(err)
                            });
                            console.log(`${username}: ${message}`)
                            const embed = new Discord.MessageEmbed()
                                .setTitle(':purple_square: Link :link: Detection on **Twitch** for ' + config.twitch_channel + ' :purple_square:')
                                .addField(username + " said", '`' + message + '`.\nThe link that the bot detected was `' + suffix + '`')
                                .setColor('#00b0f4')
                                .setDescription('The user should of been automatically timed out at https://twitch.tv/' + config.twitch_channel)
                                .setTimestamp()
                                .setFooter("By SSSEAL-C on Github using " + version + " of slur-detect");
                            bot.channels.cache.get(config.log_channel_id).send(embed);
                        }
                    })
                }
                if (message === "slur-version") {
                    console.log(`${username}: ${message}`)
                    client.say(config.twitch_channel, `@${tags.username}, Slur Detect is running ${version}`)
                }
                if (config.slur_detect === "twitch" || config.slur_detect === "both") {

                    words = message.split(' ');
                    words.forEach(function(item) {
                        twitchslurs.forEach(function(slur) {
                            if (item.toLowerCase() === slur) {
                                badword = item
                                client.timeout(config.twitch_channel, username, 1, "slur detected by bot (" + badword + ")").catch((err) => {
                                    if (err === "bad_timeout_mod") {
                                        console.warn("The mod " + username + " said " + badword + " but I cannot time them out!")
                                        return bot.channels.cache.get(config.log_channel_id).send("The mod `" + username + "` said `" + badword + "` but I cannot time them out!")
                                    }
                                    console.warn(err)
                                });
                                console.log(`${username}: ${message}`)
                                const embed = new Discord.MessageEmbed()
                                    .setTitle(':purple_square: Slur Detection on **Twitch** for ' + config.twitch_channel + ' :purple_square:')
                                    .addField(username + " said", '`' + message + '`.\nThe word that the bot detected was `' + item + '`')
                                    .setColor('#00b0f4')
                                    .setDescription('The user should of been automatically timed out at https://twitch.tv/' + config.twitch_channel)
                                    .setTimestamp()
                                    .setFooter("By SSSEAL-C on Github using " + version + " of slur-detect");
                                bot.channels.cache.get(config.log_channel_id).send(embed);
                            }
                        });
                    });
                }

            } catch (err) { console.warn(err) }
        })();

    })
}
if (config.link_detect === "discord" || config.slur_detect === "discord" || config.slur_detect === "both" || config.link_detect === "both") {
    bot.on("ready", () => { console.log("Discord Bot Online!"); });
    bot.on("message", async message => {
        if (message.author.bot) return
        if (message.content === "slur-version") {
            console.log(message.author.username + "#" + message.author.discriminator + ': ' + message.content)
            return message.channel.send("<@" + message.author.id + ">, Slur Detect is running " + version)
        }
        if (config.link_detect === "both" || config.link_detect === "discord") {
            discordwhitelist.forEach(function(link) { if (message.content.includes(link)) { return } })
            suffixes.forEach(function(suffix) {
                if (message.content.includes(suffix)) {
                    message.delete()
                    console.log(message.author.username + "#" + message.author.discriminator + ': ' + message.content)
                    const embed = new Discord.MessageEmbed()
                        .setTitle(':blue_square: Link :link: Detection on **Discord** for ' + message.guild.name + ' :blue_square:')
                        .addField(message.author.username + '#' + message.author.discriminator + " said", '`' + message.content + '`.\nThe part that the bot detected was `' + suffix + '`. The message was sent in <#' + message.channel.id + "> https://discordapp.com/channels/" + message.guild.id + "/" + message.channel.id + "/" + message.id)
                        .setColor('#00b0f4')
                        .setDescription('The message should have been automatically deleted.')
                        .setTimestamp()
                        .setFooter("By SSSEAL_C on Github using " + version + " of slur-detect");
                    bot.channels.cache.get(config.logchannelid).send(embed);
                }
            })
        }
        if (config.slur_detect === "both" || config.slur_detect === "discord") {
            words = message.content.split(' ');
            ignored = config.ignored_channels
            ignored.forEach(function(channel) { if (message.channel.id === channel) return })
            words.forEach(function(item) {
                discordlist.forEach(function(slur) {
                    if (item.toLowerCase() === slur) {
                        message.delete()
                        badword = item
                        console.log(message.author.username + "#" + message.author.discriminator + ': ' + message.content)
                        const embed = new Discord.MessageEmbed()
                            .setTitle(':blue_square: Slur Detection on **Discord** for ' + message.guild.name + ' :blue_square:')
                            .addField(message.author.username + '#' + message.author.discriminator + " said", '`' + message.content + '`.\nThe word that the bot detected was `' + item + '`. The message was sent it <#' + message.channel.id + "> .")
                            .setColor('#00b0f4')
                            .setDescription('The message should have been automatically deleted.')
                            .setTimestamp()
                            .setFooter("By SSSEAL-C on Github using " + version + " of slur-detect");
                        bot.channels.cache.get(config.log_channel_id).send(embed);
                    }
                });
            });
        }
    })
    bot.login(config.discord_token);
}