var admobid = {};
if (/(android)/i.test(navigator.userAgent)) {  // for android & amazon-fireos
    admobid = {
        banner: 'ca-app-pub-8215613913865134/5209617703',
        interstitial: 'ca-app-pub-8215613913865134/6055795515'
    }
} else if (/(ipod|iphone|ipad)/i.test(navigator.userAgent)) {  // for ios
    admobid = {
        banner: 'ca-app-pub-8215613913865134/5209617703',
        interstitial: 'ca-app-pub-8215613913865134/6055795515'
    }
}
var app = {
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },
    onDeviceReady: function() {
        admob.banner.config({
            id: admobid.banner,
            isTesting: false,
            autoShow: true
        });
        admob.banner.prepare();
    }
};
app.initialize();