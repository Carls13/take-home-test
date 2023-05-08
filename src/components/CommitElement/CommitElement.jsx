import {
  CommitLink,
  CommitContainer,
  CommitDescription,
  AuthorContainer,
  AuthorAvatar,
  AuthorName,
  Sha7,
} from "./styles";

export const CommitElement = ({ commit }) => {
  const { sha7, full_url, commit: commitDetails } = commit;

  const { message, author, avatar } = commitDetails;

  return (
    <CommitLink href={full_url} target="_blank">
      <CommitContainer>
        <CommitDescription>{message}</CommitDescription>
        <AuthorContainer>
          <AuthorAvatar src={avatar} alt={author} />
          <AuthorName>{author}</AuthorName>
        </AuthorContainer>
        <Sha7>{sha7}</Sha7>
      </CommitContainer>
    </CommitLink>
  );
};
