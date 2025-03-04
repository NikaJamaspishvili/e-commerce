"use client";
import dynamic from "next/dynamic";

const ContactNavigation  = dynamic(() => import("@/components/contact/ContactNavigation"), {
    ssr: false
});

function Wrapper() {
  return <ContactNavigation />
}

export default Wrapper
