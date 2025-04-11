<template><div><div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>这个工具可以帮助您快速创建自定义主题颜色。点击下方的按钮，选择您想要的主题颜色进行配置。</p>
<p>工具会自动应用您的修改到当前站点，您可以随意切换到任意页面查看效果。</p>
<p>本工具只能帮助您简单的创建主题颜色。如果您期望更加复杂的主题颜色配置，请查看 <a href="https://github.com/pengzhanbo/vuepress-theme-plume/blob/main/theme/src/client/styles/vars.css" target="_blank" rel="noopener noreferrer">styles/vars.css</a></p>
</div>
<ThemeColors /></div></template>


<script setup>
import ThemeColors from '@source/.vuepress/themes/components/ThemeColors.vue'
</script>