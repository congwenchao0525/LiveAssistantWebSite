(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[116], { 698: function (e, n, o) { "use strict"; o.d(n, { Y0: function () { return s }, af: function () { return c }, yF: function () { return d } }); var i = o(74796), t = o(40010), l = o(39287), a = o(29991); let c = () => (0, i.openLoginDialog)({ loginType: i.LoginType.All, viewType: i.ViewType.SmsLogin | i.ViewType.AccountLogin | i.ViewType.WechatLogin | i.ViewType.Register | i.ViewType.FindPassword | i.ViewType.ChangePhoneEmail | i.ViewType.UnbindEmail | i.ViewType.BindEmail | i.ViewType.UnbindPhone | i.ViewType.BindPhone, title: t.e.get().title, banner: a.D.loginpage, bannerWidth: 370, bannerHeight: 500, logo: a.D.logo }), s = () => (0, i.openLoginDialog)({ loginType: i.LoginType.All, viewType: i.ViewType.SmsLogin | i.ViewType.AccountLogin | i.ViewType.WechatLogin | i.ViewType.Register | i.ViewType.FindPassword | i.ViewType.ChangePhoneEmail | i.ViewType.UnbindEmail | i.ViewType.BindEmail | i.ViewType.UnbindPhone | i.ViewType.BindPhone, title: "野葱", logo: "/static/img/yecong_logo@2x.png" }); async function d(e) { if ((0, l.getTokenHandler)().getToken().accessToken || await c(), (0, l.getTokenHandler)().getToken().accessToken) return e() } }, 74294: function (e, n, o) { "use strict"; var i = o(25293); n.Z = new i.EventEmitter }, 90239: function (e, n, o) { "use strict"; o.d(n, { Z: function () { return c } }); var i = o(59948), t = o(74294), l = o(58105); let a = e => { let { downloadUrl: n } = e; if (!n) return; let o = document.createElement("a"); o.href = n; let i = n.split("/"); o.download = i[i.length - 1], document.body.appendChild(o), o.click(), document.body.removeChild(o) }; function c(e) { let n = "download", o = (0, i.i)(n), { isMac: c, target: s } = o, d = (0, l.C)({ download_channel_name: e || "野葱视频转换器", name: n }); return () => { c ? t.Z.emit("download_moadl", !0) : (a({ downloadUrl: null == s ? void 0 : s.downloadUrl }), d()) } } }, 58105: function (e, n, o) { "use strict"; o.d(n, { C: function () { return c } }); var i = o(59948), t = o(11163), l = o(90587), a = o(40010); function c(e) { let { download_channel_name: n, name: o } = e, { isMac: c, target: s } = (0, i.i)(o), d = (0, t.useRouter)(), { utm_content: r, utm_campaign: p, utm_medium: u, utm_source: h, utm_term: g, bd_vid: m } = d.query, _ = Array.isArray(m) ? m[0] : m; return () => { (0, l.saTrack)("wDownloadApplication", { url_channel: null == s ? void 0 : s.channel, download_referer_url: location.href, download_product: a.e.get().title, download_channel: null == s ? void 0 : s.channel, download_channel_name: n, appId: c ? a.e.get().macAppCode : a.e.get().winAppCode }), fetch("".concat("https://dtac.aunapi.com", "/v1/download/report"), { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ distinct_id: (0, l.saGetAnonymousID)(), utm_content: r, utm_campaign: p, utm_medium: u, utm_source: h, utm_term: g, bd_vid: _, url_channel: null == s ? void 0 : s.channel, url_path: window.location.href, app_id: c ? a.e.get().macAppCode : a.e.get().winAppCode }) }).catch(e => { console.log(e) }) } } }, 59948: function (e, n, o) { "use strict"; o.d(n, { i: function () { return t } }); var i = o(46789); function t(e) { let { Windows: n, MacOS: o } = (0, i.useAppData)(e || "download"), t = (0, i.useIsMac)() && o; return { target: t ? o : n, isMac: t, Windows: n, MacOS: o } } }, 40116: function (e, n, o) { "use strict"; o.d(n, { NE: function () { return A }, bK: function () { return N } }); var i = o(85893), t = o(22116), l = o(54400), a = o(19986), c = o(698), s = o(41664), d = o.n(s), r = o(40010), p = o(29991), u = o(52974), h = o.n(u), g = o(94184), m = o.n(g), _ = o(90239); let w = e => { let { title: n } = e; return (0, i.jsx)(i.Fragment, { children: e.isDownloadBtn ? (0, i.jsx)(i.Fragment, { children: (0, i.jsxs)("a", { className: m()(h().downloadLink, { [h().animation]: !0 }), "data-agl-cvt": "6", id: "360-ocpc", onClick: (0, _.Z)("导航栏下载按钮"), children: [(0, i.jsx)("img", { src: "https://cdn-sem-themes.aunbox.cn/themes/datarecovery/win_shipin_v5/img/icon_dinbu_xiazai@2x.png" }), "立即下载"] }) }) : (0, i.jsx)("a", { className: m()(h().navLinkItem, { [h().active]: e.isActive }), "data-agl-cvt": "6", id: "360-ocpc", onClick: (0, _.Z)("导航栏下载按钮"), children: n }) }) }; var T = o(67294), x = o(59948), b = o(80998), f = o.n(b), v = o(58105), k = o(48165), y = o(74294); let j = () => { var e, n; let [o, t] = (0, T.useState)(!1), [l, a] = (0, T.useState)(!1), c = (0, x.i)("macARMDownLoad"), s = (0, x.i)("download"), d = () => { window.scrollY > 200 ? t(!0) : t(!1) }, r = () => { window.scrollTo({ top: 0, behavior: "smooth" }) }; (0, T.useEffect)(() => (window.addEventListener("scroll", d), () => { window.removeEventListener("scroll", d) }), []); let p = (0, T.useCallback)(e => { a(e) }, [l]), u = () => { y.Z.addListener("download_moadl", p) }; (0, T.useEffect)(() => { u() }, [p]); let h = (0, v.C)({ download_channel_name: "下载 Apple M1/M2 芯片版", name: "macARMDownLoad" }), g = (0, v.C)({ download_channel_name: "下载 lntel 芯片版（常用）", name: "download" }); return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsxs)("div", { className: f().backToTopWrapper, children: [(0, i.jsxs)("ul", { className: f().fixedList, children: [(0, i.jsx)("li", { className: m()(f().item, f().customerService), children: (0, i.jsxs)("a", { className: f().content, href: "https://yecong.qiyukf.com/client?k=4b683cdc04f4b2d7f9275784c7a11cf1&wp=1&robotShuntSwitch=0&gid=483894352&language=zh-cn", target: "_blank", children: [(0, i.jsx)("span", { className: f().icon }), "客服"] }) }), (0, i.jsx)("li", { className: m()(f().item, f().downloadBtn), children: (0, i.jsxs)("a", { className: f().content, "data-agl-cvt": "6", id: "360-ocpc", onClick: (0, _.Z)("侧边栏下载按钮"), children: [(0, i.jsx)("span", { className: f().icon }), "下载"] }) }), (0, i.jsxs)("li", { className: m()(f().item, f().phone), children: [(0, i.jsxs)("div", { className: f().content, children: [(0, i.jsx)("span", { className: f().icon }), "电话"] }), (0, i.jsx)("div", { className: f().phoneContent, children: "400-800-3086" })] })] }), o && (0, i.jsx)(i.Fragment, { children: (0, i.jsx)("div", { className: f().backToTopBtn, onClick: r, children: (0, i.jsxs)("div", { className: f().backToTopBtnBox, children: [(0, i.jsx)("span", { className: f().icon }), "返回顶部"] }) }) })] }), (0, i.jsx)(k.Z, { open: l, footer: null, centered: !0, className: f().download_moadl, onCancel: () => y.Z.emit("download_moadl", !1), width: 768, children: (0, i.jsxs)("div", { className: f().download_content, children: [(0, i.jsx)("div", { className: f().title, children: "选择适合您的 Mac 版本" }), (0, i.jsxs)("p", { className: f().tips, children: [(0, i.jsx)("span", { children: "Apple M1/M2 芯片版本无法在 Intel 芯片的机型上正常使用，请通过以下步骤确认 Mac 版本的芯片类型。如果无法确认，" }), (0, i.jsx)("b", { children: "建议下载 Intel 芯片版本，" }), (0, i.jsx)("span", { children: "嗨格式视频转换器会在更新版本的时候自动更新适合您的 Mac 版本" })] }), (0, i.jsxs)("div", { className: f().skill, children: [(0, i.jsxs)("div", { className: f().left, children: [(0, i.jsx)("div", { className: f().title, children: "如何确认芯片类型？" }), (0, i.jsxs)("div", { className: f().tips, children: [(0, i.jsx)("img", { src: "https://cdn-file-3.yecong.com/www/9/76f4c16f/1%402x%20%281%29.png" }), (0, i.jsxs)("p", { children: [(0, i.jsx)("span", { children: "在左上角，点击" }), (0, i.jsx)("b", { children: "Apple 菜单 > 关于本机" })] })] }), (0, i.jsxs)("div", { className: f().tips, children: [(0, i.jsx)("img", { src: "https://cdn-file-1.yecong.com/www/9/7c46e44d/%E7%BC%96%E7%BB%84%2012%402x.png" }), (0, i.jsxs)("p", { children: ["在“", (0, i.jsx)("b", { children: "概览" }), "”标签页中，寻找“", (0, i.jsx)("b", { children: "处理器" }), "”或“", (0, i.jsx)("b", { children: "芯片" }), "”确认显示的是“", (0, i.jsx)("b", { children: "Intel" }), "“还是", (0, i.jsx)("b", { children: "Apple" })] })] })] }), (0, i.jsx)("div", { className: f().right, children: (0, i.jsx)("img", { src: "https://cdn-file-2.yecong.com/www/9/8e672639/macos%402x.png" }) })] }), (0, i.jsxs)("div", { className: f().download_btn, children: [(0, i.jsx)("a", { className: f().mac_download, href: null == c ? void 0 : null === (e = c.target) || void 0 === e ? void 0 : e.downloadUrl, onClick: h, children: "下载 Apple M1/M2 芯片版" }), (0, i.jsx)("a", { className: f().mac_download, href: null == s ? void 0 : null === (n = s.target) || void 0 === n ? void 0 : n.downloadUrl, onClick: g, children: "下载 lntel 芯片版（常用）" })] })] }) })] }) }, N = (0, a.createAppLayout)({ Layout: a.DefaultLayout, defaultProps: { minHeight: 480, navbar: { title: r.e.get().title, subTitle: r.e.get().subTitle, logo: r.e.get().logo, logoSize: 36, position: "fixed", links: [{ title: "首页", url: "/" }, { title: "下载", url: "/download" }, { title: "购买", url: "/buy", active: !0, downMenu: [{ key: "1", label: (0, i.jsx)("a", { href: "/buy", children: "购买Windows版" }) }, { key: "2", label: (0, i.jsx)("a", { href: "/buy/buymac", children: "购买Mac版" }) }] }, { title: "帮助中心", url: "/help" }, { title: "关于我们", url: "/about" }], children: (0, i.jsx)(t.UserNav, { openLogin: c.af, items: [{ key: "account/profile", label: (0, i.jsx)(d(), { href: "/account/profile", replace: !0, children: "我的账号" }) }, { key: "/account/order", label: (0, i.jsx)(d(), { href: "/account/order", replace: !0, children: "我的订单" }) }, { key: "/account/exchange", label: (0, i.jsx)(d(), { href: "/account/exchange", replace: !0, children: "我的兑换码" }) }] }) }, footer: { prefixNode: { title: r.e.get().title, subTitle: r.e.get().subTitle, logo: r.e.get().logo, logoSize: 36 }, items: r.e.get().footerItems, suffixNode: (0, i.jsxs)("div", { children: [(0, i.jsx)(l.ImageCard, { size: 100, url: p.D.gongzhonghao, title: "野葱视频转换器" }), (0, i.jsx)(j, {})] }), style: { marginTop: 40, marginBottom: 40 } }, copyright: { centerAll: !0, beian: r.e.get().beian, copyright: r.e.get().copyright } } }), L = { minHeight: 480, navbar: { title: r.e.get().title, subTitle: r.e.get().subTitle, logo: r.e.get().logo, logoSize: 36, position: "fixed", links: [{ title: "视频转换", url: "" }, { title: "音频转换", url: "" }, { title: "视频压缩", url: "" }, { title: "人声分离", url: "", isActive: !0 }, { title: "视频水印", url: "" }, { title: "立即下载", url: "", isDownloadBtn: !0 }], linkRender: (e, n) => (0, i.jsx)(w, { title: e.title, animation: null == e ? void 0 : e.animation, isDownloadBtn: null == e ? void 0 : e.isDownloadBtn, isActive: null == e ? void 0 : e.isActive }, n) }, footer: { prefixNode: { title: r.e.get().title, subTitle: r.e.get().subTitle, logo: r.e.get().logo, logoSize: 36 }, items: r.e.get().footerItems, suffixNode: (0, i.jsxs)("div", { children: [(0, i.jsx)(l.ImageCard, { size: 100, url: p.D.gongzhonghao, title: "野葱视频转换器" }), (0, i.jsx)(j, {})] }), style: { marginTop: 40, marginBottom: 40 } }, copyright: { centerAll: !0, beian: r.e.get().beian, copyright: r.e.get().copyright } }, A = (0, a.createAppLayout)({ Layout: a.DefaultLayout, defaultProps: L, onRender: (e, n) => { if (n.isAdPage) { var o; e.footer.suffixNode = null === (o = L.footer) || void 0 === o ? void 0 : o.suffixNode } } }) }, 52974: function (e) { e.exports = { navLinkItem: "NavDownloadLink_navLinkItem__w6v2q", active: "NavDownloadLink_active__EQAFe", downloadLink: "NavDownloadLink_downloadLink__NCh8B", animation: "NavDownloadLink_animation__KI3Fh", btnRound: "NavDownloadLink_btnRound__Z72fp" } }, 80998: function (e) { e.exports = { backToTopWrapper: "backToTop_backToTopWrapper__sQex3", icon: "backToTop_icon__NJ8WE", fixedList: "backToTop_fixedList__u5Cnu", item: "backToTop_item__O7d_Y", content: "backToTop_content__zIbXV", customerService: "backToTop_customerService__eafTA", downloadBtn: "backToTop_downloadBtn__55aVz", phone: "backToTop_phone__ULSUL", phoneContent: "backToTop_phoneContent__3FlVF", backToTopBtn: "backToTop_backToTopBtn__WlnKC", backToTopBtnBox: "backToTop_backToTopBtnBox__KqXRx", download_moadl: "backToTop_download_moadl__9Zdkq", download_content: "backToTop_download_content__htXLU", title: "backToTop_title__cDz_0", tips: "backToTop_tips__mPDL0", skill: "backToTop_skill__NgLU7", left: "backToTop_left__yUTHP", right: "backToTop_right___Mten", download_btn: "backToTop_download_btn__mVURY" } } }]);