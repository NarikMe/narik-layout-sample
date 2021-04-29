class LayoutResolver {
  Resolve(key) {
    switch (key) {
      case "widget":
        return {
          layout: "",
          layoutUrl: "./src/app/layouts/widget-layout.html",
        };
      case "widget2":
        return {
          layout: "",
          layoutUrl: "./src/app/layouts/widget-layout2.html",
        };

      default:
        break;
    }
  }
}
module.exports = LayoutResolver;
