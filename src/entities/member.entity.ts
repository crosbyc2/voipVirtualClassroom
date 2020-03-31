import {
    Entity,
    PrimaryGeneratedColumn,
    Connection,
    Column,
  } from 'typeorm';

@Entity()
  export class Member {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    isProfessor: boolean;

    @Column()
    email: string;

  }

export const memberProvider = [
    {
      provide: 'PLACE',
      useFactory: (connection: Connection) => connection.getRepository(Member),
      inject: ['DATABASE_CONNECTION'],
    },
  ];
