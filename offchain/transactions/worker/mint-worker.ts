import { Asset, ByteString, byteString, conStr0, MeshTxBuilder, OutputReference, PubKeyHash, resolvePlutusScriptHash, resolveScriptHash, scriptHash } from "@meshsdk/core";
import { applyParamtoWorker } from "./apply-param.js";
import { blockchainProvider } from "../../utils.js";



async function mintWorker(
    worker_asset_name: ByteString,
    utxo: OutputReference,
    worker_address: PubKeyHash
){

const worker = applyParamtoWorker(
    worker_asset_name,
    utxo,
    worker_address
    )
const workerScript = worker.script;
const workerPolicyId = resolveScriptHash(workerScript, "V3");

const workerAsset: Asset[] = [{
    unit: workerPolicyId + worker_asset_name,
    quantity: "1"
}]

const mintWorkerRedeemer = conStr0([]);

const txBuilder = new MeshTxBuilder({
    fetcher: blockchainProvider,
    submitter: blockchainProvider,
    verbose: true,
});

const unsignedTx = await txBuilder
    .mintPlutusScriptV3()
    .mint("1", workerPolicyId, worker_asset_name.toString())
    .mintingScript(workerScript)
    .mintRedeemerValue(mintWorkerRedeemer, "JSON")
    .txOut("addr...", workerAsset)
    .txOutReferenceScript(workerScript)
    .complete();

return unsignedTx;
}

export { mintWorker };
