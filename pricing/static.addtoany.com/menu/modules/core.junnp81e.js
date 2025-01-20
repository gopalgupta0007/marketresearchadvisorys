let t = ".junnp81e",
    J = window,
    K = document,
    p = function() {},
    X = void 0;
J.a2a_config = J.a2a_config || {};
var e = {
    localize: J.a2a_localize || {},
    static_server: J.a2a_config.static_server || "https://static.addtoany.com/menu",
    templates: {},
    native: X,
    onclick: 2,
    orientation: X,
    track_links: X,
    track_links_key: "",
    callbacks: [],
    tracking_callback: X,
    add_services: !1,
    thanks: {},
    locale: X,
    no_3p: X,
    icon_color: X,
    color_main: X,
    color_bg: X,
    color_border: X,
    color_link_text: X,
    color_link_text_hover: X,
    counts: X,
    overlays: []
};
let T = {
        num_services: 8,
        prioritize: X,
        exclude_services: X,
        custom_services: X,
        delay: 0,
        show_menu: X,
        bookmarklet: X
    },
    B = {
        linkmedia: X,
        linkname: X,
        linkurl: X,
        linkname_escape: X,
        menu_type: X,
        target: X
    },
    Z = { ...e,
        ...T,
        ...B
    },
    N = function() {
        for (var e in J.a2a_config) Z[e] = J.a2a_config[e]
    },
    L = function(e) {
        for (var a in e) Z[a] = e[a], J.a2a_config[a] && (J.a2a_config[a] = e[a])
    },
    u = (N(), "https://static.addtoany.com/menu"),
    o = ["feed", "mail", "page"],
    y, w = 0,
    z = e => {
        e ? w = e.a2a_index : x && (w = x)
    },
    j = 0,
    Q = {},
    n = {
        feed: [],
        page: []
    },
    i = ["a2a", "share1", "share2"],
    M = {},
    ce = [],
    de = [],
    x = X,
    _ = X,
    I = X,
    O = K.getElementsByTagName("head")[0],
    pe = !!K.querySelector && ((e = K.querySelector('meta[property="og:url"]')) ? e.getAttribute("content") : !!(e = K.querySelector('link[rel="canonical"]')) && e.href),
    h = K.currentScript && K.currentScript.nonce ? K.currentScript.nonce : null;
let A = navigator.userAgent,
    D = A.match(/Mobi|iPhone|iPad|iPod|Android/),
    $ = "ontouchend" in J,
    ue = () => {
        let e;
        var a = "share1";
        return e = (e = (e = (e = Z.native && navigator.share ? (e = -1 < A.indexOf("Mac") && a) || -1 < A.indexOf("CrOS") && "share2" : e) || !!/iPhone|iPad|iPod/.test(A) && a) || !!(-1 < A.indexOf("Mac") && $) && a) || !!/Android/i.test(A) && "share2", ue = () => e, e
    },
    R = {
        page: {
            most: [
                ["Facebook", "facebook", "facebook", "0866FF", {
                    pu: 1
                }],
                ["Mastodon", "mastodon", "mastodon", "6364FF", {
                    pu: 1
                }],
                ["Bluesky", "bluesky", "bluesky", "1285fe"],
                ["WhatsApp", "whatsapp", "whatsapp", "12AF0A", {
                    pu: 1,
                    na: 1
                }],
                ["Email", "email", "email", "888990", {
                    url: "mailto:?subject=${title}&body=${link}"
                }],
                ["Pinterest", "pinterest", "pinterest", "e60023", {
                    type: "js",
                    src: "https://assets.pinterest.com/js/pinmarklet.js",
                    media: 1,
                    pu: 1
                }],
                ["Telegram", "telegram", "telegram", "2CA5E0", {
                    na: 1
                }],
                ["Message", "sms", "sms", "6CBE45", {
                    url: "sms:?&body=${title}%20${link}"
                }],
                ["Messenger", "facebook_messenger", "facebook_messenger", "0084FF", {
                    pu: 1,
                    na: 1
                }],
                ["Reddit", "reddit", "reddit", "ff4500", {
                    na: 1
                }],
                ["Gmail", "google_gmail", "gmail", "EA4335", {
                    type: "email",
                    pu: 1
                }],
                ["Pocket", "pocket", "pocket", "EE4056"],
                ["Threads", "threads", "threads", "1A1A1A", {
                    pu: 1,
                    na: 1
                }],
                ["LinkedIn", "linkedin", "linkedin", "007BB5", {
                    pu: 1,
                    na: 1
                }],
                ["Teams", "microsoft_teams", "microsoft_teams", "5059C9", {
                    pu: 1
                }],
                ["Mix", "mix", "mix", "ff8226"],
                ["Google Translate", "google_translate", "google_translate", "528ff5"],
                ["Amazon Wish List", "amazon_wish_list", "amazon", "F90"],
                ["AOL Mail", "aol_mail", "aol", "1A1A1A", {
                    type: "email",
                    pu: 1
                }],
                ["Balatarin", "balatarin", "balatarin", "079948"],
                ["BibSonomy", "bibsonomy", "bibsonomy", "1A1A1A"],
                ["Blogger", "blogger", "blogger", "FDA352"],
                ["BlogMarks", "blogmarks", "blogmarks", "535353"],
                ["Bookmarks.fr", "bookmarks_fr", "bookmarks_fr", "96C044"],
                ["Box.net", "box_net", "box", "1A74B0"],
                ["Buffer", "buffer", "buffer", "1A1A1A"],
                ["Copy Link", "copy_link", "link", "888990", {
                    type: "js",
                    src: "javascript:a2a.copyLink('${link}')"
                }],
                ["Diary.Ru", "diary_ru", "diary_ru", "912D31"],
                ["Diaspora", "diaspora", "diaspora", "2E3436"],
                ["Digg", "digg", "digg", "1A1A1A"],
                ["Diigo", "diigo", "diigo", "4A8BCA"],
                ["Douban", "douban", "douban", "071", {
                    pu: 1
                }],
                ["Draugiem", "draugiem", "draugiem", "F60", {
                    pu: 1
                }],
                ["Evernote", "evernote", "evernote", "00A82D"],
                ["Fark", "fark", "fark", "555"],
                ["Flipboard", "flipboard", "flipboard", "C00", {
                    pu: 1
                }],
                ["Folkd", "folkd", "folkd", "0F70B2"],
                ["Google Classroom", "google_classroom", "google_classroom", "FFC112"],
                ["Hacker News", "hacker_news", "y18", "F60"],
                ["Hatena", "hatena", "hatena", "00A6DB"],
                ["Houzz", "houzz", "houzz", "7AC143", {
                    type: "js",
                    src: "https://www.houzz.com/js/clipperBookmarklet.js",
                    media: 1,
                    pu: 1
                }],
                ["Instapaper", "instapaper", "instapaper", "1A1A1A"],
                ["Kakao", "kakao", "kakao", "FCB700", {
                    pu: 1
                }],
                ["Push to Kindle", "kindle_it", "kindle", "1A1A1A"],
                ["Known", "known", "known", "1A1A1A"],
                ["Line", "line", "line", "00C300", {
                    pu: 1,
                    na: 1
                }],
                ["LiveJournal", "livejournal", "livejournal", "113140"],
                ["Mail.Ru", "mail_ru", "mail_ru", "356FAC"],
                ["Mendeley", "mendeley", "mendeley", "A70805"],
                ["Meneame", "meneame", "meneame", "FF7D12"],
                ["MeWe", "mewe", "mewe", "007DA1"],
                ["Micro.blog", "micro_blog", "micro_blog", "FF8800"],
                ["Mixi", "mixi", "mixi", "D1AD5A"],
                ["MySpace", "myspace", "myspace", "1A1A1A"],
                ["Odnoklassniki", "odnoklassniki", "odnoklassniki", "F2720C"],
                ["Outlook.com", "outlook_com", "outlook_com", "0072C6", {
                    type: "email"
                }],
                ["Papaly", "papaly", "papaly", "3AC0F6", {
                    pu: 1
                }],
                ["Pinboard", "pinboard", "pinboard", "1341DE", {
                    pu: 1
                }],
                ["Plurk", "plurk", "plurk", "CF682F"],
                ["Print", "print", "print", "888990", {
                    type: "js",
                    src: "javascript:print()"
                }],
                ["PrintFriendly", "printfriendly", "printfriendly", "6D9F00"],
                ["Pusha", "pusha", "pusha", "0072B8"],
                ["Qzone", "qzone", "qzone", "2B82D9"],
                ["Raindrop.io", "raindrop_io", "raindrop_io", "0B7ED0"],
                ["Rediff MyPage", "rediff", "rediff", "D20000"],
                ["Refind", "refind", "refind", "1492ef"],
                ["Sina Weibo", "sina_weibo", "sina_weibo", "E6162D"],
                ["SiteJot", "sitejot", "sitejot", "FFC808"],
                ["Skype", "skype", "skype", "00AFF0"],
                ["Slashdot", "slashdot", "slashdot", "004242"],
                ["Snapchat", "snapchat", "snapchat", "1A1A1A", {
                    pu: 1,
                    na: 1
                }],
                ["StockTwits", "stocktwits", "stocktwits", "40576F", {
                    pu: 1
                }],
                ["Svejo", "svejo", "svejo", "5BD428"],
                ["Symbaloo Bookmarks", "symbaloo_bookmarks", "symbaloo", "6DA8F7"],
                ["Threema", "threema", "threema", "1A1A1A", {
                    url: "threema://compose?text=${title}%20${link}",
                    na: 1
                }],
                ["Trello", "trello", "trello", "0079BF", {
                    pu: 1
                }],
                ["Tumblr", "tumblr", "tumblr", "001935", {
                    media: 1,
                    pu: 1
                }],
                ["Twiddla", "twiddla", "twiddla", "1A1A1A"],
                ["Twitter", "twitter", "twitter", "1D9BF0", {
                    pu: 1,
                    na: 1
                }],
                ["TypePad", "typepad_post", "typepad", "D2DE61"],
                ["Viber", "viber", "viber", "7C529E", {
                    url: "viber://forward?text=${title}%20${link}",
                    na: 1
                }],
                ["VK", "vk", "vk", "587EA3", {
                    pu: 1
                }],
                ["WeChat", "wechat", "wechat", "7BB32E"],
                ["WordPress", "wordpress", "wordpress", "585C60"],
                ["Wykop", "wykop", "wykop", "367DA9"],
                ["X", "x", "x", "1A1A1A", {
                    pu: 1,
                    na: 1
                }],
                ["XING", "xing", "xing", "165B66", {
                    pu: 1
                }],
                ["Yahoo Mail", "yahoo_mail", "yahoo", "400090", {
                    type: "email"
                }],
                ["Yummly", "yummly", "yummly", "E16120", {
                    type: "js",
                    src: "https://www.yummly.com/js/yumlet.js",
                    media: 1,
                    pu: 1
                }]
            ],
            email: [
                ["Email", "email", "email", "888990", {
                    type: "email"
                }],
                ["Gmail", "google_gmail", "gmail", "EA4335", {
                    type: "email",
                    pu: 1
                }],
                ["AOL Mail", "aol_mail", "aol", "1A1A1A", {
                    type: "email",
                    pu: 1
                }],
                ["Outlook.com", "outlook_com", "outlook_com", "0072C6", {
                    type: "email"
                }],
                ["Yahoo Mail", "yahoo_mail", "yahoo", "400090", {
                    type: "email"
                }]
            ]
        },
        feed: {
            most: [
                ["Feed", "feed", "feed", "E3702D", {
                    url: "${link_noenc}"
                }],
                ["Feedly", "feedly", "feedly", "2BB24C"],
                ["Feedbin", "feedbin", "feedbin", "1A1A1A"],
                ["My Yahoo", "my_yahoo", "yahoo", "400090"],
                ["FeedBlitz", "feedblitz", "feedblitz", "FF8B23", {
                    type: "email"
                }],
                ["The Old Reader", "oldreader", "oldreader", "D73F31"],
                ["Daily Rotation", "daily_rotation", "dailyrotation", "1A1A1A"],
                ["iTunes", "itunes", "itunes", "FB233A", {
                    url: "itpc://${link_nohttp}"
                }],
                ["Netvibes", "netvibes", "netvibes", "7CA900"],
                ["NewsAlloy", "newsalloy", "newsalloy", "8E2B3D"],
                ["Outlook", "outlook", "outlook_com", "0072C6", {
                    url: "feed://${link_nohttp}"
                }],
                ["PodNova", "podnova", "podnova", "B50419"],
                ["Symbaloo Feeds", "symbaloo_feeds", "symbaloo", "6DA8F7"],
                ["The Free Dictionary", "the_free_dictionary", "thefreedictionary", "004B85"]
            ],
            email: [
                ["FeedBlitz", "feedblitz", "feedblitz", "FF8B23", {
                    type: "email"
                }]
            ]
        }
    },
    ee = ((ce = R.page.most.concat(R.feed.most)).forEach(e => i.push(e[2])), {
        apple_music: {
            name: "Apple Music",
            icon: "apple_music",
            color: "fa233b"
        },
        behance: {
            name: "Behance",
            icon: "behance",
            color: "007EFF",
            url: "https://www.behance.net/${id}"
        },
        bluesky: {
            name: "Bluesky",
            icon: "bluesky",
            color: "1285fe"
        },
        discord: {
            name: "Discord",
            icon: "discord",
            color: "5865F2",
            url: "https://discord.com/invite/${id}"
        },
        facebook: {
            name: "Facebook",
            icon: "facebook",
            color: "1877f2",
            url: "https://www.facebook.com/${id}"
        },
        flickr: {
            name: "Flickr",
            icon: "flickr",
            color: "FF0084",
            url: "https://www.flickr.com/photos/${id}"
        },
        foursquare: {
            name: "Foursquare",
            icon: "foursquare",
            color: "F94877",
            url: "https://foursquare.com/${id}"
        },
        github: {
            name: "GitHub",
            icon: "github",
            color: "2A2A2A",
            url: "https://github.com/${id}"
        },
        google: {
            name: "Google",
            icon: "google",
            color: "4285F4"
        },
        google_maps: {
            name: "Google Maps",
            icon: "google_maps",
            color: "34A853"
        },
        instagram: {
            name: "Instagram",
            icon: "instagram",
            color: "E4405F",
            url: "https://www.instagram.com/${id}"
        },
        linkedin: {
            name: "LinkedIn",
            icon: "linkedin",
            color: "007BB5",
            url: "https://www.linkedin.com/in/${id}"
        },
        linkedin_company: {
            name: "LinkedIn",
            icon: "linkedin",
            color: "007BB5",
            url: "https://www.linkedin.com/company/${id}"
        },
        medium: {
            name: "Medium",
            icon: "medium",
            color: "2A2A2A",
            url: "https://medium.com/@${id}"
        },
        pinterest: {
            name: "Pinterest",
            icon: "pinterest",
            color: "BD081C",
            url: "https://www.pinterest.com/${id}"
        },
        snapchat: {
            name: "Snapchat",
            icon: "snapchat",
            color: "2A2A2A",
            url: "https://www.snapchat.com/add/${id}"
        },
        soundcloud: {
            name: "SoundCloud",
            icon: "soundcloud",
            color: "ff5500"
        },
        spotify: {
            name: "Spotify",
            icon: "spotify",
            color: "1ed760"
        },
        steam: {
            name: "Steam",
            icon: "steam",
            color: "171d25",
            url: "https://steamcommunity.com/id/${id}",
            ignore: ""
        },
        threads: {
            name: "Threads",
            icon: "threads",
            color: "2a2a2a",
            url: "https://www.threads.net/@${id}"
        },
        tiktok: {
            name: "TikTok",
            icon: "tiktok",
            color: "2a2a2a",
            url: "https://www.tiktok.com/@${id}"
        },
        tumblr: {
            name: "Tumblr",
            icon: "tumblr",
            color: "35465C",
            url: "https://${id}.tumblr.com"
        },
        twitch: {
            name: "Twitch",
            icon: "twitch",
            color: "9146ff",
            url: "https://www.twitch.tv/${id}"
        },
        twitter: {
            name: "Twitter",
            icon: "twitter",
            color: "1D9BF0",
            url: "https://x.com/${id}"
        },
        vimeo: {
            name: "Vimeo",
            icon: "vimeo",
            color: "1AB7EA",
            url: "https://vimeo.com/${id}"
        },
        x: {
            name: "X",
            icon: "x",
            color: "2A2A2A",
            url: "https://x.com/${id}"
        },
        yelp: {
            name: "Yelp",
            icon: "yelp",
            color: "FF1A1A"
        },
        youtube: {
            name: "YouTube",
            icon: "youtube",
            color: "FF0000",
            url: "https://www.youtube.com/user/${id}"
        },
        youtube_channel: {
            name: "YouTube Channel",
            icon: "youtube",
            color: "FF0000",
            url: "https://www.youtube.com/channel/${id}"
        }
    });
for (var a in ee) i.push(ee[a].icon);

function r(a) {
    l(function(e) {
        0 <= e.className.indexOf("a2a_follow") ? ae("feed", {
            target: e
        }) : ae(a || "page", {
            target: e
        })
    }, !0) || !b("a2a_menu_container") || Y.a2a_done || ae(a)
}
let k = e => setTimeout(e, 0),
    P = {
        isReady: !1,
        ready: function(e) {
            function a() {
                if (!K.body) return setTimeout(function() {
                    P.ready(e)
                });
                e(), P.isReady = !0
            }

            function t() {
                K.removeEventListener("DOMContentLoaded", n, !1), J.removeEventListener("load", n, !1)
            }
            let n = function(e) {
                !K.addEventListener && "load" !== e.type && "complete" !== K.readyState || (t(), a())
            };
            "complete" === K.readyState ? a() : K.addEventListener && (K.addEventListener("DOMContentLoaded", n, !1), J.addEventListener("load", n, !1))
        }
    },
    ae = function(e, a = {}) {
        N();
        var t, n, o, i, r, l, s = Z,
            c = {},
            d = null,
            p = {},
            u = location.href;
        for (t in _a(e), a) s[t] = a[t];
        for (t in s) c[t] = s[t];
        if (n = s.target)
            if ("string" == typeof n) {
                if (o = n.substring(0, 1), n = n.substring(1), "." == o) return H(_e(f(n, K)), e, a), void(s.target = X);
                0 <= (o = (d = b(n)).className).indexOf("a2a_kit") && o.indexOf("a2a_target") < 0 && (d = null)
            } else d = s.target;
        p.type = y, p.node = d, p.linkmedia = s.linkmedia, p.linkname = s.linkname || K.title || location.href, p.linkurl = s.linkurl || location.href, p.linkname_escape = s.linkname_escape, p.linkname_implicit = !s.linkname_escape && (K.title || u) == p.linkname, p.linkurl_implicit = u == p.linkurl, p.orientation = s.orientation, p.track_links = s.track_links, p.track_links_key = s.track_links_key || "", L(B), "custom" == Z.track_links && (Z.track_links = J.a2a_config.track_links = X, Z.track_links_key = J.a2a_config.track_links_key = ""), J["a2a" + y + "_init"] = 1, n = p, o = c, j++, w = j, n.n = w, d = (Q["n" + w] = n).node = G(n.node), u = Q[e], p = K.createElement("div"), e = ie(d)["a2a-media"], r = ie(d)["a2a-title"], l = ie(d)["a2a-url"], d ? (n.linkname_escape && (i = f("a2a_linkname_escape", d.parentNode)[0] || f("a2a_linkname_escape", d.parentNode.parentNode)[0]) && (n.linkname = i.textContent || i.innerText), n.linkmedia = o.linkmedia = e || n.linkmedia, n.linkname = o.linkname = r || n.linkname, n.linkurl = o.linkurl = l || n.linkurl, r && (n.linkname_implicit = !1), l && (n.linkurl_implicit = !1), "textContent" in K ? p.textContent = n.linkname : p.innerText = n.linkname, (i = p.childNodes[0]) && (n.linkname = i.nodeValue), d.a2a_kit ? q(n, o) : W(n)) : u.show_menu || j--, Y()
    },
    H = function(e, a, t) {
        for (var n = 0, o = e.length; n < o; n++) t.target = e[n], ae(a, t)
    },
    U = e => {
        var e = "a2a" + e,
            a = Z.onclick,
            e = m(b(e + "_show_more_less"));
        return a && 2 !== a || !e
    },
    W = function(o) {
        let i = o.node,
            r = o.type;
        var e = i.parentElement;
        let l = "a2a" + r,
            s = (e.a2a_kit && (o.kit = e), () => {
                z(i), y = r;
                var e = b(l + "_dropdown"),
                    a = m(e),
                    t = m(b(l + "_show_more_less")),
                    n = Z.onclick,
                    o = K.activeElement;
                a ? v("none", r) : !U(r) && "mail" != r || (C(i), Q[r].last_focus = o, e.focus()), t && (a || 2 === n) && "mail" != r && (E(), Q[r].last_focus = o)
            }),
            c = !1,
            t, n = e => {
                var e = e.altKey,
                    t = Z.native,
                    t = (D || $) && (t === X || !0 === t) || !0 === t && navigator.share;
                var n = o => new Promise((t, e) => {
                    var n;
                    n = o, new Promise((e, a) => {
                        let t = new XMLHttpRequest;
                        t.open("GET", n), t.responseType = "blob", t.onload = () => e(t.response), t.onerror = () => a(new Error("Network error.")), t.send()
                    }).then(e => {
                        let a;
                        try {
                            a = new URL(o).pathname.split(".").pop()
                        } catch (e) {}
                        a = a || e.type.split("/")[1].match(/(?!x-)\w\w{3,4}/)[0];
                        e = new File([e], "media." + a, {
                            type: e.type
                        });
                        t(e)
                    }).catch(e => {
                        console.warn('To be shared natively, images need the "Access-Control-Allow-Origin" header.')
                    })
                });
                if (t || e || c)
                    if (t && (e || c)) s();
                    else {
                        Ie(o);
                        let a = {
                            url: o.linkurl,
                            text: o.linkname,
                            files: []
                        };
                        t = o.linkmedia;
                        t ? n(t).then(e => {
                            a.files.push(e), Me(a, s)
                        }) : Me(a, s)
                    }
                else s();
                c = !1
            };
        e = () => {
            var e;
            ue() || (e = !!(e = Z.exclude_services) && 9 < e.length, U(r) || e || (ea = !1), $e(r)), a.destroy(), d.destroy()
        };
        let a = ne(i, "focus", e),
            d = ne(i, "mouseenter", e);
        i.getAttribute("onclick") && -1 != (i.getAttribute("onclick") + "").indexOf("a2a_") || i.getAttribute("onmouseover") && -1 != (i.getAttribute("onmouseover") + "").indexOf("a2a_") || (ne(i, "click", e => {
            me(e), fe(e), n(e)
        }), ne(i, "touchstart", e => {
            let a = i.style;
            a.webkitTouchCallout = a.webkitUserSelect = "none", t = setTimeout(() => {
                c = !0, n(e), a.webkitTouchCallout = a.webkitUserSelect = ""
            }, 700)
        }, !!g() && {
            passive: !0
        }), ne(i, "touchend", () => {
            clearTimeout(t)
        }, !!g() && {
            passive: !0
        }), ne(i, "click", fe), ne(i, "touchstart", fe, !!g() && {
            passive: !0
        }), Z.onclick) || (Q[y].delay ? i.onmouseenter = function() {
            Q[y].over_delay = setTimeout(function() {
                C(i)
            }, Q[y].delay)
        } : ne(i, "mouseenter", () => k(() => C(i))), i.onmouseleave = function() {
            Ae(), Q[y].over_delay && clearTimeout(Q[y].over_delay)
        }), "a" == i.tagName.toLowerCase() && "page" == y && (i.href = "https://www.addtoany.com/share#url=" + encodeURIComponent(o.linkurl) + "&title=" + encodeURIComponent(o.linkname).replace(/'/g, "%27"));
        e = i.firstChild;
        e && void 0 !== e.srcset && /\/share_save_171_16.(?:gif|png)$/.test(e.src) && (e.srcset = "https://static.addtoany.com/buttons/share_save_342_32.png 2x")
    },
    q = (c, d) => {
        let p = c.type,
            u, _, f;
        let m = ["facebook_like", "twitter_tweet", "pinterest_pin", "linkedin_share"];

        function h(e, a) {
            if (e && !oe(e, m))
                for (var t = 0, n = a ? Q[p].services.most.concat(Q[p].services.email) : ce, o = n.length; t < o; t++)
                    if (e == n[t][1]) return n[t];
            return !a && [e, e]
        }
        var $ = te.avail;

        function g(e, a) {
            for (var t, n = 0, o = e.attributes.length, i = a; n < o; n++)(t = e.attributes[n]).name && "data-" == t.name.substring(0, 5) && (i[t.name.substring(5)] = t.value);
            return i
        }

        function s(e, a, t) {
            t = {
                media: c.linkmedia,
                mediaNode: v.a2a_mediaNode,
                node: t,
                service: e,
                serviceCode: a,
                title: c.linkname,
                url: c.linkurl
            }, je(t, c)
        }
        let R = Z.templates,
            v = c.node;
        var e = ie(v),
            y = v.className,
            k = v.a2a_follow,
            b = _e(v.getElementsByTagName("a")),
            i = b.length,
            a = K.createElement("div"),
            t = e["a2a-icon-color"] || Z.icon_color,
            n = t && t.split(",", 2),
            o = n && n[0];
        let w = n && n[1];
        var P = "a2a_svg a2a_s__default a2a_s_",
            x = {},
            A = {},
            n = e["a2a-scroll-show"],
            S = 0 <= y.indexOf("a2a_vertical_style"),
            e = y.match(/a2a_kit_size_([\w\.]+)(?:\s|$)/),
            E = e ? e[1] : "16",
            C = parseInt(E, 10),
            e = E + "px";
        E && !isNaN(C) && (t && "unset" != t && (o && "unset" != o && (x.backgroundColor = o), w) && "unset" != w.trim() && (w = w.trim()), v.style.lineHeight = A.height = A.lineHeight = e, A.width = 2 * C + "px", A.fontSize = "16px", S && (A.height = A.lineHeight = C / 2 + "px", A.fontSize = "10px", A.width = E + "px"), n && ve(v, n), 32 != C) && (x.backgroundSize = x.height = x.lineHeight = x.width = e, A.borderRadius = x.borderRadius = (.14 * C).toFixed() + "px", A.fontSize = (parseInt(A.height, 10) + (S ? 4 : 0)) / 2 + "px");
        let F = {
            facebook_like: function(t, n) {
                f.href = c.linkurl, f.width = "90", f.layout = "button_count", f.ref = "addtoany", f = g(t, f), t.style.width = f.width + "px";
                var e, a, o, i, r = "v17.0",
                    l = da();
                for (e in 2 == (l = l ? l.replace(/-/, "_") : "en_US").length && (l += "_" + l.toUpperCase()), f) _ += " data-" + e + '="' + f[e] + '"';
                J.fbAsyncInit || (J.fbAsyncInit = function() {
                    J.FB.init({
                        appId: "0",
                        status: !1,
                        xfbml: !0,
                        version: r
                    }), J.FB.Event.subscribe("edge.create", function(e, a) {
                        re.track("Facebook Like", "facebook_like", e), s("Facebook Like", n, t)
                    })
                }, (u = K.createElement("span")).id = "fb-root", K.body.insertBefore(u, K.body.firstChild)), F.facebook_like_script || (a = K, o = "facebook-jssdk", i = a.getElementsByTagName("script")[0], a.getElementById(o)) || ((a = a.createElement("script")).id = o, a.src = "https://connect.facebook.net/" + l + "/sdk.js#xfbml=1&version=" + r, i.parentNode.insertBefore(a, i)), F.facebook_like_script = 1, t.innerHTML = '<div class="fb-like"' + _ + "></div>";
                try {
                    J.FB.XFBML.parse(t)
                } catch (e) {}
            },
            facebook_like_script: X,
            twitter_tweet: function(a, t) {
                f.url = c.linkurl, f.lang = da() || "en", f.related = "AddToAny,micropat";
                var e, n, o, i = R.twitter,
                    r = "string" == typeof i ? i.lastIndexOf("@") : null,
                    l = (r && -1 !== r && (r = (r = i.substring(++r).split(" ", 1))[0].replace(/:/g, "").replace(/\//g, "").replace(/-/g, "").replace(/\./g, "").replace(/,/g, "").replace(/;/g, "").replace(/!/g, ""), f.related = r + ",AddToAny"), f = g(a, f), K.createElement("a"));
                for (e in l.className = "twitter-share-button", f) l.setAttribute("data-" + e, f[e]);
                a.appendChild(l), F.twitter_tweet_script || (i = K, r = "twitter-wjs", o = i.getElementsByTagName("script")[0], i.getElementById(r)) || ((i = i.createElement("script")).id = r, i.src = "https://platform.twitter.com/widgets.js", o.parentNode.insertBefore(i, o), J.twttr = J.twttr || (n = {
                    _e: [],
                    ready: function(e) {
                        n._e.push(e)
                    }
                })), F.twitter_tweet_script = 1;
                try {
                    J.twttr.ready(function(e) {
                        F.twitter_bind || (e.events.bind("click", function(r) {
                            var e;
                            r && "tweet" == r.region && (e = function() {
                                var e = r.target.src.split("#")[1] || "";
                                if (e && -1 < e.indexOf("url=")) {
                                    for (var a = {}, t = e.split("&"), n = t.length, o = 0; o < n; o++) {
                                        var i = t[o].split("=");
                                        a[i[0]] = i[1]
                                    }
                                    return a
                                }
                                return !1
                            }()) && e.url && (re.track("Twitter Tweet", "twitter_tweet", decodeURIComponent(e.url)), s("Twitter Tweet", t, a))
                        }), F.twitter_bind = 1), e.widgets && e.widgets.load()
                    })
                } catch (e) {}
            },
            twitter_tweet_script: X,
            twitter_bind: X,
            pinterest_pin: function(e, a) {
                f["pin-config"] = "beside", f["pin-do"] = "buttonPin", f.media = c.linkmedia, f.url = c.linkurl, f = g(e, f);
                var t, n, o, i = K.createElement("a");
                for (t in f) i.setAttribute("data-" + t, f[t]);
                "beside" == f["pin-config"] && "buttonPin" == f["pin-do"] && (e.style.width = "76px"), i.href = "https://www.pinterest.com/pin/create/button/?url=" + f.url + (f.media ? "&media=" + f.media : "") + (f.description ? "&description=" + encodeURIComponent(f.description).replace(/'/g, "%27") : ""), ne(e, "click", function() {
                    re.track("Pinterest Pin", "pinterest_pin", c.linkurl), s("Pinterest Pin", a, e)
                }), e.appendChild(i), F.pinterest_pin_script || (n = K, o = n.createElement("script"), n = n.getElementsByTagName("script")[0], o.async = !0, o.src = "https://assets.pinterest.com/js/pinit.js", n.parentNode.insertBefore(o, n)), F.pinterest_pin_script = 1
            },
            pinterest_pin_script: X,
            linkedin_share: function(e, a) {
                for (var t in f.onsuccess = "kit.linkedin_share_event", f.url = c.linkurl, f = g(e, f)) _ += " data-" + t + '="' + f[t] + '"';
                var n, o;
                F.linkedin_share_event = function() {
                    re.track("LinkedIn Share", "linkedin_share", c.linkurl), s("LinkedIn Share", a, e)
                }, F.linkedin_share_script || (n = K, o = n.createElement("script"), n = n.getElementsByTagName("script")[0], o.type = "text/javascript", o.async = !0, o.src = "https://platform.linkedin.com/in.js", n.parentNode.insertBefore(o, n)), F.linkedin_share_script = 1, e.innerHTML = '<script type="IN/Share"' + _ + "><\/script>"
            },
            linkedin_share_event: X,
            linkedin_share_script: X
        };
        for (let s = 0; s < i; s++) {
            var T = b[s],
                B = T.className,
                N = B.match(/a2a_button_([\w\.]+)(?:\s|$)/),
                L = 0 <= B.indexOf("a2a_dd"),
                H = 0 <= B.indexOf("a2a_counter");
            let e = !!N && N[1];
            var z = T.childNodes,
                N = h(e),
                U = k && ee[e] ? ee[e].name : N[0];
            let a = "_blank",
                t = k && ee[e] ? ee[e].icon : N[2],
                n = k && ee[e] ? ee[e].color : N[3] || "CAE0FF";
            N[4];
            let o = !1,
                i = !1;
            var j = 0 <= y.indexOf("a2a_color_buttons");
            let r, l;
            if (_ = "", f = {}, L ? (d.target = T, ae(p, d), e = "a2a", n = "0166FF", D = ue(), t = "page" === p && D ? D : "a2a", i = H, 0 <= y.indexOf("a2a_floating_style") && (T.a2a_floating = 1)) : "feed" == e || "print" == e ? a = "" : H && e && oe(e, $) ? i = !0 : e && oe(e, m) && (F[e](T, e), o = !0), e && !oe(e, ["google_plus", "stumbleupon"]) && !o) {
                if (L || (v.a2a_codes = v.a2a_codes || [], v.a2a_codes.push(e), T.target = a, !k || !ee[e] && h(e, !0) ? "feed" === e ? T.href = T.href || c.linkurl : se(le(N), T, c) : T.href = function(e, a) {
                        let t;
                        var n = g(e, {})["a2a-follow"],
                            a = ee[a];
                        return (t = n && a && a.url ? a.url.replace("${id}", n) : t) || e.href
                    }(T, e)), z.length) {
                    for (var M, W, q, I = 0, Y = z.length; I < Y; I++)
                        if (q = (W = "string" == typeof(M = z[I].className)) && ("a2a_label" === M || 0 <= M.indexOf("a2a_ignore")), 1 == z[I].nodeType && (q || (l = !0), W) && 0 <= M.indexOf("a2a_count")) {
                            r = !0;
                            break
                        }
                    if (!l) {
                        for (var G in (u = K.createElement("span")).className = P + t + " a2a_img_text", n && !j && (u.style.backgroundColor = "#" + n), ia(t, u, w), x) u.style[G] = x[G];
                        T.insertBefore(u, z[0])
                    }
                } else {
                    for (var V in (u = K.createElement("span")).className = P + t, n && !j && (u.style.backgroundColor = "#" + n), ia(t, u, w), x) u.style[V] = x[V];
                    T.appendChild(u), (u = K.createElement("span")).className = "a2a_label", u.innerHTML = U || ("feed" == p ? Z.localize.Subscribe : Z.localize.Share), U || (u.className += " a2a_localize", u.setAttribute("data-a2a-localize", "inner," + ("feed" == p ? "Subscribe" : "Share"))), T.appendChild(u)
                }
                if ((i = S && E && C < 20 ? !1 : i) && !r) {
                    for (var O in (u = K.createElement("span")).className = "a2a_count", u.a2a = {}, u.a2a.kit = v, A) j && 0 <= ["width", "height"].indexOf(O) || (u.style[O] = A[O]);
                    T.appendChild(u);
                    var D = (c.linkurl_implicit && pe ? encodeURIComponent(pe) : encodeURIComponent(c.linkurl)).replace(/'/g, "%27");
                    L ? (u.a2a.is_a2a_dd_counter = 1, v.a2a_dd_counter = u, te.get("facebook", u, D)) : te.get(e, u, D)
                }
                n && j && (T.style.backgroundColor = "#" + n), "a2a_dd" != B && de.push(T)
            }
        }
        0 <= y.indexOf("a2a_default_style") && (a.style.clear = "both", v.appendChild(a))
    },
    te = {
        get: function(i, r, e, l) {
            Z.counts;
            var s, a, t = decodeURIComponent(e),
                n = te.bonus(i, t, e, r.a2a.kit),
                c = "",
                o = te[i],
                d = o.api,
                p = (o.cb, r.a2a.is_a2a_dd_counter);
            !l && n && (c = "2", te.get(i, r, n, !0)), "string" != typeof(s = o[t] = o[t] || {}).num || l ? "number" == typeof s.num ? p ? te.sum(r, s.num, i + c) : te.set(r, s.num, i + c) : (s.queued = s.queued || [], s.queued.push(r), o.n = o.n || 0, o.n++, o["cb" + o.n] = function(e) {
                var a, t = te[i].cb(e, r);
                if (void 0 !== t)
                    if ("string" == typeof t && "facebook" == i) "empty" == t ? a = "Note: Facebook no longer provides public API access to share counts. AddToAny is soon launching a premium service to manage private API access to Facebook and display share counts." : "limit" == t && (a = "Facebook's public share counts API has reached its request limit from your connection. Try again later."), console.log("%c" + a, "color:#1877f2"), l || (r.style.display = "none"), s.num = "error";
                    else
                        for (var n, o = 0; o < s.queued.length; o++) n = s.queued[o], s.num = t, n.a2a.is_a2a_dd_counter ? te.sum(n, t, i + c) : te.set(n, t, i + c)
            }, 1 == s.queued.length && (a = d[0] + e + (d[1] || "&callback") + "=a2a.counters." + i + ".cb" + o.n, P.ready(function() {
                Ge(a)
            }))) : r.style.display = "none"
        },
        set: function(e, a, t) {
            var n = a;
            a = void 0 !== e.a2a.last_count ? e.a2a.last_count + a : a, e.innerHTML = "<span>" + te.format(a) + "</span>", "a2a" != t && (e.a2a.last_count = n, te.sum(e, n, t))
        },
        sum: function(e, a, t) {
            var e = e.a2a.kit,
                n = e.a2a_counts_sum || 0,
                o = e.a2a_counts_summed || [];
            "a2a" != t && -1 === o.indexOf(t) && (n = e.a2a_counts_sum = n + a, (o = e.a2a_counts_summed = o || []).push(t)), e.a2a_dd_counter && te.set(e.a2a_dd_counter, n, "a2a")
        },
        format: function(e) {
            var a = te.format,
                t = "localize";
            return a[t] || (a.locale = da(), a[t] = "object" == typeof Intl && Intl && "function" == typeof Intl.NumberFormat ? function(e) {
                return e.toLocaleString(a.locale, {
                    maximumFractionDigits: 1
                })
            } : function(e, a) {
                return a && "decimal" === a ? Math.round(10 * e) / 10 : (e += "").charAt(0) + "," + e.substring(1)
            }), e = 999 < e ? e < 1e6 ? 1e4 < e ? a[t](e / 1e3, "decimal") + "k" : a[t](e) : e < 1e9 ? a[t](e / 1e6, "decimal") + "M" : "1B+" : e
        },
        bonus: function(e, a, t, n) {
            var o, i, r = Z.counts,
                l = "%3A%2F%2F";
            return r && (r.recover_protocol && "http" === r.recover_protocol && (o = t.replace(/^https%/, "http%"), a = decodeURIComponent(o)), r.recover_domain && (o = encodeURIComponent(a.replace(/^(https?\:\/\/)(?:[^\/?#]+)([\/?#]|$)/i, "$1" + r.recover_domain + "$2")), a = decodeURIComponent(o)), r.recover) && "function" == typeof r.recover && (a = {
                url: (i = K.createElement("a")).href = a,
                pathParts: i.pathname.split("/"),
                domain: i.hostname,
                protocol: i.protocol,
                kit: n
            }, o = encodeURIComponent(r.recover(a))), !(!o || o === t || -1 !== ["tumblr"].indexOf(e) && o.split(l).pop() === t.split(l).pop()) && o
        },
        avail: ["facebook", "pinterest", "reddit", "tumblr"],
        facebook: {
            api: ["https://graph.facebook.com/?fields=og_object%7Bengagement%7D&id=", "&callback"],
            cb: function(e, a) {
                return e && e.og_object && e.og_object.engagement && !isNaN(e.og_object.engagement.count) ? e.og_object.engagement.count : e && e.error && e.error.code && 4 === e.error.code ? "limit" : "empty"
            }
        },
        pinterest: {
            api: ["https://widgets.pinterest.com/v1/urls/count.json?url="],
            cb: function(e, a) {
                if (e && !isNaN(e.count)) return e.count
            }
        },
        reddit: {
            api: ["https://www.reddit.com/api/info.json?url=", "&jsonp"],
            cb: function(e, a) {
                var t = e.data;
                if (e && t && t.children) {
                    for (var n = [], o = t.children, i = 0; i < o.length; i++) {
                        var r = o[i].data;
                        r && !isNaN(r.ups) && n.push(r.ups)
                    }
                    return 0 < n.length ? Math.max.apply(null, n) : 0
                }
            }
        },
        tumblr: {
            api: ["https://api.tumblr.com/v2/share/stats?url="],
            cb: function(e, a) {
                if (e && e.response && !isNaN(e.response.note_count)) return e.response.note_count
            }
        }
    },
    Y = function() {
        var e = Q[y],
            a = w;
        e.bookmarklet && (e.no_hide = 1, x = a, C()), e.show_menu && (e.no_hide = 1, x = a, C(null, e.show_menu), e.show_menu = X), Y.a2a_done = 1
    },
    l = function(i, e) {
        var a = f,
            t = a("a2a_kit", K),
            a = _e(K.getElementsByName("a2a_dd")).concat(a("a2a_dd", K));

        function n(e) {
            for (var a, t, n = 0, o = e.length; n < o; n++)
                if (t = (void 0 === (a = e[n]).a2a_index || "" === a.a2a_index) && a.className.indexOf("a2a_target") < 0 && a.parentNode.className.indexOf("a2a_kit") < 0 ? i(a) : t) return t;
            return null
        }
        if (e) return n(t) || n(a);
        n(t.concat(a))
    },
    G = function(e) {
        function a(e) {
            0 <= e.className.indexOf("a2a_kit") && (e.a2a_kit = 1, 0 <= e.className.indexOf("a2a_follow")) && (e.a2a_follow = 1)
        }
        return e ? (e.a2a_index = w, a(e), e) : l(function(e) {
            return e.a2a_index = w, a(e), e
        }, !0)
    },
    b = function(e) {
        return K.getElementById(e)
    },
    f = function(e, a, t) {
        for (var n, o = (a = a || b("a2a" + y + "_dropdown")).getElementsByClassName(e), i = t ? new RegExp("\\b" + t + "\\b", "i") : null, r = [], l = 0, s = o.length; l < s; l += 1) n = o[l], i && !i.test(n.nodeName) || r.push(n);
        return r
    },
    _e = function(e) {
        for (var a = [], t = e.length, n = 0; n < t; n++) a[a.length] = e[n];
        return a
    };
e = e => {
    try {
        K.createDocumentFragment().querySelector(e)
    } catch {
        return !1
    }
    return !0
};
let V = function(e, a) {
        var t, n = "MatchesSelector",
            o = "ms" + n,
            n = "webkit" + n;
        if (e.matches) t = "matches";
        else if (e[o]) t = o;
        else {
            if (!e[n]) return !(V = function(e, a) {
                return !1
            });
            t = n
        }
        return (V = function(e, a) {
            try {
                return e[t](a)
            } catch (e) {
                console.error(`'${a}' is not a valid selector.`)
            }
        })(e, a)
    },
    g = function() {
        let e = !1;
        try {
            var a = Object.defineProperty({}, "passive", {
                get: function() {
                    e = !0
                }
            });
            J.addEventListener("test", null, a)
        } catch (e) {}
        return g = function() {
            return e
        }, e
    },
    ne = function(e, a, t, n) {
        var o;
        return "object" == typeof n && (o = !!n.useCapture, n = g() ? n : o), e.addEventListener(a, t, n), {
            destroy: function() {
                e.removeEventListener(a, t, n)
            }
        }
    },
    fe = function(e) {
        e.stopPropagation()
    },
    me = function(e) {
        e.preventDefault()
    },
    oe = function(e, a, t, n, o) {
        if ("object" == typeof a) {
            e = e.toLowerCase();
            for (var i, r = a.length, l = 0; l < r; l++)
                if (i = n ? a[l][n] : a[l], i = o ? i[o] : i, t) {
                    if (e == i.toLowerCase()) return a[l]
                } else if (-1 != e.indexOf(i.toLowerCase()) && "" !== i) return a[l]
        }
        return !1
    },
    he = function(e, a) {
        var t, n, o, i = [];
        for (t in e) e.hasOwnProperty(t) && (n = a ? a + "[" + t + "]" : t, o = e[t], i.push("object" == typeof o ? he(o, n) : encodeURIComponent(n) + "=" + encodeURIComponent(o)));
        return i.join("&")
    };

function ge(n, o, e) {
    let i, r, t, l, s, c, d = 0,
        p = !1,
        u = !1,
        a = !0,
        _ = !o && 0 !== o && "function" == typeof J.requestAnimationFrame;
    if ("function" != typeof n) throw new TypeError("Not a function");

    function f(e) {
        var a = i,
            t = r;
        return i = r = void 0, d = e, l = n.apply(t, a)
    }

    function m(e, a) {
        return _ ? (J.cancelAnimationFrame(s), J.requestAnimationFrame(e)) : setTimeout(e, a)
    }

    function h(e) {
        var a = e - c,
            e = e - d;
        return void 0 === c || o <= a || a < 0 || u && e >= t
    }

    function g() {
        var e, a = Date.now();
        if (h(a)) return v(a);
        s = m(g, (e = (a = a) - c, a -= d, e = o - e, u ? Math.min(e, t - a) : e))
    }

    function v(e) {
        return s = void 0, a && i ? f(e) : (i = r = void 0, l)
    }

    function y(...e) {
        var a = Date.now(),
            t = h(a);
        if (i = e, r = this, c = a, t) {
            if (void 0 === s) return e = c, d = e, s = m(g, o), p ? f(e) : l;
            if (u) return s = m(g, o), f(c)
        }
        return void 0 === s && (s = m(g, o)), l
    }
    return o = +o || 0, e && (p = !!e.leading, u = "maxWait" in e, t = u ? Math.max(+e.maxWait || 0, o) : t, a = "trailing" in e ? !!e.trailing : a), y.cancel = function() {
        void 0 !== s && ! function(e) {
            if (_) return J.cancelAnimationFrame(e);
            clearTimeout(e)
        }(s), d = 0, i = c = r = s = void 0
    }, y.flush = function() {
        return void 0 === s ? l : v(Date.now())
    }, y.pending = function() {
        return void 0 !== s
    }, y
}
let ve = function(e, a) {
        (a = a.split(","))[0] && a[0].trim(), a[1] && a[1].trim();
        var n, t = parseInt(a[0], 10) || 0,
            a = parseInt(a[1], 10) || 0,
            e = function(e, a, t) {
                var n = J.pageYOffset,
                    o = K.documentElement.scrollHeight - J.innerHeight - n;
                e.style.display = a <= n && t <= o ? "" : "none"
            }.bind(null, e, t, a);
        (t || a) && (ve.handlers = ve.handlers || [], (n = ve.handlers).push(e), n.length < 2 && (t = function(e, a, t) {
            let n = !0,
                o = !0;
            if ("function" != typeof e) throw new TypeError("Not a function");
            return t && (n = "leading" in t ? !!t.leading : n, o = "trailing" in t ? !!t.trailing : o), ge(e, a, {
                leading: n,
                trailing: o,
                maxWait: a
            })
        }(function() {
            for (var e = 0, a = n, t = a.length; e < t; e++) a[e]()
        }, 20), J.addEventListener("scroll", t)), e())
    },
    ye = "undefined" != typeof WeakMap && "function" == typeof(new WeakMap).get;

function ke(n, o, i) {
    if (!ye) return n;
    if ("function" != typeof n || null != o && "function" != typeof o) throw new TypeError("Not a function");

    function r(...e) {
        var a = o ? o.apply(this, e) : e[0],
            t = r.cache;
        return t.has(a) ? t.get(a) : (e = n.apply(this, e), r.cache = (!i || null != e) && t.set(a, e) || t, e)
    }
    return r.cache = new WeakMap, r
}

function be(e, a) {
    var t = Math.round,
        e = e.getBoundingClientRect(),
        n = "scroll" === a ? Ce("w") : 0,
        a = "scroll" === a ? Ce("h") : 0;
    return {
        left: t(e.left + n),
        top: t(e.top + a)
    }
}

function we(e) {
    var a = 0,
        t = 0;
    return "number" == typeof J.innerWidth ? (a = J.innerWidth, t = J.innerHeight) : K.documentElement && (K.documentElement.clientWidth || K.documentElement.clientHeight) ? (a = K.documentElement.clientWidth, t = K.documentElement.clientHeight) : K.body && (K.body.clientWidth || K.body.clientHeight) && (a = K.body.clientWidth, t = K.body.clientHeight), "w" == e ? a : t
}

function xe() {
    y,
    b("a2a_overlay");
    for (var e = b("a2a_modal"), a = f("a2a_modal_body", e), t = 0; t < a.length; t++) a[t].style.display = "none";S.show(),
    s("show", e)
}
let Ae = function() {
        let e = y;
        var a = "a2a" + e;
        let t = Q[e];
        m(b(a + "_dropdown")) && "none" === Ee(b(a + "_full"), "display") && (t.out_delay = setTimeout(function() {
            v("none", e), t.out_delay = null
        }, 501))
    },
    Se = function() {
        var e = y = Q["n" + (x || w)].type;
        Q[e] && Q[e].out_delay && clearTimeout(Q[e].out_delay)
    },
    v = function(e, a) {
        var t, n;
        "none" == e && Q[a].no_hide || (t = b("a2a" + a + "_dropdown"), K.activeElement, n = C.key_listener, t.style.display = e, Se(), "none" == e ? (C["doc_click_listener_" + a].destroy(), delete Q[a].doc_click_close_mini, n && n[a] && n[a].destroy()) : o.forEach(e => {
            e !== a && C["doc_click_listener_" + e] && v("none", e)
        }))
    },
    ie = function(e) {
        if (!e) return {};
        for (var a, t = 0, n = e.attributes.length, o = {}; t < n; t++)(a = e.attributes[t]).name && "data-" == a.name.substring(0, 5) && (o[a.name.substring(5)] = a.value);
        return o
    },
    Ee = function(e, a) {
        return e ? e.currentStyle ? e.currentStyle[a.replace(/-(\w)/gi, function(e, a) {
            return a.toUpperCase()
        })] : J.getComputedStyle(e, null).getPropertyValue(a) : null
    },
    m = function(e) {
        e = Ee(e, "display");
        return !(!e || "none" === e)
    },
    Ce = function(e) {
        var a = 0,
            t = 0;
        return "number" == typeof J.pageYOffset ? (a = J.pageXOffset, t = J.pageYOffset) : K.body && (K.body.scrollLeft || K.body.scrollTop) ? (a = K.body.scrollLeft, t = K.body.scrollTop) : K.documentElement && (K.documentElement.scrollLeft || K.documentElement.scrollTop) && (a = K.documentElement.scrollLeft, t = K.documentElement.scrollTop), "w" == e ? a : t
    },
    Fe = function() {
        var e = "a2a" + y;
        b(e + "_show_more_less");
        E()
    },
    Te = function() {
        var e = b("a2a" + y + "_find");
        "none" != b("a2a" + y + "_find_container").style.display && e.focus()
    },
    Be = function(e) {
        for (var e = e || y, a = Q[e].main_services_col_1, t = a.length, n = 0; n < t; n++) a[n].style.display = ""
    },
    Ne = function() {
        var e = Q[y].main_services,
            a = e.length,
            t = b("a2a" + y + "_find").value;
        if ("" !== t)
            for (var n, o = t.split(" "), i = 0; i < a; i++) n = e[i].a2a.serviceNameLowerCase, oe(n, o, !1) ? e[i].style.display = "" : e[i].style.display = "none";
        else Be()
    },
    Le = function(e) {
        var a, t, n = K.getElementsByTagName("meta"),
            o = n.length;
        if ((a = J.getSelection ? J.getSelection() + "" : a) && "" !== a) return a;
        if (Q["n" + w].linkurl === location.href && -1 === ["facebook", "twitter", "linkedin"].indexOf(e))
            for (var i, r, l = 0; l < o; l++)
                if (i = (i = n[l].getAttribute("name")) ? i.toLowerCase() : "", r = (r = n[l].getAttribute("property")) ? r.toLowerCase() : "", i && "description" === i || r && "og:description" === r) {
                    t = n[l].getAttribute("content");
                    break
                }
        return t ? t.substring(0, 1200) : ""
    },
    ze = function(e, a) {
        var t = Z.callbacks || [],
            n = Z.tracking_callback,
            o = {};
        n && (n[e] ? t.push(n) : n[0] == e ? (o[e] = n[1], t.push(o)) : "function" == typeof n && (o[e] = n, t.push(o)), Z.tracking_callback = null);
        for (var i, r, l = 0, s = t.length; l < s; l++)
            if ("function" == typeof(i = t[l][e]) && (r = i(a), "ready" == e && (i = null), void 0 !== r)) return r
    },
    je = (e, a, t) => {
        let n = !1;
        var o = ze("share", e);
        return void 0 !== o && (o.url && (a.linkurl = o.url, a.linkurl_implicit = !1), o.title && (a.linkname = o.title, a.linkname_implicit = !1), o.media && (a.linkmedia = o.media), Oe(e.node), o.stop) && t && (n = !0, me(t)), n
    },
    Me = (e, a) => {
        navigator.canShare && navigator.canShare(e) ? navigator.share(e).catch(e => {
            "AbortError" !== e.name ? a() : ze("shareError", e)
        }) : a()
    },
    Ie = e => {
        var a = e.kit || e.node,
            t = ie(a)["a2a-url"],
            t = (t && (e.linkurl = t, e.linkurl_implicit = !1), ie(a)["a2a-title"]),
            t = (t && (e.linkname = t, e.linkname_implicit = !1), ie(a)["a2a-media"]);
        t && (e.linkmedia = t)
    },
    Oe = function(e) {
        var a = location.href,
            t = K.title || a,
            n = e.parentElement,
            n = Q["n" + (n.a2a_index || n.parentElement.a2a_index || x || w)],
            o = n.type,
            i = e.a2a.safename,
            a = n.linkurl_implicit && a != n.linkurl ? a : n.linkurl,
            r = encodeURIComponent(a).replace(/'/g, "%27"),
            t = n.linkname_implicit && t != n.linkname ? t : n.linkname,
            t = encodeURIComponent(t).replace(/'/g, "%27"),
            l = n.linkmedia,
            l = l ? encodeURIComponent(l).replace(/'/g, "%27") : "",
            s = encodeURIComponent(Le(i)).replace(/'/g, "%27"),
            n = !n.track_links || "page" != o && "mail" != o ? "" : "&linktrack=" + n.track_links + "&linktrackkey=" + encodeURIComponent(n.track_links_key),
            c = e.a2a.customserviceuri || !1;
        let d = e.a2a.stype;
        var p = e.a2a.js_src;
        let u = e.a2a.url;
        var _ = e.a2a.media,
            f = e.a2a.na;
        let m, h = Z.templates,
            g = h[i],
            v = "email";
        var y = -1 != A.indexOf("Safari") && -1 == A.indexOf("Chrome") || -1 != A.indexOf("Firefox");

        function k(e) {
            return encodeURIComponent(e).replace(/'/g, "%27").replace(/%24%7Blink%7D/g, "${link}").replace(/%24%7Blink_noenc%7D/g, "${link_noenc}").replace(/%24%7Blink_nohttp%7D/g, "${link_nohttp}").replace(/%24%7Bmedia%7D/g, "${media}").replace(/%24%7Btitle%7D/g, "${title}").replace(/%24%7Btitle_noenc%7D/g, "${title_noenc}").replace(/%24%7Bnotes%7D/g, "${notes}")
        }
        if (_ && l) e.a2a.js_skip = 1, e.target = "_blank";
        else if (d && "js" == d && p) e.target = "_top", "javascript:" == p.substring(0, 11) ? (_ = p.replace("${link}", a.replace(/'/g, "\\'")), e.a2a.literalJS = _.substring(11)) : e.a2a.externalJS = p, m = "#" + i;
        else if (u && (i != v || i == v && (D || y)) && !n) {
            if (e.target = "_top", "object" == typeof g)
                for (var b in g) u = Ve(u, b, k(g[b]));
            else "string" == typeof g && (u = Ve(u, "text", k(g)));
            m = u.replace(/\$\{link\}/g, r).replace(/\$\{media\}/g, l).replace(/\$\{link_noenc\}/g, a).replace(/\$\{link_nohttp\}/g, a.replace(/^https?:\/\//, "")).replace(/\$\{title\}/g, t)
        } else c && "undefined" != c && (m = c.replace(/A2A_LINKNAME_ENC/, t).replace(/A2A_LINKURL_ENC/, r).replace(/A2A_LINKNOTE_ENC/, s));
        return D && f && (e.target = "_top"), e.href = m || "https://www.addtoany.com/add_to/" + i + "?linkurl=" + r + "&linkname=" + t + (l ? "&linkmedia=" + l : "") + n + function() {
            let e = "";
            return g ? e = "&" + he({
                template: g
            }) : h[v] && d && d == v && (e = "&" + he({
                template: h[v]
            })), e
        }() + ("feed" == o ? "&type=feed" : "") + "&linknote=" + s, !0
    },
    s = function(a, t, n) {
        var e, o, i, r, l, s;
        t && (e = m(t), o = t.classList, i = "a2a_starting", r = "transitionend", "show" === a ? e || (l = t, (s = o) && Ee(l, "transition-duration") && s.add(i), t.style.display = "block", o && setTimeout(function() {
            o.remove(i)
        }, 1)) : o ? e ? (t.addEventListener(r, function e() {
            t.style.display = "show" === a ? "block" : "none", n && n(), t.removeEventListener(r, e, !1)
        }, !1), o.add(i)) : n && n() : n && (t.style.display = "none", n()))
    },
    S = {
        show: function() {
            var e = "a2a" + y,
                a = b("a2a_overlay"),
                t = b(e + "_find");
            "none" === Ee(a, "display") && (s("show", a), S.key_listener = ne(K, "keydown", function(e) {
                var e = e.which || e.keyCode,
                    a = K.activeElement;
                27 == e && t != a ? De(y) : 40 < e && e < 91 && t != a && t.focus()
            }))
        },
        hide: function(e) {
            var a = b("a2a_overlay"),
                t = S,
                n = t.key_listener;
            s("hide", a, e), n && (n.destroy(), setTimeout(function() {
                delete t.key_listener
            }, 1))
        },
        key_listener: X
    },
    De = function(e) {
        var a = "a2a" + e,
            t = b(a + "_full"),
            n = b("a2a_overlay"),
            o = b("a2a_modal");
        E.full_shown = !1, s("hide", o), s("hide", t), S.hide(function() {
            n.style.display = o.style.display = "none", t && (t.style.display = "none"), c.showing = !1, m(b(a + "_dropdown")) && b(a + "_show_more_less").focus()
        })
    },
    E = function() {
        var e = "a2a" + y,
            a = f,
            t = b(e + "_full"),
            n = a("a2a_full_header", t)[0],
            e = b(e + "_full_services"),
            a = a("a2a_full_footer", t)[0];
        $e(y), S.show(), s("show", t), e.style.cssText = "height:calc(10px)", e.style.height.length && (e.style.height = "calc(100% - " + (n.offsetHeight + a.offsetHeight) + "px)"), t.focus(), d("full")
    },
    C = (E.full_shown = X, function(e, a) {
        z(e);
        var t, n, o, i, r, l, s, c, d, p, u = Q["n" + w],
            _ = $ ? "touchstart" : "click",
            f = !(!$ || !g()) && {
                passive: !0
            },
            m = "a2a" + (y = u.type),
            m = b(m + "_dropdown");
        $e(y), v("block", y), n = [m.clientWidth, m.clientHeight], o = we("w"), i = we("h"), e ? (t = (l = e.a2a_floating) ? "viewport" : "scroll", m.style.position = l ? "fixed" : "", r = l ? 0 : Ce("w"), l = l ? 0 : Ce("h"), d = (d = e.getElementsByTagName("img")[0]) ? (s = be(d, t), c = d.clientWidth, d.clientHeight) : (s = be(e, t), c = e.offsetWidth, e.offsetHeight), s.left - r + n[0] + c > o && (s.left = s.left - n[0] + c - 8), ("up" == u.orientation || "down" != u.orientation && s.top - l + n[1] + d > i && s.top > n[1]) && (s.top = s.top - n[1] - d), m.style.left = (s.left < 0 ? 0 : s.left) + 2 + "px", m.style.top = s.top + d + "px") : (m.style.position = (a = a || {}).position || "absolute", m.style.left = a.left || o / 2 - n[0] / 2 + "px", m.style.top = a.top || i / 2 - n[1] / 2 + "px"), Q[y].doc_click_close_mini || Q[y].no_hide || (Q[y].doc_click_close_mini = (p = y, function(e) {
            "number" == typeof e.button && 0 < e.button || (Q[y].last_focus && Q[y].last_focus.focus(), v("none", p))
        }), C["doc_click_listener_" + y] = ne(K, _, Q[y].doc_click_close_mini, f)), C.key_listener = C.key_listener || {}, C.key_listener[y] = ne(K, "keydown", function(e) {
            27 != (e.which || e.keyCode) || S.key_listener || v("none", y)
        })
    }),
    $e = (C.key_listener = X, function(e) {
        if (!Re[e]) {
            var a, t, n = "a2a" + e,
                o = K.createDocumentFragment(),
                i = K.createDocumentFragment(),
                r = Q[e].services,
                l = b(n + "_find"),
                s = K.createElement("i");
            if ("mail" != e) {
                for (var c = 0, d = r.most, p = d.length, u = parseInt(Q[e].num_services), _ = 0, f = Q[e].exclude_services; c < p; c++) {
                    var m = d[c];
                    let e = le(m);
                    f && oe(m[1], f, !0) || k(() => o.appendChild(se(e))), !(_ < u) || f && oe(m[1], f, !0) || (k(() => i.appendChild(se(e))), _++)
                }
                k(() => {
                    b(n + "_full_services").appendChild(o), b(n + "_mini_services").appendChild(i)
                })
            }
            t = b(n + "_full_services"), s.className = "a2a_i", a = s.cloneNode(), k(() => {
                t.appendChild(s), t.appendChild(a)
            });
            for (var c = 0, h = r.email, g = h.length; c < g; c++) {
                var v = h[c];
                let e = le(v);
                f && oe(v[1], f, !0) || k(() => b(n + "_2_col1").appendChild(se(e)))
            }
            k(() => {
                Je(e), Pe(e)
            }), "mail" != e && (l.onkeydown = function(e) {
                e = e || J.event, e = e.which || e.keyCode;
                if (13 == e) {
                    for (var a, t = 0, n = Q[y].main_services, o = n.length; t < o; t++)
                        if ("none" != (a = n[t]).style.display) return a.focus(), !1
                } else 27 == e && ("" == l.value && l.blur(), l.value = "", Ne())
            }), Re[e] = !0
        }
    }),
    Re = {
        feed: !1,
        page: !1
    },
    Pe = e => {
        var a, t;
        Q[e] && (Ke(n[e], e, "a2a_sss"), a = e, t = Q[a], a = "a2a" + a, t.main_services_col_1 = f("a2a_i", b(a + "_full_services"), "a"), t.main_services = t.main_services_col_1, t.email_services = f("a2a_i", b(a + "_2_col1"), "a"), t.all_services = t.main_services.concat(t.email_services), Be(e))
    };
var He = p;

function Ue(e) {
    let a = c,
        t = "focus",
        n = "waiting";

    function o() {
        d("post"), c.show(e), J.removeEventListener(t, o), a[n] = 0
    }
    a[n] || (a[n] = 1, J.addEventListener("blur", function e() {
        J.removeEventListener("blur", e), J.addEventListener(t, o)
    }))
}

function We(e, a) {
    var t, o, i = /^$|^module$|\/(?:java|ecma)script/i;

    function n() {
        var e = K.createEvent("Event");
        e.initEvent("DOMContentLoaded", !0, !0), K.dispatchEvent(e)
    }
    a.innerHTML = e, e = (e = a).querySelectorAll("script"), o = [], [].forEach.call(e, function(n) {
        (t = n.getAttribute("type")) && !i.test(t) || o.push(function(e) {
            var a, t;
            a = n, e = e, t = K.createElement("script"), a.src ? (t.onload = e, t.onerror = e, t.src = a.src) : t.textContent = a.innerText, K.head.appendChild(t), a.src || e()
        })
    }), o.length && function e(a, t, n) {
        a[n = void 0 === n ? 0 : n](function() {
            ++n === a.length ? t() : e(a, t, n)
        })
    }(o, n)
}
let qe = (e, a) => {
        ne(e, "click", a), qe = p
    },
    c = {
        off: function() {
            var e = Z.thanks;
            return "boolean" == typeof e && !1 === e || e && "boolean" == typeof e.postShare && !1 === e.postShare
        },
        show: function(e) {
            let a = "a2a" + y,
                t = b("a2a_modal");
            var n = b(a + "_full");
            let o = b("a2a_thanks");
            var i = Z.thanks,
                r = c.off();

            function l() {
                t.setAttribute("aria-label", "Thanks for sharing"), xe(), o.style.display = "inline-block", c.showing = !0
            }
            F.lit() && i && !r && (F.has(!0) || i.postShare) && !c.showing && "none" === Ee(t, "display") && (Ye(e), m(n) ? s("hide", n, l) : l())
        },
        showing: !1
    },
    Ye = e => {
        var a = e ? e.a2a_index : null,
            t = e ? e.a2a_codes : ["facebook", "twitter", "email"],
            e = Q["n" + (a || w)],
            a = e.type,
            n = b("a2a_thanks"),
            o = "a2a_thanks_kit";
        let i = b(o),
            r = (i ? i.innerHTML = "" : ((i = K.createElement("div")).id = o, n.appendChild(i)), "");
        o = K.createElement("div");
        o.className = "a2a_kit a2a_kit_size_32 a2a_default_style", o.setAttribute("data-a2a-url", e.linkurl), o.setAttribute("data-a2a-title", e.linkname), e.linkmedia && o.setAttribute("data-a2a-media", e.linkmedia), o.style.display = "flex", o.style.justifyContent = "center";
        for (let e = 0; e < t.length && e < 8; e++) r += '<a class="a2a_button_' + t[e] + '"></a>';
        o.innerHTML = r, i.appendChild(o), ae("page", {
            target: o
        }), y = a
    },
    Ge = function(e, a) {
        var t = K.createElement("script");
        t.src = e, a && (t.readyState ? t.onreadystatechange = function() {
            "loaded" !== t.readyState && "complete" !== t.readyState || (t.onreadystatechange = null, a())
        } : t.onload = a), K.body.appendChild(t)
    },
    F = {
        lit: function() {
            var e = Z.thanks;
            return !((b("wpadminbar") || void 0 !== J.wp && J.wp.customize) && (!e || !e.postShare))
        },
        has: function(e = !1) {
            var a = {},
                t = !1;
            return ("object" == typeof J.adsbygoogle && J.adsbygoogle.loaded || "object" == typeof J.google_ad_modifications) && (a.as = t = !0), "object" == typeof J.googletag && J.googletag.slots && "function" == typeof Object.keys && 0 < Object.keys(J.googletag.slots).length && (a.dc = t = !0), J.vglnk && J.vglnk.key && (a.vl = t = !0), J.__SKIM_JS_GLOBAL__ && (a.sl = t = !0), (J.amazon_ad_tag || J.amzn_assoc_ad) && (a.az = t = !0), !(e && !a.as && !a.dc) && (t ? a : void 0)
        },
        set: function(e = !1) {
            y;
            var n = "a2a_thanks_a2a_ad",
                a = "a2a_thanks_pub_ad",
                o = b("a2a_thanks"),
                t = Z.thanks,
                i = "boolean" == typeof t && !1 === t || t && "boolean" == typeof t.postShare && !1 === t.postShare || t && "boolean" == typeof t.ad && !1 === t.ad,
                r = t && void 0 !== t.ad && !1 !== t.ad;
            let l = b(n),
                s = b(a);

            function c() {
                var e, a = encodeURIComponent(location.href),
                    t = "width:300px;height:250px;";
                if (s && (s.style.display = "none"), l) J.postMessage && b("a2a_thanks_ifr").contentWindow.postMessage("a2a_refresh_slot1", "*");
                else {
                    if (J.postMessage) {
                        let t = ne(J, "message", function(e) {
                            var a = e.origin;
                            a && ".a2a.me" !== a.substr(-7) || (a = e.data) && "a2a_display_slot1" === a && (l.style.display = "", t.destroy())
                        })
                    } else l.style.display = "";
                    (e = K.createElement("iframe")).id = "a2a_thanks_ifr", e.title = "Post-Share Container", e.src = "https://www.a2a.me/html/tag.html#url=" + a, (l = K.createElement("div")).id = n, l.insertBefore(e, null), e.style = t, l.style = t + "display:none;border-radius:6px;margin:45px auto 0;overflow:hidden;", o.appendChild(l), d(), ne(J, "resize", d)
                }
            }

            function d() {
                var e = J.innerHeight,
                    a = e < 460,
                    t = Math.max(.5, parseInt((e / 600).toFixed(1), 10)),
                    n = Math.floor(250 * (t - 1) / 2);
                l.style.marginTop = e < 360 ? "25px" : "45px", l.style.transform = a ? "translateY(" + n + "px) scale(" + t + ")" : "none"
            }(F.lit() && F.has(!0) && !i || r) && (t && "string" == typeof t.ad && t.ad && .5 <= Math.random() ? (l && (l.style.display = "none"), s || ((i = K.createElement("div")).id = a, i.style.margin = "45px auto 0", o.appendChild(i), We(t.ad, i))) : e && c())
        }
    },
    d = function(a) {
        var e, t, n, o, i, r, l;
        d.a2a = d.a2a || {}, d.a2a[a] || (e = "&domain=" + encodeURIComponent(location.href.split("/")[2]), t = (r = F.has()) && r.as ? "&as=1" : "", n = r && r.dc ? "&dc=1" : "", r && r.vl, o = r && r.sl ? "&sl=1" : "", i = r && r.az ? "&az=1" : "", r = r ? "&ad=1" : "", (l = new XMLHttpRequest).open("POST", "https://stats.addtoany.com/menu"), l.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"), l.timeout = 3e3, l.ontimeout = function(e) {
            l.abort(), "post" === a && F.set()
        }, "post" === a && (l.onload = function(e) {
            var a = this.responseText;
            200 === this.status && a && "1" === a ? F.set(!0) : F.set()
        }), l.send("view=" + a + e + r + t + n + o + i), d.a2a[a] = 1)
    },
    re = () => {
        let o = y,
            i = "feed";
        var e = () => {
            "object" == typeof J.pageTracker && "object" == typeof J._gat ? re.track = function(e, a, t) {
                o != i && J.pageTracker._trackSocial("AddToAny", e, t || Q["n" + w].linkurl)
            } : "object" == typeof J._gaq ? re.track = (e, a, t) => {
                o != i && J._gaq.push(["_trackSocial", "AddToAny", e, t || Q["n" + w].linkurl])
            } : "string" == typeof J.GoogleAnalyticsObject && "object" != typeof J.dataLayer ? re.track = (e, a, t) => {
                o != i && (t = t || Q["n" + w].linkurl, J[GoogleAnalyticsObject]("send", "social", {
                    socialNetwork: "AddToAny",
                    socialAction: e,
                    socialTarget: t,
                    page: t
                }))
            } : "object" == typeof J.dataLayer && (re.track = (e, a, t) => {
                var n;
                o != i && (t = t || Q["n" + w].linkurl, n = (n = Z.callbacks) && n.length && "function" == typeof n.some && n.some(e => {
                    e = e.share;
                    return !!e && /dataLayer[^]+AddToAnyShare[^]+socialAction/.test(e.toString())
                }), e = {
                    addtoany_service: e,
                    addtoany_shared_url: t,
                    socialNetwork: "AddToAny",
                    socialAction: e,
                    socialTarget: t,
                    event_category: "AddToAny",
                    event_label: t
                }, J.gtag ? function() {
                    J.dataLayer.push(arguments)
                }("event", "AddToAnyShare", { ...e
                }) : n || J.dataLayer.push({
                    event: "AddToAnyShare",
                    ...e
                }))
            })
        };
        re.track = p, e(), re.track === p && J.addEventListener("load", e)
    },
    Ve = (re.track = X, function(e, a, t) {
        var n, o = new RegExp("[?&]" + a.replace(/[.\\+*?\[\^\]$(){}=!<>|:\-]/g, "\\$&") + "=([^&#]*)", "i"),
            i = o.exec(e);
        return null === i ? e + (n = /\?/.test(e) ? "&" : "?") + a + "=" + t : (n = i[0].charAt(0), e.replace(o, n + a + "=" + t))
    }),
    Je = e => {
        var a = Q[e].prioritize,
            a = (a && Ke(a, e), e),
            t = parseInt(Q[a].num_services),
            n = b("a2a" + a + "_full_services"),
            o = b("a2a" + a + "_mini_services");
        if (Q[a].custom_services) {
            var i = Q[a].custom_services,
                r = i.length;
            i.reverse();
            for (var l, s, c = 0; c < r; c++) i[c] && (l = [i[c][0], i[c][0].replace(/ /g, "_"), null, null, {}, i[c][1], i[c][2]], l = le(l), s = se(l), n.insertBefore(s, n.firstChild), s = se(l), o.insertBefore(s, o.firstChild))
        }
        if ("page" === a && Z.add_services) {
            let e = Z.add_services,
                a = e.length,
                t = 0;
            for (var d, c = 0; c < a; c++) e[c] && (t += 1, d = [e[c].name, e[c].safe_name, null, null, {}, null, e[c].icon], d = le(d), s = se(d), n.insertBefore(s, n.firstChild), s = se(d), o.insertBefore(s, o.firstChild))
        }
        if ((a = f("a2a_i", o, "a")).length > t)
            for (var c = 0, p = a.length; c < p - t; c++) o.removeChild(o.lastChild)
    },
    Ke = function(e, a, t) {
        var n = parseInt(Q[a].num_services),
            o = b("a2a" + a + "_full_services"),
            i = b("a2a" + a + "_mini_services"),
            r = f("a2a_i", o, "a"),
            l = f("a2a_i", i, "a"),
            s = [];
        if (e) {
            for (var c = e.length - 1; - 1 < c; c--) {
                var d = e[c],
                    d = oe(d, r, !0, "a2a", "safename");
                d && (t && (d.className = d.className + " " + t), o.insertBefore(d, o.firstChild), s.push(d))
            }
            if (0 < s.length) {
                for (var p, c = 0; c < s.length; c++) p = oe(s[c].a2a.safename, l, !0, "a2a", "safename") || (p = s[c].a2a, p = le([p.servicename, p.safename, p.serviceIcon, p.serviceColor, {
                    src: p.js_src,
                    url: p.url,
                    type: p.serviceType,
                    pu: p.popup,
                    na: p.na,
                    media: p.media
                }]), se(p)), t && (p.className = p.className + " " + t), i.insertBefore(p, i.firstChild);
                if ((l = f("a2a_i", i, "a")).length > n)
                    for (var c = 0, u = l.length; c < u - n; c++) i.removeChild(i.lastChild)
            }
        }
    },
    Xe = function(e) {
        var a, t, n, o, i, r, l;
        _ || ((_ = K.createElement("style")).setAttribute("type", "text/css"), h && _.setAttribute("nonce", h), O.appendChild(_), y, a = (l = Z).color_main || "EEE", t = l.color_bg || "FFF", n = l.color_border || "CCC", i = l.color_link_text || "0166FF", r = l.color_link_text_hover || "2A2A2A", o = l.color_link_text || "2A2A2A", r = ".a2a_hide{display:none}.a2a_logo_color{background-color:" + (e || "#0166FF") + "}.a2a_menu,.a2a_menu *{-moz-box-sizing:content-box;-webkit-box-sizing:content-box;box-sizing:content-box;float:none;margin:0;padding:0;position:static;height:auto;width:auto}.a2a_menu{border-radius:6px;display:none;direction:ltr;background:#" + t + ';font:16px sans-serif-light,HelveticaNeue-Light,"Helvetica Neue Light","Helvetica Neue",Arial,Helvetica,"Liberation Sans",sans-serif;color:#000;line-height:12px;border:1px solid #' + n + ";vertical-align:baseline;overflow:hidden}.a2a_mini{min-width:200px;position:absolute;width:300px;z-index:9999997}.a2a_overlay{display:none;background:#616c7deb;backdrop-filter:blur(4px);-webkit-backdrop-filter:blur(4px);position:fixed;top:0;right:0;left:0;bottom:0;z-index:9999998;-webkit-tap-highlight-color:transparent;transition:opacity .14s,backdrop-filter .14s}.a2a_full{background:#" + t + ";border:1px solid #" + t + ";box-shadow:#2a2a2a1a 0 0 20px 10px;height:auto;height:calc(320px);top:15%;left:50%;margin-left:-320px;position:fixed;text-align:center;width:640px;z-index:9999999;transition:transform .14s,opacity .14s}.a2a_full_footer,.a2a_full_header,.a2a_full_services{border:0;margin:0;padding:12px;box-sizing:border-box}.a2a_full_header{padding-bottom:8px}.a2a_full_services{height:280px;overflow-y:scroll;padding:0 12px;-webkit-overflow-scrolling:touch}.a2a_full_services .a2a_i{display:inline-block;float:none;width:181px;width:calc(33.334% - 18px)}div.a2a_full_footer{font-size:12px;text-align:center;padding:8px 14px}div.a2a_full_footer a,div.a2a_full_footer a:visited{display:inline;font-size:12px;line-height:14px;padding:8px 14px}div.a2a_full_footer a:focus,div.a2a_full_footer a:hover{background:0 0;border:0;color:#" + i + '}div.a2a_full_footer a span.a2a_s_a2a,div.a2a_full_footer a span.a2a_w_a2a{background-size:14px;border-radius:3px;display:inline-block;height:14px;line-height:14px;margin:0 3px 0 0;vertical-align:top;width:14px}.a2a_modal{height:0;left:50%;margin-left:-320px;position:fixed;text-align:center;top:15%;width:640px;z-index:9999999;transition:transform .14s,opacity .14s;-webkit-tap-highlight-color:transparent}.a2a_modal_body{background:0 0;border:0;font:24px sans-serif-light,HelveticaNeue-Light,"Helvetica Neue Light","Helvetica Neue",Arial,Helvetica,"Liberation Sans",sans-serif;position:relative;height:auto;width:auto}.a2a_thanks{color:#fff;height:auto;margin-top:20px;width:auto}.a2a_thanks>div:first-child{margin:0 0 40px 0}.a2a_thanks div *{height:inherit}#a2a_copy_link{background:#' + t + ";border:1px solid #" + t + ";cursor:pointer;margin-top:15%}span.a2a_s_link#a2a_copy_link_icon,span.a2a_w_link#a2a_copy_link_icon{background-size:48px;border-radius:0;display:inline-block;height:48px;left:0;line-height:48px;margin:0 3px 0 0;position:absolute;vertical-align:top;width:48px}#a2a_modal input#a2a_copy_link_text{background-color:transparent;border:0;color:#" + (e = l.color_link_text || "2A2A2A") + ";cursor:pointer;font:inherit;height:48px;left:62px;max-width:initial;min-height:auto;padding:0;position:relative;width:564px;width:calc(100% - 76px)}#a2a_copy_link_copied{background-color:#0166ff;color:#fff;display:none;font:inherit;font-size:16px;margin-top:1px;padding:3px 8px}@media (forced-colors:active){.a2a_color_buttons a,.a2a_svg{forced-color-adjust:none}}@media (prefers-color-scheme:dark){.a2a_menu a,.a2a_menu a.a2a_i,.a2a_menu a.a2a_i:visited,.a2a_menu a.a2a_more,i.a2a_i{border-color:#2a2a2a!important;color:#fff!important}.a2a_menu a.a2a_i:active,.a2a_menu a.a2a_i:focus,.a2a_menu a.a2a_i:hover,.a2a_menu a.a2a_more:active,.a2a_menu a.a2a_more:focus,.a2a_menu a.a2a_more:hover,.a2a_menu_find_container{border-color:#444!important;background-color:#444!important}.a2a_menu:not(.a2a_thanks){background-color:#2a2a2a;border-color:#2a2a2a}.a2a_menu_find{color:#fff!important}.a2a_menu span.a2a_s_find svg{background-color:transparent!important}.a2a_menu span.a2a_s_find svg path{fill:#fff!important}.a2a_full{box-shadow:#00000066 0 0 20px 10px}.a2a_overlay{background-color:#373737eb}}@media print{.a2a_floating_style,.a2a_menu,.a2a_overlay{visibility:hidden}}@keyframes a2aFadeIn{from{opacity:0}to{opacity:1}}.a2a_starting{opacity:0}.a2a_starting.a2a_full,.a2a_starting.a2a_modal{transform:scale(.8)}@media (max-width:639px){.a2a_full{border-radius:0;top:15%;left:0;margin-left:auto;width:100%}.a2a_modal{left:0;margin-left:10px;width:calc(100% - 20px)}}@media (min-width:318px) and (max-width:437px){.a2a_full .a2a_full_services .a2a_i{width:calc(50% - 18px)}}@media (max-width:317px){.a2a_full .a2a_full_services .a2a_i{width:calc(100% - 18px)}}@media (max-height:436px){.a2a_full{bottom:40px;height:auto;top:40px}}@media (max-height:550px){.a2a_modal{top:30px}}@media (max-height:360px){.a2a_modal{top:20px}.a2a_thanks>div:first-child{margin-bottom:20px}}.a2a_menu a{color:#" + i + ';text-decoration:none;font:16px sans-serif-light,HelveticaNeue-Light,"Helvetica Neue Light","Helvetica Neue",Arial,Helvetica,"Liberation Sans",sans-serif;line-height:14px;height:auto;width:auto;outline:0}.a2a_menu a.a2a_i:visited,.a2a_menu a.a2a_more{color:#' + i + "}.a2a_menu a.a2a_i:active,.a2a_menu a.a2a_i:focus,.a2a_menu a.a2a_i:hover,.a2a_menu a.a2a_more:active,.a2a_menu a.a2a_more:focus,.a2a_menu a.a2a_more:hover{color:#" + r + ";border-color:#" + a + ";border-style:solid;background-color:#" + a + ";text-decoration:none}.a2a_menu span.a2a_s_find{background-size:24px;height:24px;left:8px;position:absolute;top:7px;width:24px}.a2a_menu span.a2a_s_find svg{background-color:#" + t + "}.a2a_menu span.a2a_s_find svg path{fill:#" + (i = l.color_border || n) + "}#a2a_menu_container{display:inline-block}.a2a_menu_find_container{border:1px solid #" + i + ";border-radius:6px;padding:2px 24px 2px 0;position:relative;text-align:left}.a2a_cols_container .a2a_col1{overflow-x:hidden;overflow-y:auto;-webkit-overflow-scrolling:touch}#a2a_modal input,#a2a_modal input[type=text],.a2a_menu input,.a2a_menu input[type=text]{display:block;background-image:none;box-shadow:none;line-height:100%;margin:0;outline:0;overflow:hidden;padding:0;-moz-box-shadow:none;-webkit-box-shadow:none;-webkit-appearance:none}#a2afeed_find_container input,#a2afeed_find_container input[type=text],#a2apage_find_container input,#a2apage_find_container input[type=text]{background-color:transparent;border:0;box-sizing:content-box;color:#" + e + ";float:none;font:inherit;font-size:16px;height:28px;line-height:20px;left:38px;outline:0;margin:0;max-width:initial;min-height:initial;padding:2px 0;position:relative;width:99%}.a2a_clear{clear:both}.a2a_svg{background-repeat:no-repeat;display:block;overflow:hidden;height:32px;line-height:32px;padding:0;pointer-events:none;width:32px}.a2a_svg svg{background-repeat:no-repeat;background-position:50% 50%;border:none;display:block;left:0;margin:0 auto;overflow:hidden;padding:0;position:relative;top:0;width:auto;height:auto}a.a2a_i,i.a2a_i{display:block;float:left;border:1px solid #" + t + ";line-height:24px;padding:6px 8px;text-align:left;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;width:132px}a.a2a_i span,a.a2a_more span{display:inline-block;overflow:hidden;vertical-align:top}a.a2a_i .a2a_svg{margin:0 6px 0 0}a.a2a_i .a2a_svg,a.a2a_more .a2a_svg{background-size:24px;height:24px;line-height:24px;width:24px}a.a2a_sss:hover{border-left:1px solid #" + n + "}a.a2a_more{border-bottom:1px solid #" + t + ';border-left:0;border-right:0;line-height:24px;margin:6px 0 0;padding:6px;-webkit-touch-callout:none}a.a2a_more span{height:24px;margin:0 6px 0 0}.a2a_kit .a2a_svg{background-repeat:repeat}.a2a_default_style a:empty,.a2a_flex_style a:empty,.a2a_floating_style a:empty,.a2a_overlay_style a:empty{display:none}.a2a_color_buttons a,.a2a_floating_style a{text-decoration:none}.a2a_default_style:not(.a2a_flex_style) a{float:left;line-height:16px;padding:0 2px}.a2a_default_style a:hover .a2a_svg,.a2a_floating_style a:hover .a2a_svg,.a2a_overlay_style a:hover .a2a_svg svg{opacity:.7}.a2a_overlay_style.a2a_default_style a:hover .a2a_svg{opacity:1}.a2a_default_style .a2a_count,.a2a_default_style .a2a_svg,.a2a_floating_style .a2a_svg,.a2a_menu .a2a_svg,.a2a_vertical_style .a2a_count,.a2a_vertical_style .a2a_svg{border-radius:4px}.a2a_default_style .a2a_counter img,.a2a_default_style .a2a_dd,.a2a_default_style .a2a_svg{float:left}.a2a_default_style .a2a_img_text{margin-right:4px}.a2a_default_style .a2a_divider{border-left:1px solid #000;display:inline;float:left;height:16px;line-height:16px;margin:0 5px}.a2a_kit a{cursor:pointer;transition:none}.a2a_floating_style{background-color:#fff;border-radius:6px;position:fixed;z-index:9999995}.a2a_overlay_style{z-index:2147483647}.a2a_floating_style,.a2a_overlay_style{animation:a2aFadeIn .2s ease-in;padding:4px}.a2a_vertical_style:not(.a2a_flex_style) a{clear:left;display:block;overflow:hidden;padding:4px}.a2a_floating_style.a2a_default_style{bottom:0}.a2a_floating_style.a2a_default_style a,.a2a_overlay_style.a2a_default_style a{padding:4px}.a2a_count{background-color:#fff;border:1px solid #ccc;box-sizing:border-box;color:#2a2a2a;display:block;float:left;font:12px Arial,Helvetica,sans-serif;height:16px;margin-left:4px;position:relative;text-align:center;width:50px}.a2a_count:after,.a2a_count:before{border:solid transparent;border-width:4px 4px 4px 0;content:"";height:0;left:0;line-height:0;margin:-4px 0 0 -4px;position:absolute;top:50%;width:0}.a2a_count:before{border-right-color:#ccc}.a2a_count:after{border-right-color:#fff;margin-left:-3px}.a2a_count span{animation:a2aFadeIn .14s ease-in}.a2a_vertical_style .a2a_counter img{display:block}.a2a_vertical_style .a2a_count{float:none;margin-left:0;margin-top:6px}.a2a_vertical_style .a2a_count:after,.a2a_vertical_style .a2a_count:before{border:solid transparent;border-width:0 4px 4px 4px;content:"";height:0;left:50%;line-height:0;margin:-4px 0 0 -4px;position:absolute;top:0;width:0}.a2a_vertical_style .a2a_count:before{border-bottom-color:#ccc}.a2a_vertical_style .a2a_count:after{border-bottom-color:#fff;margin-top:-3px}.a2a_color_buttons .a2a_count,.a2a_color_buttons .a2a_count:after,.a2a_color_buttons .a2a_count:before,.a2a_color_buttons.a2a_vertical_style .a2a_count:after,.a2a_color_buttons.a2a_vertical_style .a2a_count:before{background-color:transparent;border:none;color:#fff;float:none;width:auto}.a2a_color_buttons.a2a_vertical_style .a2a_count{margin-top:0}.a2a_flex_style{display:flex;align-items:flex-start;gap:0}.a2a_default_style.a2a_flex_style{left:0;right:0;width:100%}.a2a_vertical_style.a2a_flex_style{flex-direction:column;top:0;bottom:0}.a2a_flex_style a{display:flex;justify-content:center;flex:1;padding:4px}.a2a_flex_style.a2a_vertical_style a{flex-direction:column}.a2a_floating_style.a2a_color_buttons,.a2a_floating_style.a2a_flex_style{border-radius:0;padding:0}.a2a_floating_style.a2a_default_style.a2a_flex_style{bottom:0}.a2a_kit.a2a_flex_style .a2a_counter img,.a2a_kit.a2a_flex_style .a2a_dd,.a2a_kit.a2a_flex_style .a2a_svg{float:none}.a2a_nowrap{white-space:nowrap}.a2a_note{margin:0 auto;padding:9px;font-size:12px;text-align:center}.a2a_note .a2a_note_note{margin:0;color:#' + o + "}.a2a_wide a{display:block;margin-top:3px;border-top:1px solid #" + a + ";text-align:center}.a2a_label{position:absolute!important;clip-path:polygon(0px 0px,0px 0px,0px 0px);-webkit-clip-path:polygon(0px 0px,0px 0px,0px 0px);overflow:hidden;height:1px;width:1px}.a2a_kit,.a2a_menu,.a2a_modal,.a2a_overlay{-ms-touch-action:manipulation;touch-action:manipulation;outline:0}.a2a_dd{-webkit-user-drag:none}.a2a_dd img{border:0}.a2a_button_facebook_like iframe{max-width:none}", l = K.createTextNode(r), _.appendChild(l))
    },
    Ze = function() {
        ae("page");
        for (var e, a, t = _.sheet || _.styleSheet || {}, n = ("insertRule" in t), o = ("addRule" in t), i = ce.concat([
                [0, 0, "a2a", "0166FF"]
            ]), r = 0, l = i.length; r < l; r++) e = ".a2a_s_" + i[r][2], a = "background-color:#" + i[r][3] + ";", n ? t.insertRule(e + "{" + a + "}", 0) : o && t.addRule(e, a, 0); {
            var s = Z.static_server,
                c = K.createElement("link"),
                d = s != u ? s + "/" : u + "/svg/";
            c.rel = "stylesheet", c.href = d + "icons.39.svg.css", O.appendChild(c)
        }
        Ze = p
    },
    Qe = !1,
    ea = !J.a2a.h1 && Z.static_server == u,
    aa = '<svg focusable="false" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">',
    ta = "</svg>",
    na = (e, a) => e.replace(/#FFF/gi, a),
    oa = (e, a, t) => {
        e = t ? na(e, t) : e, a.innerHTML = aa + e + ta
    },
    ia = (e, a, t) => {
        var n = M[e]; - 1 !== i.indexOf(e) && (n ? oa(n, a, t) : (sa.push({
            name: e,
            node: a,
            color: t
        }), ea && !Qe ? ra(e) : Qe || la()))
    },
    ra = e => {
        import (`/menu/svg/icons/${e}.js`)
    },
    la = () => {
        var e, a, t;
        Qe || (t = Z.static_server, e = K.createElement("script"), a = K.getElementsByTagName("script")[0], t = t != u ? t + "/" : t + "/svg/", h && e.setAttribute("nonce", h), e.src = t + "icons.39.svg.js", a.parentNode.insertBefore(e, a), Qe = !0)
    },
    sa = [],
    ca = {
        add: e => {
            ca.set(e, !0)
        },
        set: (e, a) => {
            if (a)
                for (var t in e) M[t] = e[t];
            else M = e;
            for (let e = 0, a = sa.length; e < a; e++) {
                var n = sa[e],
                    {
                        name: o,
                        node: i,
                        color: r,
                        done: l
                    } = n,
                    o = M[o];
                o && !l && (oa(o, i, r), n.done = !0)
            }
        }
    },
    le = e => {
        return {
            s_name: e[0],
            s_safe_name: e[1],
            s_icon: e[2],
            s_color: e[3],
            s_options: e[4],
            s_custom_service_uri: e[5],
            s_custom_service_icon: e[6]
        }
    },
    se = (e, a, l) => {
        let t, {
                s_name: s,
                s_safe_name: c,
                s_icon: n,
                s_color: o,
                s_options: i = {},
                s_custom_service_uri: r,
                s_custom_service_icon: d
            } = e,
            p = a || K.createElement("a");
        a || (p.className = "a2a_i"), p.rel = "nofollow noopener", p.href = "/#" + c, p.target = "_blank", p.a2a = {};
        var u, _, e = p.a2a;
        e.safename = c, e.servicename = s, e.serviceNameLowerCase = s.toLowerCase(), e.serviceIcon = n, e.serviceColor = o, e.serviceType = i.type, i.type && (e.stype = i.type), i.src && (e.js_src = i.src), i.url && (e.url = i.url), i.pu && (e.popup = 1), i.na && (e.na = 1), i.media && (e.media = 1), a || (p.innerHTML = "<span></span>" + s + " ", a = p.firstChild, u = "a2a_svg a2a_s__default", m = (_ = (f = Z.icon_color) ? f.split(",", 2) : X) ? _[0] : X, _ = _ ? null == (t = _[1]) ? void 0 : t.trim() : X, r && (e.customserviceuri = r), d ? (a.style.backgroundImage = "url(" + d + ")", a.className = u) : f ? (a.className = u + " a2a_s_" + n, m && "unset" != m ? a.style.backgroundColor = m : o && (a.style.backgroundColor = "#" + o)) : n ? (a.className = u + " a2a_s_" + n, o && (a.style.backgroundColor = "#" + o)) : a.className = u, d) || ia(n, a, _); {
            var f = p;
            let e = f.classList;
            "function" == typeof J.FastClick && e && f.addEventListener("pointerdown", () => {
                e.add("needsclick")
            }, !1)
        }
        var m = () => {
            var e = l || Q["n" + w];
            Ie(e), Oe(p)
        };
        return "js" === e.stype ? ne(p, "click", m) : (ne(p, "mousedown", m), ne(p, "keydown", m)), ne(p, "click", e => {
            var a, t = l || Q["n" + w],
                n = {
                    media: t.linkmedia,
                    mediaNode: null == (n = t.kit) ? void 0 : n.a2a_mediaNode,
                    node: p,
                    service: s,
                    serviceCode: c,
                    title: t.linkname,
                    url: t.linkurl
                },
                o = p.a2a,
                i = "js" === o.stype,
                n = je(n, t, e),
                r = ("feed" == y || o.url || o.js_src || (r = t.node, r = t.kit || (r.a2a_kit ? r : X), Ue(r)), !o.popup || e.defaultPrevented || "_blank" !== p.target || i || (me(e), r = screen.height, J.open(p.href, "_blank", "toolbar=0,personalbar=0,resizable,scrollbars,status,width=650,height=550,top=" + (550 < r ? Math.round(r / 2 - 275) : 40) + ",left=" + Math.round(screen.width / 2 - 325))), o.js_skip);
            !o.externalJS && !o.literalJS || n || r || ((n = o).literalJS ? (a = K.createElement("script"), h && a.setAttribute("nonce", h), a.textContent = n.literalJS, O.appendChild(a)) : n.externalJS && Ge(n.externalJS)), i && !r && me(e), r && delete o.js_skip, re.track(s, c, t.linkurl)
        }), p
    },
    da = () => {
        if (Z.static_server != u) return !1;
        var e, a = navigator,
            t = ["ar", "id", "ms", "ms-MY", "bn", "bn-IN", "bs", "bs-BA", "bg", "ca", "ca-AD", "ca-ES", "cs", "cs-CZ", "cy", "cy-GB", "da", "da-DK", "de", "dv", "el", "el-GR", "et", "et-EE", "es", "es-AR", "es-VE", "eo", "en-US", "eu", "eu-ES", "fa", "fa-IR", "fr", "fr-CA", "gd", "he", "hi", "hi-IN", "hr", "hy", "hy-AM", "is", "it", "ja", "ja-JP", "ko", "ko-KR", "ku", "ku-TR", "lv", "lt", "li", "li-NL", "hu", "mk", "nl", "nn-NO", "no", "pl", "pt", "pt-BR", "pt-PT", "ro", "ru", "sr", "sr-RS", "fi", "sk", "sl", "sl-SI", "sv", "sv-SE", "sw", "sw-CD", "sw-KE", "sw-TZ", "sw-UG", "ta", "ta-IN", "tr", "te-IN", "uk", "uk-UA", "vi", "vi-VN", "zh-CN", "zh-TW"],
            a = Z.locale || (a.browserLanguage || a.language).toLowerCase(),
            n = oe(a, t, !0);
        n || -1 != (e = a.indexOf("-")) && (n = oe(a.substring(0, e), t, !0));
        let o = !("en-us" == a || !n) && n;
        return da = () => o, o
    },
    pa = function() {
        var e = f("a2a_localize", K),
            a = Z.localize,
            t = ua;

        function n(e) {
            var a, t = K.createElement("div");
            return t.innerHTML = e, a = (e = t.childNodes[0]) ? e.nodeValue : a
        }
        for (var o, i, r, l = 0, s = e.length; l < s; l++)(r = (r = (o = e[l]).getAttribute("data-a2a-localize")) && r.split(",", 2)) && (i = r[0], r = a[r = r[1]] || t[r] || "", "inner" === i ? o.innerHTML = r : "label" === i ? o.setAttribute("aria-label", n(r)) : "title" === i && o.setAttribute("title", n(r)))
    },
    ua = {
        Share: "Share",
        Save: "Save",
        Subscribe: "Subscribe",
        Email: "Email",
        Bookmark: "Bookmark",
        ShowAll: "Show all",
        ShowLess: "Show less",
        FindAnyServiceToAddTo: "Find any service",
        PoweredBy: "By",
        AnyEmail: "Any email",
        ShareViaEmail: "Share via email",
        SubscribeViaEmail: "Subscribe via email",
        BookmarkInYourBrowser: "Bookmark in your browser",
        BookmarkInstructions: "Press Ctrl+D or &#8984;+D to bookmark this page",
        AddToYourFavorites: "Add to Favorites",
        SendFromWebOrProgram: "Send from any other email service",
        EmailProgram: "Email application",
        More: "More&#8230;",
        ThanksForSharing: "Thanks for sharing!",
        ThanksForFollowing: "Thanks for following!"
    },
    _a = function(e) {
        if (y = Z.menu_type || e, !Q[y] && !J["a2a" + y + "_init"]) {
            Q[y] = {}, J.a2a_show_dropdown = C, J.a2a_miniLeaveDelay = Ae, J.a2a_init = ae;
            var a, t, n, o, i, r, l, s, c, d, p, u, _, f = Q[y],
                e = "feed" == y ? "feed" : "page",
                m = Z;
            location.host.split(".").slice(-1);
            for (a in T) f[a] = m[a];
            (t = da()) && "custom" != t && Ge(m.static_server + "/locale/" + t + ".js", function() {
                m.localize = J.a2a_localize, pa()
            }), t = y, e = R[e], o = n = "", i = "a2a" + y, r = Z, K.createElement("a"), l = (l = r.icon_color) && l.split(",", 2), s = l && l[0], l = l && l[1], c = "a2a_svg a2a_s__default a2a_s_", s = s && "unset" != s ? s : "#0166ff", d = '<svg focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g fill="' + (l = l || "#FFF") + '"><path d="M14 7h4v18h-4z"/><path d="M7 14h18v4H7z"/></g></svg>', p = ua, u = r.localize, _ = b("a2a_overlay"), y = t, Xe(s), u = r.localize = {
                Share: u.Share || p.Share,
                Save: u.Save || p.Save,
                Subscribe: u.Subscribe || p.Subscribe,
                Email: u.Email || p.Email,
                Bookmark: u.Bookmark || p.Bookmark,
                ShowAll: u.ShowAll || p.ShowAll,
                ShowLess: u.ShowLess || p.ShowLess,
                FindAnyServiceToAddTo: u.FindAnyServiceToAddTo || p.FindAnyServiceToAddTo,
                PoweredBy: u.PoweredBy || p.PoweredBy,
                AnyEmail: "Any email",
                ShareViaEmail: u.ShareViaEmail || p.ShareViaEmail,
                SubscribeViaEmail: u.SubscribeViaEmail || p.SubscribeViaEmail,
                BookmarkInYourBrowser: u.BookmarkInYourBrowser || p.BookmarkInYourBrowser,
                BookmarkInstructions: u.BookmarkInstructions || p.BookmarkInstructions,
                AddToYourFavorites: u.AddToYourFavorites || p.AddToYourFavorites,
                SendFromWebOrProgram: u.SendFromWebOrProgram || p.SendFromWebOrProgram,
                EmailProgram: u.EmailProgram || p.EmailProgram,
                More: u.More || p.More,
                ThanksForSharing: u.ThanksForSharing || p.ThanksForSharing,
                ThanksForFollowing: u.ThanksForFollowing || p.ThanksForFollowing
            }, _ || (o = (o = (o += '<div class="a2a_overlay" id="a2a_overlay"></div>') + '<div id="a2a_modal" class="a2a_modal a2a_hide" role="dialog" tabindex="-1" aria-label=""><div class="a2a_modal_body a2a_menu a2a_hide" id="a2a_copy_link"><span id="a2a_copy_link_icon" class="a2a_svg a2a_s_link a2a_logo_color"><svg focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path fill="' + l + '" d="M7.591 21.177c0-.36.126-.665.377-.917l2.804-2.804a1.235 1.235 0 0 1 .913-.378c.377 0 .7.144.97.43-.026.028-.11.11-.255.25-.144.14-.24.236-.29.29a2.82 2.82 0 0 0-.2.256 1.056 1.056 0 0 0-.177.344 1.43 1.43 0 0 0-.046.37c0 .36.126.666.377.918a1.25 1.25 0 0 0 .918.377c.126.001.251-.015.373-.047.125-.037.242-.096.345-.175.09-.06.176-.127.256-.2.1-.094.196-.19.29-.29.14-.142.223-.23.25-.254.297.28.445.607.445.984 0 .36-.126.664-.377.916l-2.778 2.79a1.242 1.242 0 0 1-.917.364c-.36 0-.665-.118-.917-.35l-1.982-1.97a1.223 1.223 0 0 1-.378-.9l-.001-.004Zm9.477-9.504c0-.36.126-.665.377-.917l2.777-2.79a1.235 1.235 0 0 1 .913-.378c.35 0 .656.12.917.364l1.984 1.968c.254.252.38.553.38.903 0 .36-.126.665-.38.917l-2.802 2.804a1.238 1.238 0 0 1-.916.364c-.377 0-.7-.14-.97-.418.026-.027.11-.11.255-.25a7.5 7.5 0 0 0 .29-.29c.072-.08.139-.166.2-.255.08-.103.14-.22.176-.344.032-.12.048-.245.047-.37 0-.36-.126-.662-.377-.914a1.247 1.247 0 0 0-.917-.377c-.136 0-.26.015-.37.046-.114.03-.23.09-.346.175a3.868 3.868 0 0 0-.256.2c-.054.05-.15.148-.29.29-.14.146-.222.23-.25.258-.294-.278-.442-.606-.442-.983v-.003ZM5.003 21.177c0 1.078.382 1.99 1.146 2.736l1.982 1.968c.745.75 1.658 1.12 2.736 1.12 1.087 0 2.004-.38 2.75-1.143l2.777-2.79c.75-.747 1.12-1.66 1.12-2.737 0-1.106-.392-2.046-1.183-2.818l1.186-1.185c.774.79 1.708 1.186 2.805 1.186 1.078 0 1.995-.376 2.75-1.13l2.803-2.81c.751-.754 1.128-1.671 1.128-2.748 0-1.08-.382-1.993-1.146-2.738L23.875 6.12C23.13 5.372 22.218 5 21.139 5c-1.087 0-2.004.382-2.75 1.146l-2.777 2.79c-.75.747-1.12 1.66-1.12 2.737 0 1.105.392 2.045 1.183 2.817l-1.186 1.186c-.774-.79-1.708-1.186-2.805-1.186-1.078 0-1.995.377-2.75 1.132L6.13 18.426c-.754.755-1.13 1.672-1.13 2.75l.003.001Z"/></svg></span><input id="a2a_copy_link_text" type="text" title="Copy link" readonly><div id="a2a_copy_link_copied">&check;</div></div>') + '<div class="a2a_modal_body a2a_menu a2a_thanks a2a_hide" id="a2a_thanks"><div class="a2a_localize" data-a2a-localize="inner,ThanksForSharing">' + u.ThanksForSharing + "</div></div></div>"), n += '<div class="a2a_menu a2a_full a2a_localize" id="a2a' + y + '_full" role="dialog" tabindex="-1" aria-label="' + ("feed" == y ? u.Subscribe : u.Share) + '" data-a2a-localize="title,' + ("feed" == y ? "Subscribe" : "Share") + '"><div class="a2a_full_header"><div id="a2a' + y + '_find_container" class="a2a_menu_find_container"><input id="a2a' + y + '_find" class="a2a_menu_find a2a_localize" type="text" autocomplete="off" title="' + u.FindAnyServiceToAddTo + '" data-a2a-localize="title,FindAnyServiceToAddTo"><span id="a2a' + y + '_find_icon" class="a2a_svg a2a_s_find"><svg focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="#CCC" d="M19.7 18.2l-4.5-4.5c.7-1.1 1.2-2.3 1.2-3.6 0-3.5-2.8-6.3-6.3-6.3s-6.3 2.8-6.3 6.3 2.8 6.3 6.3 6.3c1.4 0 2.6-.4 3.6-1.2l4.5 4.5c.6.6 1.3.7 1.7.2.5-.4.4-1.1-.2-1.7zm-9.6-3.6c-2.5 0-4.5-2.1-4.5-4.5 0-2.5 2.1-4.5 4.5-4.5 2.5 0 4.5 2.1 4.5 4.5s-2 4.5-4.5 4.5z"/></svg></span></div></div><div class="a2a_full_services" id="a2a' + y + '_full_services" role="presentation"></div><div class="a2a_full_footer"><a href="https://www.addtoany.com" title="Share Buttons" rel="noopener" target="_blank"><span class="' + c + 'a2a a2a_logo_color">' + d + '</span>AddToAny</a></div></div><div id="a2a' + y + '_dropdown" class="a2a_menu a2a_mini a2a_localize a2a_hide" tabindex="-1" aria-label="' + ("feed" == y ? u.Subscribe : u.Share) + '" data-a2a-localize="label,' + ("feed" == y ? "Subscribe" : "Share") + '"><div class="a2a_mini_services" id="a2a' + y + '_mini_services"></div><div id="a2a' + y + '_cols_container" class="a2a_cols_container"><div class="a2a_col1' + ("mail" == y ? " a2a_hide" : "") + '" id="a2a' + y + '_col1"></div><div id="a2a' + y + '_2_col1"' + ("mail" != y ? ' class="a2a_hide"' : "") + '></div><div class="a2a_clear"></div></div>', "mail" != y && (n += '<div class="a2a' + y + '_wide a2a_wide"><a href="#addtoany" id="a2a' + y + '_show_more_less" class="a2a_more a2a_localize" title="' + u.ShowAll + '" data-a2a-localize="title,ShowAll"><span class="' + c + 'a2a a2a_logo_color">' + d + '</span><span class="a2a_localize" data-a2a-localize="inner,More">' + u.More + "</a></span></div>"), n += "</div>", _ ? I.insertAdjacentHTML("beforeend", n) : I.insertAdjacentHTML("afterbegin", o + n), (t = b(i + "_dropdown")) && (ne(t, "mouseenter", Se), Z.onclick || ne(t, "mouseleave", Ae)), (s = b(i + "_find")) && (ne(b(i + "_find_icon"), "click", Te), ne(s, "click", Te), ne(s, "keyup", Ne)), Q[y].services = e, ne(b("a2a_overlay"), "click", function(e) {
                De(y)
            }), "mail" != y && ne(b(i + "_show_more_less"), "click", function(e) {
                me(e), Fe()
            }), re(), L(T)
        }
    };

function fa() {
    var e, a;
    ma && ((e = Z.overlays) && e.length &&
        import ("./overlays" + t + ".js").then(e => {
            e.overlays()
        }), I = J.a2a.main, ne(I, "click", fe), ne(I, "touchstart", fe, !!g() && {
            passive: !0
        })), r("page"), ma && (e = a => {
        ["feed", "page"].forEach(e => {
            n[e] = a[e], Re[e] && Pe(e)
        })
    }, (a = J.a2a.userServices) ? e(a) : J.a2a.userServices = e, y = "page", ze("ready")), ma = !1
}
let ma = !0;
J.a2a = J.a2a || {}, J.a2a.bmBrowser = He, J.a2a.copyLink = e => {
    let a = b("a2apage_full"),
        t = (b("a2a_overlay"), b("a2a_modal")),
        n = b("a2a_copy_link"),
        o = b("a2a_copy_link_copied"),
        i = b("a2a_copy_link_text");
    E.full_shown = m(a);
    qe(n, e => {
        i.focus(), i.setSelectionRange(0, i.value.length), K.execCommand && K.execCommand("copy") && (i.setSelectionRange(0, 0), i.blur(), o.style.display = "block", setTimeout(() => {
            t.style.display = n.style.display = o.style.display = "none", E.full_shown ? E() : De("page")
        }, 700))
    });
    var r = () => {
        t.setAttribute("aria-label", "Copy link"), i.value = e, xe(), n.style.display = "block", t.focus(), d("copy")
    };
    E.full_shown ? s("hide", a, r) : r()
}, J.a2a.counters = te, J.a2a.GA = re, J.a2a.init = ae, J.a2a.init_all = r, J.a2a.svg = ca, J.a2a.svg_css = function() {
    ae("page");
    for (var e, a, t = _.sheet || _.styleSheet || {}, n = ("insertRule" in t), o = ("addRule" in t), i = ce.concat([
            [0, 0, "a2a", "0166FF"]
        ]), r = 0, l = i.length; r < l; r++) e = ".a2a_s_" + i[r][2], a = "background-color:#" + i[r][3] + ";", n ? t.insertRule(e + "{" + a + "}", 0) : o && t.addRule(e, a, 0); {
        var s = Z.static_server,
            c = K.createElement("link"),
            d = s != u ? s + "/" : u + "/svg/";
        c.rel = "stylesheet", c.href = d + "icons.39.svg.css", O.appendChild(c)
    }
    Ze = p
};
He = J.a2a.core;
"function" == typeof He ? He(fa) : J.a2a.core = fa;
export {
    J as win, K as doc, p as noop, X as undef, Z as a2a_config, O as headTag, h as nonce, ae as init, e as validSelector, V as matches, g as evOpts, ne as addEvent, ge as debounce, ke as memoize, be as getPos
};