import { Injectable } from '@nestjs/common';
import GithubAPI from './services/githubService';

const OWNER = 'Carls13';
const REPO = 'take-home-test';

@Injectable()
export class AppService {
  async getBranches(): Promise<any> {
    const url = `https://api.github.com/repos/${OWNER}/${REPO}/branches`;
    const branchesData = await GithubAPI.getBranches(url);

    return branchesData;
  }

  async getCommits(): Promise<any> {
    const url = `https://api.github.com/repos/${OWNER}/${REPO}/commits`;
    const branchesData = await GithubAPI.getCommits(url);

    return branchesData;
  }
}
