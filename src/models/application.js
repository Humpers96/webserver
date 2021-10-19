import Express from 'express';

export default class Application
{
    constructor(root, routers, static_path)
    {
        this.root = root;
        this.routers = routers;
        this.static_path = static_path;
    }

    init()
    {
        this.app = Express();
        this.app.use(Express.static(this.static_path));

        this.routers.forEach(router => {
            this.app.use("/", router);
        });
    }

    app()
    {
        return this.app;
    }
}