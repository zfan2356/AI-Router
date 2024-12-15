const texmath = require("markdown-it-texmath");

module.exports = {
    title: '星宫六喰的博客',
    description: '一个追追番, 写写算法题的无害死宅',
    theme: 'reco',
    base: '/AI-Router/',
    themeConfig: {
        nav: [
            { text: "首页", link: "/" },
            {
                text: "星宫六喰的博客",
                items: [
                    { text: "知乎", link: "https://www.zhihu.com/people/1106zf" },
                    { text: "Github", link: "https://github.com/zfan2356/AI-Router" }
                ]
            }
        ],

        sidebar: [
            {
                title: "网站导言",
                path: "/",
                collapsable: false,  // 是否折叠
                children: [{ title: "简介", path: "/" }],
            },
            // 算法
            {
                title: "算法篇",
                path: "/notes/algorithm",
                collapsable: true,
                children: [
                    {
                        title: "机器学习",
                        path: "/notes/algorithm/machine_learning",
                        collapsable: true,
                        children: [
                            { title: "线性回归", path: "/notes/algorithm/machine_learning/linear_regression.md" },
                            { title: "Softmax", path: "/notes/algorithm/machine_learning/softmax.md" },
                        ]
                    }
                ]
            },

            // C++
            {
                title: "C++篇",
                path: "/notes/cpp",
                collapsable: true,
                children: [
                    { title: "const", path: "/notes/cpp/const.md" },
                ]
            },

            // pytorch
            {
                title: "PyTorch篇",
                path: "/notes/pytorch",
                collapsable: true,
                children: [
                    { title: "基础知识", path: "/notes/pytorch/basic.md" },
                    { title: "梯度计算", path: "/notes/pytorch/gradient.md" },
                ]
            },

            // python
            // {
            //     title: "Python篇",
            //     path: "/notes/python",
            //     collapsable: true,
            //     children: [
            //         { title: "基础知识", path: "/notes/pytorch/basic.md" },
            //     ]
            // },

            // // cuda
            // {
            //     title: "CUDA篇",
            //     path: "/notes/cuda",
            //     collapsable: true,
            //     children: [
            //         // { title: "基础知识", path: "/notes/python/basic.md" },
            //         // { title: "梯度计算", path: "/notes/python/gradient.md" },
            //     ]
            // },

            // // paper
            // {
            //     title: "经典论文篇",
            //     path: "/notes/papers",
            //     collapsable: true,
            //     children: [
            //         // { title: "基础知识", path: "/notes/python/basic.md" },
            //         // { title: "梯度计算", path: "/notes/python/gradient.md" },
            //     ]
            // },
        ]
    },

    extendMarkdown(md) {
        md.set({ html: true });
        md.use(require("markdown-it-katex"));
    },
    head: [
        ['link', { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.7.1/katex.min.css' }],
        ['link', { rel: "stylesheet", href: "https://cdnjs.cloudflare.com/ajax/libs/github-markdown-css/2.10.0/github-markdown.min.css" }]
    ]
}