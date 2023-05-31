import sass from 'node-sass'

export default {
  version: 2,
  actions: {
    toCSS: {
      input: 'text',
      output: 'text',
      handler: async function (input, output) {
        const result = sass.renderSync({ data: await input.asText() });
        output.sendText(200, result.css.toString());
      }
    }
  }
}
