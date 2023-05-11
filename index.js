import sass from 'node-sass'
export default {
  version: 2,
  handler: async function (input, output) {
    const result = sass.renderSync({ data: await input.asText() });
    output.sendText(200, result.css.toString());
  }
}
