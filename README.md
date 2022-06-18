# quietly existing

A simple Discord bot for allowing users to send anonymous messages. It is recommended that you only grant the bot permissions to access a dedicated channel for sending such anonymized messages. If a channel named `#quietly-existing-logs` exists in the server, the user who sent the message will be logged, along with the message they sent (for moderation purposes). Note that the bot will need Send Message permissions in this channel, too (if such logging is desirable).

Feel free to  host it yourself. It doesn't take a lot of resources to host. Keep in mind that the bot is [AGPL LICENSED](LICENSE), so any changes to the bot's source code must be published in order to host that modified version of the bot.

The bot provides exactly two slash commands, namely `/quietly` and `/quietly-log-status`.

`/quietly` sends an anonymous message.

`/quietly-log-status` indicates whether or not logging for _quietly existing_ is enabled in the Discord server in question.
