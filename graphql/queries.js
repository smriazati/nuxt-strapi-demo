import gql from 'graphql-tag';

export const allArticlesQuery = gql`
    query allArticlesQuery {
        articles {
        id,
        body,
        title,
        slug,
        description,
        date
    }
    }
`
export const singleArticleQuery = gql`
query singleArticleQuery {
	article(id:1) {
    id,
    body,
    title,
    slug,
    description,
    date
  }
}
`