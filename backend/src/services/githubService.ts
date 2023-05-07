/* eslint-disable prettier/prettier */
import axios from 'axios';

console.log(process.env)

const TOKEN = process.env.GITHUB_API_TOKEN;

const getCommits = async (url: string) => {
  const fetchOptions = {
    method: 'GET',
    headers: {
      Accept: 'application/vnd.github+json',
      'X-GitHub-Api-Version': '2022-11-28',
      Authorization: `Bearer ${TOKEN}`,
    },
  };

  try {
    const response = await axios.get(url, fetchOptions);
    const data = await response.data;

    if (response.status != 200) {
      return { error: true, ...data };
    }

    return data.map((item: any) => ({
      sha: item.sha,
      sha7: item.sha.slice(0, 7),
      full_url: item.html_url,
      verified: item.commit?.verification?.verified ?? false,
      commit: {
        message: item.commit.message,
        author: item.author?.login ?? item.commit.author.name,
        avatar: item.author?.avatar_url ?? null,
        date: item.commit.author.date,
      },
    }));
  } catch (error) {
    console.log(error);
  }
};

const getBranches = async (url: string) => {
  const fetchOptions = {
    method: 'GET',
    headers: {
      Accept: 'application/vnd.github+json',
      'X-GitHub-Api-Version': '2022-11-28',
      Authorization: `Bearer ${TOKEN}`,
    },
  };

  const response = await axios.get(url, fetchOptions);
  return response.data;
};

export default {
  getBranches,
  getCommits,
};
