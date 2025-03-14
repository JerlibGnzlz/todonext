import { PrismaClient } from "@prisma/client";

const prisma = (() => {
    const globalForPrisma = globalThis as unknown as { prisma?: PrismaClient };

    if (!globalForPrisma.prisma) {
        globalForPrisma.prisma = new PrismaClient();
    }

    return globalForPrisma.prisma;
})();

export default prisma;
