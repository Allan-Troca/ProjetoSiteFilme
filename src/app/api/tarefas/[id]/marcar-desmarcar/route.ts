import prisma from "@/app/lib/prisma";
import { NextRequest, NextResponse } from "next/server";
  
export async function PUT(
  req: NextRequest,
  { params }: any
) {
  const tarefa = await prisma.tarefa.findFirst({
    where: {
      id: Number(params.id),
    },
  });
  await prisma.tarefa.update({
    where: {
      id: Number(params.id),
    },
    data: {
      concluido: !tarefa?.concluido,
    },
  });
  return NextResponse.json({
    message: "Registro alterado",
  });
}
