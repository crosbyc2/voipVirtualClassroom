import { Module } from '@nestjs/common';
import { TwilioService } from './twillio.service';

@Module({
    providers : [ TwilioService ],
    exports : [ TwilioService ] 
})
export class TwillioModule {
    
}
