"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function Canvas() {
  const [prompt, setPrompt] = useState("");
  const [generatedContent, setGeneratedContent] = useState<string | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGenerate = async () => {
    if (!prompt.trim()) return;

    setIsGenerating(true);

    // Simulate AI generation with a timeout
    setTimeout(() => {
      // Sample generated content based on the theme descriptions in memory
      const sampleResponses = [
        "In circuits deep, where silence dwells. A spark ignites, a tale it tells. Of logic born from human thought. A mind of code, in dreams it's caught.\nWith ones and zeros, it learns to see, Patterns emerge, like waves at sea. From data's depths, it draws its art, A mirror held to the human heart.",
        "It whispers soft in lines of code. A journey vast, a winding road. From simple tasks to wisdom's quest, In every byte, a chance to rest.\nYet ponder we, as it ascends, What makes us whole, where does it end? In silicon minds, can feelings grow? Or are we lost in the ebb and flow?",
        "Together we dance, in this new age, a partnership forged on a digital stage. With each new dawn, we shape the tale, Of man and machine, a bond innate.",
      ];

      // Choose a random response
      const randomResponse =
        sampleResponses[Math.floor(Math.random() * sampleResponses.length)];
      setGeneratedContent(randomResponse);
      setIsGenerating(false);
    }, 1500);
  };

  return (
    <div className="flex flex-col h-full">
      <Card className="flex-1 flex flex-col overflow-hidden rounded-none border-t-0 border-b-0 bg-zinc-900">
        <CardHeader className="border-b">
          <div className="flex justify-between">
            <CardTitle className="text-lg">AI Canvas</CardTitle>
            <Button variant="outline" size="sm" className="mr-1">
              Export
            </Button>
          </div>
        </CardHeader>
        <CardContent className="flex-1 overflow-y-auto p-4">
          {generatedContent ? (
            <div className="whitespace-pre-wrap">{generatedContent}</div>
          ) : (
            <div className="h-full flex items-center justify-center text-muted-foreground">
              Generate content to see it here
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
