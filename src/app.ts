import { config } from "../config/config";
import express, { Request, Response } from "express";

const app = express();
async function main() {
  app.listen(config.port, () => {
        console.log("Server running on port 3000 ");
    });
     app.get('/', (req: Request, res: Response) => {
        res.send('Listo para desarrollar cca social media!');
    });
}

main()
    .then(async () => {
        //await prisma.$disconnect();
    })
    .catch(async (e) => {
        console.error(e);
        //await prisma.$disconnect();
        process.exit(1);
    });