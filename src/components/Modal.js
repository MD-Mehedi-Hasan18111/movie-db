"use client";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useRef } from "react";
import { IoMdClose } from "react-icons/io";

export default function Modal({ children }) {
  const overlay = useRef(null);
  const wrapper = useRef(null);
  const router = useRouter();

  const onDismiss = useCallback(() => {
    router.back();
  }, [router]);

  const onClick = useCallback(
    (e) => {
      if (e.target === overlay.current || e.target === wrapper.current) {
        if (onDismiss) onDismiss();
      }
    },
    [onDismiss, overlay, wrapper]
  );

  const onKeyDown = useCallback(
    (e) => {
      if (e.key === "Escape") onDismiss();
    },
    [onDismiss]
  );

  useEffect(() => {
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [onKeyDown]);

  return (
    <div
      ref={overlay}
      className="fixed z-10 left-0 right-0 top-0 bottom-0 mx-auto bg-black/60 w-12/12 p-10"
      onClick={onClick}
    >
      <div
        ref={wrapper}
        className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-8/12 overflow-hidden overflow-y-auto p-4 bg-[#000]"
        style={{ height: "650px" }}
      >
        <span onClick={onDismiss} className="flex justify-end cursor-pointer">
          <IoMdClose className="text-[24px] text-white" />
        </span>
        {children}
      </div>
    </div>
  );
}
