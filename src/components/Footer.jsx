import React from "react";

function Footer() {
  let currDate = new Date();
  currDate = currDate.getFullYear();

  return (
    <footer>
      <p> Copyright &#169; {currDate}</p>
    </footer>
  );
}

export default Footer;
