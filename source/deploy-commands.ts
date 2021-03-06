import { SlashCommandBuilder } from '@discordjs/builders'
import { REST } from '@discordjs/rest'
import { Routes } from 'discord-api-types/v9'
import { clientID, token } from '../config.json'

const commands = [
  new SlashCommandBuilder()
    .setName('quietly')
    .setDescription(
      'Sends an anonymous message that may be logged with your username to a separate channel.',
    )
    .addStringOption(option =>
      option
        .setName('message')
        .setDescription('The message to anonymize.')
        .setRequired(true),
    ),
  new SlashCommandBuilder()
    .setName('quietly-log-status')
    .setDescription(
      'Indicates whether logging for *quietly existing* is enabled in this server.',
    ),
].map(command => command.toJSON())

const rest = new REST({ version: '9' }).setToken(token)

rest
  .put(Routes.applicationCommands(clientID), { body: commands })
  .then(() => console.log('Successfully registered application commands.'))
  .catch(console.error)
