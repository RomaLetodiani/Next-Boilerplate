import { logger } from "@/lib/logger";
import { db } from "../../db";

const users = ["roman.letodiani03@gmail.com"];

export const seedUsers = async () => {
  for (const email of users) {
    await db.user.create({
      data: { email: email, name: `${email.split("@")[0]}` },
    });
  }
  logger.info("Users Created");
};
