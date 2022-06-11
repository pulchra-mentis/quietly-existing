// Require the necessary discord.js classes
import { Client, Intents, TextBasedChannel } from 'discord.js'
import { token } from '../config.json'

// Create a new client instance
const client = new Client({ intents: [Intents.FLAGS.GUILDS] })

client.once('ready', () => {
  console.log('Ready!')
})

client.on('interactionCreate', async interaction => {
  if (!interaction.isCommand()) return

  const { commandName } = interaction
  const channel = await interaction.channel
  const logChannel = (await interaction.guild?.channels.cache.find(
    channel => channel.name === 'quietly-existing-logs',
  )) as TextBasedChannel

  if (commandName === 'quietly') {
    const message = await interaction.options.getString('message', true)
    const user = await interaction.user.id
    await interaction.reply({
      content: `Your message is being sent anonymously in the channel you ran this command${
        logChannel
          ? ', but it will also be logged with your username to a separate channel in this server for review by moderators'
          : ''
      }.`,
      ephemeral: true,
    })
    await logChannel?.send(`<@${user}>:\n${message}`)
    await channel?.send(message)
  } else if (commandName === 'quietly-log-status') {
    await interaction.reply({
      content: logChannel
        ? 'This server has enabled logging for *quietly existing*.'
        : 'Logs for *quietly existing* are disabled in this server.',
      ephemeral: true,
    })
  }
})

client.login(token)
