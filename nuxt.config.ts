// 以下這行幫助typescript編譯器找到這個模組的設定型別
/// <reference types="@nuxtjs/google-fonts" /> 

export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  ssr: true,
  nitro: {
    preset: 'static'
  },

  // 設置本地IP，讓外部能夠訪問到自己的電腦
  // devServer: {
  //   host: '192.168.5.12', // 自己的本地IP
  //   port: 3000 // 替換為自己想要的端口號
  // },

  // 取消自動加上前綴(資料夾)路徑名稱，可以直接使用原名稱
  components: [
    {
      path: '~/components',
      pathPrefix: false,
    }
  ],

  app: {
    //----------- 部屬到github-----------   
    // 如果是生產模式打包時路徑為'S-D-STUDIO'，不是的話為'/'
    baseURL: process.env.NODE_ENV === 'production' ? 'S-D-STUDIO' : '/', 
    // 因github使用Jekyll會自動忽略下底線前綴的資料夾，更改本來assets編譯後的資料夾名稱(預設為_nuxt)
    buildAssetsDir: '/static',

    //---------Head資訊------------------
    head: {
      htmlAttrs: {
        lang: 'zh_TW'
      },
      meta: [
        { name: 'charset', content: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
        { name: 'author', content: 'Skyice' },
        { name: 'description', content:'思帝影像 S-D STUDIO，源自「自我導向學習」理念，結合影像專業與成人教育精神，持續跨域合作與探索，為客戶量身打造創新影像方案。' },
        { name: 'keywords', content: 'S-D STUDIO,Film,Colorist,Photography,Advertisement,Art Design,Animation' },
        { property: 'og:title', content: 'S-D STUDIO' },
        { property: 'og:description', content: '思帝影像 S-D STUDIO，源自「自我導向學習」理念，結合影像專業與成人教育精神，持續跨域合作與探索，為客戶量身打造創新影像方案。' },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://www.sdstudiotw.com/' },
        { property: 'og:image', content: 'https://i.postimg.cc/t42nJby6/logo.jpg' },
      ],
      link: [
        { rel: 'icon', href: '/logo_icon.png' }
      ],
      title: 'S-D STUDIO'
    }
  },

  // 模組載入
  modules: [
    '@nuxt/eslint',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxtjs/google-fonts',
  ],

  // 載入google fonts字型
  googleFonts: {
    download: true,
    outputDir: 'public/fonts',
    fontsDir: '.',
    stylePath: 'fonts.css',
    fontsPath: 'fonts',
    display: 'swap',
    preconnect: true,
    families: {
      'Inter': [400],
    }
  },

  // 全域登入CSS(每個元件都能載入)
  css: ['bootstrap/dist/css/bootstrap.min.css','~/assets/scss/main.scss'],
  plugins: [
    // bootstrap的js，要使用裡面model的動態需載入
    { src: '~/plugins/bootstrap.client.ts', mode: 'client'} //僅在client中載入
  ]
})