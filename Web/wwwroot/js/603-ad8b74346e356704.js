(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[603], {
    28916: function (e, i, t) {
        "use strict";
        t.d(i, {
            K1: function () {
                return u
            },
            Q: function () {
                return m
            },
            U0: function () {
                return g
            }
        });
        var l = t(85893),
            a = t(5348),
            n = t.n(a),
            s = t(92910),
            r = t(59948),
            d = t(29991),
            c = t(90239);
        let o = {
            mac: {
                light: d.D.download.macIconDark,
                default:
                    d.D.download.macIconLight
            },
            win: {
                light: d.D.download.winIconDark,
                default:
                    d.D.download.winIconLight
            }
        },
            m = e = > {
                let {
                    light: i,
                    download_channel_name: t
                } = e,
            a = (0, r.i)("download"),
            d = o[a.isMac ? "mac" : "win"][i ? "light" : "default"];
        return (0, l.jsxs)("a", {
            "data-agl-cvt": "6",
            id: "360-ocpc",
            className: (0, s.cname)(n().downloadBtn, i && n().light),
            onClick: (0, c.Z)(t),
            children: [(0, l.jsx)("i", {
                style: {
                    width: 36,
                    height: 36,
                    backgroundSize: "cover",
                    backgroundImage: "url(".concat(d, ")")
                }
            }), (0, l.jsx)("span", {
                children: "立即下载"
            })]
        })
    },
    u = e = > {
        let {
            light: i,
            download_channel_name: t,
            animation: a
        } = e,
r = !1;
/macintosh|mac os x/i.test(navigator.userAgent) && (r = !0);
let d = o[r ? "mac" : "win"][i ? "light" : "default"];
return (0, l.jsxs)("a", {
    "data-agl-cvt": "6",
    id: "360-ocpc",
    className: (0, s.cname)(n().downloadBtn, i && n().light, a && n().animation),
    onClick: (0, c.Z)(t),
    children: [(0, l.jsx)("i", {
        style: {
            width: 36,
            height: 36,
            backgroundSize: "cover",
            backgroundImage: "url(".concat(d, ")")
        }
    }), (0, l.jsx)("span", {
        children: "立即下载"
    })]
})
        },
g = e = > {
    let {
    download_channel_name: i,
        children: t,
            className: a,
                ...r
} = e;
return (0, l.jsx)("a", {
    "data-agl-cvt": "6",
    id: "360-ocpc",
    className: (0, s.cname)(n().downloadWrap, a),
    onClick: (0, c.Z)(i),
    ...r,
    children: t
})
        }
    },
71208 : function(e, i, t) {
    "use strict";
    t.d(i, {
        t: function () {
            return c
        }
    });
    var l = t(85893),
        a = t(54400),
        n = t(40010),
        s = t(28916),
        r = t(29991),
        d = t(67294);
    let c = e = > {
        let {
            subTitleNode: i,
            download_channel_name: t
        } = e,
        {
            title: c,
            sectionPadding: o,
            sectionSpace: m
        } = n.e.get(),
        [u, g] = (0, d.useState)();
    return (0, d.useEffect)(() = > {
        g(navigator)
    },
        []),
        (0, l.jsx)(a.TitleCard, {
            center: !0,
            style: {
                backgroundSize: "cover",
                backgroundImage: "url(".concat(r.D.download.cardBg, ")")
            },
            space: o,
            size: m,
            titleNode: c,
            subTitle: i || (0, l.jsxs)(l.Fragment, {
                children: [(0, l.jsx)("p", {
                    children: "一款快速、多功能的视频格式转换器"
                }), (0, l.jsx)("p", {
                    children: "支持多种视频和音频格式转换、压缩以及批量处理"
                })]
            }),
            children: u && (0, l.jsx)(s.K1, {
                download_channel_name: t
            })
        })
}
    },
91510 : function(e, i, t) {
    "use strict";
    t.d(i, {
        a: function () {
            return d
        }
    });
    var l = t(85893),
        a = t(54400),
        n = t(40010),
        s = t(29991);
    let r = [[{
        userAvatar: s.D.evaluate1,
        userName: "李女士 ",
        userJob: "摄影师",
        content: "作为一个摄影师，我需要将各种格式的照片和视频进行转换，而且要快速稳定。这个视频格式转换器满足了我的需求，转换速度快，质量高，我非常满意！"
    },
    {
        userAvatar: s.D.evaluate2,
        userName: "王先生",
        userJob: "剪辑师",
        content: "非常好用的视频转换器，我可以在任何设备上播放我剪辑好的视频，无需担心不兼容的问题，大大提高了我的工作效率。"
    },
    {
        userAvatar: s.D.evaluate3,
        userName: "周女士",
        userJob: "教师",
        content: "在教学过程中，我需要将各种格式的视频转换成mp4格式，让学生可以在任何设备上观看。这个视频转换器转换速度快，质量好，非常适合我在课堂上使用。"
    },
    {
        userAvatar: s.D.evaluate4,
        userName: "刘女士 ",
        userJob: "音乐人",
        content: "非常好用的音频转换器，支持多种音频格式，让我可以把自己的音乐上传到各个平台，推广自己的作品。转换速度快，方便高效！"
    },
    {
        userAvatar: s.D.evaluate5,
        userName: "陈先生",
        userJob: "商户",
        content: "我需要将各种格式的视频转换成手机可以播放的格式，以便在商场中播放宣传视频。这个视频转换器转换速度快，让我可以快速转换各种格式，非常方便！"
    },
    {
        userAvatar: s.D.evaluate6,
        userName: "王女士",
        userJob: "自媒体",
        content: "在我的旅行记录中，我需要将各种格式的照片和视频转换成适合社交媒体分享的格式，与朋友们分享美好的旅行回忆。这个图像和视频转换器操作简单，转换质量高，非常方便分享我的旅行故事！"
    }], [{
        userAvatar: s.D.evaluate7,
        userName: "朱先生",
        userJob: "游戏主播",
        content: "作为一名游戏主播，我需要将游戏录像转换成多种格式，方便上传到各个平台。这个视频转换器功能齐全，支持多种转换格式，让我无需再找其他工具，一步到位！"
    },
    {
        userAvatar: s.D.evaluate8,
        userName: "胡女士",
        userJob: "律师",
        content: "在律师事务所工作，我需要将各种格式的音频转换成mp3格式，让我们可以随时听取证据材料。这个音频转换器不仅速度快，转换质量也非常高，非常实用！"
    },
    {
        userAvatar: s.D.evaluate9,
        userName: "张先生",
        userJob: "记者",
        content: "身为记者，我需要将各种格式的视频转换成能在新闻报道中使用的格式，这个视频转换器能够帮我快速转换各种格式，让我可以更加方便地编辑我的新闻报道。"
    },
    {
        userAvatar: s.D.evaluate10,
        userName: "刘先生",
        userJob: "摄像师",
        content: "身为摄像师，我需要将不同摄像设备拍摄的视频统一转换为相同的格式，以便后期剪辑和处理。这个视频转换器功能强大，支持多种格式转换，帮助我轻松应对各种视频来源。"
    },
    {
        userAvatar: s.D.evaluate11,
        userName: "杨女士",
        userJob: "影视迷",
        content: "作为一名资深影视剧迷，我经常需要将下载的影视资源转换为可在不同设备上播放的格式。这个视频转换器简单易用，让我可以随时随地欣赏我喜爱的电影和剧集。"
    },
    {
        userAvatar: s.D.evaluate12,
        userName: "张先生",
        userJob: "博士",
        content: "作为一名学术研究者，我需要将学术讲座和演示视频转换为各种格式，以便在学术会议和研讨会上展示研究成果。这个视频转换器支持多种格式转换，让我能够高效地分享学术知识和交流成果，不出现意外情况。"
    }]],
        d = () = > {
            let {
                sectionPadding: e,
                sectionSpace: i
            } = n.e.get();
    return (0, l.jsx)(a.TitleCard, {
        style: {
            background: "#FCFCFC"
        },
        space: e,
        size: i,
        titleNode: "用户评价",
        children: (0, l.jsx)(a.SwiperLine, {
            slidesPerView: 3,
            speed: 8e3,
            maskWidthPercent: 20,
            items: r
        })
    })
}
    },
89015 : function(e, i, t) {
    "use strict";
    t.d(i, {
        y: function () {
            return m
        }
    });
    var l = t(85893),
        a = t(54400),
        n = t(92910),
        s = t(22116),
        r = t(29991),
        d = t(40010),
        c = t(90239);
    let o = [{
        imageUrl: r.D.indexScene1,
        title: "影音收藏",
        subTitle: "将喜欢的视频转换到个人设备，随时随地观看"
    },
    {
        imageUrl: r.D.indexScene2,
        title: "后期制作",
        subTitle: "将资源转换为所需格式，便于后期剪辑制作"
    },
    {
        imageUrl: r.D.indexScene3,
        title: "家庭娱乐",
        subTitle: "将视频转换格式，方便家人在电视、电脑等多设备观看"
    },
    {
        imageUrl: r.D.indexScene4,
        title: "社交分享",
        subTitle: "转成社交媒体支持格式，方便快速分享传播多平台"
    },
    {
        imageUrl: r.D.indexScene5,
        title: "教学辅助",
        subTitle: "将教学视频转成常用格式，方便各种设备播放"
    },
    {
        imageUrl: r.D.indexScene6,
        title: "旅行摄影",
        subTitle: "将拍摄视频转换格式，方便在旅途中回顾精彩瞬间"
    },
    {
        imageUrl: r.D.indexScene7,
        title: "游戏直播",
        subTitle: "游戏直播的录制视频，转换格式，更好地分享游戏录像"
    },
    {
        imageUrl: r.D.indexScene8,
        title: "宣传推广",
        subTitle: "将不同格式的视频转换格式，以便在多平台发布宣传片"
    }];
    function m() {
        let {
            sectionPadding: e,
            sectionSpace: i
        } = d.e.get();
        return (0, l.jsx)(a.TitleCard, {
            center: !0,
            className: (0, n.cname)(s.RowClass),
            space: e,
            size: i,
            titleNode: "使用场景",
            children: (0, l.jsx)(a.SceneCard, {
                size: 12,
                contentHeight: 140,
                items: o,
                imageHeight: 400,
                imageWidth: 140,
                onClick: (0, c.Z)("使用场景下载按钮"),
                "data-agl-cvt": "6",
                id: "360-ocpc",
                style: {
                    cursor: "pointer"
                }
            })
        })
    }
},
42603 : function(e, i, t) {
    "use strict";
    t.r(i),
        t.d(i, {
            HomePage: function () {
                return k
            },
            __N_SSP: function () {
                return v
            }
        });
    var l = t(85893),
        a = t(40116),
        n = t(22116),
        s = t(68981),
        r = t.n(s),
        d = t(54400),
        c = t(92910),
        o = t(40010),
        m = t(71208),
        u = t(28916),
        g = t(59948),
        x = t(91510),
        h = t(29991),
        D = t(89015),
        b = t(9008),
        T = t.n(b);
    let _ = [{
        reverse: !0,
        title: "双倍快速转换",
        subTitle: "采用全新的转换技术和硬件加速技术\n支持同时转换多个文件，可同时处理更多任务",
        imageWidth: 700,
        imageHeight: 500,
        imageUrl: h.D.indexCard1
    },
    {
        reverse: !0,
        title: "1000+格式支持",
        subTitle: "支持众多视频和音频格式的转换\n可自定义输出格式，根据不同需求进行选择\n支持在多种设备上播放，让您的作品更加通用",
        imageWidth: 700,
        imageHeight: 500,
        imageUrl: h.D.indexCard2,
        linkUrl: "/help/geshiqingdan",
        linkTitle: "支持格式清单"
    },
    {
        reverse: !0,
        title: "多种转换模式",
        subTitle: "支持批量转换、自定义设置、多任务转换等多种转换模式\n支持自定义转换规则，根据需求进行设置",
        imageWidth: 700,
        imageHeight: 500,
        imageUrl: h.D.indexCard3
    },
    {
        reverse: !0,
        title: "多种专业LUT预设",
        subTitle: "一键应用LUT处理，提供快速而准确的灰片调色应用\n专业级LUT预设，呈现专业级色彩精度和视觉效果",
        imageWidth: 700,
        imageHeight: 500,
        imageUrl: h.D.indexCard4
    },
    {
        title: "高质量转换",
        subTitle: "采用先进编码技术，转换后质量不受影响\n支持调整视频码率、分辨率、帧率等参数置\n加水印等功能一应俱全，让作品更独特",
        imageWidth: 700,
        imageHeight: 500,
        imageUrl: h.D.indexCard5
    },
    {
        title: "强大视频压缩功能",
        subTitle: "通过优化压缩算法和参数设置，大幅缩小文件大小\n支持批量压缩，让您能够一次性处理多个文件\n支持自定义压缩比例，根据需求进行设置",
        imageWidth: 700,
        imageHeight: 500,
        imageUrl: h.D.indexCard6
    },
    {
        title: "简单易用的界面设计",
        subTitle: "支持拖拽文件、一键转换等，操作更加便捷\n界面设计和操作流程简单易懂，让您快速上手\n提供详细的使用说明和操作指南，轻松掌握软件",
        imageWidth: 700,
        imageHeight: 500,
        imageUrl: h.D.indexCard7
    }],
        p = [{
            url: h.D.indexSlick1,
            title: "视频转换"
        },
        {
            url: h.D.indexSlick2,
            title: "音频转换"
        },
        {
            url: h.D.indexSlick3,
            title: "专业级LUT支持"
        },
        {
            url: h.D.indexSlick4,
            title: "8K超清转换"
        },
        {
            url: h.D.indexSlick5,
            title: "双倍高速转换"
        },
        {
            url: h.D.indexSlick6,
            title: "影视级压缩"
        },
        {
            url: h.D.indexSlick7,
            title: "一键批量转换"
        }],
        U = [{
            title: "轻松转换1000+视频格式",
            imageUrl: h.D.indexGlide01,
            items: [{
                imageUrl: h.D.indexGlide02,
                title: "支持1000+视频格式转换",
                subTitle: "野葱视频转换器支持常见的MP4/AVI/MOV/MKV等格式,同时也支持国内主流和特殊的视频格式转换。",
                linkUrl: "/help/geshiqingdan",
                linkTitle: "支持格式清单"
            },
            {
                imageUrl: h.D.indexGlide03,
                title: "支持导出高清视频",
                subTitle: "无损格式转换，提供HD MP4、MKV、4K等多种超清视频导出"
            },
            {
                imageUrl: h.D.indexGlide04,
                title: "简单易用，轻松上手",
                subTitle: "一键式拖拽上传视频，一键转换，两步完成视频转换"
            }]
        },
        {
            title: "支持常见音频格式互转",
            imageUrl: h.D.indexGlide1,
            items: [{
                imageUrl: h.D.indexGlide2,
                title: "支持1000+音频格式转换",
                subTitle: "野葱视频转换器支持各种常见音频格式，如MP3、WAV、FLAC、AAC等,让您可以自由转换音频。",
                linkUrl: "/help/geshiqingdan",
                linkTitle: "查看支持的热门格式列表"
            },
            {
                imageUrl: h.D.indexGlide3,
                title: "音质无损转换，优质输出",
                subTitle: "使用领先的音频转换技术，转换后的音频与原始音频保持一致，无失真，无损失，让您享受更纯粹的音乐"
            },
            {
                imageUrl: h.D.indexGlide4,
                title: "操作简单，省时省力",
                subTitle: "无需复杂操作，几步简单的指引即可完成音频转换，让您轻松拥有高品质音频"
            }]
        },
        {
            title: "快速设置LUT，体验专业级调色效果",
            imageUrl: h.D.indexGlide5,
            items: [{
                imageUrl: h.D.indexGlide6,
                title: "品牌LUT专业预设",
                subTitle: "多款品牌级LUT预设供选择，让画面色彩更真实、层次更丰富"
            },
            {
                imageUrl: h.D.indexGlide7,
                title: "瞬间还原真实色彩",
                subTitle: "快速还原灰片的真实色彩，让每一帧都充满生动细腻的质感"
            },
            {
                imageUrl: h.D.indexGlide8,
                title: "一键灵活应用LUT",
                subTitle: "简单轻松地应用LUT预设，快速实现色彩转换和调色效果"
            }]
        },
        {
            title: "支持8K超清转换",
            imageUrl: h.D.indexGlide9,
            items: [{
                imageUrl: h.D.indexGlide10,
                title: "超快速转，高效便捷",
                subTitle: "8K速转功能在极短时间内将8K视频转换为其他格式，让您不必花费大量时间等待，能更快地享受高品质视频"
            },
            {
                imageUrl: h.D.indexGlide11,
                title: "无损画质，完美保真",
                subTitle: "采用先进的技术和算法，确保转换后的视频画质与原始一致，完美呈现每一个细节，让您享受超清晰的视觉盛宴"
            },
            {
                imageUrl: h.D.indexGlide12,
                title: "多种格式输出，多设备可播放",
                subTitle: "支持多种常见的视频输出格式方便您在不同的设备和平台上更流畅的播放和分享高品质视频，轻松满足各种需求"
            }]
        },
        {
            title: "更快速度的转换体验",
            imageUrl: h.D.indexGlide13,
            items: [{
                imageUrl: h.D.indexGlide14,
                title: "闪电般的转换速度",
                subTitle: "采用全新转换技术，让您的视频转换速度提升了双倍！更快完成转换，轻松实现高效率！"
            },
            {
                imageUrl: h.D.indexGlide15,
                title: "硬件加速",
                subTitle: "充分利用了硬件加速技术，如GPU加速和多线程优化，从硬件层面上提升了转换速度，让您的转换任务更快完成。"
            },
            {
                imageUrl: h.D.indexGlide16,
                title: "高效算法",
                subTitle: "采用了一系列高效的转换算法，在保证质量的同时，最大程度优化转换速度，让您无需漫长等待。"
            }]
        },
        {
            title: "保留高画质，文件更小",
            imageUrl: h.D.indexGlide17,
            items: [{
                imageUrl: h.D.indexGlide18,
                title: "不损细节，保持高质量画质",
                subTitle: "野葱视频转换器的影视级压缩技术让您可以在享受更小的文件体积的同时保持视频的高品质画面。"
            },
            {
                imageUrl: h.D.indexGlide19,
                title: "文件更小，高效节省存储空间",
                subTitle: "野葱视频转换器压缩技术能够将文件大小缩减至极致，让您无需担心存储空间不足的问题，无需为存储空间而焦虑。"
            },
            {
                imageUrl: h.D.indexGlide20,
                title: "高度的兼容和稳定性",
                subTitle: "可以兼容多种视频格式和设备，使得您可以方便地在不同的平台上播放和分享压缩后的视频。"
            }]
        },
        {
            title: "一次性转换多个文件",
            imageUrl: h.D.indexGlide21,
            items: [{
                imageUrl: h.D.indexGlide22,
                title: "轻松处理大量文件",
                subTitle: "一次性处理多个文件，不再需要一个个处理，高效解决大量转换需求。"
            },
            {
                imageUrl: h.D.indexGlide23,
                title: "灵活设置转换选项",
                subTitle: "支持自定义设置，轻松实现个性化转换，满足不同需求。"
            },
            {
                imageUrl: h.D.indexGlide24,
                title: "精准控制输出结果",
                subTitle: "支持批量输出不同格式、不同规格的视频，精准控制输出效果。"
            }]
        }].map(e = > {
            let {
                title: i,
                imageUrl: t,
                items: l
            } = e;
    return {
        title: i,
        imageUrl: t,
        className: r().slickImageCard,
        imageWidth: 552,
        imageHeight: 367,
        itemSize: 30,
        items: l.map(e = > ({
            imageHeight: 44,
            imageWidth: 44,
            ...e
        }))
    }
});
var v = !0;
let k = () = > {
    let {
        title: e,
        sectionPadding: i,
        sectionSpace: t
    } = o.e.get(),
    {
        target: a
    } = (0, g.i)(),
    s = o.e.get().baiduKey;
return (0, l.jsxs)(l.Fragment, {
    children: [!!s && (0, l.jsx)(T(), {
        children: (0, l.jsx)("script", {
            type: "text/javascript",
            dangerouslySetInnerHTML: {
                __html: '\nvar _hmt = _hmt || [];\nvar hm = document.createElement("script");\nhm.src = "https://hm.baidu.com/hm.js?'.concat(s, '";\nvar s = document.getElementsByTagName("script")[0]; \ns.parentNode.insertBefore(hm, s);\n')
            }
        })
    }), (0, l.jsx)(d.TitleCard, {
        style: {
            backgroundSize: "cover",
            backgroundImage: "url(".concat(h.D.indexBanner, ")")
        },
        size: t,
        children: (0, l.jsxs)("div", {
            className: (0, c.cname)(n.RowClass, r().bannerWrap),
            children: [(0, l.jsxs)("div", {
                className: r().left,
                children: [(0, l.jsx)("h3", {
                    className: r().title,
                    children: e
                }), (0, l.jsx)("h3", {
                    className: r().title,
                    children: "双倍效率 极速输出"
                }), (0, l.jsx)("p", {
                    className: r().subTitle,
                    children: "支持视频转换、音频转换、视频压缩、人声分离、音频提取、视频合并、视频水印、视频转gif等多种特色功能"
                }), (0, l.jsx)(u.Q, {
                    light: !0,
                    download_channel_name: "首页-banner按钮"
                }), (0, l.jsxs)("p", {
                    className: r().desc,
                    children: ["支持Mac/Windows下载\xa0\xa0\xa0\xa0更新时间", (0, c.formatDay)(null == a ? void 0 : a.updateTime), " "]
                })]
            }), (0, l.jsx)("img", {
                src: h.D.indexBannerIcon,
                width: 658,
                height: 496
            })]
        })
    }), (0, l.jsx)(d.TitleCard, {
        space: i,
        size: t,
        style: {
            backgroundColor: "#FAFAFA"
        },
        children: (0, l.jsx)("div", {
            className: (0, c.cname)(n.RowClass, r().slickWrap),
            children: (0, l.jsx)(d.Slick, {
                dotPosition: "top",
                dots: !0,
                infinite: !0,
                speed: 500,
                slidesToScroll: 1,
                slidesToShow: 1,
                autoplay: !0,
                dotsUlStyle: {
                    justifyContent: "space-between"
                },
                dotsStyle: {
                    paddingBottom: 20
                },
                customPaging: e = > (0, l.jsx)(d.ImageCard, {
                    className: (0, c.cname)("slickCard", r().slickCard),
                    title: p[e].title,
                    size: 80,
                    url: p[e].url,
                    children: e + 1
                }),
                children: U.map((e, a) = > (0, l.jsx)(d.TitleCard, {
                    className: (0, c.cname)(n.RowClass, r().slickTextCard),
                    space: i,
                    size: t,
                    titleNode: e.title,
                    children: (0, l.jsx)(d.ImageCard3, {
                        className: r().slickImageCard,
                        ...e,
                        children: (0, l.jsx)("div", {
                            className: r().slickDownloadLine,
                            children: (0, l.jsx)(u.Q, {
                                download_channel_name: "首页-中部按钮"
                            })
                        })
                    })
                },
                    a))
            })
        })
    }), (0, l.jsx)(d.TitleCard, {
        space: i,
        size: t,
        children: (0, l.jsx)(d.ImageCardList, {
            list: _,
            className: (0, c.cname)(n.RowClass),
            size: 260,
            direction: "vertical",
            component: d.ImageCardTwo
        })
    }), (0, l.jsx)(D.y, {}), (0, l.jsx)(x.a, {}), (0, l.jsx)(m.t, {
        download_channel_name: "首页-底部按钮"
    })]
})
        };
k.className = r().homeView;
let C = a.bK.Page(k);
i.
    default = C
    },
5348 : function(e) {
    e.exports = {
        downloadBtn: "download_downloadBtn__kdRkm",
        light: "download_light__aWshO",
        animation: "download_animation__SBmMp",
        btnRound: "download_btnRound__AWKWv"
    }
},
68981 : function(e) {
    e.exports = {
        homeView: "index_homeView__oTzMp",
        bannerWrap: "index_bannerWrap__A47IR",
        left: "index_left__9_Gwb",
        title: "index_title__qVQRs",
        subTitle: "index_subTitle__sfZ5L",
        desc: "index_desc__niQfl",
        slickWrap: "index_slickWrap__zqFlS",
        slickCard: "index_slickCard__da9pR",
        slickTextCard: "index_slickTextCard__goo6C",
        slickImageCard: "index_slickImageCard__fxdLq",
        slickDownloadLine: "index_slickDownloadLine__6pMf4"
    }
}
}]);