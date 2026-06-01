"use client";

import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export default function Home() {
  return (
    <div>
      <Button onClick={showToast}>Click to show toast</Button>
    </div>
  );
}

function showToast() {
  toast.error("Failed to something");
}
