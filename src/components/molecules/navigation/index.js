import React from "react";
import { LinkBtn, Icon, Text } from "../../atoms";

function Navigation() {
  return (
    <nav>
      <LinkBtn
        address="/breeds"
        pageTitle={<Text>Breeds</Text>}
        icon={<Icon icon="pets" />}
        title="Breeds"
      />

      <LinkBtn
        address="/feedback"
        pageTitle={<Text>Feedback</Text>}
        icon={<Icon icon="announcement" />}
        title="Feedback"
      />
    </nav>
  );
}

export default Navigation;
