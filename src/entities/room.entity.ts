import {
    Entity,
    PrimaryGeneratedColumn,
    ManyToMany,
    Connection,
    JoinTable,
    Column,
  } from 'typeorm';
import { Member } from './member.entity';

@Entity()
  export class Room {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    filename: string;

    @ManyToMany(
      type => Member)

  @JoinTable()
    members: Member[];

  }

export const roomProvider = [
    {
      provide: 'ROOM',
      useFactory: (connection: Connection) => connection.getRepository(Room),
      inject: ['DATABASE_CONNECTION'],
    },
  ];
