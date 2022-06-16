import React from "react";
import { Img, Button, Icon } from "../../atoms";
import { ProfileWrapper } from "./styles";
import avatar from "../../../static/avatar.png";

function Profile() {
  return (
    <ProfileWrapper>
      <Img
        imageSrc={avatar}
        alterText="My Avatar"
        width="40px"
        height="40px"
        className="avatar"
      />
      <Button btnContent={<Icon icon="expand_more" />} />
    </ProfileWrapper>
  );
}

export default Profile;
