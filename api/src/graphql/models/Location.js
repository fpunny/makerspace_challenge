import { gql } from 'apollo-server-express';

export const location = gql`
    type Location {
        _id: ID!,
        building: String!,
        room: String!,
        size: Int!,
        population: Int!,
        assets: [String!]
    }
`;