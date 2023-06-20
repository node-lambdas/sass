import sass from "sass";

export default {
  version: 2,
  actions: {
    toCSS: {
      default: true,
      input: "text",
      output: "text",
      handler: async function (input, output) {
        try {
          const sassText = input.body;
          const options = {
            style: (input.options?.compressed && "compressed") || "expanded",
          };
          const result = sass.compileString(sassText, options);
          
          output.sendText(200, String(result.css));
        } catch (e) {
          output.reject(e);
        }
      },
    },
  },
};
