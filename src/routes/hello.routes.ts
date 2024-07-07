import { Request, Response, Router } from "express";


const helloRouter = Router();

// Define router paths

helloRouter.get("/", (req: Request, res: Response)=> {
    res.json({"data": "Server is Live!!!"});
});

export default helloRouter;