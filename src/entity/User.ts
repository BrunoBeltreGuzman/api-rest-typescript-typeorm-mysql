import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
       constructor() {}
       @PrimaryGeneratedColumn()
       id: number;

       @Column()
       name: string;

       @Column()
       email: string;

       @Column()
       password: string;
}
