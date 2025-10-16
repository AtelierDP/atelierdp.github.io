import React from "react";
import {
  Button,
  Typography,
} from "@material-tailwind/react";
import ThemeProvider from "../theme-provider";
import Navbar from "../navbar";
import {
  ArrowSmallRightIcon,
} from "@heroicons/react/24/outline";

export function NavigationBar() {
 
  return (
    <ThemeProvider>
      <Navbar />
    </ThemeProvider>
  );
}

export default NavigationBar;
