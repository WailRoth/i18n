import { ApplicationService } from '@adonisjs/core/types'
import {Translation} from "../src/types/manifest.js";

declare global {
  namespace globalThis {
    let __izzy__: {
      translations: Translation[]
    }
  }
}

export default class TranslationProvider {
  constructor(protected app: ApplicationService) {}
/*  async #registerEdgePlugin() {
    if (!this.app.usingEdgeJS) return

    const edgeExports = await import('../src/plugins/edge.js')
    const { edgePluginTranslation: edgePluginBise } = await import('../src/plugins/edge.js')
    edgeExports.default.use(edgePluginBise())
  }*/
}
