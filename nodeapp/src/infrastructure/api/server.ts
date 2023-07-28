import { app } from "./express";
import dotenv from "dotenv";
import { kafkaConsumer } from "../kafka/kafka.consumer";
import EventHub from "../../events/event.hub";

dotenv.config();
const port: number = Number(process.env.PORT) || 3003;

kafkaConsumer().catch(console.error);
EventHub.registerAllHandlers();

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
