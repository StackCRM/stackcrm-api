import express from 'express';
import { prisma } from '../prisma';

const router = express.Router();

router.get('/', async (_, res) => {
  const members = await prisma.member.findMany({ include: { org: true } });
  res.json(members);
});

export default router;
