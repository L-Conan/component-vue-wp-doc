/**
 * 功能: 配置文件
 * @author Conan
 * @CreatedTime 2022-05-14
 */
const { defaultTheme } = require('vuepress')

module.exports = {
    lang: 'zh-CN',
    title: '跨境前端组件使用文档',
    description: '这是我的第一个 VuePress 站点',
    base: "/component-vue-wp-doc/",
    theme: defaultTheme({
        // 菜单栏左边logo
        logo: 'https://vuejs.org/images/logo.png',
        logoDark: null,
        navbar: [
            {
                text: '首页',
                link: '/',
            },
            {
                text: '组件',
                link: '/component/'
            },
        ],

        // 页面侧边栏
        sidebar: {
            "/component/": [
                {
                    text: 'Basic',
                    children: [
                        {
                            text: 'Icon 图标',
                            link: '/component/Basic/Icon/',
                        }
                    ]
                },
                {
                    text: 'Form',
                    children: [
                        {
                            text: 'Button 按钮',
                            link: '/component/Form/Button/',
                        }
                    ]
                }
            ]
        }
    }),
}