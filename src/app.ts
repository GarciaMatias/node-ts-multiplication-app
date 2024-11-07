import { timeStamp } from "console";
import { yarg } from "./config/plugins/yargs.plugin";
import { ServerApp } from "./presentation/server-app";
import { SaveFile } from "./domain/use-cases/save-file.use-case";



/*const yar = yarg;
console.log('==================================');
console.log(yar);*/

(()=>{
    console.log('desde una funcion auto invoada y anonimus');
})();

(async()=>{
    await main();
})();

async function main(){

    const {b:base, l:limit, s:show, n:name, d:destination} = yarg;
    ServerApp.run({base,limit,show,name,destination});

    //SaveFile.execute();
}