// Copyright (c) 2012 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.


chrome.webRequest.onBeforeRequest.addListener(
    function(info) {
        host="https://www.google.com.tr/search?q=";

        console.log("URL HERE");
        console.log(info.url);

        targeturl=info.url.match(/^https?:\/\/[^\/]+([\S\s]*)/);
        searchparam=targeturl[1].split("/").join("").split("-c-").join("").split("-").join(" ")

// TODO: Need to remove post id from url 
// Content sites example: Remove -1276552 from http://www.fanatik.com.tr/2017/02/07/heat-ten-ust-uste-11-galibiyet-1276552
// Hepsiburada example: Remove -v1-p-EAKSBYSSL201519 from http://www.hepsiburada.com/soley-cift-kisilik-nevresim-takimi-sakura-pudra-v1-p-EAKSBYSSL201519

        return {redirectUrl: host + searchparam};

    },
    {
        urls: ["*://*.hurriyet.com.tr/*",
        "*://*.cnnturk.com/*",
        "*://*.slowturk.com.tr/*",
        "*://*.posta.com.tr/*",
        "*://*.fanatik.com.tr/*",
        "*://*.dr.com.tr/*",
        "*://*.hepsiburada.com/*",
        "*://*.hurriyetdailynews.com/*",
        "*://*.tmeast.com/*",
        "*://*.doganburda.com/*",
        "*://*.doganegmont.com.tr/*",
        "*://*.dpp.com.tr/*",
        "*://*.yaysat.com.tr/*",
        "*://*.dpc.com.tr/*",
        "*://*.ddt.com.tr/*",
        "*://*.dha.com.tr/*",
        "*://*.kanald.com.tr/*",
        "*://*.cnnturk.com/*",
        "*://*.teve2.com.tr/*",
        "*://*.dreamtv.com.tr/*",
        "*://*.radyod.com.tr/*",
        "*://*.slowturk.com.tr/*",
        "*://*.radyonom.com/*",
        "*://*.dproductions.com.tr/*",
        "*://*.dmc.com.tr/*",
        "*://*.dsmart.com.tr/*"
        ]
    },
    ["blocking"]
);


