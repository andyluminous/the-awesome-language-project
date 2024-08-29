import { type ReactNode, useEffect, useRef, useState } from "react";

import { WSContext } from "./ws.context";

type WSProviderProps = {
  children: ReactNode
}

export const WSProvider = (props: WSProviderProps) => {
  const [isReady, setIsReady] = useState<boolean>(false);
  const [value, setValue] = useState(null);
  const wsRef = useRef<WebSocket|null>(null);

  useEffect(() => {
    return () => wsRef.current?.close();
  }, []);

  const connectWebSocket = (token: string) => {
    const socket = new WebSocket(`ws://localhost:8080?token=${token}`);
    socket.onopen = () => setIsReady(true);
    socket.onclose = () => setIsReady(false);
    socket.onmessage = (event) => setValue(event.data);

    wsRef.current = socket;
  }

  const closeWebSocket = () => {
    wsRef.current?.close();
    wsRef.current = null;
    setValue(null);
  }

  const providedValues = {isReady, value, connectWebSocket, closeWebSocket};

  return (
    <WSContext.Provider value={providedValues}>
      {props.children}
    </WSContext.Provider>
  );
}
