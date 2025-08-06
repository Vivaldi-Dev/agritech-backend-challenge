import { Router } from "express";
import { CampaignController } from "../controller/Campaign.controller";

const Campaignrouter = Router();
Campaignrouter.post("/", CampaignController.create); 

export default Campaignrouter;