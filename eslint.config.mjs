// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(
  // Your custom configs here

  // 允許template下可以多行元素並寫，不只有單一個div
  {
    rules: {
      'vue/no-multiple-template-root': 'off'
    }
  }
)
