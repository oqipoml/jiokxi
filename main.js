function loadbg(d) {
    var c = new Image;
    c.src = "https://cdn.jsdelivr.net/gh/oqipoml/jiokxi/images/bg/" + d + ".jpg",
    $(".colorful_loading_frame,.colorful_loading").css("display", "block"),
    "undefined" != typeof oqipoMedia && oqipoTips.show("第" + d + "张背景 - 加载中..."),
    c.onload = function() {
        jQuery(".bg-image").attr("src", c.src),
        RootCookies.SetCookie("oqipo_bg", d, 30),
        bgid = d
    }
}
function grin(f) {
    var e, h, g;
    return f = " " + f + " ",
    document.getElementById("comment") && "textarea" == document.getElementById("comment").type ? (e = document.getElementById("comment"),
    document.selection ? (e.focus(),
    sel = document.selection.createRange(),
    sel.text = f,
    e.focus()) : e.selectionStart || "0" == e.selectionStart ? (h = e.selectionEnd,
    g = h,
    e.value = e.value.substring(0, e.selectionStart) + f + e.value.substring(h, e.value.length),
    g += f.length,
    e.focus(),
    e.selectionStart = g,
    e.selectionEnd = g) : (e.value += f,
    e.focus()),
    void 0) : !1
}
function weixin(d) {
    $(".blackground").fadeIn(100),
    $(".boxtitle").html('<i class="fa fa-qrcode"></i> <span style="color:#f00">微信</span> 扫一扫关注'),
    $(".logbox,.boxpic").animate({
        opacity: "show",
        marginTop: "-170px"
    }, "slow"),
    hidebox(),
    $(".boxpic").html('<img src="https://cdn.jsdelivr.net/gh/oqipoml/jiokxi/images/pjax_loading.gif" style="width:30px;height:30px;margin:125px">');
    var c = new Image;
    c.src = d,
    c.onload = function() {
        setTimeout(function() {
            $(".boxpic").html('<img src="' + c.src + '" style="width:300px;height:280px;margin-top:-10px">')
        }, 1000)
    }
}
function dashang(d) {
    $(".blackground").fadeIn(100),
    $(".boxtitle").html('<i class="fa fa-qrcode"></i> <span style="color:#f00">QQ 微信 支付宝</span> 扫一扫打赏'),
    $(".logbox,.boxpic").animate({
        opacity: "show",
        marginTop: "-170px"
    }, "slow"),
    hidebox(),
    $(".boxpic").html('<img src="https://cdn.jsdelivr.net/gh/oqipoml/jiokxi/images/pjax_loading.gif" style="width:30px;height:30px;margin:125px">');
    var c = new Image;
    c.src = "http://oqipo.ml/qrimg.php?url=H&size=10&url=" + d,
    c.onload = function() {
        setTimeout(function() {
            $(".boxpic").html('<img src="' + c.src + '" style="width:300px;height:280px;margin-top:-10px">')
        }, 1000)
    }
}
function isNum(b) {
    return /^[0-9]+$/.test(b)
}
function get_emailinfo() {
    if ("" != jQuery("#email").val()) {
        if (-1 != jQuery("#email").val().indexOf("qq.com")) {
            var b = jQuery("#email").val().replace("@qq.com", "");
            isNum(b) ? ($("#email .emailavatar,#qq i").hide(),
            $("#email i,#qq .emailavatar").show(),
            $("#nickqq").val(b),
            jQuery("#qq .emailavatar").attr("src", "https://cdn.jsdelivr.net/gh/oqipoml/jiokxi/images/pjax_loading.gif"),
            setTimeout(function() {
                jQuery("#qq .emailavatar").attr("src", "https://q1.qlogo.cn/g?b=qq&nk=" + b + "&s=40")
            }, 1000)) : ($("#nickqq").val(""),
            $("#qq .emailavatar,#email i").hide(),
            $("#qq i,#email .emailavatar").show(),
            jQuery("#email .emailavatar").attr("src", "https://cdn.jsdelivr.net/gh/oqipoml/jiokxi/images/pjax_loading.gif"),
            setTimeout(function() {
                jQuery("#email .emailavatar").attr("src", "https://cravatar.cn/avatar/" + hex_md5(jQuery("#email").val())) + "&size=32&d=monsterid&r=G&default=https://cdn.jsdelivr.net/gh/oqipoml/jiokxi/gravatar/default.jpg"
            }, 1000))
        } else {
            "" != jQuery("#email").val() && ($("#nickqq").val(""),
            $("#qq .emailavatar,#email i").hide(),
            $("#qq i,#email .emailavatar").show(),
            jQuery("#email .emailavatar").attr("src", "https://cdn.jsdelivr.net/gh/oqipoml/jiokxi/images/pjax_loading.gif"),
            setTimeout(function() {
                jQuery("#email .emailavatar").attr("src", "https://cravatar.cn/avatar/" + hex_md5(jQuery("#email").val())) + "&size=32&d=identicon&r=G&default=https://cdn.jsdelivr.net/gh/oqipoml/jiokxi/gravatar/default.jpg"
            }, 1000))
        }
    } else {
        $("#email i").show(),
        $("#email .emailavatar").hide()
    }
}
function AutoScroll(b) {
    $(b).find("ul:first").animate({
        marginTop: "-10px"
    }, 300, function() {
        $(this).css({
            marginTop: "0px"
        }).find("li:first").appendTo(this)
    })
}
function tooltip() {
    $("a,div,li,h3,h4,img,i").each(function() {
        if ($("#tooltip").remove(),
        this.title) {
            var b = this.title;
            $(this).mouseover(function(a) {
                this.title = "",
                $("body").append('<div id="tooltip">' + b + "</div>"),
                $("#tooltip").css({
                    left: a.pageX - 15 + "px",
                    top: a.pageY + 30 + "px",
                    opacity: "0.8"
                }).fadeIn(250)
            }).mouseout(function() {
                this.title = b,
                $("#tooltip").remove()
            }).mousemove(function(c) {
                $("#tooltip").css({
                    left: c.pageX - 15 + "px",
                    top: c.pageY + 30 + "px"
                })
            })
        }
    })
}
function size(b) {
    b.innerHTML = "A" == b.innerHTML ? "A+" : "A+" == b.innerHTML ? "A-" : "A"
}
function embedImage() {
    var b = prompt("请输入图片的 URL 地址（包含http://）:", "http://");
    b && (document.getElementById("comment").value = document.getElementById("comment").value + "[img]" + b + "[/img]")
}
function strong() {
    var b = prompt("请输入需要加粗的文字:");
    b && (document.getElementById("comment").value = document.getElementById("comment").value + "[strong]" + b + "[/strong]")
}
function em() {
    var b = prompt("请输入需要斜体的文字:");
    b && (document.getElementById("comment").value = document.getElementById("comment").value + "[em]" + b + "[/em]")
}
function del() {
    var b = prompt("请输入需要删除线的文字:");
    b && (document.getElementById("comment").value = document.getElementById("comment").value + "[del]" + b + "[/del]")
}
function url1() {
    var b = prompt("请输入链接的 URL 地址（包含http://）:", "http://");
    b && (document.getElementById("comment").value = document.getElementById("comment").value + "[url]" + b + "[/url]")
}
function underline() {
    var b = prompt("请输入需要下划线的文字:");
    b && (document.getElementById("comment").value = document.getElementById("comment").value + "[u]" + b + "[/u]")
}
function code() {
    var b = prompt("请粘贴代码:");
    b && (document.getElementById("comment").value = document.getElementById("comment").value + "[code]" + b + "[/code]")
}
function quote() {
    var b = prompt("请粘贴引用内容:");
    b && (document.getElementById("comment").value = document.getElementById("comment").value + "[blockquote]" + b + "[/blockquote]")
}
function qq() {
    var b = prompt("请输入QQ号:");
    b && (document.getElementById("comment").value = document.getElementById("comment").value + "[qq]" + b + "[/qq]")
}
function embedSmiley() {
    "none" == $(".smilebg").css("display") ? $(".smilebg").slideDown(200) : $(".smilebg").slideUp(200)
}
function checkLength(b) {
    return 250 < b.value.length ? (alert("您填写的评论内容已经超出250个字！"),
    b.value = b.value.substring(0, 250),
    !1) : (b = 250 - b.value.length,
    document.getElementById("num").innerHTML = b.toString(),
    !0)
}
function showreply() {
    $(".form").slideToggle(500, "easeOutExpo")
}
function commentReply(e, d) {
    var f = document.getElementById("comment-post");
    d.style.display = "none",
    document.getElementById("cancel-reply").style.display = "",
    document.getElementById("comment-pid").value = e,
    d.parentNode.parentNode.appendChild(f)
}
function cancelReply() {
    var d = document.getElementById("comment-place")
      , c = document.getElementById("comment-post");
    document.getElementById("comment-pid").value = 0,
    $(".reply a").css({
        display: ""
    }),
    document.getElementById("cancel-reply").style.display = "none",
    d.appendChild(c)
}
function b2top(f, e, h) {
    if (10 >= e && e >= 0) {
        var g = 100 * e;
        $(f).css({
            backgroundPosition: "0 -" + g + "px"
        }),
        setTimeout("b2top('" + f + "'," + (h ? e + 1 : e - 1) + "," + h + ")", 50)
    }
}
function checkReg() {
    var e = $("input[name=username]").val().replace(/(^\s*)|(\s*$)/g, "")
      , d = $("input[name=password]").val().replace(/(^\s*)|(\s*$)/g, "")
      , f = $("input[name=password2]").val().replace(/(^\s*)|(\s*$)/g, "");
    return $("input[name=imgcode]").val().replace(/(^\s*)|(\s*$)/g, ""),
    e.match(/\s/) || d.match(/\s/) ? (alert("用户名和密码中不能有空格"),
    !1) : 4 > e.length || 4 > d.length ? (alert("用户名和密码都不能小于4位！"),
    !1) : d != f ? (alert("两次输入密码不相等！"),
    !1) : void 0
}
function hidebox() {
    $("#dashang,.Share").animate({
        opacity: "hide",
        marginTop: "-300px"
    }, "slow")
}
function pjaxdone() {
    function f() {
        document.title = document[e] ? blog : g
    }
    var e, h, g = document.title;
    "undefined" != typeof document.hidden ? (e = "hidden",
    h = "visibilitychange") : "undefined" != typeof document.mozHidden ? (e = "mozHidden",
    h = "mozvisibilitychange") : "undefined" != typeof document.webkitHidden && (e = "webkitHidden",
    h = "webkitvisibilitychange"),
    ("undefined" != typeof document.addEventListener || "undefined" != typeof document[e]) && document.addEventListener(h, f, !1),
    window.RootCookies = {},
    window.RootCookies.SetCookie = function(j, i, l) {
        var k = new Date;
        k.setTime(k.getTime() + 86400000 * l),
        document.cookie = j + "=" + escape(i) + (null == l ? "" : ";expires=" + k.toGMTString()) + ";path=/"
    }
    ,
    $("a[target!=_blank]").unbind("click"),
    $(function() {
        $("pre").addClass("prettyprint linenums").attr("style", "overflow:auto"),
        window.prettyPrint && prettyPrint()
    }),
    $("#slider").carousel({
        interval: 5000
    }),
    $(function() {
        jQuery(function() {
            var b = 13;
            $(".size").click(function() {
                13 == b ? (b += 3,
                $(".post-context,.post-context pre").css("font-size", b + "px"),
                $(".size").css({
                    "box-shadow": "inset 0px 0px 10px #cccccc",
                    border: "1px #0c0 solid",
                    "font-weight": "bold"
                })) : 16 == b ? (b -= 4,
                $(".post-context,.post-context pre").css("font-size", b + "px"),
                $(".size").css({
                    "box-shadow": "inset 0px 0px 10px #cccccc",
                    border: "1px #0c0 solid",
                    "font-weight": "bold"
                })) : (b = 13,
                $(".post-context,.post-context pre").css("font-size", b + "px"),
                $(".size").css({
                    "box-shadow": "none",
                    border: "none",
                    "font-weight": "normal"
                }))
            })
        })
    }),
    $("#showbox").click(function() {
        $("#imgul li").css("border", "solid #fff 3px"),
        $("#bg-images_tanchu").addClass("bg-images_tanchu"),
        $("#changebg").addClass("kaiguan"),
        $("#changebg").addClass("flipInX animated"),
        setTimeout(function() {
            $("#changebg").removeClass("flipInX")
        }, 800)
    }),
    $("#kaiguan").click(function() {
        $("#imgul li").css("border", "solid #fff 3px"),
        $("#changebg").addClass("flipOutX animated"),
        setTimeout(function() {
            $("#changebg").removeClass("flipOutX"),
            $("#bg-images_tanchu").removeClass("bg-images_tanchu"),
            $("#changebg").removeClass("kaiguan")
        }, 800)
    }),
    $("#imgul>li").hover(function() {
        $("#imgul li").css("border", "solid #fff 3px"),
        $(this).css("border", "solid #0c0 3px")
    }),
    $("#imgul>li").click(function() {
        $("#imgul li").css("border", "solid #fff 3px"),
        $("#imgul li").find("i").removeClass("fa fa-check-circle fa-2x checkit"),
        $(this).find("i").addClass("fa fa-check-circle fa-2x checkit"),
        $("#changebg").addClass("flipOutX animated"),
        setTimeout(function() {
            $("#changebg").removeClass("flipOutX"),
            $("#bg-images_tanchu").removeClass("bg-images_tanchu"),
            $("#changebg").removeClass("kaiguan"),
            $(".colorful_loading_frame,.colorful_loading").css("display", "none");
            try {
                if ("undefined" != typeof oqipoMedia) {
                    return oqipoTips.show("第" + bgid + "张背景 - 设置完成"),
                    !0
                }
            } catch (b) {}
            return !1
        }, 500)
    }),
    $("#content").find(".toggler").click(function() {
        return "展开归档" == jQuery(this).text() ? ($(".archives").find("ul").show(),
        jQuery(this).text("折叠归档")) : ($(".archives").find("ul").hide(),
        jQuery(this).text("展开归档")),
        !1
    }),
    $(function() {
        jQuery(function() {
			var meta = document.getElementsByTagName('meta');
            var d = encodeURIComponent(location.href)
              , c = encodeURIComponent(document.title);
            $(".Share li a.share1").click(function() {
                window.open("https://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url=" + d + "&title=" + c, "newwindow", "width=650,height=500"),
                $(".blackground").fadeOut(100),
                hidebox()
            }),
            $(".Share li a.share2").click(function() {
                window.open("https://v.t.sina.com.cn/share/share.php?url=" + d + "&title=" + c + "&source=bookmark&appkey=1903104813", "newwindow", "width=650,height=500"),
                $(".blackground").fadeOut(100),
                hidebox()
            }),
            $(".Share li a.share33").click(function() {
                window.open("http://oqipo.ml/qrimg.php?url=H&size=10&url=" + d + ".jpg", "newwindow", "width=370,height=370")
            }),
            $(".go-qrcode,.Share li a.share3").click(function() {
                $(".wxpic,.qqpic,.zfbpic").hide(),
                $(".boxtitle").html('<i class="fa fa-qrcode"></i> 扫一扫二维码分享'),
                $(".logbox,.boxpic").animate({
                    opacity: "show",
                    marginTop: "-100px"
                }, "slow"),
                hidebox(),
                $(".boxpic").html('<img src="https://cdn.jsdelivr.net/gh/oqipoml/jiokxi/images/pjax_loading.gif" style="width:30px;height:30px;margin:125px">');
                var a = new Image;
                a.src = "http://oqipo.ml/qrimg.php?url=H&size=10&url=" + d,
                a.onload = function() {
                    setTimeout(function() {
                        $(".boxpic").html('<img src="' + a.src + '" style="width:300px;height:280px;margin-top:-10px">')
                    }, 1000)
                }
            }),
            $("#dashang ul li a.wx").click(function() {
                $(".boxpic,.qqpic,.zfbpic").hide(),
                $(".boxtitle").html('<i class="fa fa-wechat"></i> <span style="color:#f00">微信</span> 扫一扫打赏'),
                $(".logbox,.wxpic").animate({
                    opacity: "show",
                    marginTop: "-100px"
                }, "slow"),
                hidebox()
            }),
            $("#dashang ul li a.qq").click(function() {
                $(".boxpic,.wxpic,.zfbpic").hide(),
                $(".boxtitle").html('<i class="fa fa-qq"></i> <span style="color:#f00">QQ</span> 扫一扫打赏'),
                $(".logbox,.qqpic").animate({
                    opacity: "show",
                    marginTop: "-100px"
                }, "slow"),
                hidebox()
            }),
            $("#dashang ul li a.zfb").click(function() {
                $(".boxpic,.wxpic,.qqpic").hide(),
                $(".boxtitle").html('<i class="fa fa-barcode"></i> <span style="color:#f00">支付宝</span> 扫一扫打赏'),
                $(".logbox,.zfbpic").animate({
                    opacity: "show",
                    marginTop: "-100px"
                }, "slow"),
                hidebox()
            }),
            $(".Share li a.share4").click(function() {
                window.open("https://connect.qq.com/widget/shareqq/index.html?url=" + d + "&showcount=0&desc=" + c + "&title=" + c + "&site=" + d + "&pics=", "newwindow", "width=800,height=600"),
                $(".blackground").fadeOut(100),
                hidebox()
            }),
            $(".Share li a.share5").click(function() {
                window.open("https://www.douban.com/share/service?href=" + d + "&name=" + c, "newwindow", "width=650,height=500"),
                $(".blackground").fadeOut(100),
                hidebox()
            }),
            $(".open,.fenxiang").click(function() {
                $(".blackground").fadeIn(100),
                $(".Share").animate({
                    opacity: "show",
                    marginTop: "-100px"
                }, "slow")
            }),
            $(".da_shang").click(function() {
                $(".blackground").fadeIn(100),
                $("#dashang").animate({
                    opacity: "show",
                    marginTop: "-100px"
                }, "slow")
            }),
            $(".close a").click(function() {
                $(".boxtitle,.boxpic").html(""),
                $(".blackground").fadeOut(100),
                hidebox()
            }),
            $(".closebox a").click(function() {
                $(".blackground").fadeOut(100),
                $(".logbox,#dashang").animate({
                    opacity: "hide",
                    marginTop: "-300px"
                }, "slow")
            })
        })
    }),
    $(function(b) {
        b("#head-nav").navFixed()
    }),
    $(document).WIT_SetTab({
        Nav: $("#J_setTabANav>ul>li"),
        Field: $("#J_setTabABox>div>ul"),
        CurCls: "hover"
    }),
    $(document).WIT_SetTab({
        Nav: $("#J_setTabBNav>ul>li"),
        Field: $("#J_setTabBBox>div>ul"),
        Auto: !0,
        CurCls: "hover"
    }),
    $(".fullscreen").click(function() {
        $(".fullscreen i").hasClass("fa fa-share") ? (RootCookies.SetCookie("oqipo_sidebar", "no", 30),
        $("#sidebar").css("display", "none"),
        $("#content").css("border-right", "0px dashed #ccc"),
        $("#content").animate({
            width: "100%"
        }, "slow"),
        $(".fullscreen i").removeClass("fa fa-share"),
        $(".fullscreen i").addClass("fa fa-reply")) : (RootCookies.SetCookie("oqipo_sidebar", "no", -1),
        $("#sidebar").css("display", "block"),
        $("#content").css("border-right", "1px dashed #000"),
        $("#content").animate({
            width: "785px"
        }, "slow"),
        $(".fullscreen i").removeClass("fa fa-reply"),
        $(".fullscreen i").addClass("fa fa-share"))
    }),
    $(".go-comment").click(function() {
        return $body.animate({
            scrollTop: $("#comment-post").offset().top - 200
        }, 1002),
        !1
    }),
    $(".link-back2top").click(function() {
        return $body.animate({
            scrollTop: $("#header").offset().top - 200
        }, 1000),
        !1
    }),
    $(".open2").click(function() {
        $(".blackground").fadeIn(100),
        $(".tijiao").slideDown(300)
    }),
    $(".close2 a").click(function() {
        $(".blackground").fadeOut(100),
        $(".tijiao").slideUp(300)
    }),
    $(".post-title a").hover(function() {
        $(this).stop().animate({
            marginLeft: "4px"
        }, "fast")
    }, function() {
        $(this).stop().animate({
            marginLeft: "0px"
        }, "fast")
    }),
    $(".dropdown").hover(function() {
        $(this).children(".sub-menu").show(200)
    }, function() {
        $(this).children(".sub-menu").hide(200)
    }),
    $(function() {
        jQuery(function() {
            function i(l, k, p) {
                if (document.selection) {
                    l.focus(),
                    sel = document.selection.createRange(),
                    sel.text = p ? k + sel.text + p : k,
                    l.focus()
                } else {
                    if (l.selectionStart || "0" == l.selectionStart) {
                        var o = l.selectionStart
                          , n = l.selectionEnd
                          , m = n;
                        l.value = p ? l.value.substring(0, o) + k + l.value.substring(o, n) + p + l.value.substring(n, l.value.length) : l.value.substring(0, o) + k + l.value.substring(n, l.value.length),
                        m += p ? k.length + p.length : k.length - n + o,
                        o == n && p && (m -= p.length),
                        l.focus(),
                        l.selectionStart = m,
                        l.selectionEnd = m
                    } else {
                        l.value += k + p,
                        l.focus()
                    }
                }
            }
            var d = (new Date).toLocaleTimeString()
              , j = document.getElementById("comment") || 0;
            window.SIMPALED = {},
            window.SIMPALED.Editor = {
                qiandao: function() {
                    i(j, "[blockquote]签到成功！签到时间：" + d, "，每日打卡，生活更精彩哦~[/blockquote]")
                },
                good: function() {
                    i(j, "[blockquote][F1] 好羞涩，文章真的好赞啊，顶博主！[/blockquote]")
                },
                bad: function() {
                    i(j, "[blockquote][F14] 有点看不懂哦，希望下次写的简单易懂一点！[/blockquote]")
                }
            }
        })
    }),
    $body = window.opera ? "CSS1Compat" == document.compatMode ? $("html") : $("body") : $("html,body"),
    $("a[href*=#comment]").click(function() {
        if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") && location.hostname == this.hostname) {
            var b = $(this.hash)
              , b = b.length && b || $("[name=" + this.hash.slice(1) + "]");
            if (b.length) {
                return b = b.offset().top,
                $("html,body").animate({
                    scrollTop: b
                }),
                !1
            }
        }
    }),
    $(window).scroll(function() {
        200 < $(this).scrollTop() ? $(".backtop").fadeIn() : $(".backtop").fadeOut()
    }),
    $(".backtop").hover(function() {
        b2top(".backtop", 0, !0)
    }, function() {
        b2top(".backtop", 3)
    }).click(function() {
        $("body,html").animate({
            scrollTop: 0
        }, 600, function() {}),
        b2top(".backtop", 3)
    }),
    $(".archives").find("ul").hide(),
    $(".archives").find(eqi).show(),
    $(".archives h4").click(function() {
        $(this).next("ul").slideToggle("fast")
    }),
    $("#newlog li a,#randlog li a,#hotlog li a,#record li a,#blogsort li a,.tab_box li a,#link li a").hover(function() {
        $(this).stop().animate({
            marginLeft: "4px"
        }, "fast")
    }, function() {
        $(this).stop().animate({
            marginLeft: "0px"
        }, "fast")
    }),
    $(".open-nav,.close-nav").click(function() {
        $("#mmenu").hasClass("has-opened") ? $("#mmenu").removeClass("has-opened") : $("#mmenu").addClass("has-opened")
    }),
    $("#mmenu .catbtn ul").hide(),
    $("#mmenu .catbtnx").click(function() {
        $(this).next("ul").slideToggle("fast")
    }),
    $("#reset").click(function() {
        $(".num").text("250"),
        $(".zujian").show()
    }),
    $(function() {
        jQuery(function(b) {
            b("a[href$=jpg],a[href$=gif],a[href$=png],a[href$=jpeg],a[href$=bmp]").addClass("highslide").each(function() {
                this.onclick = function() {
                    return hs.expand(this)
                }
            })
        })
    }),
    $(function() {
        jQuery(function(b) {
            b.fn.WIT_SetTab = function(a) {
                function l(c) {
                    a.Field.filter(":visible").fadeOut(a.OutTime, function() {
                        a.Field.eq(c).fadeIn(a.InTime).siblings().hide()
                    }),
                    a.Nav.eq(c).addClass(a.CurCls).siblings().removeClass(a.CurCls)
                }
                a = b.extend({
                    Nav: null,
                    Field: null,
                    K: 0,
                    CurCls: "cur",
                    Auto: !1,
                    AutoTime: 5000,
                    OutTime: 100,
                    InTime: 150,
                    CrossTime: 60
                }, a || {});
                var k = null
                  , j = !1
                  , i = null;
                l(a.K),
                a.Nav.hover(function() {
                    a.K = a.Nav.index(this),
                    a.Auto && clearInterval(i),
                    j = b(this).hasClass(a.CurCls),
                    k = setTimeout(function() {
                        j || l(a.K)
                    }, a.CrossTime)
                }, function() {
                    clearTimeout(k),
                    a.Ajax && a.AjaxFun(),
                    a.Auto && (i = setInterval(function() {
                        a.K++,
                        l(a.K),
                        a.K == a.Field.size() && (l(0),
                        a.K = 0)
                    }, a.AutoTime))
                }).eq(0).trigger("mouseleave")
            }
        })
    }),
    $(".smile").click(function() {
        $(".smilebg").slideUp(200)
    }),
    $("#commentform").submit(function() {
        var b = $("#commentform").serialize();
        return $("#comment,#comment-post .tex").attr("disabled", "disabled"),
        $(".ajaxloading").show(),
        $("#usb,.nop").hide(),
        $.post($("#commentform").attr("action"), b, function(d) {
            var c = /<div class=\"main\">[\r\n]*<p>(.*?)<\/p>/i;
            c.test(d) ? ($(".error").html(d.match(c)[1]).show().fadeOut(4000),
            $(".ajaxloading").hide(),
            $(".blackground").fadeOut(100),
            $("#usb,.nop").show()) : (c = $("input[name=pid]").val(),
            cancelReply(),
            $("[name=comment]").val(""),
            $(".commentlist").html($(d).find(".commentlist").html()),
            0 != c ? (d = window.opera ? "CSS1Compat" == document.compatMode ? $("html") : $("body") : $("html,body"),
            d.animate({
                scrollTop: $("#comment-" + c).offset().top - 20
            }, "normal", function() {
                $(".ajaxloading").hide(),
                $(".blackground").fadeOut(100),
                $("#usb").show(),
                $(".tijiao").slideUp(300)
            })) : (d = window.opera ? "CSS1Compat" == document.compatMode ? $("html") : $("body") : $("html,body"),
            d.animate({
                scrollTop: $(".commentlist").offset().top - 20
            }, "normal", function() {
                $(".ajaxloading").hide(),
                $(".blackground").fadeOut(100),
                $("#usb").show(),
                $(".tijiao").slideUp(300)
            }))),
            $("a[href*=#comment]").click(function() {
                if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") && location.hostname == this.hostname) {
                    var i = $(this.hash)
                      , i = i.length && i || $("[name=" + this.hash.slice(1) + "]");
                    if (i.length) {
                        return i = i.offset().top,
                        $("html,body").animate({
                            scrollTop: i
                        }),
                        !1
                    }
                }
            }),
            tooltip(),
            $("#comment,#comment-post .tex").attr("disabled", !1)
        }),
        !1
    }),
    $(function() {
        jQuery(function() {
            var j = $(".search input")
              , i = $(".search button")
              , l = $(".search .result")
              , k = $(".search .result div");
            j.focus(function() {
                "输入关键字自动全文搜索..." == j.val() && j.val("")
            }),
            j.blur(function() {
                "" == j.val() && (j.val("输入关键字自动全文搜索..."),
                i.stop().fadeOut())
            }),
            j.keydown(function() {
                clearTimeout("t")
            }).keypress(function() {
                clearTimeout("t")
            }),
            j.keyup(function() {
                0 < j.val().length ? (i.fadeIn(),
                1 < j.val().length && (i.addClass("load"),
                t = setTimeout(function() {
                    k.load("/pjaxsearch.php?k=" + j.val(), function() {
                        l.fadeIn(),
                        l.find("h2 span").html(j.val()),
                        i.removeClass("load")
                    })
                }, 1000))) : (i.stop().fadeOut(),
                l.stop().fadeOut())
            }),
            i.click(function() {
                i.stop().fadeOut(),
                l.stop().fadeOut()
            }),
            l.click(function() {
                l.stop().fadeOut(),
                j.val("输入关键字自动全文搜索..."),
                i.stop().fadeOut()
            })
        })
    }),
    $(function() {
        jQuery(function() {
            jQuery("#email").blur(function() {
                get_emailinfo()
            })
        })
    }),
    pause(),
    tooltip(),
    pjaxfooter(),
    $(".colorful_loading_frame,.colorful_loading").css("display", "none")
}
function play(e, d) {
    try {
        if ("undefined" != typeof oqipoMedia && -1 == document.cookie.indexOf("oqipo_player=") && songId + 1 != d) {
            return music(e, d),
            !0
        }
    } catch (f) {}
    return !1
}
function pause() {
    try {
        if ("undefined" == typeof oqipoMedia) {
            return !1
        }
        $(".post-context .video,.dplayer").length && ($("#sidebar").css("display", "none"),
        $("#content").css("border-right", "0px dashed #ccc"),
        $("#content").animate({
            width: "100%"
        }, "slow"),
        audio.pause())
    } catch (b) {}
}
jQuery(document).ready(function() {
    pjaxdone()
}),
jQuery.fn.navFixed = function() {
    function f() {
        e >= h ? (g.css("position", "fixed"),
        g.css("top", "0"),
        g.css("border-radius", "0"),
        g.css("width", "100%")) : (g.css("position", "relative"),
        g.css("width", "1102px"),
        g.css("border-radius", "5px"))
    }
    var e, h, g = $(this);
    parseInt(g.prev().css("margin-bottom").substring(0, g.prev().css("margin-bottom").length - 2)),
    parseInt(g.next().css("margin-top").substring(0, g.next().css("margin-top").length - 2)),
    e = $(document).scrollTop(),
    h = g.prev().outerHeight(!0),
    f(),
    $(document).scroll(function() {
        e = $(document).scrollTop(),
        f()
    }),
    $(window).resize(function() {
        h = g.prev().outerHeight(!0),
        f()
    })
}
,
$(function() {
    $t = setInterval('AutoScroll(".text")', 3000),
    $(".text").hover(function() {
        clearInterval($t)
    }, function() {
        $t = setInterval('AutoScroll(".text")', 5000)
    })
}),
function(b) {
    b.fn.WIT_SetTab = function(a) {
        function j(c) {
            a.Field.filter(":visible").fadeOut(a.OutTime, function() {
                a.Field.eq(c).fadeIn(a.InTime).siblings().hide()
            }),
            a.Nav.eq(c).addClass(a.CurCls).siblings().removeClass(a.CurCls)
        }
        a = b.extend({
            Nav: null,
            Field: null,
            K: 0,
            CurCls: "cur",
            Auto: !1,
            AutoTime: 5000,
            OutTime: 100,
            InTime: 150,
            CrossTime: 60
        }, a || {});
        var i = null
          , h = !1
          , g = null;
        j(a.K),
        a.Nav.hover(function() {
            a.K = a.Nav.index(this),
            a.Auto && clearInterval(g),
            h = b(this).hasClass(a.CurCls),
            i = setTimeout(function() {
                h || j(a.K)
            }, a.CrossTime)
        }, function() {
            clearTimeout(i),
            a.Ajax && a.AjaxFun(),
            a.Auto && (g = setInterval(function() {
                a.K++,
                j(a.K),
                a.K == a.Field.size() && (j(0),
                a.K = 0)
            }, a.AutoTime))
        }).eq(0).trigger("mouseleave")
    }
}(jQuery),
$(function() {
    $(document).WIT_SetTab({
        Nav: $("#J_setTabANav>ul>li"),
        Field: $("#J_setTabABox>div>ul"),
        CurCls: "hover"
    }),
    $(document).WIT_SetTab({
        Nav: $("#J_setTabBNav>ul>li"),
        Field: $("#J_setTabBBox>div>ul"),
        Auto: !0,
        CurCls: "hover"
    })
}),
$(document).ready(function(b) {
    b(function() {
        b("body").dblclick(function() {
            var a = b(window)
              , l = a.scrollTop()
              , k = (l - 0) / 5
              , j = l
              , i = setInterval(function() {
                0 >= (j - 0) * (l - 0) ? (clearInterval(i),
                l = j = 0,
                a.scrollTop(0)) : (j = l,
                a.scrollTop(l -= k))
            }, 20)
              , h = b("#top").children(":first");
            h.stop().show().animate({}, function() {
                b(this).css({})
            }),
            h.parent().append(h)
        }),
        b("#top").dblclick(function(c) {
            c.stopPropagation()
        })
    })
}),
navigator.userAgent.match(/(iPhone|iPod|Android|ios)/i) || $(function() {
    pjaxstart()
});
function pjaxstart() {
    $(document).pjax("a[target!=_blank]", "#oqipoml", {
        fragment: "#oqipoml",
        timeout: 15000
    }),
    $(document).on("submit", "form", "button", function(b) {
        $.pjax.submit(b, "#oqipoml", {
            fragment: "#oqipoml",
            timeout: 15000
        })
    }),
    $(document).on("pjax:send", function() {
        $("#oqipoml").addClass("bluring"),
        $(".prev,.next").hide(),
        $(".colorful_loading_frame,.colorful_loading").css("display", "block")
    }),
    $(document).on("pjax:complete", function() {
        window.location.hash ? $("html,body").stop().animate({
            scrollTop: $(window.location.hash).offset().top - 130
        }, 500) : $("html,body").stop().animate({
            scrollTop: 0
        }, 0),
        pjaxdone(),
        $("#oqipoml").removeClass("bluring"),
        $(".colorful_loading_frame,.colorful_loading").css("display", "none"),
        $("#tooltip").hide(),
        $("#tooltip").remove();
        try {
            if ("undefined" != typeof oqipoMedia) {
                return oqipoTips.show(document.title + " - 加载完成"),
                !0
            }
        } catch (b) {}
        return !1
    })
}
eqi = "ul:first";
blog = "欢迎访问1情8念博客";
function pjaxfooter() {}
;