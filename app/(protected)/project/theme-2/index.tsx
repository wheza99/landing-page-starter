"use client";

import { AssistantRuntimeProvider } from "@assistant-ui/react";
import { useChatRuntime } from "@assistant-ui/react-ai-sdk";
import { Thread } from "@/components/assistant-ui/thread";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Canvas } from "./components/Canvas";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function ProjectTheme2() {
  const runtime = useChatRuntime({
    api: "/api/chat",
    initialMessages: [
      {
        role: "system",
        content: "You are Aida! An AI assistant for AI developers.",
      },
    ],
  });

  const [showThreadModal, setShowThreadModal] = useState(false);

  return (
    <AssistantRuntimeProvider runtime={runtime}>
      <TooltipProvider>
        <div className="flex flex-col h-dvh">

          {/* Content Area - Two Columns */}
          <div className="flex-1 grid grid-cols-2 overflow-hidden">
            {/* Thread Column */}
            <Thread />

            {/* Canvas Column */}
            <Canvas />
          </div>
        </div>
      </TooltipProvider>
    </AssistantRuntimeProvider>
  );
}
