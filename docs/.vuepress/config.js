module.exports = {
    title: '星宫六喰的博客',
    description: '一个追追番, 写写算法题的无害死宅',
    theme: 'reco',
    base: '/AI-Router/',
    themeConfig: {
        nav: [
            { text: "首页", link: "/" },
            {
                text: "zfan2356 的博客",
                items: [
                    { text: "知乎", link: "https://www.zhihu.com/people/1106zf" },
                    { text: "Github", link: "https://github.com/zfan2356/AI-Router" }
                ]
            }
        ],

        sidebar: [
            {
                title: "欢迎学习",
                path: "/",
                collapsable: false,  // 是否折叠
                children: [{ title: "博客简介", path: "/" }],
            },
            {
                title: "算法篇",
                path: "/notes/algorithm",
                collapsable: true,
                children: [
                    { title: "第一篇", path: "/notes/algorithm/machine_learning/softmax.md" },
                    { title: "第二篇", path: "/notes/algorithm/machine_learning/linear_regression.md" },
                ]
            }
        ]
    }
}