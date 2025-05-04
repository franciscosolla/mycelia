# Mycelia Mobile

**Mycelia** is a personal Web3 playground — reimagined for mobile.

This React Native app explores seamless wallet connectivity, decentralized UX patterns, and crypto-native mobile interactions using [WalletConnect v2](https://walletconnect.com/) and [MetaMask Mobile](https://metamask.io/).

> 🔒 Built with a clean Expo + Dev Client setup for full native compatibility.

---

## 📲 Features

- ✅ Connect to MetaMask Mobile via WalletConnect
- ✅ Deep link support to open dapp from MetaMask
- ✅ Display connected wallet address
- ⏳ Fetch and display ETH balance (coming next)
- ⏳ Send ETH transactions (next milestone)
- ⏳ Experiment with portfolio visualization and UX patterns

---

## 🛠️ Stack

- **React Native** (via Expo)
- **WalletConnect v2** (`@walletconnect/universal-provider`)
- **MetaMask Mobile** deep linking
- `react-native-get-random-values`, `react-native-url-polyfill`, `react-native-crypto`

---

## 🚀 Getting Started

```bash
git clone https://github.com/franciscosolla/mycelia.git
cd mycelia
npm install
npx expo run:android
```

> ⚠️ Requires a custom **Expo Dev Client** (due to native dependencies).

To create one:

```bash
npx expo install expo-dev-client
npx expo prebuild
npx expo run:android  # or run:ios
```

Then scan the QR with MetaMask Mobile when prompted to connect.

---

## 🔗 WalletConnect Deep Link Example

```ts
const deepLink = `https://metamask.app.link/wc?uri=${encodeURIComponent(uri)}`;
```

---

## 📁 Project Structure

```
src/
├── components/        # UI components
├── lib/               # WalletConnect logic
├── global.ts          # Polyfills for Buffer, URL, etc.
├── ...
```

---

## 🙋 Why this exists

> I’m a senior frontend engineer transitioning into Web3.  
> This app is part of a broader initiative to rethink mobile dApp UX from first principles — starting with core wallet flows.

Want to collaborate or learn more?  
→ https://solla.dev  
→ https://github.com/franciscosolla

---

## 📜 License

MIT — use it, fork it, build on it.
