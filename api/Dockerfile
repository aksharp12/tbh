FROM public.ecr.aws/docker/library/node:latest
WORKDIR /usr/src/app
COPY package.json .
COPY node_modules ./node_modules
COPY /dist ./dist
COPY .env ./.env
COPY lineleap.json ./lineleap.json
EXPOSE 3000
CMD ["node", "dist/app.js"]
