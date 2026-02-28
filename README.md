# QDay Starter Kit

A developer toolkit for building privacy-preserving dApps on **QDay** — the quantum-resistant EVM Layer 2 powered by [Abelian](https://abelian.info).

Forked from [Scaffold-ETH 2](https://github.com/scaffold-eth/scaffold-eth-2).

<h4 align="center">
  <a href="https://community.qday.io/guide/">QDay Docs</a> |
  <a href="https://explorer.qday.info">Explorer</a> |
  <a href="https://fi.qday.info/en/dapps/faucet">Faucet</a> |
  <a href="https://docs.scaffoldeth.io">SE-2 Docs</a>
</h4>

Built using NextJS, RainbowKit, Hardhat, Wagmi, Viem, and TypeScript.

- **Contract Hot Reload**: Your frontend auto-adapts to your smart contract as you edit it.
- **Custom hooks**: React hooks wrapping [wagmi](https://wagmi.sh/) for simplified contract interactions with TypeScript autocompletion.
- **Web3 Components**: Common web3 UI components to quickly build your frontend.
- **Burner Wallet & Local Faucet**: Quickly test your application locally.

## Requirements

- [Node (>= v20.18.3)](https://nodejs.org/en/download/)
- Yarn ([v1](https://classic.yarnpkg.com/en/docs/install/) or [v2+](https://yarnpkg.com/getting-started/install))
- [Git](https://git-scm.com/downloads)

## Quickstart

1. Clone and install dependencies:

```bash
git clone https://github.com/AbelianLabs/scaffold-eth-2-qday.git
cd scaffold-eth-2-qday
yarn install
```

2. Start a local blockchain (in terminal 1):

```bash
yarn chain
```

3. Deploy contracts locally (in terminal 2):

```bash
yarn deploy
```

4. Start the frontend (in terminal 3):

```bash
yarn start
```

Visit `http://localhost:3000` to interact with your smart contract using the **Debug Contracts** page.

## Deploy to QDay Testnet

1. Generate a deployer account (or import an existing key):

```bash
yarn generate
# or
yarn account:import
```

2. Copy the deployer address:

```bash
yarn account
```

3. Get testnet QDAY from the [Faucet](https://fi.qday.info/en/dapps/faucet).

4. Deploy to QDay Testnet:

```bash
yarn deploy --network qdayTestnet
```

5. Update `packages/nextjs/scaffold.config.ts` to set `qdayTestnet` as the first target network, or switch via the wallet connect dropdown in the UI.

## QDay Testnet Network Parameters

| Parameter       | Value                        |
| --------------- | ---------------------------- |
| Network Name    | QDay Testnet                 |
| Chain ID        | 44003                        |
| RPC URL         | https://rpc.qday.info        |
| Currency Symbol | QDAY                         |
| Block Explorer  | https://explorer.qday.info   |

## Project Structure

```
scaffold-eth-2-qday/
├── packages/
│   ├── hardhat/          # Smart contracts & deployment
│   │   ├── contracts/    # Solidity contracts
│   │   ├── deploy/       # Deployment scripts
│   │   └── test/         # Contract tests
│   └── nextjs/           # React frontend (Next.js App Router)
│       ├── app/          # Pages
│       ├── components/   # UI components
│       ├── hooks/        # Custom React hooks
│       └── contracts/    # Auto-generated ABIs (from yarn deploy)
```

## Useful Commands

```bash
yarn chain              # Start local blockchain
yarn deploy             # Deploy contracts locally
yarn start              # Start frontend at localhost:3000
yarn test               # Run Hardhat tests
yarn compile            # Compile contracts only
yarn deploy --network qdayTestnet   # Deploy to QDay Testnet
yarn verify --network qdayTestnet   # Verify contracts on explorer
yarn next:build         # Build frontend for production
yarn lint               # Lint all packages
yarn format             # Format all packages
```

## Documentation

- [QDay Docs](https://community.qday.io/guide/) — QDay network documentation
- [QDay Explorer](https://explorer.qday.info) — Block explorer for QDay Testnet
- [QDay Faucet](https://fi.qday.info/en/dapps/faucet) — Get testnet QDAY tokens
- [Scaffold-ETH 2 Docs](https://docs.scaffoldeth.io) — Full SE-2 technical docs and guides
- [Hardhat Docs](https://hardhat.org/docs) — Hardhat development environment
- [Solidity Docs](https://docs.soliditylang.org) — Solidity language reference
