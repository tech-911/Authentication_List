import prisma from "../../../prisma";

export const connectToDatabase = async () => {
  try {
    await prisma.$connect;
  } catch (error) {
    console.log(error);
    throw new Error("Unable to Connect to Database");
  }
};
export const disconnectFromDatabase = async () => {
  await prisma.$disconnect;
};
