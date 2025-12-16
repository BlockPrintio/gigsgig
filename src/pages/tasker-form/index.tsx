import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Header from "@/components/header";
import PopularTasks from "@/components/populartasks";
import Footer from "@/components/footer";
import { useWallet } from "@meshsdk/react";
import { Asset, byteString, stringToHex, conStr0, integer, MeshTxBuilder, OutputReference, resolveScriptHash, UTxO } from "@meshsdk/core";
import { applyParamtoTasker } from "../../../offchain/transactions/tasker/apply-param";
import { blockchainProvider } from "../../../offchain/utils";
//import { writeFile } from "fs/promises";

const FormTasker: React.FC = () => {
  const router = useRouter();
  const {wallet,connected} = useWallet();
  const [username, setUsername] = useState("");
  const [school, setSchool] = useState("");
  const [interested, setInterest] = useState("");
  const [amount, setAmount] = useState("");
  
  useEffect(() => {
    if (router.isReady && router.query.category) {
      setInterest(router.query.category as string);
    }
  }, [router.isReady, router.query.category]);

  // Address state not used currently

//Json server objects
  // const tasker = {address,username,school,interested};
  
async function mint(username: string) {
  if (!connected || !wallet) {
    alert("Please connect your wallet first.");
    return;
  }

  try {
    const userAddress = await wallet.getChangeAddress();
    const collateral: UTxO = (await wallet.getCollateral())[0];
    if (!collateral) {
      alert("No collateral found. Please add collateral to your wallet.");
      return;
    }
    const utxos = await wallet.getUtxos();
    if (utxos.length < 2) {
      alert("Insufficient UTxOs. Please add more funds to your wallet.");
      return;
    }
    const mintUtxo = utxos[1];

    console.log(mintUtxo.output.amount);
    const utxo: OutputReference = conStr0([
      byteString(utxos[1].input.txHash),
      integer(0),
    ]);

    const usernameHex = stringToHex("GigsTasker" + username);

    const tasker = applyParamtoTasker(utxo);
    const taskerScript = tasker.script;
    const taskerPolicyId = resolveScriptHash(taskerScript, "V3");

    const taskerAsset: Asset[] = [{
      unit: taskerPolicyId + usernameHex,
      quantity: "1"
    }];

    const mintTaskerRedeemer = conStr0([]);

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
      .mint("1", taskerPolicyId, usernameHex)
      .mintingScript(taskerScript)
      .mintRedeemerValue(mintTaskerRedeemer, "JSON")
      .txOut(userAddress, taskerAsset)
      .txOutReferenceScript(taskerScript)
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
    const txhash = await wallet.submitTx(signedTx);
    console.log("Transaction submitted:", txhash);
    alert("Tasker NFT minted successfully! TxHash: " + txhash);

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
      <h2 className="text-2xl font-bold mb-4 text-black">Tasker Sign Up</h2>
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
      required
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
      required
      value={school}
      onChange={(e) => {setSchool(e.target.value)}}
      />
      </div>
      <div className="mb-6">
      <label htmlFor="work" className="block text-sm font-medium text-black">
      Tasks Interested In
      </label>
      <input
      type="text"
      id="work"
      name="work"
      className="mt-2 block w-full border-gray-300 rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500 text-black px-4 py-3"
      placeholder="Enter the type of work"
      required
      value={interested}
      onChange={(e) => {setInterest(e.target.value)}}
      />
      </div>
      <div className="mb-8">
      <label htmlFor="amount" className="block text-sm font-medium text-black">
       Minimum available for payment
      </label>
      <input
      type="number"
      id="amount"
      name="amount"
      className="mt-2 block w-full border-gray-300 rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500 text-black px-4 py-3"
      placeholder="e.g 100 ADA"
      required
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
      <Footer/>
    </div>
  );
};

export default FormTasker;
