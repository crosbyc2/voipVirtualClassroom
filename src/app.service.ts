import { Injectable, BadRequestException, Inject } from '@nestjs/common';
import * as nodemailer from 'nodemailer';
import { TwilioService } from './twillio/twillio.service';
import { Room } from './entities/room.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AppService {


  constructor(
    @Inject('ROOM')
    private readonly roomRepo: Repository<Room>,
    private readonly twilio: TwilioService) {

  }
  private readonly transporter =  nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.emailUser,
      pass: process.env.emailPass,
    },
  });


  public async getRoom(id){
    const r = await   this.roomRepo.findOne({
      where : { name : id}
    });
    console.log(r);
  return r;
  }
  public async createSession(roomname, username, filename ) {
    let room  = ({
      name : roomname,
      filename
    } as Room);

    room = await this.roomRepo.save(room);

    const remoteRoom  = await this.twilio.createRoom( room.name );
    

    return {
      remoteRoom,
      room,
      token : this.twilio.grantForRoom(room.name, username, true),
      username
    };

  }

  public sendEmailInvite(to, link) {
    const mailOptions = {
      from: process.env.emailUser,
      to,
      subject: 'Confirm your email to create session!',
      text: link,
    };
    this.transporter.sendMail(mailOptions, (err, info) => {
        if (err) {
          console.log(err);
          throw new BadRequestException(err);
        }
        console.log(info);
    });
  }

  public joinRoom(id: any, name: any) {
    return this.twilio.grantForRoom(id, name, false);
  }

}
