# Developmnt

pasos para desarrollar una aplicación con next.js

1. Levantar la base de datos
   ```
   docker-compose up -d
   ```
2. Reemplazar la url de la base de datos en el archivo .env
3. Ejecutar el comando ```npm i```
4. Ejecutar el comando ```npm run dev```
5. Ejecutar el comando de prisma
```
npx prisma migrate dev
npx prisma generate
```

6. Ejecutar el seed [Parar crear la base de datos local](http://localhost:3000/api/seed)

   # Prisma comandos

   ```
   npx prisma init
   npx prisma migrate dev
   npx prisma generate
   ```
