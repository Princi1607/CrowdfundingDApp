import React, { useState } from "react";
import { AuthClient } from "@dfinity/auth-client";

const LoginButton = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [principal, setPrincipal] = useState("");

  const login = async () => {
    const authClient = await AuthClient.create();
    await authClient.login({
      identityProvider: "https://identity.ic0.app",
      onSuccess: async () => {
        const identity = authClient.getIdentity();
        setIsAuthenticated(true);
        setPrincipal(identity.getPrincipal().toString());
      },
    });
  };

  return (
    <button
      onClick={login}
      className="bg-white text-blue-600 px-4 py-2 rounded-md hover:bg-gray-200"
    >
      {isAuthenticated ? `Logged in as ${principal.slice(0, 8)}...` : "Login with Internet Identity"}
    </button>
  );
};

export default LoginButton;
