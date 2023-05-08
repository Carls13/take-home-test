import { useEffect, useState } from "react";
import GithubBackendService from "../../services/GithubBackendService";
import { CommitElement } from "../../components/CommitElement/CommitElement";

import { HomeContainer, PageIndicator, Select, Option, HistoryLabel, DayContainer, DayLabel } from './styles';

export const HomeView = () => {
  const [branches, setBranches] = useState([]);
  const [loadingBranches, setLoadingBranches] = useState(true);
  const [error, setError] = useState(null);
  const [selectedBranch, setSelectedBranch] = useState(null);

  const [commits, setCommits] = useState({});
  const [loadingCommits, setLoadingCommits] = useState(false);

  useEffect(() => {
    GithubBackendService.getBranches()
      .then((response) => {
        const branchesData = response.data;
        setBranches(branchesData);

        setSelectedBranch(branchesData[0]?.name);
      })
      .catch(() => {})
      .finally(() => {
        setLoadingBranches(false);
      });
  }, []);

  useEffect(() => {
    if (selectedBranch) {
      GithubBackendService.getCommits()
        .then((response) => {
          const commitsData = response.data;

          const groupedData = commitsData?.reduce((group, element) => {
            const parsedDate = element.commit?.date?.split("T")[0];

            group[parsedDate] = group[parsedDate] || [];
            group[parsedDate].push(element);

            return group;
          }, {});

          setCommits(groupedData);
        })
        .catch(() => {})
        .finally(() => {
          setLoadingBranches(false);
        });
    }
  }, [selectedBranch]);

  const handleBranchChange = (e) => {
    const { value } = e.target;

    setSelectedBranch(value);
  };

  const commitsEntries = Object.entries(commits);

  return (
    <HomeContainer>
      <PageIndicator>
        Loading commits from Carls13's take-home-test's repository
      </PageIndicator>

      <Select onChange={handleBranchChange} value={selectedBranch}>
        <Option value="">Choose a branch</Option>
        {
          branches.map((branch, i) => {
            const { name } = branch;
            return (
              <Option value={name} key={i}>{name}</Option>
            )
          })
        }
      </Select>

      <HistoryLabel>History:</HistoryLabel>

      {commitsEntries.map((day) => {
        const dayLabel = day[0];

        const commitsOfTheDay = day[1];

        return (
          <DayContainer>
            <DayLabel>{dayLabel}</DayLabel>
            {
                commitsOfTheDay.map((commit, i) => {
                    return <CommitElement key={i} commit={commit} />;
                })
            } 
          </DayContainer>
        );
      })}
    </HomeContainer>
  );
};
