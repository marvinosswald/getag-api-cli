#!/usr/bin/env node

/**
 * Module dependencies.
 */
var api = require('getag-api-wrapper');
var program = require('commander');

program
  .version('0.0.1')
  .option('-n, --netzbetreiber', 'Netzbetreiber ID abfragen ')
  .option('-u, --unternehmensinfo [id]', 'Get Info for [id]')
  .parse(process.argv);

console.log('Get-Ag API');
if (program.netzbetreiber) api.netzbetreiberId();

if (program.unternehmensinfo){
  console.log('Unternehmensinfo for VN: %s', program.unternehmensinfo);
}
