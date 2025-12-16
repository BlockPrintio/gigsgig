export {};
// async function createtask(
//     valid_from: number,
//     valid_to: number,
//     is_workdone: boolean,
//     utxo: OutputReference,
//     amount: string
// ){
// const taskerScriptRef = JSON.parse(
//     await readFile("./scriptref-hash/tasker.json", "utf-8"));
// const taskerScript = applyParamtoTasker(utxo).script;
//     const task_datum = conStr0([
//         integer(valid_from),
//         integer(valid_to),
//         bool(is_workdone)
//     ]);
// const taskAsset: Asset[] = [{
//     unit: "lovelace",
//     quantity: amount
// }];
// const txBuilder = new MeshTxBuilder({
//     fetcher: blockchainProvider,
//     submitter: blockchainProvider,
// });
// const unsignedTx = await txBuilder
//     .spendingPlutusScriptV3()
//     .txInScript(taskerScriptRef.taskerHash, taskerScript, task_datum, {})
//     .txOut("addr...", taskAsset)
//     .complete();
// return unsignedTx;
// }
// export { createtask };
