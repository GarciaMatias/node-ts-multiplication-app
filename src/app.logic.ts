import * as fs from 'fs';
import { yarg } from './config/plugins/yargs.plugin';



const  value:number = yarg.b;
const limit:number = yarg.l;
const show:boolean = yarg.s;
let output = '';


//const linea = ()=>'==================================='
/*
const titulo = (numero: number)=>{
        '==================================='
};*/
//console.log(linea())
//console.log(`           TABLA DEL ${cinco}        `);
//console.log(linea());


    for (let i:number = 1; i <= limit;i++)
    {    output += `${value} x ${i} = ${value*i} \n`;
        //let result = (cinco: number , i: number)=> cinco * i;  
        //console.log(`${cinco} x ${i} = ` + result(cinco,i));
        //console.log(output);
    }



if(show){
const mns = `
===================================
           TABLA DEL ${value}
===================================
`;

const mensajefinal = mns + output;
console.log(mensajefinal);
const path = 'outputs/tabla-5.txt';
const uotput = `outputs/folder1`;


fs.mkdirSync(uotput, {recursive: true});
fs.writeFileSync(path,mensajefinal);
}
