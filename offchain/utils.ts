import { BlockfrostProvider, MeshWallet } from "@meshsdk/core";


export const blockchainProvider = new BlockfrostProvider(process.env.BLOCKFROST_API_KEY || 'preprodYAw21nxr9EdeZNSLDDLOJVg98DOrya75');
