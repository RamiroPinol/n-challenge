import { Injectable } from '@nestjs/common';
import { Video, Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class VideoService {
  constructor(private prisma: PrismaService) {}

  async create(data: Prisma.VideoCreateInput): Promise<Video> {
    return this.prisma.video.create({
      data,
    });
  }

  async findAll(): Promise<Video[]> {
    return this.prisma.video.findMany();
  }

  async findOne(where: Prisma.VideoWhereUniqueInput): Promise<Video | null> {
    return this.prisma.video.findUnique({
      where,
    });
  }

  async update(params: {
    where: Prisma.VideoWhereUniqueInput;
    data: Prisma.VideoUpdateInput;
  }): Promise<Video> {
    const { where, data } = params;
    return this.prisma.video.update({
      data,
      where,
    });
  }

  async remove(where: Prisma.VideoWhereUniqueInput): Promise<Video> {
    return this.prisma.video.delete({
      where,
    });
  }
}
