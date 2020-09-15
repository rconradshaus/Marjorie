export const environment = {
    production: false,
    apiBaseUrl: "https://marjorie-hsd.azurewebsites.net/api/Request/",
    selfUrl: "https://marjorie-hsd-questions.azurewebsites.net",

    authConfig: {
        instance: "https://login.microsoftonline.com/",
        tenantId: "2bc2d6df-bd83-4beb-af4c-681767093733",
        clientId: "09f428be-cdc8-486d-8f8b-4c844480e70f",
        redirectUri: "/app-silent-end",
        cacheLocation: "localStorage",
        navigateToLoginRequestUrl: false,
        extraQueryParameters: "",
        popUp: true,
        popUpUri: "/app-silent-start",
        popUpWidth: 600,
        popUpHeight: 535
    },

    // do not populate the following:
    upn: "",
    tid: "",
    gid: "",
    cname: ""
};
