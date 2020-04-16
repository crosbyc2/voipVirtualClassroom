import { Controller, Get, Post, Param, Query, UseInterceptors, UploadedFile, NotFoundException, Res} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { AppService } from './app.service';
var stream = require('stream');

@Controller()
export class AppController {

  private tempHost = [];

  constructor(private readonly appService: AppService) {}

  @Get('room/:id')
  public  joinRoom(@Param('id') id , @Query('name') name){
    console.log({ token :  this.appService.joinRoom(id, name), 
      room :  this.appService.getRoom(id) })

    return { token :  this.appService.joinRoom(id, name), 
      room :  this.appService.getRoom(id) };
  }

  @Post('setup')
  @UseInterceptors(FileInterceptor('doc'))
  public createRoom(@UploadedFile() file){
    const name = Math.random().toString(36).substring(7);
    file.originalname = name;
    this.tempHost.push(file);
    console.log(file)
    return this.appService.createSession(name, "Host", file.originalname)
  }

  @Get('file/:name')
  public getFile(@Param('name') name, @Res() res){
    console.log(name);
    console.log(this.tempHost)
    const file = this.tempHost.find( (f) =>{
      if(f.originalname === name){
        return f;
      }
    } )

    if(!file){
      throw new NotFoundException();
    }
    
    res.setHeader('Content-type', file.mimetype);
    res.setHeader('Content-Length', file.size);

    res.end(file.buffer);
  }

}
