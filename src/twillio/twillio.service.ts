import { Injectable, BadRequestException } from '@nestjs/common';
// tslint:disable-next-line: no-var-requires
const client = require('twilio')(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_API_TKN);
const AccessToken = require('twilio').jwt.AccessToken;
const VideoGrant = AccessToken.VideoGrant;

@Injectable()
export class TwilioService {

  private readonly twillio = client;

  public createRoom(id) {
  return client.video.rooms.create({uniqueName: id});
  }

  public grantForRoom(rid, identity, host) {
    const token = new AccessToken(process.env.TWILIO_ACCOUNT_SID , process.env.TWILIO_API_KEY , process.env.TWILIO_API_SECRET);
      console.log("Grant for room: ", rid )
      token.addGrant(new VideoGrant({
        room : rid
      }));
    

    token.identity = identity;
    const t = token.toJwt();
    console.log(t);
    return t;
  }

  }
