# quietly existing

A simple Discord bot for allowing users to send anonymous messages. It is recommended that you only grant the bot permissions to access a dedicated channel for sending such anonymized messages. If a channel named `#quietly-existing-logs` exists in the server, the user who sent the message will be logged, along with the message they sent (for moderation purposes). Note that the bot will need Send Message permissions in this channel, too (if such logging is desirable).

Feel free to add the public instance of the bot to your server, or host it yourself. It doesn't take a lot of resources to host. Keep in mind that the bot is [AGPL LICENSED](LICENSE), so any changes to the bot's source code must be published in order to host that modified version of the bot.

The bot provides exactly two slash commands, namely `/quietly` and `/quietly-log-status`.

`/quietly` sends an anonymous message.

`/quietly-log-status` indicates whether or not logging for _quietly existing_ is enabled in the Discord server in question.

# Privacy Policy

This bot does not log any of the mssages it anonymizes to the server it runs on in the publicly available instance. Don't believe us? Check the code! Open source software is amazing that way.

We can't prove that the code on the server is what is running on the public instance due to the way Discord bots work. So if you have any concerns, you can feel free to self-host the bot.

# Terms of Service

We assume no liability, and have no responsibility, for messages sent using this bot. Since we don't log anything sent through the bot on the public instance, we have no way to moderate these messages. If you have any concerns about possibly abusive message content, we recommend creating a hidden log channel per the instructions in this file.

We do not provide any guarantee of the public instance's uptime/downtime, as [pulchra mentis](https://github.com/pulchra-mentis) maintain and fund the server as a hobby, not as a guaranteed service. However, it should be available except for server maintenance and routine updates and security patches. If the bot takes off, we may offer a donation option to help upgrade and maintain the server for users and help ensure uptime.

If you encounter a bug, please feel free to file a GitHub issue in relation. You can even submit a pull request!

While there is no way we can enforce this, we _strongly_ encourage server moderation teams to disclose whether or not the messages are being deanonymized in a private channel. If you are a user of the bot and are not informed either way, you can always find out if a channel named `#quietly-existing-logs` exists in the server by running the `/quietly-log-status` command. Open, honest moderation practices are the best way to ensure the safety of server members.
