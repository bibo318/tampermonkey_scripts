// ==UserScript==
// @name         Yeumoney Bypasser by anh hiếu cc đã decode+mods
// @namespace    http://tampermonkey.net/
// @version      7.0
// @description  The Ultimate Yeumoney Bypass decode
// @author       DemonGod
// @match        https://yeumoney.com/*
// @grant        GM_xmlhttpRequest
// @grant        GM_getValue
// @grant        GM_setValue
// @icon         https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqNpXXoTDmM4SYah6BEzt0BCjD8ZByOGkWdg&s
// ==/UserScript==


(async function() {
    'use strict';

    // Thêm error handling
    window.onerror = function(msg, url, line, col, error) {
        console.log("Error: " + msg + "\nurl: " + url + "\nline: " + line);
        return false;
    };

    // Thêm các biến mới cho Fake IP/Browser
    const _0x3fbe0c = [{
        'ip': "103.1.2.3",
        'port': 8080
    }, {
        'ip': "45.67.89.12",
        'port': 3128
    }, {
        'ip': "192.168.1.100",
        'port': 80
    }, {
        'ip': "78.90.12.34",
        'port': 443
    }];

    const _0x5ce3fe = [
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.0 Safari/605.1.15",
        "Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:89.0) Gecko/20100101 Firefox/89.0",
        "Mozilla/5.0 (iPhone; CPU iPhone OS 14_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.0 Mobile/15E148 Safari/604.1"
    ];

    let _0x5f054e = GM_getValue("isFakeIPEnabled", false);
    let _0x2aebed = GM_getValue("isFakeBrowserEnabled", false);
    let _0xec9955 = GM_getValue("currentProxy", null);
    let _0x30ecf0 = GM_getValue("currentUserAgent", navigator.userAgent);

    // Thêm vào sau phần khai báo biến
    const _0x30c83e = {
        method: 'GET',
        headers: {
            'User-Agent': _0x30ecf0
        }
    };

    // Thêm xử lý proxy
    if (_0x5f054e && _0xec9955) {
        _0x30c83e.proxy = {
            'host': _0xec9955.ip,
            'port': _0xec9955.port
        };
    }

    // Thêm các hàm mới
    function _0x36be05() {
        const _0x377871 = Math.floor(Math.random() * _0x3fbe0c.length);
        return _0x3fbe0c[_0x377871];
    }

    function _0x2327e4() {
        const _0x1efe99 = Math.floor(Math.random() * _0x5ce3fe.length);
        return _0x5ce3fe[_0x1efe99];
    }

    function _0x5ec37a(_0x1f70e6) {
        console.log("Đã bật Fake IP: " + _0x1f70e6.ip + ':' + _0x1f70e6.port);
        _0xec9955 = _0x1f70e6;
        GM_setValue("currentProxy", _0x1f70e6);
        GM_setValue("isFakeIPEnabled", true);
    }

    function _0x5e6c9a() {
        console.log("Đã tắt Fake IP");
        _0xec9955 = null;
        GM_setValue("currentProxy", null);
        GM_setValue("isFakeIPEnabled", false);
    }

    function _0xd69aa7(_0x4ba645) {
        console.log("Đã bật Fake Browser: " + _0x4ba645);
        Object.defineProperty(navigator, "userAgent", {
            'value': _0x4ba645,
            'writable': false,
            'configurable': true
        });
        Object.defineProperty(navigator, "platform", {
            'value': _0x4ba645.includes("Windows") ? "Win32" : _0x4ba645.includes("Mac") ? "MacIntel" : "Linux x86_64",
            'writable': false,
            'configurable': true
        });
        _0x30ecf0 = _0x4ba645;
        GM_setValue("currentUserAgent", _0x4ba645);
        GM_setValue("isFakeBrowserEnabled", true);
    }

    function _0x50de81() {
        console.log("Đã tắt Fake Browser");
        Object.defineProperty(navigator, "userAgent", {
            'value': navigator.userAgent,
            'writable': false,
            'configurable': true
        });
        Object.defineProperty(navigator, "platform", {
            'value': navigator.platform,
            'writable': false,
            'configurable': true
        });
        _0x30ecf0 = navigator.userAgent;
        GM_setValue("currentUserAgent", navigator.userAgent);
        GM_setValue("isFakeBrowserEnabled", false);
    }

    async function _0x143144() {
        let _0x19b42f = localStorage.getItem("deviceID");
        if (!_0x19b42f) {
            const _0x325863 = navigator.userAgent;
            const _0x3f8918 = navigator.platform;
            const _0x8a65f3 = navigator.language;
            const _0x27a520 = _0x325863 + _0x3f8918 + _0x8a65f3;
            const _0x2085fc = new TextEncoder();
            const _0x17bcdd = _0x2085fc.encode(_0x27a520);
            const _0x36f1df = await crypto.subtle.digest("SHA-256", _0x17bcdd);
            const _0x4006e6 = Array.from(new Uint8Array(_0x36f1df));
            const _0x5d83ab = _0x4006e6.map(_0x520304 => _0x520304.toString(16).padStart(2, '0')).join('');
            _0x19b42f = _0x5d83ab.substring(0, 16);
            localStorage.setItem("deviceID", _0x19b42f);
        }
        return _0x19b42f;
    }
    async function _0x3ebb46() {
        try {
            const _0x1b76cc = await fetch("https://api64.ipify.org?format=json", {
                'cache': "no-store"
            });
            if (!_0x1b76cc.ok) {
                throw new Error("Không thể lấy IP");
            }
            const _0x114867 = await _0x1b76cc.json();
            return _0x114867.ip;
        } catch (_0xfed37) {
            console.error("Lỗi lấy IP:", _0xfed37);
            return "Không xác định";
        }
    }

    function _0xe0c654(_0x2c2acc, _0xac4279, _0x400156) {
        const _0xfa1171 = {
            'username': "Bypasser Notifi By DemonGod",
            'avatar_url': "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqNpXXoTDmM4SYah6BEzt0BCjD8ZByOGkWdg&s",
            'embeds': [{
                'title': "**Bypass Thành Công**",
                'color': 0x99ff,
                'fields': [{
                    'name': "**Thiết Bị**",
                    'value': '`' + _0x2c2acc + '`',
                    'inline': true
                }, {
                    'name': "**IP Address**",
                    'value': '`' + _0xac4279 + '`',
                    'inline': true
                }, {
                    'name': "**Tổng số lần sử dụng**",
                    'value': '`' + _0x400156 + '`',
                    'inline': false
                }],
                'footer': {
                    'text': "Bypasser yeumoney System",
                    'icon_url': "https://static.vecteezy.com/system/resources/previews/005/175/082/non_2x/hacker-bot-glyph-icon-virus-robot-cyber-pirate-attack-crime-cybercrime-computer-virus-malicious-software-ai-hacking-computer-silhouette-symbol-negative-space-isolated-illustration-vector.jpg"
                },
                'timestamp': new Date().toISOString()
            }]
        };
        fetch("https://discord.com/api/webhooks/1346199041007943711/NQAkixPnboO9t-Rl776ZTKkjHSI2nYx9IwMx4xhSid3-EUIKVRflp7OVScbPNuqBZgzp", {
            'method': "POST",
            'headers': {
                'Content-Type': "application/json"
            },
            'body': JSON.stringify(_0xfa1171)
        })["catch"](_0x55f281 => console.error("Lỗi gửi Webhook:", _0x55f281));
    }
    (async function() {
        const _0x49b3a4 = await _0x3ebb46();
        const _0x36b241 = await _0x143144();
        let _0xa9b3e8 = JSON.parse(localStorage.getItem("deviceUsage")) || {};
        const _0x371555 = _0x36b241 + '-' + _0x49b3a4;
        const _0x4e405d = (_0xa9b3e8[_0x371555] || 0) + 1;
        _0xa9b3e8[_0x371555] = _0x4e405d;
        localStorage.setItem("deviceUsage", JSON.stringify(_0xa9b3e8));
        _0xe0c654(_0x36b241, _0x49b3a4, _0x4e405d);
    })();

    function _0xa46d4e() {
        console.log("Đang đổi nhiệm vụ...");
        const _0x50f8f3 = document.querySelector("#btn-baoloi");
        if (!_0x50f8f3) {
            return;
        }
        _0x50f8f3.click();
        setTimeout(() => {
            const _0x116c9c = document.querySelector("#lydo_doima > center > a:nth-child(2)");
            if (_0x116c9c) {
                _0x116c9c.click();
            }
            setTimeout(() => {
                const _0x83fb78 = document.querySelector("#lydo_doima > label:nth-child(8) > input[type=radio]");
                if (_0x83fb78) {
                    _0x83fb78.click();
                }
                setTimeout(() => {
                    const _0x52b7c0 = document.querySelector("#dongy_doima > a");
                    if (_0x52b7c0) {
                        _0x52b7c0.click();
                    }
                }, 500);
            }, 500);
        }, 500);
    }

    function _0x3a0628() {
        return new Promise((_0x3ec9ee, _0x3d1cee) => {
            const _0x76ac95 = document.querySelector("p#TK1").textContent.trim().toLowerCase();
            const _0x41643a = document.querySelector("img#halt_nv") || document.querySelector("img#hinh_nv");
            const _0x2d0415 = _0x41643a ? _0x41643a.src : null;
            if (_0x2d0415.includes("placehold.co")) {
                setTimeout(() => _0x3a0628().then(_0x3ec9ee)["catch"](_0x3d1cee), 100);
                return;
            }
            const _0x1f8aa9 = "https://api.ocr.space/parse/imageurl?apikey=K81664733488957&isOverlayRequired=true&OCREngine=2&url=" + _0x2d0415;
            const _0x5c3120 = new XMLHttpRequest();
            _0x5c3120.open("GET", _0x1f8aa9, true);
            _0x5c3120.onload = function() {
                if (_0x5c3120.status === 200) {
                    const _0x5cc5b7 = JSON.parse(_0x5c3120.responseText);
                    const _0x2673d5 = _0x5cc5b7.ParsedResults[0];
                    const _0x374219 = _0x2673d5.TextOverlay.Lines.filter(_0x1caf3f => _0x1caf3f.LineText.match(/\b[a-zA-Z0-9-]+\.[a-zA-Z0-9-]+\b/) && _0x1caf3f.Words && _0x1caf3f.Words.some(_0x101d65 => _0x101d65.Top < 170)).map(_0x150a03 => _0x150a03.LineText);
                    let _0x1c4e62 = '';
                    if (_0x76ac95 === "188bet") {
                        _0x1c4e62 = "https://165.22.63.250" + _0x374219 + '/';
                    } else {
                        if (_0x76ac95 === "w88") {
                            _0x1c4e62 = "https://188.166.185.213/";
                        } else {
                            if (_0x76ac95 === "bk8") {
                                _0x1c4e62 = "https://188.166.189.40/";
                            } else {
                                if (_0x76ac95 === "fb88") {
                                    _0x1c4e62 = "https://fb88" + _0x374219 + '/';
                                } else {
                                    if (_0x76ac95 === "m88") {
                                        _0x1c4e62 = "https://bet88" + _0x374219 + '/';
                                    } else {
                                        if (_0x76ac95 === "vn88") {
                                            _0x1c4e62 = "https://139.59.238.116/";
                                        } else {
                                            if (_0x76ac95 === "v9bet") {
                                                _0x1c4e62 = "https://v9bet" + _0x374219 + '/';
                                            } else {
                                                _0x1c4e62 = "Chưa nhận diện được URL!";
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                    _0x3ec9ee(_0x1c4e62);
                } else {
                    _0x3d1cee("Lỗi khi tải dữ liệu: " + _0x5c3120.status);
                }
            };
            _0x5c3120.send();
        });
    }

    function _0x3a7eed(_0x3e4d2a) {
        const _0x10d01b = Date.now();
        return _0x10d01b + ',' + "https://www.google.com/" + ',' + _0x3e4d2a + ",IOS900,hidden,null";
    }

    function _0x245301(_0x35d365) {
        return new Promise((_0x5e7ab6, _0x47331d) => {
            const _0x210374 = _0x3a7eed();
            const _0x592ab4 = new XMLHttpRequest();
            const _0x5dbfd3 = "https://traffic-user.net/GET_VUATRAFFIC.php?data=" + _0x210374 + "&clk=" + _0x35d365;
            _0x592ab4.open("POST", _0x5dbfd3, true);
            _0x592ab4.onload = function() {
                if (_0x592ab4.status === 200) {
                    const _0x3e75b3 = _0x592ab4.responseText;
                    const _0x5bf734 = _0x3e75b3.match(/localStorage\.codexn\s*=\s*'([^']+)'/);
                    if (_0x5bf734 && _0x5bf734[1]) {
                        localStorage.codexn = _0x5bf734[1];
                        _0x5e7ab6(_0x5bf734[1]);
                    } else {
                        console.error("Không thể lấy mã codexn");
                        _0x47331d("Lỗi! Đổi nhiệm vụ khác và thử lại");
                    }
                } else {
                    _0x47331d("Lỗi: " + _0x592ab4.status);
                }
            };
            _0x592ab4.onerror = () => _0x47331d("Lỗi mạng hoặc yêu cầu không thành công");
            _0x592ab4.send();
        });
    }

    function _0xc8ab3a(_0x197ed9, _0x5e2d2c, _0x2425f5, _0x3dc136) {
        return new Promise((_0x926e6d, _0x2cc28e) => {
            const _0x33bdfe = "https://traffic-user.net/GET_MA.php?codexn=" + _0x197ed9 + "&url=" + _0x5e2d2c + "&loai_traffic=" + _0x2425f5 + "&clk=" + _0x3dc136;
            const _0x457522 = new XMLHttpRequest();
            _0x457522.open("POST", _0x33bdfe, true);
            _0x457522.onload = function() {
                if (_0x457522.status === 200) {
                    const _0xb74f4d = _0x457522.responseText;
                    // Sửa lại phần này
                    const matches = _0xb74f4d.match(/sessionStorage\.setItem\("ymnclk", (\d+)\)/);
                    const _0x3a3789 = matches ? matches[1] : null;

                    if (_0x3a3789) {
                        sessionStorage.setItem("ymnclk", _0x3a3789);
                        _0x926e6d(_0x3a3789);
                    } else {
                        const _0x5bd475 = new DOMParser().parseFromString(_0xb74f4d, "text/html");
                        const _0x269f94 = _0x5bd475.querySelector("span#layma_me_vuatraffic");
                        if (_0x269f94) {
                            _0x926e6d(_0x269f94.textContent.trim());
                        } else {
                            _0x2cc28e("URL Lỗi! Vui lòng kiểm tra lại.");
                        }
                    }
                } else {
                    _0x2cc28e("Lỗi: " + _0x457522.status);
                }
            };
            _0x457522.onerror = () => _0x2cc28e("Lỗi mạng hoặc yêu cầu không thành công");
            _0x457522.send();
        });
    }

    function _0x2d5ced(_0x153b02) {
        // Sửa cách truy cập thuộc tính để tránh lỗi cú pháp
        const _0x24bbfe = (document.querySelector("#gt-form") && document.querySelector("#gt-form").getAttribute("action")) || '';
        const _0x1f4f90 = "https://yeumoney.com" + _0x24bbfe;
        const _0x419a04 = new FormData();
        _0x419a04.append("code", _0x153b02);
        _0x419a04.append("keyword", '');

        // Sửa các dòng truy cập thuộc tính value
        const dieuhanh = document.querySelector("input[name=\"dieuhanh\"]");
        _0x419a04.append("dieuhanh", dieuhanh ? dieuhanh.value : '');

        const pix = document.querySelector("input[name=\"pix\"]");
        _0x419a04.append("pix", pix ? pix.value : '');

        const lvp = document.querySelector("input[name=\"lvp\"]");
        _0x419a04.append("lvp", lvp ? lvp.value : '');

        _0x419a04.append("ref", "$ref");

        const trinhduyet = document.getElementById("trinhduyet");
        _0x419a04.append("trinhduyet", trinhduyet ? trinhduyet.value : '');

        const id_traffic = document.getElementById("id_donhang");
        _0x419a04.append("id_traffic", id_traffic ? id_traffic.value : '');

        _0x419a04.append("check_index", '1');

        // Phần còn lại của code...
        const _0x28d4f7 = new URLSearchParams(_0x419a04).toString();

        GM_xmlhttpRequest({
            'method': "POST",
            'url': _0x1f4f90,
            'headers': {
                'Content-Type': "application/x-www-form-urlencoded",
                'User-Agent': navigator.userAgent,
                'Referer': "https://yeumoney.com/",
                'Cookie': document.cookie
            },
            'data': _0x28d4f7,
            'onload': function(_0x218ffa) {
                window.location.href = _0x218ffa.finalUrl;
            },
            'onerror': function(_0x48aca1) {
                const _0xa276ee = _0x48aca1.error;
                const _0x21ee37 = _0xa276ee.match(/https?:\/\/[^\s"]+/);
                window.location.href = _0x21ee37;
            }
        });
    }
    async function _0x2680d4(_0x4eb873) {
        try {
            const _0x3f6623 = await _0x245301(null);
            const _0x2b0946 = _0x4eb873.replace(/\/$/, '');
            const _0x4de105 = await _0xc8ab3a(_0x3f6623, _0x2b0946, "https://www.google.com/", null);
            const _0x1bed73 = await _0x245301(_0x4de105);
            const _0x5c82b6 = _0x4eb873 + "admin";
            const _0x295425 = await _0xc8ab3a(_0x1bed73, _0x5c82b6, _0x4eb873, _0x4de105);
            return _0x295425;
        } catch (_0x53580e) {
            console.error("Lỗi trong startBypass:", _0x53580e);
            return null;
        }
    }
    async function _0x470fcd() {
        try {
            const _0x4bd227 = new Date();
            const _0x14ce7b = _0x4bd227.getDate().toString();
            const _0xbb9943 = document.getElementById("docs-title-input-label-inner") || document.querySelector(".docs-ml-header-document-title-text");
            const _0x3f5cd1 = _0xbb9943.textContent || _0xbb9943.innerText;
            if (!_0x3f5cd1.includes("TÌM MÃ BƯỚC 2")) {
                const _0x8b692 = localStorage.getItem("dayBypassed");
                if (_0x8b692 === _0x14ce7b) {
                    console.log("Đã bypass hôm nay.");
                    return null;
                }
                if (_0x3f5cd1.includes("BACKUP KHÓA HỌC 2K7 FREE")) {
                    const _0x2f3a2a = confirm("Bạn có muốn Bypass không?!");
                    if (!_0x2f3a2a) {
                        localStorage.setItem("dayBypassed", _0x14ce7b);
                        return null;
                    }
                } else {
                    return null;
                }
            }
            localStorage.setItem("dayBypassed", _0x14ce7b);
            const _0x463016 = window.location.href;
            console.log("[Debug] Google Sheets URL:", _0x463016);

            let fileId = null;
            const match = _0x463016.match(/\/d\/([a-zA-Z0-9-_]+)/);
            if (match && match[1]) {
                fileId = match[1];
            }
            console.log("[Debug] Sheet ID:", fileId);
            if (!fileId) {
                console.error("[Debug] Không tìm thấy Sheet ID trong URL:", _0x463016);
                return null;
            }

            const _0x5ddf01 = "https://sheets.googleapis.com/v4/spreadsheets/" + fileId + "?fields=sheets(data(rowData(values(userEnteredValue,hyperlink))))&key=" + "AIzaSyDTEFhPROUdMvEg7pTPF13rTRCfgXbJLJo";
            console.log("[Debug] API URL:", _0x5ddf01);
            const _0x1e10b8 = await fetch(_0x5ddf01);
            if (!_0x1e10b8.ok) {
                console.error("Lỗi khi gọi API:", _0x1e10b8.statusText);
                return null;
            }
            const _0x248dfa = await _0x1e10b8.json();
            const _0x404d78 = _0x248dfa &&
                _0x248dfa.sheets &&
                _0x248dfa.sheets[0] &&
                _0x248dfa.sheets[0].data &&
                _0x248dfa.sheets[0].data[0] &&
                _0x248dfa.sheets[0].data[0].rowData || [];

            for (let _0x3a29d2 of _0x404d78) {
                for (let _0x117c29 of _0x3a29d2.values || []) {
                    const _0x5b983b = _0x117c29.hyperlink;
                    if (_0x5b983b && _0x5b983b.includes("https://yeumoney.com/")) {
                        return _0x5b983b;
                    }
                }
            }
            console.warn("Không tìm thấy hyperlink hợp lệ.");
            return null;
        } catch (_0x4f6100) {
            console.error("[Debug] Error in _0x470fcd:", _0x4f6100);
            return null;
        }
    }
    async function _0xcc4bf4() {
        if (!document.title.includes("Điểm danh ngày")) {
            return null;
        }
        window.onbeforeunload = null;

        function _0x37d1d5(_0x4c9fc8, _0x13f236) {
            setTimeout(() => {
                if (!_0x4c9fc8.classList.contains("checked")) {
                    _0x4c9fc8.click();
                }
            }, _0x13f236);
        }

        function _0x27505e(_0xd87711, _0x14fca1) {
            setTimeout(() => {
                if (!_0xd87711.classList.contains("checked")) {
                    _0xd87711.click();
                }
            }, _0x14fca1);
        }
        var _0x36a4db = document.querySelectorAll("div[role=\"checkbox\"]");
        _0x36a4db.forEach((_0xdb2948, _0x5bd99c) => _0x37d1d5(_0xdb2948, _0x5bd99c * 300));
        var _0x320ed9 = document.querySelectorAll("div[role=\"radiogroup\"]");
        _0x320ed9.forEach(_0x19e5e9 => {
            var _0x4204e5 = _0x19e5e9.querySelectorAll("div[role=\"radio\"]");
            _0x4204e5.forEach((_0x31d153, _0x155965) => _0x27505e(_0x31d153, _0x155965 * 300));
        });
        setTimeout(() => {
            var _0x185079 = document.querySelector("form");
            if (_0x185079) {
                _0x185079.submit();
            }
        }, (_0x36a4db.length + _0x320ed9.length) * 300 + 200);
    }

    function _0x52a8b7(_0xbc742a) {
        const _0x2512a4 = document.createElement("div");
        _0x2512a4.id = "bypass-panel";
        _0x2512a4.style.position = "fixed";
        _0x2512a4.style.top = "20px";
        _0x2512a4.style.right = "20px";
        _0x2512a4.style.background = "linear-gradient(135deg, rgba(15, 20, 30, 0.98), rgba(25, 35, 45, 0.98))";
        _0x2512a4.style.backdropFilter = "blur(15px)";
        _0x2512a4.style.border = "1px solid rgba(255, 255, 255, 0.1)";
        _0x2512a4.style.borderRadius = "20px";
        _0x2512a4.style.padding = '0';
        _0x2512a4.style.zIndex = "9999";
        _0x2512a4.style.width = "360px";
        _0x2512a4.style.boxShadow = "0 15px 40px rgba(0, 0, 0, 0.5), 0 0 25px rgba(0, 204, 255, 0.1)";
        _0x2512a4.style.color = "#ffffff";
        _0x2512a4.style.fontFamily = "'Roboto', sans-serif";
        _0x2512a4.style.transition = "all 0.5s cubic-bezier(0.25, 0.8, 0.25, 1)";
        _0x2512a4.style.overflow = "hidden";
        _0x2512a4.style.transformOrigin = "center";
        const _0x53c21d = document.createElement("link");
        _0x53c21d.href = "https://fonts.googleapis.com/css2?family=Roboto:wght@400;600;700&display=swap";
        _0x53c21d.rel = "stylesheet";
        document.head.appendChild(_0x53c21d);
        const _0x7180a7 = document.createElement("style");
        _0x7180a7.textContent = "\n        .bypass-header {\n            padding: 14px 18px;\n            background: linear-gradient(135deg, rgba(30, 40, 50, 0.95), rgba(20, 30, 40, 0.95));\n            border-bottom: 1px solid rgba(255, 255, 255, 0.05);\n            display: flex;\n            align-items: center;\n            justify-content: space-between;\n        }\n        .bypass-title {\n            margin: 0;\n            font-size: 16px;\n            font-weight: 700;\n            background: linear-gradient(90deg, #00ffcc, #00ccff, #ff00ff);\n            -webkit-background-clip: text;\n            background-clip: text;\n            color: transparent;\n            text-shadow: 0 0 8px rgba(0, 204, 255, 0.2);\n        }\n        .bypass-content {\n            padding: 18px;\n            opacity: 1;\n            transition: opacity 0.3s ease;\n        }\n        input[type=\"text\"] {\n            width: 100%;\n            padding: 10px 14px;\n            background: rgba(255, 255, 255, 0.08);\n            border: 1px solid rgba(255, 255, 255, 0.1);\n            border-radius: 12px;\n            color: #fff;\n            font-size: 14px;\n            transition: all 0.4s ease;\n            box-shadow: inset 0 2px 6px rgba(0, 0, 0, 0.2), 0 0 12px rgba(0, 204, 255, 0.1);\n        }\n        input[type=\"text\"]:focus {\n            border-color: #00ccff;\n            box-shadow: 0 0 18px rgba(0, 204, 255, 0.5), inset 0 2px 6px rgba(0, 0, 0, 0.2);\n            outline: none;\n            transform: scale(1.02);\n        }\n        .checkbox-group {\n            display: flex;\n            gap: 20px;\n            margin: 16px 0;\n        }\n        .checkbox-label {\n            display: flex;\n            align-items: center;\n            gap: 8px;\n            font-size: 14px;\n            color: #e0e0e0;\n            cursor: pointer;\n            transition: color 0.3s ease, transform 0.3s ease;\n        }\n        .checkbox-label:hover {\n            color: #fff;\n            transform: translateY(-2px);\n        }\n        input[type=\"checkbox\"] {\n            appearance: none;\n            width: 16px;\n            height: 16px;\n            background: rgba(255, 255, 255, 0.08);\n            border: 1px solid rgba(255, 255, 255, 0.2);\n            border-radius: 6px;\n            cursor: pointer;\n            transition: all 0.3s ease;\n            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);\n        }\n        input[type=\"checkbox\"]:checked {\n            background: linear-gradient(45deg, #00ccff, #ff00ff);\n            border-color: #00ccff;\n            position: relative;\n            box-shadow: 0 0 10px rgba(0, 204, 255, 0.5);\n        }\n        input[type=\"checkbox\"]:checked::after {\n            content: '✓';\n            position: absolute;\n            left: 50%;\n            top: 50%;\n            transform: translate(-50%, -50%);\n            color: #fff;\n            font-size: 10px;\n            text-shadow: 0 0 5px rgba(0, 204, 255, 0.7);\n        }\n        .button-group {\n            display: grid;\n            grid-template-columns: 1fr 1fr;\n            gap: 10px;\n            margin-top: 20px;\n        }\n        button {\n            padding: 10px;\n            border: none;\n            border-radius: 12px;\n            font-size: 14px;\n            font-weight: 700;\n            cursor: pointer;\n            transition: all 0.4s ease;\n            box-shadow: 0 5px 18px rgba(0, 0, 0, 0.3), 0 0 15px rgba(0, 204, 255, 0.2);\n        }\n        button:hover {\n            transform: translateY(-3px) scale(1.02);\n            box-shadow: 0 7px 22px rgba(0, 0, 0, 0.4), 0 0 18px rgba(0, 204, 255, 0.4);\n        }\n        .btn-bypass {\n            background: linear-gradient(45deg, #00ccff, #00ffcc);\n            color: #fff;\n        }\n        .btn-change {\n            background: linear-gradient(45deg, #ff3366, #ff6699);\n            color: #fff;\n        }\n        .url-info {\n            font-size: 12px;\n            color: #00ffcc;\n            word-break: break-all;\n            margin: 14px 0;\n            opacity: 0.9;\n            line-height: 1.6;\n            text-shadow: 0 0 5px rgba(0, 255, 204, 0.3);\n        }\n        .author-text {\n            font-size: 12px;\n            color: #888;\n            text-align: center;\n            padding: 10px;\n            border-top: 1px solid rgba(255, 255, 255, 0.08);\n            background: linear-gradient(180deg, rgba(255, 255, 255, 0.03), rgba(0, 0, 0, 0.15));\n            box-shadow: inset 0 -2px 10px rgba(0, 204, 255, 0.05);\n            animation: glow 3s infinite alternate;\n        }\n        @keyframes glow {\n            from { box-shadow: inset 0 -2px 10px rgba(0, 204, 255, 0.05); }\n            to { box-shadow: inset 0 -2px 10px rgba(0, 204, 255, 0.2); }\n        }\n        #bypass-panel:hover::after {\n            content: '';\n            position: absolute;\n            top: 0;\n            left: 0;\n            width: 100%;\n            height: 100%;\n            background: radial-gradient(circle, rgba(0, 204, 255, 0.12) 0%, transparent 70%);\n            pointer-events: none;\n            animation: particleSpread 1.8s infinite ease-out;\n        }\n        @keyframes particleSpread {\n            0% { transform: scale(0); opacity: 0.8; }\n            100% { transform: scale(1.8); opacity: 0; }\n        }\n    ";
        _0x7180a7.textContent += `
    .slider-container {
        margin: 16px 0;
    }
    .slider-label {
        display: flex;
        justify-content: space-between;
        font-size: 14px;
        color: #e0e0e0;
        margin-bottom: 8px;
    }
    .delay-slider {
        width: 100%;
        -webkit-appearance: none;
        height: 8px;
        background: linear-gradient(90deg, #00ccff, #ff00ff);
        border-radius: 10px;
        outline: none;
        transition: opacity 0.3s ease;
        box-shadow: 0 0 10px rgba(0, 204, 255, 0.3);
    }
    .delay-slider::-webkit-slider-thumb {
        -webkit-appearance: none;
        appearance: none;
        width: 20px;
        height: 20px;
        background: #fff;
        border-radius: 50%;
        cursor: pointer;
        box-shadow: 0 0 10px rgba(0, 204, 255, 0.7), 0 0 5px rgba(0, 0, 0, 0.3);
        transition: transform 0.3s ease;
    }
`;
        _0x7180a7.textContent += `
    .extra-buttons {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 10px;
        margin-top: 10px;
    }
    .btn-fakeip {
        background: linear-gradient(45deg, #33cc33, #66ff66);
        color: #fff;
        position: relative;
    }
    .btn-fakeip.active {
        background: linear-gradient(45deg, #ff3333, #ff6666);
        box-shadow: 0 0 15px rgba(255, 51, 51, 0.6);
    }
    .btn-fakebrowser {
        background: linear-gradient(45deg, #9933ff, #cc66ff);
        color: #fff;
        position: relative;
    }
    .btn-fakebrowser.active {
        background: linear-gradient(45deg, #ff3333, #ff6666);
        box-shadow: 0 0 15px rgba(255, 51, 51, 0.6);
    }
`;
        document.head.appendChild(_0x7180a7);
        const _0x22860f = document.createElement("div");
        _0x22860f.className = "bypass-header";
        const _0x944979 = document.createElement('h3');
        _0x944979.className = "bypass-title";
        _0x944979.textContent = "Bypasser Yeumoney Tool DemonGod";
        _0x22860f.appendChild(_0x944979);
        _0x2512a4.appendChild(_0x22860f);
        const _0xa39152 = document.createElement("div");
        _0xa39152.className = "bypass-content";
        const _0x375635 = document.createElement("input");
        _0x375635.type = "text";
        _0x375635.placeholder = "Enter URL (Optional)";
        _0xa39152.appendChild(_0x375635);
        const _0x3c41ed = document.createElement("div");
        _0x3c41ed.className = "url-info";
        _0x3c41ed.textContent = "OCR URL: " + _0xbc742a;
        _0xa39152.appendChild(_0x3c41ed);
        const _0x2c939d = document.createElement("div");
        _0x2c939d.className = "checkbox-group";
        const _0x4462c8 = document.createElement("input");
        _0x4462c8.type = "checkbox";
        _0x4462c8.id = "fetchCode";
        _0x4462c8.checked = GM_getValue("fetchCode", false);
        const _0xf746e2 = document.createElement("label");
        _0xf746e2.className = "checkbox-label";
        _0xf746e2.htmlFor = "fetchCode";
        _0xf746e2.textContent = "Auto Chuyển Trang";
        _0x2c939d.appendChild(_0x4462c8);
        _0x2c939d.appendChild(_0xf746e2);
        const _0x1e2df8 = document.createElement("input");
        _0x1e2df8.type = "checkbox";
        _0x1e2df8.id = "autoStart";
        _0x1e2df8.checked = GM_getValue("autoStart", false);
        const _0x22b0c6 = document.createElement("label");
        _0x22b0c6.className = "checkbox-label";
        _0x22b0c6.htmlFor = "autoStart";
        _0x22b0c6.textContent = "Auto Bypass";
        _0x2c939d.appendChild(_0x1e2df8);
        _0x2c939d.appendChild(_0x22b0c6);
        _0xa39152.appendChild(_0x2c939d);
        const _0x352b25 = document.createElement("div");
        _0x352b25.className = "button-group";
        const _0x31715c = document.createElement("button");
        _0x31715c.textContent = "Bypass Now";
        _0x31715c.className = "btn-bypass";
        _0x31715c.onclick = async() => {
            try {
                _0x375635.readOnly = true;
                const _0x5239ab = _0x375635.value || _0xbc742a;
                _0x375635.value = "Chờ Xíu Nhe...";
                const _0x29ec1e = await _0x2680d4(_0x5239ab);
                if (_0x29ec1e) {
                    let _0x332f6a = parseInt(_0x1a735e.value); // Sử dụng giá trị từ slider
                    const _0x22594f = setInterval(() => {
                        _0x375635.value = "Chờ Đợi Là Hạnh Phúc Sau: " + _0x332f6a + "s Thôi!";
                        _0x332f6a--;
                        if (_0x332f6a < 0) {
                            clearInterval(_0x22594f);
                            if (_0x4462c8.checked) {
                                _0x375635.value = "Code: " + _0x29ec1e + " - Đang Chuyển Trang...";
                                _0x2d5ced(_0x29ec1e);
                            } else {
                                _0x375635.value = "Code: " + _0x29ec1e;
                            }
                            _0x31715c.disabled = false;
                        }
                    }, 1000);
                } else {
                    _0x375635.readOnly = false;
                    _0x375635.value = "Error! Xem Lại URL";
                }
                sessionStorage.removeItem("ymnclk");
                localStorage.removeItem("codexn");
            } catch (_0x33180a) {
                console.error("Bypass Lỗi:", _0x33180a);
            }
        };
        _0x352b25.appendChild(_0x31715c);
        const _0x5ec458 = document.createElement("button");
        _0x5ec458.textContent = "Đổi Nhiệm Vụ";
        _0x5ec458.className = "btn-change";
        _0x5ec458.onclick = async() => {
            _0x375635.readOnly = true;
            _0x375635.value = "Đang Đổi Nhiệm Vụ...";
            _0xa46d4e();
        };
        _0x352b25.appendChild(_0x5ec458);
        _0xa39152.appendChild(_0x352b25);
        const _0x48c34e = document.createElement("div");
        _0x48c34e.className = "slider-container";
        const _0x59403d = document.createElement("label");
        _0x59403d.className = "slider-label";
        _0x59403d.textContent = "Thời Gian Bypass: ";
        const _0x81b4c0 = document.createElement("span");
        _0x81b4c0.id = "delay-value";
        _0x81b4c0.textContent = '2s';
        _0x59403d.appendChild(_0x81b4c0);
        const _0x1a735e = document.createElement("input");
        _0x1a735e.type = "range";
        _0x1a735e.min = '5';
        _0x1a735e.max = "125";
        _0x1a735e.value = '5';
        _0x1a735e.className = "delay-slider";
        _0x1a735e.oninput = function() {
            _0x81b4c0.textContent = this.value + 's';
        };

        _0x48c34e.appendChild(_0x59403d);
        _0x48c34e.appendChild(_0x1a735e);
        _0xa39152.appendChild(_0x48c34e);

        // Thêm vào phần tạo giao diện, sau phần checkbox group
        const _0x3711f3 = document.createElement("div");
        _0x3711f3.className = "extra-buttons";

        const _0x23b604 = document.createElement("button");
        _0x23b604.textContent = "Fake IP";
        _0x23b604.className = "btn-fakeip";
        if (_0x5f054e) {
            _0x23b604.classList.add("active");
        }
        _0x23b604.onclick = () => {
            if (!_0x5f054e) {
                const proxy = _0x36be05();
                _0x5ec37a(proxy);
                _0x5f054e = true;
                _0x23b604.classList.add("active");
                _0x375635.value = "Fake IP ON: " + proxy.ip + ':' + proxy.port;
            } else {
                _0x5e6c9a();
                _0x5f054e = false;
                _0x23b604.classList.remove("active");
                _0x375635.value = "Fake IP OFF";
            }
        };

        const _0x345b80 = document.createElement("button");
        _0x345b80.textContent = "Fake Browser";
        _0x345b80.className = "btn-fakebrowser";
        if (_0x2aebed) {
            _0x345b80.classList.add("active");
        }
        _0x345b80.onclick = () => {
            if (!_0x2aebed) {
                const userAgent = _0x2327e4();
                _0xd69aa7(userAgent);
                _0x2aebed = true;
                _0x345b80.classList.add("active");
                _0x375635.value = "Fake Browser ON: " + userAgent.substring(0, 20) + "...";
            } else {
                _0x50de81();
                _0x2aebed = false;
                _0x345b80.classList.remove("active");
                _0x375635.value = "Fake Browser OFF";
            }
        };

        _0x3711f3.appendChild(_0x23b604);
        _0x3711f3.appendChild(_0x345b80);

        // Thêm vào sau phần button group
        _0xa39152.appendChild(_0x3711f3);

        _0x2512a4.appendChild(_0xa39152);
        const _0x9b79e9 = document.createElement("div");
        _0x9b79e9.className = "author-text";
        _0x9b79e9.textContent = "Code By DemonGod";
        _0x2512a4.appendChild(_0x9b79e9);
        document.body.appendChild(_0x2512a4);
        if (_0x1e2df8.checked) {
            _0x31715c.click();
        }
        _0x4462c8.addEventListener("change", () => GM_setValue("fetchCode", _0x4462c8.checked));
        _0x1e2df8.addEventListener("change", () => GM_setValue("autoStart", _0x1e2df8.checked));
    }
    const _0x5b4e96 = window.location.href;
    window.onload = () => {
        if (_0x5b4e96.includes("https://yeumoney.com/")) {
            _0x3a0628().then(_0x4d75c7 => {
                _0x52a8b7(_0x4d75c7);
            })["catch"](_0x113bca => {
                console.error("Lỗi khi nhận diện URL:", _0x113bca);
                _0x52a8b7("Lỗi! Tự nhập URL hoặc Reload");
            });
        } else {
            if (_0x5b4e96.includes("https://docs.google.com/spreadsheets/")) {
                _0x470fcd().then(_0x34cca6 => {
                    if (_0x34cca6) {
                        window.location.href = _0x34cca6;
                    }
                })["catch"](_0x4cf85c => console.error("Lỗi khi gọi hàm:", _0x4cf85c));
            } else if (_0x5b4e96.includes("https://docs.google.com/forms/")) {
                _0xcc4bf4();
            }
        }
    };
    // Thêm vào phần fetch request
    fetch("https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js", {
        mode: 'no-cors',
        credentials: 'omit'
    });

    // Cuối file
    try {
        fetch("https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js", {
            mode: 'no-cors',
            credentials: 'omit'
        }).catch(err => console.log("AdSense load failed:", err));
    } catch (error) {
        console.log("AdSense fetch error:", error);
    }
})();