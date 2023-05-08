import { Injectable, Inject } from '@nestjs/common';
import GithubAPI from './services/githubService';
import { ConfigService } from '@nestjs/config';

const OWNER = 'Carls13';
const REPO = 'take-home-test';

@Injectable()
export class AppService {
  @Inject(ConfigService)
  public config: ConfigService;
  async getBranches(): Promise<any> {
    const url = `https://api.github.com/repos/${OWNER}/${REPO}/branches`;
    const branchesData = await GithubAPI.getBranches(
      url,
      this.config.get('GITHUB_API_TOKEN'),
    );

    return branchesData;
  }

  async getCommits(): Promise<any> {
    const url = `https://api.github.com/repos/${OWNER}/${REPO}/commits`;
    const branchesData = await GithubAPI.getCommits(
      url,
      this.config.get('GITHUB_API_TOKEN'),
    );

    return branchesData;
  }
}
