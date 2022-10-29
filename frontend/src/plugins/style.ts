import { App } from 'vue';

// colors

const colors = {
  mainBlue: "#004b70",
  backgroundBlue: "#B3E5FF",
  accentRed: "#D43939",
  background: "#000000",
}

export default {
  install: (app: App) => {
    app.config.globalProperties.$color = colors
  }
}