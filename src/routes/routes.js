import HomeRoute from "./HomeRoute.js";

export default (app) => {
    app.use(HomeRoute.path,HomeRoute.router)
}