# Developmnt

pasos para desarrollar una aplicación con next.js

1. Levantar la base de datos
   ```
   docker-compose up -d
   ```
2. Reemplazar la url de la base de datos en el archivo .env
3. Ejecutar el seed [Parar crear la base de datos local](http://localhost:3000/api/seed)

   # Prisma comandos

   ```
   npx prisma init
   npx prisma migrate dev
   npx prisma generate
   ```
