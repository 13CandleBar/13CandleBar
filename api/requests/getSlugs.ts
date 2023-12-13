import { gql } from 'graphql-request';

export const getSlugs = gql`
  query ($locale: I18NLocaleCode) {
    categories(locale: $locale, pagination: { limit: 100 }) {
      data {
        attributes {
          slug
          sequence_number
        }
      }
    }
  }
`;
