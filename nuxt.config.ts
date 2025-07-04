// 以下這行幫助typescript編譯器找到這個模組的設定型別
/// <reference types="@nuxtjs/google-fonts" /> 

export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  ssr: true,
  nitro: {
    preset: 'static'
  },

  app: {
    //----------- 部屬到github-----------   
    // 如果是生產模式打包時路徑為'S-D-STUDIO'，不是的話為'/'
    baseURL: process.env.NODE_ENV === 'production' ? 'S-D-STUDIO' : '/', 
    // 因github使用Jekyll會自動忽略下底線前綴的資料夾，更改本來assets編譯後的資料夾名稱(預設為_nuxt)
    buildAssetsDir: '/static'
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
    outputDir: 'public',
    fontsDir: '.',
    stylePath: 'fonts/fonts.css',
    fontsPath: 'fonts',
    display: 'swap',
    preconnect: true,
    families: {
      'Inter': [400],
    }
  },

  // 全域登入CSS(每個元件都能載入)
  css: ['~/assets/scss/main.scss'],

})