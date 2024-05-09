import { TagContract } from "edge.js/types"

const translation: TagContract = {
  block: false,
  tagName: 'translation',
  seekable: false,
  compile: (_parser, buffer, token) => {
    buffer.writeExpression(`state.translation()`, token.filename, token.loc.start.line)
  },
}
export const edgePluginTranslation = () => {
  return (edge: any) => {
    edge.global('translation', () => {
      return `<script>
    let received = \`{{validatorTranslations’}}\`.replace(/&quot;/g, '"');
    let validatorsTranslations = JSON.parse(received.substring(1, received.length-1));
    window.validatorsTranslations = validatorsTranslations;
    console.log(window.validatorsTranslations);
  </script>`
    })

    edge.registerTag(translation)
  }
}
