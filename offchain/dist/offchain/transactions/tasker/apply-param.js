import { applyParamsToScript } from "@meshsdk/core";
import plutusBlueprint from "../../../onchain/plutus.json" assert { type: 'json' };
const taskerValidator = plutusBlueprint.validators.find(({ title }) => title === "tasker.user.spend");
const taskerCborScript = taskerValidator?.compiledCode;
function applyParamtoTasker(utxo) {
    const script = applyParamsToScript(taskerCborScript, [
        utxo
    ], "JSON");
    const plutusScript = {
        code: script,
        version: "V3"
    };
    return { script, plutusScript };
}
;
export { applyParamtoTasker };
