(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[715], { 9561: function (e, n, a) { (window.__NEXT_P = window.__NEXT_P || []).push(["/download", function () { return a(54661) }]) }, 28916: function (e, n, a) { "use strict"; a.d(n, { K1: function () { return g }, Q: function () { return u }, U0: function () { return h } }); var t = a(85893), i = a(5348), l = a.n(i), d = a(92910), o = a(59948), c = a(29991), r = a(90239); let s = { mac: { light: c.D.download.macIconDark, default: c.D.download.macIconLight }, win: { light: c.D.download.winIconDark, default: c.D.download.winIconLight } }, u = e => { let { light: n, download_channel_name: a } = e, i = (0, o.i)("download"), c = s[i.isMac ? "mac" : "win"][n ? "light" : "default"]; return (0, t.jsxs)("a", { "data-agl-cvt": "6", id: "360-ocpc", className: (0, d.cname)(l().downloadBtn, n && l().light), onClick: (0, r.Z)(a), children: [(0, t.jsx)("i", { style: { width: 36, height: 36, backgroundSize: "cover", backgroundImage: "url(".concat(c, ")") } }), (0, t.jsx)("span", { children: "立即下载" })] }) }, g = e => { let { light: n, download_channel_name: a, animation: i } = e, o = !1; /macintosh|mac os x/i.test(navigator.userAgent) && (o = !0); let c = s[o ? "mac" : "win"][n ? "light" : "default"]; return (0, t.jsxs)("a", { "data-agl-cvt": "6", id: "360-ocpc", className: (0, d.cname)(l().downloadBtn, n && l().light, i && l().animation), onClick: (0, r.Z)(a), children: [(0, t.jsx)("i", { style: { width: 36, height: 36, backgroundSize: "cover", backgroundImage: "url(".concat(c, ")") } }), (0, t.jsx)("span", { children: "立即下载" })] }) }, h = e => { let { download_channel_name: n, children: a, className: i, ...o } = e; return (0, t.jsx)("a", { "data-agl-cvt": "6", id: "360-ocpc", className: (0, d.cname)(l().downloadWrap, i), onClick: (0, r.Z)(n), ...o, children: a }) } }, 71208: function (e, n, a) { "use strict"; a.d(n, { t: function () { return r } }); var t = a(85893), i = a(54400), l = a(40010), d = a(28916), o = a(29991), c = a(67294); let r = e => { let { subTitleNode: n, download_channel_name: a } = e, { title: r, sectionPadding: s, sectionSpace: u } = l.e.get(), [g, h] = (0, c.useState)(); return (0, c.useEffect)(() => { h(navigator) }, []), (0, t.jsx)(i.TitleCard, { center: !0, style: { backgroundSize: "cover", backgroundImage: "url(".concat(o.D.download.cardBg, ")") }, space: s, size: u, titleNode: r, subTitle: n || (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)("p", { children: "一款快速、多功能的视频格式转换器" }), (0, t.jsx)("p", { children: "支持多种视频和音频格式转换、压缩以及批量处理" })] }), children: g && (0, t.jsx)(d.K1, { download_channel_name: a }) }) } }, 56844: function (e, n, a) { "use strict"; a.d(n, { T: function () { return g } }); var t = a(85893), i = a(54400), l = a(87059), d = a.n(l), o = a(92910), c = a(22116), r = a(40010), s = a(29991); let u = [{ iconUrl: s.D.guideStep1, title: "拖拽导入文件", subTitle: "将需要转换的视频文件拖拽添加到转换列表", imageUrl: s.D.guidestep1Image }, { iconUrl: s.D.guideStep2, title: "设置转换参数", subTitle: "设置需要转换的视频格式，视频的画质、比特率、帧率等", imageUrl: s.D.guidestep2Image }, { iconUrl: s.D.guideStep3, title: "开始转换输出", subTitle: "设置完毕后，选择下方的全部转换开始批量转换视频文件", imageUrl: s.D.guidestep3Image }], g = () => { let { sectionPadding: e, sectionSpace: n } = r.e.get(); return (0, t.jsx)(i.TitleCard, { space: e, size: n, style: { backgroundColor: "#FAFAFA" }, titleNode: "操作步骤", children: (0, t.jsx)("div", { className: (0, o.cname)(c.RowClass, d().slickWrap), children: (0, t.jsx)(i.Slick, { dotPosition: "left", dots: !0, infinite: !0, speed: 500, slidesToScroll: 1, slidesToShow: 1, autoplay: !0, dotsUlStyle: { alignItems: "start", justifyContent: "center", marginRight: 10 }, dotsStyle: { paddingBottom: 20 }, customPaging: e => (0, t.jsx)(i.AvatarCard, { className: (0, o.cname)("slickCard", d().slickCard), title: u[e].title, subTitle: u[e].subTitle, imageHeight: 50, imageWidth: 50, align: "start", imageUrl: u[e].iconUrl }), children: u.map((e, n) => (0, t.jsx)(i.TitleCard, { className: (0, o.cname)(c.RowClass, d().slickTextCard), children: (0, t.jsx)(i.ImageCardTwo, { imageUrl: e.imageUrl, imageHeight: 414, imageWidth: 648 }) }, n)) }) }) }) } }, 54661: function (e, n, a) { "use strict"; a.r(n), a.d(n, { DownloadPage: function () { return _ } }); var t = a(85893), i = a(40116), l = a(54400), d = a(71208), o = a(74153), c = a.n(o), r = a(92910), s = a(22116), u = a(40010), g = a(28916), h = a(59948), m = a(56844), w = a(29991); let _ = () => { let { title: e, sectionPadding: n, sectionSpace: a } = u.e.get(), { target: i } = (0, h.i)("download"); return (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(l.TitleCard, { center: !0, style: { backgroundSize: "cover", backgroundImage: "url(".concat(w.D.downloadBanner, ")") }, space: n, size: a, children: (0, t.jsxs)("div", { className: (0, r.cname)(s.RowClass, c().bannerWrap), children: [(0, t.jsx)("h3", { children: e }), (0, t.jsx)("h3", { children: "双倍效率 极速输出" }), (0, t.jsx)("p", { children: "支持视频转换、音频转换、视频压缩" }), (0, t.jsx)(g.Q, { download_channel_name: "下载页-顶部按钮" }), (0, t.jsxs)("div", { className: c().info, children: [(0, t.jsx)("span", { children: "支持Mac/Windows下载" }), (0, t.jsxs)("span", { children: ["更新时间：", (0, r.formatDay)(null == i ? void 0 : i.updateTime)] }), (0, t.jsx)("a", { href: "/help/gengxinrizhi", children: "更新日志" })] })] }) }), (0, t.jsx)(m.T, {}), (0, t.jsx)(d.t, { download_channel_name: "下载页-底部按钮", subTitleNode: (0, t.jsx)("p", { children: "双倍效率 极速输出\xa0\xa0\xa0\xa0一站式音视频转换解决方案" }) })] }) }, p = i.bK.Page(_, { tdk: { title: "野葱视频转换器——下载", description: "提供免费下载最新版的野葱视频转换器软件，支持视频转换、音频转换、视频压缩、视频加水印等多种功能，转换速度快，格式支持全面", keywords: "野葱视频转换器、野葱视频转换器下载，视频转换下载，音频转换下载，视频压缩下载，视频加水印下载，免费下载视频转换软件" } }); n.default = p }, 5348: function (e) { e.exports = { downloadBtn: "download_downloadBtn__kdRkm", light: "download_light__aWshO", animation: "download_animation__SBmMp", btnRound: "download_btnRound__AWKWv" } }, 87059: function (e) { e.exports = { slickWrap: "guide_slickWrap__RZUFP", slickCard: "guide_slickCard__uoJaH" } }, 74153: function (e) { e.exports = { bannerWrap: "download_bannerWrap__YbKOL", info: "download_info__C5J_b" } } }, function (e) { e.O(0, [774, 226, 116, 888, 179], function () { return e(e.s = 9561) }), _N_E = e.O() }]);