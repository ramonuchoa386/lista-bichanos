import React from "react";
import { LinkBtn, Icon, Text } from "../../atoms";

function Navigation() {
  return (
    <nav>
      <LinkBtn
        address="/breeds"
        pageTitle={<Text text="Breeds" />}
        icon={<Icon icon="pets" />}
        title="Breeds"
      />

      <LinkBtn
        address="/feedback"
        pageTitle={<Text text="Feedback" />}
        icon={<Icon icon="announcement" />}
        title="Feedback"
      />
    </nav>
  );
}

export default Navigation;
