import { assets } from "@/utils/asset-utils";
import Image from "next/image";
import { useState, useEffect } from "react";

export const Cursor = () => {
  const [cursorState, setCursorState] = useState({
    x: -100,
    y: -100,
  });

  useEffect(() => {
    async function animateCursor() {
      // Initial 1-second delay
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Move the cursor to the claim button
      const button = document.getElementById("claim-btn") as HTMLElement;
      const buttonRect = button.getBoundingClientRect();
      const x = buttonRect.x + buttonRect.width / 2;
      const y = buttonRect.y + buttonRect.height / 2;
      setCursorState({ x, y });

      // Additional 1-second delay
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Update the cursor position to be 150px below the button
      const newY = y + 150;
      setCursorState({ x, y: newY });

      // Move the button down by 150px
      button.style.transition = "transform 700ms ease-in-out";
      button.style.transform = `translateY(150px)`;

      // Additional 1-second delay
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Move the cursor out of the screen
      setCursorState({ x: window.innerWidth - 100, y: -100 });
    }

    animateCursor();
  }, []);

  return (
    <Image
      className={`duration-700 absolute transition-all ease-in-out z-50`}
      style={{
        top: `${cursorState.y}px`,
        left: `${cursorState.x}px`,
      }}
      alt="Cursor"
      src={assets.cursor}
      width={80}
      height={50}
    />
  );
};
