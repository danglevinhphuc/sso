import React from "react";
import GoogleLogin from "react-google-login";

const Index = ({ clientId, redirectTo }) => {
  const responseGoogle = (data) => {
    if (!data) throw Error();
    const { tokenId } = data;
    window.location.href = `${redirectTo}?token=${tokenId}`;
  };
  return (
    <center>
      <div>
        <GoogleLogin
          clientId={clientId}
          buttonText="Login"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          cookiePolicy={"single_host_origin"}
        />
      </div>
    </center>
  );
};
export default Index;
