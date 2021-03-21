import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection, getConnection, getConnectionOptions } from 'typeorm';
import { FarmSessionModule } from './farm-session/farm-session.module';
import { LootModule } from './loot/loot.module';
import { ZoneModule } from './zone/zone.module';
import { RegionModule } from './region/region.module';
import { LootTableModule } from './loot-table/loot-table.module';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: async () =>
        Object.assign(await getConnectionOptions(), {
          autoLoadEntities: true,
        }),
    }),
    FarmSessionModule,
    LootModule,
    ZoneModule,
    RegionModule,
    LootTableModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private connection: Connection) {}
}
