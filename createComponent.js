let fs = require("fs");
let component = process.argv[2];

if (component === undefined) {
  throw Error("Please provide a component name");
}

const componentDir = "./src/components";
const storyDir = "./src/stories";

// Create Folder
if (!fs.existsSync(`${componentDir}/${component}`)) {
  fs.mkdirSync(`${componentDir}/${component}`);
}

// Create Component Index
let content = [
  `import ${component} from "./${component}";\n`,
  `export default ${component};\n`
];

fs.writeFile(
  `${componentDir}/${component}/index.js`,
  content.join(""),
  function(err) {
    if (err) throw err;
    console.log("Index Created");
  }
);

// Create Component
content = [
  'import React from "react";\n',
  'import * as MUI from "@material-ui/core";\n',
  'import PropTypes from "prop-types";\n',
  "\n",
  "const useStyles = MUI.makeStyles(theme => {\n",
  "\treturn {\n",
  `\t\t${component.toLowerCase()}: {}\n`,
  "\t};\n",
  "});\n",
  "\n",
  `const ${component} = props => {\n`,
  "\tconst classes = useStyles();\n",
  `\treturn <div className={classes.${component.toLowerCase()}}></div>;\n`,
  "};\n",
  "\n",
  `export default ${component};\n`,
  "\n",
  `${component}.propTypes = {\n`,
  "};"
];

fs.writeFile(
  `${componentDir}/${component}/${component}.js`,
  content.join(""),
  function(err) {
    if (err) throw err;
    console.log("Component Created");
  }
);

// Create Component Test
content = [
  'import * as RTL from "@testing-library/react";\n',
  'import React from "react";\n',
  `import ${component} from "components/${component}";\n`,
  "\n",
  `describe("${component} Spec", () => {\n`,
  `\ttest("Render ${component}", () => {\n`,
  `\t\tRTL.render(<${component} status="booked"/>);\n`,
  "\t});\n",
  "});"
];

fs.writeFile(
  `${componentDir}/${component}/${component}.spec.js`,
  content.join(""),
  function(err) {
    if (err) throw err;
    console.log("Component Test Created");
  }
);

// Create Component Story
if (!fs.existsSync(`${storyDir}/components/${component}`)) {
  fs.mkdirSync(`${storyDir}/components/${component}`);
}

fs.writeFile(
  `${storyDir}/components/${component}/index.stories.js`,
  "",
  function(err) {
    if (err) throw err;
    console.log("Component Story Created Created");
  }
);
