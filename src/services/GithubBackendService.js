import axios from "axios";

const GithubBackendService = {};

const baseApiUrl = 'http://localhost:3001';

GithubBackendService.getBranches = () => {
  return axios.get(`${baseApiUrl}/branches`);
}

GithubBackendService.getCommits = () => {
  return axios.get(`${baseApiUrl}/commits`);
}

export default GithubBackendService;