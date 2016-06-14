//startup.js file
var globalhttpheaders = {};
var appConfig = {
    appId: "deviceInfo",
    appName: "DeviceInfo",
    appVersion: "1.0.1",
    platformVersion: null,
    serverIp: null,
    serverPort: null,
    secureServerPort: null,
    isDebug: false,
    middlewareContext: "deviceInfo",
    url: "https://acme-inc.konycloud.com/deviceInfo/MWServlet",
    secureurl: "https://acme-inc.konycloud.com/deviceInfo/MWServlet"
};
sessionID = "";

function appInit(params) {
    skinsInit();
    frmDeviceInfoGlobals();
    frmIntroGlobals();
    setAppBehaviors();
};

function setAppBehaviors() {
    kony.application.setApplicationBehaviors({
        applyMarginPaddingInBCGMode: false
    })
};

function themeCallBack() {
    kony.application.setApplicationInitializationEvents({
        init: appInit,
        showstartupform: function() {
            frmIntro.show();
        }
    });
};

function loadResources() {
    globalhttpheaders = {};
    kony.theme.setCurrentTheme("KonyTheme", themeCallBack, themeCallBack);
};
kony.application.setApplicationMode(constants.APPLICATION_MODE_NATIVE);
//If default locale is specified. This is set even before any other app life cycle event is called.
loadResources();
kony.print = function() {
    return;
};