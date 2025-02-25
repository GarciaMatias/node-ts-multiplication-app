import { argv } from 'process';
import yargs, { options } from 'yargs';
import { hideBin } from 'yargs/helpers';


export const yarg = yargs(hideBin(process.argv))
    .option('b',{
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'multiplication de mati'
    })
    .option('l',{
        alias: 'limit',
        type: 'number',
        default: 10,
        describe: 'multiplication limit mati '
    })
    .option('s',{
        alias: 'show',
        type: 'boolean',
        default: false,
        describe: 'Show table '
    })
    .option('n',{
        alias: 'name',
        type: 'string',
        default: 'table',
        describe: 'File name'
    })
    .option('d',{
        alias: 'destination',
        type: 'string',
        default: './output',
        describe: 'File destination'
    })
    /*.check((argv ,options) =>{
        if(argv.b > 1) throw 'Error: base must be more than 1'
    })*/
    .parseSync();



