import * as core from "@actions/core";
import * as github from "@actions/github";

try{
    const nombrePersona = core.getInput("persona");
    console.log(`Hola ${nombrePersona}`);

    const hora = new Date().toTimeString();
    core,core.setOutput("hora", hora);

    const playload = JSON.stringify(github.context.playload, undefined, 2);
    console.log(`Mi churro de información: ${playload}`)
}catch (error){
    core.setFailed(error.message);
}