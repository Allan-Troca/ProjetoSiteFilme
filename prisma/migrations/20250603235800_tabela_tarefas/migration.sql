-- CreateTable
CREATE TABLE "tarefas" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "conteudo" TEXT NOT NULL,
    "usuario_id" INTEGER NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL,
    "deleted_at" DATETIME,
    CONSTRAINT "tarefas_usuario_id_fkey" FOREIGN KEY ("usuario_id") REFERENCES "usuarios" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
