# api-rest-typescript-typeorm-mysql

**Api rest simple using Typescript, TypeORM, Mysql and Nodejs**

**This is a simple rest api using typeorm, using its entities and its abstract functions.**

**TypeORM**
TypeORM is an ORM that can run in NodeJS, Browser, Cordova, PhoneGap, Ionic, React Native, NativeScript, Expo, and Electron platforms and can be used with TypeScript and JavaScript (ES5, ES6, ES7, ES8). Its goal is to always support the latest JavaScript features and provide additional features that help you to develop any kind of application that uses databases - from small applications with a few tables to large scale enterprise applications with multiple databases.

**Entity**

Entity is a class that maps to a database table (or collection when using MongoDB). You can create an entity by defining a new class and mark it with @Entity():

```typescript
@Entity()
export class User {
       @PrimaryGeneratedColumn()
       id: number;

       @Column()
       name: string;

       @Column()
       email: string;

       @Column()
       password: string;
}
```

**Abstract Functions.**

```typescript
find(); //Fetch ALL Records

findOne(id); //Fetch Single Record

create(data); //Create Record

merge(data); //Update Record

delete(id); //Remove Records

save(); //  To save changes
```

# Install

**Install**

```console

$ npm install

```

**Run**

```console

$ "tst": "tsc",
$ "build": "tsc",
$ "dev": "tsc-watch --onSuccess \"node dist/index.js\"",
$ "start": "node dist/index.js"

```
