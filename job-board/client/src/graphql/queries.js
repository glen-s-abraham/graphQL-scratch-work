import { request, gql } from "graphql-request";
const GRAPHQL_URL = "http://localhost:9000/graphql";

export const getJobs = async () => {
  const query = gql`
    query {
      jobs {
        id
        title
        description
        company {
          name
        }
      }
    }
  `;
  const { jobs } = await request(GRAPHQL_URL, query);
  return jobs;
};

export const getJobById = async (id) => {
  const query = gql`
    query JobQuery($id: ID!) {
      job(id: $id) {
        id
        title
        company {
          id
          name
        }
        description
      }
    }
  `;
  const params = { id };
  const { job } = await request(GRAPHQL_URL, query, params);
  return job;
};

export const getCompanyById = async (id) => {
  const query = gql`
    query CompanyQuery($id: ID!) {
      company(id: $id) {
        id
        name
        description
      }
    }
  `;
  const params = { id };
  const { company } = await request(GRAPHQL_URL, query, params);
  return company;
};
