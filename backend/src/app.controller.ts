import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('branches')
  getBranches(): any {
    return this.appService.getBranches();
  }

  @Get('commits')
  getCommits(): any {
    return this.appService.getCommits();
  }
}
