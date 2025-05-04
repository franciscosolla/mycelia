import { useState, useEffect } from "react";
import { Button, Linking, Text, View } from "react-native";
import { UniversalProvider } from "@walletconnect/universal-provider";

let provider: UniversalProvider;

let initializing = false;

const initProvider = async () => {
  if (!provider && !initializing) {
    initializing = true;

    console.log("Initializing WalletConnect provider...");

    provider = await UniversalProvider.init({
      projectId: "f2d772a2a2bf7ca982571e5f20a22a5c",
      metadata: {
        name: "Mycelia",
        description: "Web3 explorer",
        url: "https://mycelia.solla.dev",
        icons: ["https://mycelia.solla.dev/icon.png"],
      },
      client: undefined,
    });

    console.log("Provider initialized:", provider);

    console.log("Connecting to WalletConnect...");

    provider
      .connect({
        namespaces: {
          eip155: {
            methods: [
              "eth_sendTransaction",
              "eth_sign",
              "eth_signTypedData",
              "personal_sign",
            ],
            chains: ["eip155:1"],
            events: ["accountsChanged", "chainChanged"],
            rpcMap: {
              "eip155:1": `https://rpc.walletconnect.com?chainId=eip155:1&projectId=f2d772a2a2bf7ca982571e5f20a22a5c`,
            },
          },
        },
      })
      .then(() => {
        console.log("WalletConnect connected");
      });

    initializing = false;
  }
};

export const Metamask = () => {
  const [accounts, setAccounts] = useState<string[]>([]);

  useEffect(() => {
    if (!provider) {
      initProvider()
        .then(() => {
          console.log("Provider initialized");
        })
        .catch((err) => {
          console.error("Error initializing provider:", err);
        });
    }
  }, []);

  const connectWallet = async () => {
    if (!provider.uri) {
      console.error("No WalletConnect URI");
      return;
    }

    const uri = provider.uri;

    const deepLink = `https://metamask.app.link/wc?uri=${encodeURIComponent(
      uri
    )}`;

    await Linking.openURL(deepLink);

    provider.once("display_uri", async () => {
      console.log("URI displayed (paired)");
    });

    provider.once("session_event", async (event) => {
      console.log("Session event:", event);
    });

    provider.once("session_update", async (event) => {
      console.log("Session update:", event);
    });

    setAccounts(
      await provider.request({
        method: "eth_requestAccounts",
      })
    );
  };

  return (
    <View style={{ padding: 20 }}>
      <Button title="Connect MetaMask" onPress={connectWallet} />
      {accounts.length > 0 && (
        <Text style={{ marginTop: 20 }}>Connected to: {accounts[0]}</Text>
      )}
    </View>
  );
};
