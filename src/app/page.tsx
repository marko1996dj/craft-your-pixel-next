"use client";
import About from "@/container/About/About";
/**
 * Client-side entry point for the "Page" component.
 *
 * This component serves as a top-level container for rendering the "Home" component
 * within a Material-UI Container for layout styling.
 *
 * @returns {JSX.Element} The rendered Page component.
 */
import Home from "@/container/Home/Home";
import Process from "@/container/Process/Process";
import Services from "@/container/Services/Services";

export default function Page() {
  return (
    <>
      <Home />
      <About />
      <Services />
      <Process />
    </>
  );
}
