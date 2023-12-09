FROM node:20


WORKDIR /myapp
COPY . .
RUN npm install 

# para ejecutar varios comando
# CMD [ "executable" ]

# para ejecutar 1 comando
CMD npm start