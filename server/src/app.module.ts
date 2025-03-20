import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
// import { PrismaService } from '../src/prisma.service';
import { WorkstationModule } from './workstation/workstation.module';
import { WorkstationTypeModule } from './workstation-type/workstation-type.module';
import { WorkstationFeaturesModule } from './workstation-features/workstation-features.module';
import { WorkstationAccessModule } from './workstation-access/workstation-access.module';
import { WorkstationPolicyModule } from './workstation-policy/workstation-policy.module';
import { FirebaseService } from './firebase/firebase.service';
// import { FirebaseResolver } from './firebase/firebase.resolver';
import { FirebaseModule } from './firebase/firebase.module';


@Module({
  imports: [WorkstationFeaturesModule, ConfigModule.forRoot(), WorkstationModule, WorkstationTypeModule, WorkstationAccessModule, WorkstationPolicyModule, FirebaseModule],
  controllers: [AppController],
  providers: [AppService, FirebaseService],
})
export class AppModule {}
