import { Controller } from '@nestjs/common';
import { AppService } from './app.service';
import { VideoService } from './video/video.service';
import { PrismaService } from './prisma.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly videoService: VideoService,
    private readonly prisma: PrismaService,
  ) {}
}
