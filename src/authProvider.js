import { MsalAuthProvider, LoginType } from "react-aad-msal";
import { Logger, LogLevel } from "msal";

console.log('origin', `${window.location.origin}/helix/auth.html`, process.env.REACT_APP_CLIENT_ID);

// The auth provider should be a singleton. Best practice is to only have it ever instantiated once.
// Avoid creating an instance inside the component it will be recreated on each render.
// If two providers are created on the same page it will cause authentication errors.
export const authProvider = new MsalAuthProvider(
    {
        auth: {
            authority: "https://login.microsoftonline.com/organizations",
            clientId: process.env.REACT_APP_CLIENT_ID,
            postLogoutRedirectUri: `${window.location.origin}/helix/`,
            redirectUri: `${window.location.origin}/helix/`,
            validateAuthority: true,

            // After being redirected to the "redirectUri" page, should user
            // be redirected back to the Url where their login originated from?
            navigateToLoginRequestUrl: false
        },
        // Enable logging of MSAL events for easier troubleshooting.
        // This should be disabled in production builds.
        system: {
            logger: new Logger(
                (logLevel, message, containsPii) => {
                    console.log("[MSAL]", message);
                },
                {
                    level: LogLevel.Verbose,
                    piiLoggingEnabled: false
                }
            )
        },
        cache: {
            cacheLocation: "sessionStorage",
            storeAuthStateInCookie: true
        }
    },
    {
        scopes: ["openid"]
    },
    {
        loginType: LoginType.Popup,
        // When a token is refreshed it will be done by loading a page in an iframe.
        // Rather than reloading the same page, we can point to an empty html file which will prevent
        // site resources from being loaded twice.
        tokenRefreshUri: window.location.origin + "/helix/auth.html"
    }
);
