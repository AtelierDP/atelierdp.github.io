import React from "react";
import ThemeProvider from "../theme-provider";
import Navbar from "../navbar";


interface Props {
  blogTypes: string[];
}

export function NavigationBar({ blogTypes }: Props) {

  return (
    <ThemeProvider>
      <Navbar blogTypes={blogTypes} />
    </ThemeProvider>
  );
}

export default NavigationBar;
