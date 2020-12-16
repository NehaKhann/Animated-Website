import React from "react";
import Custom from "./Custom";

const About = () => {
  return (
    <Custom
      text="Welcome to About Page "
      btn="Contact Here"
      visit="/contact"
      image="https://images.unsplash.com/photo-1562813733-b31f71025d54?ixid=MXwxMjA3fDB8MHxzZWFyY2h8N3x8Y29kaW5nfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"
    />
  );
};

export default About;
