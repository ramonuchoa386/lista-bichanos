import React from "react";
import { Img, Button, Icon } from "../../atoms";
import { ProfileWrapper } from "./styles";
import avatar from "../../../static/avatar.png";

const Profile: React.FC = () => {
  return (
    <ProfileWrapper>
      <Img
        imageSrc={avatar}
        alterText="My Avatar"
        width="40px"
        height="40px"
        className="avatar"
      />
      <Button btnAction={() => window.alert("clicou na botao do perfil")}>
        <Icon icon="expand_more" />
      </Button>
    </ProfileWrapper>
  );
};

export default Profile;
