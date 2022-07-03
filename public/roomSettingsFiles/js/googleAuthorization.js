function onSignIn(response) {

    signInButton.style.display = "none"
    signOutButton.style.display = "block"
    const responsePayload = jwt_decode(response.credential)

    console.log("ID: " + responsePayload.sub);
    console.log('Given Name: ' + responsePayload.given_name);
    console.log("Image URL: " + responsePayload.picture);
    userProfileInformation = {
        googleId: responsePayload.sub,
        name: responsePayload.given_name,
        imageUrl: responsePayload.picture
    }

}
function initializeGoogleAuthentication() {
    google.accounts.id.initialize({
        client_id: "322705013586-5e1jlbe8qhd4l9gfgfucvfc8blh9kg5h.apps.googleusercontent.com",
        callback: onSignIn,
        auto_select: true

    });
    google.accounts.id.renderButton(
        document.querySelector(".container__sign-in"),
        { theme: "filled_blue", size: "medium", shape: "pill", width: "400px" }  // customization attributes
    );
    google.accounts.id.prompt();

}

