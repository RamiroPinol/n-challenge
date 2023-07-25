import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { VideoService } from './video.service';
import { Video } from '@prisma/client';

@Controller('videos')
export class VideoController {
  constructor(private readonly videoService: VideoService) {}

  @Post()
  async create(
    @Body() videoData: { name: string; url: string },
  ): Promise<Video> {
    const { name, url } = videoData;

    return this.videoService.create({
      name,
      url,
    });
  }

  @Get()
  async findAll(): Promise<Video[]> {
    return this.videoService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Video | null> {
    return this.videoService.findOne({ id: Number(id) });
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() videoData: { name: string; url: string },
  ): Promise<Video> {
    const { name, url } = videoData;
    return this.videoService.update({
      where: { id: Number(id) },
      data: { name, url },
    });
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<Video> {
    return this.videoService.remove({ id: Number(id) });
  }
}
