import { createThirdwebClient } from "thirdweb";

const clientId = process.env.NEXT_PUBLIC_CLIENT_ID;
const secretKey = process.env.NEXT_PUBLIC_THIRDWEB_API_KEY;
const suiRpcUrl = process.env.NEXT_PUBLIC_SUI_RPC_URL || "https://sui-mainnet.public.blastapi.io";

if (!clientId || !secretKey) {
  throw new Error("Client ID or Secret Key not provided");
}

export const client = createThirdwebClient({
  clientId: clientId,
  secretKey: secretKey,
  // chain: "sui:mainnet",
  // rpcUrl: suiRpcUrl,
});
