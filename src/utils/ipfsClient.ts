import { create } from "ipfs-http-client";

// Using a more modern IPFS gateway that's compatible with Sui ecosystem projects
const projectId = process.env.NEXT_PUBLIC_IPFS_PROJECT_ID || "";
const projectSecret = process.env.NEXT_PUBLIC_IPFS_PROJECT_SECRET || "";
const auth = "Basic " + Buffer.from(projectId + ":" + projectSecret).toString("base64");

const ipfs = create({
  host: "ipfs.infura.io",
  port: 5001,
  protocol: "https",
  headers: {
    authorization: auth,
  },
});

export default ipfs;
