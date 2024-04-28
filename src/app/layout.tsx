"use client";
import "./styles/global.css";

import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import React, { Suspense } from "react";
import { SWRConfig } from "swr";

// import { SessionProvider } from "@/context";
import baseTheme from "./styles/theme";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { replace } = useRouter();

  const fetcher = async (url: string) => {
    const res = await fetch(url);
    if (!res.ok) {
      const error = new Error("An error occurred while fetching the data.");
      // @ts-ignore
      error.info = await res.json();
      // @ts-ignore
      error.status = res.status;
      if (res.status === 401 || res.status === 403) {
        const loginUrl = "/login";
        const currentLocation = window.location.toString();
        const returnToPath =
          currentLocation.replace(new URL(currentLocation).origin, "") || "/";
        await replace(
          `${loginUrl}?returnTo=${encodeURIComponent(returnToPath)}`
        );
      } else {
        throw error;
      }
    }

    return res.json();
  };

  const theme = extendTheme(baseTheme);
  return (
    <html lang="en">
      <SWRConfig
        value={{
          fetcher,
        }}
      >
        <head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap"
            rel="stylesheet"
          />
          <title>Placement Portal</title>
        </head>
        <body
          // google font is added for now will be adding local font in next commit
          style={{
            fontFamily: "Open Sans, sans-serif",
          }}
        >
          <Suspense fallback={<>Loading...</>}>
            {/* <SessionProvider> */}
            <ChakraProvider resetCSS theme={theme}>
              {/* <Fonts /> */}
              {children}
            </ChakraProvider>
            {/* </SessionProvider> */}
          </Suspense>
        </body>
      </SWRConfig>
    </html>
  );
}
