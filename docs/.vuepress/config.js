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
                text: "星宫六喰",
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
                    { title: "线性回归", path: "/notes/algorithm/linear_regression.md" },
                    { title: "Softmax", path: "/notes/algorithm/softmax.md" },
                    { title: "多层感知机MLP", path: "/notes/algorithm/multilayer_perceptron.md" },
                    { title: "卷积神经网络CNN", path: "/notes/algorithm/cnn.md" },
                    { title: "现代卷积神经网络", path: "/notes/algorithm/modern_cnn.md" },
                    { title: "循环神经网络RNN", path: "/notes/algorithm/rnn.md" },
                    { title: "注意力机制", path: "/notes/algorithm/attention.md" },
                    { title: "Transformer", path: "/notes/algorithm/transformer.md" },
                    { title: "Q&A", path: "/notes/algorithm/Q&A.md" },
                    { title: "MoE", path: "/notes/algorithm/moe.md"},

                ]
            },

            // C++
            {
                title: "C++篇",
                path: "/notes/cpp",
                collapsable: true,
                children: [
                    { title: "const", path: "/notes/cpp/const.md" },
                    { title: "move", path: "/notes/cpp/move.md"},
                    { title: "类型推导", path: "/notes/cpp/type_inference.md"},
                    { title: "Modern CPP", path: "/notes/cpp/modern_cpp_features.md"},
                ]
            },

            // pytorch
            {
                title: "PyTorch篇",
                path: "/notes/pytorch",
                collapsable: true,
                children: [
                    { title: "基础知识", path: "/notes/pytorch/basic.md" },
                    { title: "梯度计算", path: "/notes/pytorch/gradient.md" }
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

            // cuda
            {
                title: "CUDA篇",
                path: "/notes/cuda",
                collapsable: true,
                children: [
                    { title: "GPU", path: "/notes/cuda/hardware.md" },
                    { title: "内存模型", path: "/notes/cuda/memory.md" },
                    { title: "ThunderKittens", path: "/notes/cuda/thunderkittens.md" },
                ]
            },

            // paper
            {
                title: "经典论文篇",
                path: "/notes/papers",
                collapsable: true,
                children: [
                    { title: "transformer", path: "/notes/papers/transformer.md" },
                    { title: "杂文记录", path: "/notes/papers/summary_record.md" },
                ]
            },

            // system
            {
                title: "MLSYS篇",
                path: "/notes/system",
                collapsable: true,
                children: [
                    {
                        title: "推理篇",
                        path: "/notes/system/inference",
                        collapsable: true,
                        children: [
                            { title: "KV Cache", path: "/notes/system/inference/kvcache.md" },
                            { title: "MQA-GQA", path: "/notes/system/inference/mqa_gqa.md"},
                            { title: "Flash Attention", path: "/notes/system/inference/flash_attention.md" },
                            { title: "Multi-Linear-Attention", path: "/notes/system/inference/mla.md"},
                            { title: "Multi-Token-Predict", path: "/notes/system/inference/mtp.md"},
                            { title: "Page Attention", path: "/notes/system/inference/page_attention.md"},
                        ]
                    },
                    {
                        title: "Quant篇",
                        path: "/notes/system/quant",
                        collapsable: true,
                        children: [
                            { title: "简介", path: "/notes/system/quant/introduce.md" },
                            { titie: "pytorch quant", path: "/notes/system/quant/pytorch_quant.md"},
                        ]
                    },
                    {
                        title: "RL篇",
                        path: "/notes/system/rl",
                        collapsable: true,
                        children: [
                            { title: "简介", path: "/notes/system/rl/introduce.md" },

                        ]
                    },

                ]
            },

        ]
    },

    extendMarkdown(md) {
        md.set({ html: true });
        md.use(require("markdown-it-katex"));
    },
    head: [
        
        ['link', { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.7.1/katex.min.css' }],
        ['link', { rel: "stylesheet", href: "https://cdnjs.cloudflare.com/ajax/libs/github-markdown-css/2.10.0/github-markdown.min.css" }],


        ["link", {rel: "preconnect", href: "https://fonts.googleapis.com"}],
        [
            "link",
            {rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: ""},
        ],
        [
            "link",
            {
                href: "https://fonts.googleapis.com/css2?family=JetBrains+Mono:ital,wght@0,100..800;1,100..800&display=swap",
                rel: "stylesheet",
            }
        ]
    ]
}