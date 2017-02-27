const webpack = require('webpack');
const chalk = require('chalk');
const webpackConfig = require('./webpack.config.dev.js');



/* eslint-disable no-console */
console.log(chalk.blue('Generating minified bundle for production. This will take a moment...'));
webpack(webpackConfig).run((err, stats) => {
  if(err) {
    console.log(chalk.red(err));
    return 1;
  }

  const jsonStats = stats.toJson();
  if (jsonStats.hasErrors) {
    return jsonStats.errors.map(error => {console.log(chalk.yellow(error))});
  }
  if (jsonStats.hasWarnings) {
    console.log(chalk.yellow('Webpack generated the following warnings:'));
    return jsonStats.warnings.map(warning => {console.log(chalk.yellow(warning))});
  }

  console.log(`Webpack stats: ${stats}`);
  console.log(chalk.green('Your production build has finished and written to /dist'));
  return 0;
});
