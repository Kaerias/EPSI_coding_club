import type { App } from "vue";
import WinModalViewComponent from "@/components/WinModal.vue";



export function registerComponents(app: App) {
  app
    .component("winModal-view", WinModalViewComponent)
  //   .component("navBar-view", NavBarViewComponent)
  //   .component("devisFichier-view", EditerDevisModule)
  //   .component("ressource-view", Ressource)
  //   .component("snackBar-view", SnackBarViewComponent)
  //   .component("changeLog-view", ChangeLogViewComponent)
  //   .component("projectSelecter-view", ProjectViewComponent)
  //   .component("TitleBarComponent-view", TitleBarComponent)
}
