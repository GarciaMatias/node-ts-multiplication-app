import { log } from "console";
import { yarg } from "../config/plugins/yargs.plugin";
import { CreateTable } from "../domain/use-cases/create-table.use-case";
import { SaveFile } from "../domain/use-cases/save-file.use-case";
    
interface RunOptions {
    base: number;
    limit: number;
    show: boolean;
    name: string;
    destination: string;

}

export class ServerApp{


     static run({base,limit,show,name,destination}: RunOptions){

        console.log('server start to run...');
        const table = new CreateTable().execute({base,limit});
        const save = new SaveFile().execute({ fileContent:table,fileName:name,fileDestination:destination});
        console.log(table);

        (save)? console.log('File created'): console.log('File not created');
        
        
     }
}