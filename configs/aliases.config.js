const path = require('path');

// __dirname gives exact path where the file is, in this case: PROJECT/configs. It is needed to add ../ at the beginning of the aliases to solve correct path.

const aliases = {
    '@intelops/button': path.resolve(__dirname, '../packages/react/components/Button/src/index'),
    '@intelops/alert': path.resolve(__dirname, '../packages/react/components/Alert/src/index'),
};

module.exports = { aliases };
