// Copyright (c) 2012 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.


chrome.webRequest.onBeforeRequest.addListener(
    function(info) {
      //console.log(info.url);
     // location.replace('http://www.google.com');
        //return {cancel: true};
                 return {redirectUrl: "https://www.google.com.tr/search?q=do%C4%9Fan+medya+grubunu+boykot+ediyoruz"};

    //           return {redirectUrl: host + details.url.match(/^https?:\/\/[^\/]+([\S\s]*)/)[1]};

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
        "*://*.kanald.com.tr*",
        "*://*.cnnturk.com/*",
        "*://*.teve2.com.tr/*",
        "*://*.dreamtv.com.tr/*",
        "*://*.radyod.com.tr/*",
        "*://*.radyonom.com/*",
        "*://*.dproductions.com.tr/*",
        "*://*.dmc.com.tr/*",
        "*://*.dsmart.com.tr/*",
        "*://*.hurriyetemlak.com/*",
        "*://*.hurriyetoto.com/*",
        "*://*.yenibiris.com/*",
        "*://*.ekolay.net/*",
        "*://*.hurriyetaile.com/*",
        "*://*.mahmure.com/*",
        "*://*.yakala.co/*",
        "*://*.bigpara.com/*",
        "*://*.medyanet.net/*",
        "*://*.ekolay.net/*",
        "*://*.radyonom.com/*",
        "*://*.dproductions.com.tr/*",
        "*://*.dsmart.com.tr/*",
        "*://*.dsmartgo.com.tr/*",
        "*://*.tmeast.com/*",
        "*://*.dogankitap.com.tr/*",
        "*://*.designprintpost.com/*",
        "*://*.dogandisticaret.com.tr/*",
        "*://*.designprintpost.com/*",
        "*://*.dpc.com.tr/*",
        "*://*.yaysat.com.tr/*",
        "*://*.ditas.com.tr/*",
        "*://*.celikhalat.com.tr/*",
        "*://*.doganorganik.com.tr/*",
        "*://*.milpa.com.tr/*",
        "*://*.suzuki.com.tr/*",
        "*://*.ddm.com.tr/*",
        "*://*.isiltur.com/*",
        "*://*.isilclub.com/*",
        "*://*.miltabodrummarina.com/*",
        "*://*.milta.com.tr/*",
        "*://*.doganfaktoring.com.tr/*",
        "*://*.oncugsyo.com.tr/*"]
    },
    ["blocking"]
);


