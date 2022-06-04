// Require the necessary discord.js classes
import { Client, Intents, MessagePayload, TextBasedChannel } from 'discord.js'
import { token } from '../config.json'

// Create a new client instance
const client = new Client({ intents: [Intents.FLAGS.GUILDS] })

client.once('ready', () => {
  console.log('Ready!')
})

client.on('interactionCreate', async interaction => {
  if (!interaction.isCommand()) return

  const { commandName } = interaction

  if (commandName === 'quietly') {
    const channel = await interaction.channel
    const logChannel = (await interaction.guild?.channels.cache.find(
      channel => channel.name === 'quietly-existing-logs',
    )) as TextBasedChannel
    const message = await interaction.options.getString('message', true)
    const user = await interaction.user.id
    interaction.reply({
      content:
        'Your message is being sent anonymously, and may be logged to a separate channel if the server managers have configured this bot to do so.',
      ephemeral: true,
    })
    logChannel?.send(`<@${user}>:\n${message}`)
    channel?.send(message)
  }
})

client.login(token)
