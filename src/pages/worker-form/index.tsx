import {
   Asset,
   byteString,
   integer,
   stringToHex, 
   conStr0, 
   MeshTxBuilder,
   OutputReference,  
   resolveScriptHash,
   UTxO, 
   pubKeyHash,
   deserializeAddress
  } from "@meshsdk/core";
import React, { useState } from "react";
import Header from "@/components/header";
import PopularTasks from "@/components/populartasks";
import Footer from "@/components/footer";
import { useWallet } from "@meshsdk/react";
import { applyParamtoWorker } from "../../../offchain/transactions/worker/apply-param";
import { blockchainProvider } from "../../../offchain/utils";



const WorkerForm  = () => {


    const {wallet, connected} = useWallet();
    const [username, setUsername] = useState("");
    const [school, setSchool] = useState("");
    const [interest, setInterest] = useState("");
    const [amount, setAmount] = useState("");
    // Address state not used currently

//Json server objects (unused for now)
    // const worker = { address, username, school, interest}

async function mint(username: string) {
  if (!connected || !wallet) {
    alert("Please connect your wallet first.");
    return;
  }

  try {
    const userAddress = await wallet.getChangeAddress();
    const addressPubkey = deserializeAddress(userAddress).pubKeyHash;

    const collateral: UTxO = (await wallet.getCollateral())[0];
    if (!collateral || !collateral.input.txHash) {
      alert("Collateral not found. Please set collateral in your wallet.");
      return;
    }
    const utxos = await wallet.getUtxos();
    if (utxos.length < 1) {
      alert("Insufficient UTxOs. Please add more funds to your wallet.");
      return;
    }
    const mintUtxo = utxos[0];

    const utxo: OutputReference = conStr0([
      byteString(mintUtxo.input.txHash),
      integer(0),
    ]);

    const usernameHex = stringToHex("GigsWorker" + username);
    const worker = applyParamtoWorker(
      byteString(usernameHex),
      utxo,
      pubKeyHash(addressPubkey)
    );
    const workerScript = worker.script;
    const workerPolicyId = resolveScriptHash(workerScript, "V3");

    const workerAsset: Asset[] = [{
      unit: workerPolicyId + usernameHex,
      quantity: "1"
    }];

    const mintWorkerRedeemer = conStr0([]);

    const txBuilder = new MeshTxBuilder({
      fetcher: blockchainProvider,
      submitter: blockchainProvider,
      verbose: true,
    });

    const unsignedTx = await txBuilder
      .txIn(
        mintUtxo.input.txHash,
        mintUtxo.input.outputIndex,
        mintUtxo.output.amount,
        mintUtxo.output.address
      )
      .mintPlutusScriptV3()
      .mint("1", workerPolicyId, usernameHex)
      .mintingScript(workerScript)
      .mintRedeemerValue(mintWorkerRedeemer, "JSON")
      .txOut(userAddress, workerAsset)
      .txOutReferenceScript(workerScript)
      .txInCollateral(
        collateral.input.txHash,
        collateral.input.outputIndex,
        collateral.output.amount,
        collateral.output.address
      )
      .changeAddress(userAddress)
      .selectUtxosFrom(utxos)
      .setNetwork("preprod")
      .complete();

    const signedTx = await wallet.signTx(unsignedTx, true);
    const mintTxhash = await wallet.submitTx(signedTx);

    console.log("Transaction submitted:", mintTxhash);
    alert("Worker NFT minted successfully! TxHash: " + mintTxhash);

  } catch (error) {
    console.error("Minting failed:", error);
    const errorMessage = error instanceof Error ? error.message : String(error);
    if (errorMessage.includes("account changed")) {
      alert("Wallet account changed. Please reconnect your wallet and try again.");
    } else {
      alert("Minting failed: " + errorMessage);
    }
  }
}

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-green-100 to-white">
      <Header />
      <main className="flex-grow pt-24 w-full">
        <div className="flex items-center justify-center py-16 md:py-20 px-4">
          <form className="w-full max-w-lg bg-white p-8 md:p-10 rounded-xl shadow-lg border border-gray-100">
      <h2 className="text-2xl font-bold mb-4 text-black">Worker Sign Up</h2>
      <div className="mb-6">
      <label htmlFor="username" className="block text-sm font-medium text-black">
      Username
      </label>
      <input
      type="text"
      id="username"
      name="username"
      className="mt-2 block w-full border-gray-300 rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500 text-black px-4 py-3"
      placeholder="Enter your username"
      value={username}
      onChange={(e) => {setUsername(e.target.value)}}
      />
      </div>
      <div className="mb-6">
      <label htmlFor="school" className="block text-sm font-medium text-black">
      Name of School
      </label>
      <input
      type="text"
      id="school"
      name="school"
      className="mt-2 block w-full border-gray-300 rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500 text-black px-4 py-3"
      placeholder="Enter your school name"
      value={school}
      onChange={(e) => {setSchool(e.target.value)}}
      />
      </div>
      <div className="mb-6">
      <label htmlFor="work" className="block text-sm font-medium text-black">
       Works Interested In
      </label>
      <input
      type="text"
      id="work"
      name="work"
      className="mt-2 block w-full border-gray-300 rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500 text-black px-4 py-3"
      placeholder="Enter the type of work"
      value={interest}
      onChange={(e) => {setInterest(e.target.value)}}
      />
      </div>
      <div className="mb-8">
      <label htmlFor="amount" className="block text-sm font-medium text-black">
       Minimum expected to receive
      </label>
      <input
      type="number"
      id="amount"
      name="amount"
      className="mt-2 block w-full border-gray-300 rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500 text-black px-4 py-3"
      placeholder="e.g 100 ADA"
      value={amount}
      onChange={(e) => {setAmount(e.target.value)}}
      />
      </div>
      <button
      type="submit"
      className="w-full bg-green-500 text-white py-3 px-6 rounded-lg hover:bg-green-600 hover:scale-105 active:scale-95 transition transform duration-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 font-medium text-lg"
      onClick={async (e) => {
        e.preventDefault();
        await mint(username);
      }}
      >
      Submit
      </button>
    </form>
    </div>
    <PopularTasks />
    </main>
      <Footer />
    </div>
  );
};

export default WorkerForm;
