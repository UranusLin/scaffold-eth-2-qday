"use client";

import { useCallback } from "react";
import Link from "next/link";
import { Address } from "@scaffold-ui/components";
import type { NextPage } from "next";
import { hardhat } from "viem/chains";
import { useAccount } from "wagmi";
import { BugAntIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { useTargetNetwork } from "~~/hooks/scaffold-eth";
import { qdayTestnet } from "~~/scaffold.config";
import { notification } from "~~/utils/scaffold-eth";

const QDAY_LINKS = {
  explorer: "https://explorer.qday.info",
  faucet: "https://fi.qday.info/en/dapps/faucet",
  docs: "https://community.qday.io/guide/",
  se2Docs: "https://docs.scaffoldeth.io",
  hardhatDocs: "https://hardhat.org/docs",
  solidityDocs: "https://docs.soliditylang.org",
} as const;

const QDAY_TESTNET_PARAMS = {
  chainId: `0x${qdayTestnet.id.toString(16)}`,
  chainName: qdayTestnet.name,
  nativeCurrency: qdayTestnet.nativeCurrency,
  rpcUrls: [qdayTestnet.rpcUrls.default.http[0]],
  blockExplorerUrls: [qdayTestnet.blockExplorers?.default.url],
};

const Home: NextPage = () => {
  const { address: connectedAddress } = useAccount();
  const { targetNetwork } = useTargetNetwork();

  const addQDayToWallet = useCallback(async () => {
    if (typeof window === "undefined" || !window.ethereum) {
      notification.warning("Please install a web3 wallet.");
      return;
    }
    try {
      await window.ethereum.request({
        method: "wallet_addEthereumChain",
        params: [QDAY_TESTNET_PARAMS],
      });
      notification.success("QDay Testnet added to wallet!");
    } catch (error) {
      console.error("Failed to add QDay Testnet:", error);
      notification.error("Failed to add QDay Testnet to wallet.");
    }
  }, []);

  return (
    <>
      <div className="flex items-center flex-col grow pt-10">
        {/* Hero Section */}
        <div className="px-5 max-w-3xl text-center">
          <h1 className="text-center">
            <span className="block text-2xl mb-2">Build on</span>
            <span className="block text-4xl font-bold">QDay Starter Kit</span>
          </h1>
          <p className="text-lg mt-4">
            A developer toolkit for building privacy-preserving dApps on <span className="font-bold">QDay</span> — the
            quantum-resistant EVM Layer 2 powered by{" "}
            <a href="https://abelian.info" target="_blank" rel="noreferrer" className="link">
              Abelian
            </a>
            . Forked from{" "}
            <a href="https://github.com/scaffold-eth/scaffold-eth-2" target="_blank" rel="noreferrer" className="link">
              Scaffold-ETH 2
            </a>
            .
          </p>
          <div className="flex justify-center items-center space-x-2 flex-col mt-4">
            <p className="my-2 font-medium">Connected Address:</p>
            <Address
              address={connectedAddress}
              chain={targetNetwork}
              blockExplorerAddressLink={
                targetNetwork.id === hardhat.id ? `/blockexplorer/address/${connectedAddress}` : undefined
              }
            />
          </div>
        </div>

        {/* Challenge Brief */}
        <div className="mt-12 px-5 max-w-4xl w-full">
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body gap-4">
              <h2 className="card-title text-2xl justify-center">Abelian Foundation Award</h2>

              <div className="space-y-4 text-sm leading-relaxed">
                <div>
                  <h3 className="font-bold text-base mb-1">The Problem</h3>
                  <p>
                    In an era of explosive AI acceleration, we are trading our personal secrets for intelligence. Every
                    time we interact with AI — whether for health advice, financial planning, or daily chat — we leave a
                    &quot;digital trail&quot; that exposes our most private data. This creates a massive{" "}
                    <span className="font-semibold">Trust Gap</span> where people feel vulnerable while using the tools
                    they need most.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-base mb-1">The Opportunity</h3>
                  <p>
                    What if AI could serve you without ever &quot;knowing&quot; your real-world identity? By combining
                    Abelian&apos;s secure, quantum-resistant infrastructure with AI, we can build a future where data
                    utility and personal security coexist — where you own your data, not the AI models.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-base mb-1">The Call to Action</h3>
                  <p>
                    We challenge you to reimagine everyday applications — from encrypted health assistants to secure
                    anonymous social spaces — where users harness the power of AI while remaining completely safe and
                    private.
                  </p>
                </div>
              </div>

              <div className="divider my-1"></div>
              <h3 className="font-bold text-base text-center">Explore Creative Opportunities</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="card bg-base-200 card-compact">
                  <div className="card-body">
                    <h4 className="card-title text-sm">Encrypted AI Sidekicks</h4>
                    <p className="text-xs">
                      AI tools that learn from your habits but protect your sensitive data locally or on-chain.
                    </p>
                  </div>
                </div>
                <div className="card bg-base-200 card-compact">
                  <div className="card-body">
                    <h4 className="card-title text-sm">Verified Realness</h4>
                    <p className="text-xs">
                      Combat deepfakes by proving content authenticity without exposing the creator&apos;s biometric
                      privacy.
                    </p>
                  </div>
                </div>
                <div className="card bg-base-200 card-compact">
                  <div className="card-body">
                    <h4 className="card-title text-sm">Anonymous Data Exchange</h4>
                    <p className="text-xs">
                      Get rewarded for contributing data (e.g., health or fitness) without revealing your identity.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div className="mt-8 px-5 max-w-3xl w-full">
          <div className="flex justify-center items-center gap-4 flex-wrap">
            <a href={QDAY_LINKS.explorer} target="_blank" rel="noreferrer" className="btn btn-primary btn-sm">
              Explorer
            </a>
            <a href={QDAY_LINKS.faucet} target="_blank" rel="noreferrer" className="btn btn-primary btn-sm">
              Faucet
            </a>
            <a href={QDAY_LINKS.docs} target="_blank" rel="noreferrer" className="btn btn-primary btn-sm">
              QDay Docs
            </a>
          </div>
        </div>

        {/* Getting Started */}
        <div className="mt-8 px-5 max-w-3xl w-full">
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title text-xl justify-center">Getting Started</h2>
              <div className="mockup-code text-sm">
                <pre data-prefix="1">
                  <code>yarn chain # Start local blockchain</code>
                </pre>
                <pre data-prefix="2">
                  <code>yarn deploy # Deploy contracts locally</code>
                </pre>
                <pre data-prefix="3">
                  <code>yarn start # Start frontend at localhost:3000</code>
                </pre>
                <pre data-prefix="4" className="text-warning">
                  <code>yarn deploy --network qdayTestnet # Deploy to QDay Testnet</code>
                </pre>
              </div>
            </div>
          </div>
        </div>

        {/* Developer Guide Accordion */}
        <div className="mt-8 px-5 max-w-3xl w-full">
          <h2 className="text-2xl font-bold text-center mb-4">Developer Guide</h2>
          <div className="join join-vertical w-full [&>*]:rounded-lg">
            {/* Section 1: Development Workflow */}
            <div className="collapse collapse-arrow join-item bg-base-100 border border-base-300">
              <input type="checkbox" />
              <div className="collapse-title text-lg font-medium">Development Workflow</div>
              <div className="collapse-content">
                <ol className="list-decimal list-inside space-y-3">
                  <li>
                    Edit contract in <code className="badge badge-sm badge-ghost">packages/hardhat/contracts/</code>
                  </li>
                  <li>
                    Run <code className="badge badge-sm badge-ghost">yarn deploy</code> to redeploy
                  </li>
                  <li>
                    Test on frontend at <code className="badge badge-sm badge-ghost">localhost:3000</code>
                  </li>
                  <li>
                    Run <code className="badge badge-sm badge-ghost">yarn test</code> to run Hardhat tests
                  </li>
                </ol>
                <p className="mt-4 text-sm opacity-70">
                  Use <code className="badge badge-sm badge-ghost">yarn compile</code> for compile-only without
                  deploying.
                </p>
              </div>
            </div>

            {/* Section 2: Deploy to QDay Testnet */}
            <div className="collapse collapse-arrow join-item bg-base-100 border border-base-300">
              <input type="checkbox" />
              <div className="collapse-title text-lg font-medium">Deploy to QDay Testnet</div>
              <div className="collapse-content">
                <ol className="list-decimal list-inside space-y-3">
                  <li>
                    Generate deployer account: <code className="badge badge-sm badge-ghost">yarn generate</code>
                    <br />
                    <span className="text-sm opacity-70 ml-6">
                      Or import existing key: <code className="badge badge-sm badge-ghost">yarn account:import</code>
                    </span>
                  </li>
                  <li>
                    Copy deployer address: <code className="badge badge-sm badge-ghost">yarn account</code>
                  </li>
                  <li>
                    Get testnet QDAY from the{" "}
                    <a href={QDAY_LINKS.faucet} target="_blank" rel="noreferrer" className="link link-primary">
                      Faucet
                    </a>
                  </li>
                  <li>
                    Deploy: <code className="badge badge-sm badge-ghost">yarn deploy --network qdayTestnet</code>
                  </li>
                  <li>
                    Switch frontend network via wallet connect dropdown or update{" "}
                    <code className="badge badge-sm badge-ghost">scaffold.config.ts</code> targetNetworks order
                  </li>
                </ol>
              </div>
            </div>

            {/* Section 3: Add QDay Testnet to Wallet */}
            <div className="collapse collapse-arrow join-item bg-base-100 border border-base-300">
              <input type="checkbox" />
              <div className="collapse-title text-lg font-medium">Add QDay Testnet to Wallet</div>
              <div className="collapse-content">
                <div className="overflow-x-auto">
                  <table className="table table-sm">
                    <tbody>
                      <tr>
                        <td className="font-medium">Network Name</td>
                        <td>QDay Testnet</td>
                      </tr>
                      <tr>
                        <td className="font-medium">Chain ID</td>
                        <td>44003</td>
                      </tr>
                      <tr>
                        <td className="font-medium">RPC URL</td>
                        <td>
                          <code className="text-sm">https://rpc.qday.info</code>
                        </td>
                      </tr>
                      <tr>
                        <td className="font-medium">Currency Symbol</td>
                        <td>QDAY</td>
                      </tr>
                      <tr>
                        <td className="font-medium">Block Explorer</td>
                        <td>
                          <a href={QDAY_LINKS.explorer} target="_blank" rel="noreferrer" className="link link-primary">
                            {QDAY_LINKS.explorer}
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="mt-4 text-center">
                  <button className="btn btn-primary btn-sm" onClick={addQDayToWallet}>
                    Add QDay Testnet to Wallet
                  </button>
                </div>
              </div>
            </div>

            {/* Section 4: Useful Resources */}
            <div className="collapse collapse-arrow join-item bg-base-100 border border-base-300">
              <input type="checkbox" />
              <div className="collapse-title text-lg font-medium">Useful Resources</div>
              <div className="collapse-content">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  <a href={QDAY_LINKS.docs} target="_blank" rel="noreferrer" className="btn btn-outline btn-sm">
                    QDay Docs
                  </a>
                  <a href={QDAY_LINKS.explorer} target="_blank" rel="noreferrer" className="btn btn-outline btn-sm">
                    Explorer
                  </a>
                  <a href={QDAY_LINKS.faucet} target="_blank" rel="noreferrer" className="btn btn-outline btn-sm">
                    Faucet
                  </a>
                  <a href={QDAY_LINKS.se2Docs} target="_blank" rel="noreferrer" className="btn btn-outline btn-sm">
                    SE-2 Docs
                  </a>
                  <a href={QDAY_LINKS.hardhatDocs} target="_blank" rel="noreferrer" className="btn btn-outline btn-sm">
                    Hardhat Docs
                  </a>
                  <a href={QDAY_LINKS.solidityDocs} target="_blank" rel="noreferrer" className="btn btn-outline btn-sm">
                    Solidity Docs
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Debug & Explorer Cards */}
        <div className="grow bg-base-300 w-full mt-12 px-8 py-12">
          <div className="flex justify-center items-center gap-12 flex-col md:flex-row">
            <div className="flex flex-col bg-base-100 px-10 py-10 text-center items-center max-w-xs rounded-3xl">
              <BugAntIcon className="h-8 w-8 fill-secondary" />
              <p>
                Tinker with your smart contract using the{" "}
                <Link href="/debug" passHref className="link">
                  Debug Contracts
                </Link>{" "}
                tab.
              </p>
            </div>
            <div className="flex flex-col bg-base-100 px-10 py-10 text-center items-center max-w-xs rounded-3xl">
              <MagnifyingGlassIcon className="h-8 w-8 fill-secondary" />
              <p>
                Explore your local transactions with the{" "}
                <Link href="/blockexplorer" passHref className="link">
                  Block Explorer
                </Link>{" "}
                tab.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
