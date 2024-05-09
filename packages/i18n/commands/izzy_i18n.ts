import {BaseCommand} from "@adonisjs/core/ace";
import generateTranslations from "../src/generate_translations.js";

export default class IzzyI18n extends BaseCommand {
  static commandName = 'izzy:i18n'
  static description = 'Generate translation files for the IzzyJS i18n package'


  async run() {
    this.logger.info('Generating translations file... ♻️')

    try {
      await generateTranslations()
      this.logger.success('Translations file generated successfully! 🎉')
    } catch (error) {
      this.logger.error('Error generating translations file 🚨')
      this.logger.error(error)
    }
  }
}
