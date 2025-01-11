import { logger } from "@/utils/logger";
import { db } from "../db";
import { seedUsers } from "./seeds/users";

async function runSeed() {
  await seedUsers();
}

await runSeed().finally(() => {
  db.$disconnect()
    .then(() => {
      logger.info("Disconnected from database");
    })
    .catch((error: unknown) => {
      logger.error("Error disconnecting from database", error);
    });
});
