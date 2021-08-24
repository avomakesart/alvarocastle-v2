import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type CertificateInput = {
  title: Scalars['String'];
  issuer: Scalars['String'];
  companyImg: Scalars['String'];
  date: Scalars['String'];
  certId: Scalars['String'];
  certUrl: Scalars['String'];
};

export type Certificates = {
  __typename?: 'Certificates';
  id: Scalars['Float'];
  title: Scalars['String'];
  issuer: Scalars['String'];
  companyImg: Scalars['String'];
  date: Scalars['String'];
  certId: Scalars['String'];
  certUrl: Scalars['String'];
  createdAt: Scalars['String'];
  updatedAt: Scalars['String'];
};

export type Contact = {
  __typename?: 'Contact';
  id: Scalars['Float'];
  fullName: Scalars['String'];
  subject: Scalars['String'];
  phone: Scalars['String'];
  message: Scalars['String'];
  createdAt: Scalars['String'];
  updatedAt: Scalars['String'];
};

export type ContactInput = {
  fullname: Scalars['String'];
  subject: Scalars['String'];
  phone: Scalars['String'];
  message: Scalars['String'];
};

export type Experience = {
  __typename?: 'Experience';
  id: Scalars['Float'];
  company: Scalars['String'];
  position: Scalars['String'];
  period: Scalars['String'];
  description: Scalars['String'];
  createdAt: Scalars['String'];
  updatedAt: Scalars['String'];
};

export type ExperienceInput = {
  company: Scalars['String'];
  position: Scalars['String'];
  period: Scalars['String'];
  description: Scalars['String'];
};

export type FieldError = {
  __typename?: 'FieldError';
  field: Scalars['String'];
  message: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createCertificate: Certificates;
  updateCertificate?: Maybe<Certificates>;
  deleteCertificate: Scalars['Boolean'];
  createContact: Contact;
  updateContact?: Maybe<Contact>;
  deleteContact: Scalars['Boolean'];
  createExperience: Experience;
  updateExperience?: Maybe<Experience>;
  deleteExperience: Scalars['Boolean'];
  vote: Scalars['Boolean'];
  createProject: Projects;
  updateProject?: Maybe<Projects>;
  deleteProject: Scalars['Boolean'];
  createSkill: Skills;
  updateSkill?: Maybe<Skills>;
  deleteSkill: Scalars['Boolean'];
  changePassword: UserResponse;
  forgotPassword: Scalars['Boolean'];
  register: UserResponse;
  login: UserResponse;
  logout: Scalars['Boolean'];
  updateUser?: Maybe<User>;
};


export type MutationCreateCertificateArgs = {
  input: CertificateInput;
};


export type MutationUpdateCertificateArgs = {
  certUrl: Scalars['String'];
  certId: Scalars['String'];
  date: Scalars['String'];
  companyImg: Scalars['String'];
  issuer: Scalars['String'];
  title: Scalars['String'];
  id: Scalars['Int'];
};


export type MutationDeleteCertificateArgs = {
  id: Scalars['Int'];
};


export type MutationCreateContactArgs = {
  input: ContactInput;
};


export type MutationUpdateContactArgs = {
  input: ContactInput;
  id: Scalars['Int'];
};


export type MutationDeleteContactArgs = {
  id: Scalars['Int'];
};


export type MutationCreateExperienceArgs = {
  input: ExperienceInput;
};


export type MutationUpdateExperienceArgs = {
  input: ExperienceInput;
  id: Scalars['Int'];
};


export type MutationDeleteExperienceArgs = {
  id: Scalars['Int'];
};


export type MutationVoteArgs = {
  value: Scalars['Int'];
  projectId: Scalars['Int'];
};


export type MutationCreateProjectArgs = {
  input: ProjectInput;
};


export type MutationUpdateProjectArgs = {
  input: ProjectInput;
  id: Scalars['Int'];
};


export type MutationDeleteProjectArgs = {
  id: Scalars['Int'];
};


export type MutationCreateSkillArgs = {
  input: SkillInput;
};


export type MutationUpdateSkillArgs = {
  input: SkillInput;
  id: Scalars['Int'];
};


export type MutationDeleteSkillArgs = {
  id: Scalars['Int'];
};


export type MutationChangePasswordArgs = {
  newPassword: Scalars['String'];
  token: Scalars['String'];
};


export type MutationForgotPasswordArgs = {
  email: Scalars['String'];
};


export type MutationRegisterArgs = {
  options: UsernamePasswordInput;
};


export type MutationLoginArgs = {
  password: Scalars['String'];
  usernameOrEmail: Scalars['String'];
};


export type MutationUpdateUserArgs = {
  input: UserInput;
  id: Scalars['Int'];
};

export type PaginatedCertificates = {
  __typename?: 'PaginatedCertificates';
  certificates: Array<Certificates>;
  hasMore: Scalars['Boolean'];
};

export type PaginatedContact = {
  __typename?: 'PaginatedContact';
  contact: Array<Contact>;
  hasMore: Scalars['Boolean'];
};

export type PaginatedExperience = {
  __typename?: 'PaginatedExperience';
  experience: Array<Experience>;
  hasMore: Scalars['Boolean'];
};

export type PaginatedProjects = {
  __typename?: 'PaginatedProjects';
  projects: Array<Projects>;
  hasMore: Scalars['Boolean'];
};

export type PaginatedSkills = {
  __typename?: 'PaginatedSkills';
  skills: Array<Skills>;
  hasMore: Scalars['Boolean'];
};

export type ProjectInput = {
  title: Scalars['String'];
  headline: Scalars['String'];
  headlineImage: Scalars['String'];
  description: Scalars['String'];
  featuredImage: Scalars['String'];
  category: Scalars['String'];
  techStack: Scalars['String'];
  deliverables: Scalars['String'];
};

export type Projects = {
  __typename?: 'Projects';
  id: Scalars['Float'];
  title: Scalars['String'];
  headline: Scalars['String'];
  headlineImage: Scalars['String'];
  description: Scalars['String'];
  featuredImage: Scalars['String'];
  category: Scalars['String'];
  techStack: Scalars['String'];
  deliverables: Scalars['String'];
  points: Scalars['Float'];
  voteStatus?: Maybe<Scalars['Int']>;
  creatorId: Scalars['Float'];
  createdAt: Scalars['String'];
  updatedAt: Scalars['String'];
  textSnippet: Scalars['String'];
  creator: User;
};

export type Query = {
  __typename?: 'Query';
  certificates: PaginatedCertificates;
  certificate?: Maybe<Certificates>;
  contacts: PaginatedContact;
  contact?: Maybe<Contact>;
  experiences: PaginatedExperience;
  experience?: Maybe<Experience>;
  projects: PaginatedProjects;
  project?: Maybe<Projects>;
  skills: PaginatedSkills;
  skill?: Maybe<Skills>;
  me?: Maybe<User>;
};


export type QueryCertificatesArgs = {
  cursor?: Maybe<Scalars['String']>;
  limit: Scalars['Int'];
};


export type QueryCertificateArgs = {
  id: Scalars['Int'];
};


export type QueryContactsArgs = {
  cursor?: Maybe<Scalars['String']>;
  limit: Scalars['Int'];
};


export type QueryContactArgs = {
  id: Scalars['Int'];
};


export type QueryExperiencesArgs = {
  cursor?: Maybe<Scalars['String']>;
  limit: Scalars['Int'];
};


export type QueryExperienceArgs = {
  id: Scalars['Int'];
};


export type QueryProjectsArgs = {
  cursor?: Maybe<Scalars['String']>;
  limit: Scalars['Int'];
};


export type QueryProjectArgs = {
  id: Scalars['Int'];
};


export type QuerySkillsArgs = {
  cursor?: Maybe<Scalars['String']>;
  limit: Scalars['Int'];
};


export type QuerySkillArgs = {
  id: Scalars['Int'];
};

export type SkillInput = {
  title: Scalars['String'];
  image: Scalars['String'];
  category: Scalars['String'];
};

export type Skills = {
  __typename?: 'Skills';
  id: Scalars['Float'];
  title: Scalars['String'];
  image: Scalars['String'];
  category: Scalars['String'];
  createdAt: Scalars['String'];
  updatedAt: Scalars['String'];
};

export type User = {
  __typename?: 'User';
  id: Scalars['Float'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  email: Scalars['String'];
  username: Scalars['String'];
  password: Scalars['String'];
  role: Scalars['String'];
  pictureUrl: Scalars['String'];
  bio?: Maybe<Scalars['String']>;
  createdAt: Scalars['String'];
  updatedAt: Scalars['String'];
};

export type UserInput = {
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  email: Scalars['String'];
  username: Scalars['String'];
  pictureUrl: Scalars['String'];
  bio: Scalars['String'];
};

export type UserResponse = {
  __typename?: 'UserResponse';
  errors?: Maybe<Array<FieldError>>;
  user?: Maybe<User>;
};

export type UsernamePasswordInput = {
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  email: Scalars['String'];
  username: Scalars['String'];
  password: Scalars['String'];
};

export type RegularErrorFragment = { __typename?: 'FieldError', field: string, message: string };

export type RegularUserFragment = { __typename?: 'User', id: number, firstName: string, lastName: string, username: string, email: string, bio?: Maybe<string>, pictureUrl: string, role: string, createdAt: string, updatedAt: string };

export type RegularUserResponseFragment = { __typename?: 'UserResponse', errors?: Maybe<Array<{ __typename?: 'FieldError', field: string, message: string }>>, user?: Maybe<{ __typename?: 'User', id: number, firstName: string, lastName: string, username: string, email: string, bio?: Maybe<string>, pictureUrl: string, role: string, createdAt: string, updatedAt: string }> };

export type ChangePasswordMutationVariables = Exact<{
  token: Scalars['String'];
  newPassword: Scalars['String'];
}>;


export type ChangePasswordMutation = { __typename?: 'Mutation', changePassword: { __typename?: 'UserResponse', errors?: Maybe<Array<{ __typename?: 'FieldError', field: string, message: string }>>, user?: Maybe<{ __typename?: 'User', id: number, firstName: string, lastName: string, username: string, email: string, bio?: Maybe<string>, pictureUrl: string, role: string, createdAt: string, updatedAt: string }> } };

export type ForgotPasswordMutationVariables = Exact<{
  email: Scalars['String'];
}>;


export type ForgotPasswordMutation = { __typename?: 'Mutation', forgotPassword: boolean };

export type LoginMutationVariables = Exact<{
  usernameOrEmail: Scalars['String'];
  password: Scalars['String'];
}>;


export type LoginMutation = { __typename?: 'Mutation', login: { __typename?: 'UserResponse', errors?: Maybe<Array<{ __typename?: 'FieldError', field: string, message: string }>>, user?: Maybe<{ __typename?: 'User', id: number, firstName: string, lastName: string, username: string, email: string, bio?: Maybe<string>, pictureUrl: string, role: string, createdAt: string, updatedAt: string }> } };

export type LogoutMutationVariables = Exact<{ [key: string]: never; }>;


export type LogoutMutation = { __typename?: 'Mutation', logout: boolean };

export type RegisterMutationVariables = Exact<{
  options: UsernamePasswordInput;
}>;


export type RegisterMutation = { __typename?: 'Mutation', register: { __typename?: 'UserResponse', errors?: Maybe<Array<{ __typename?: 'FieldError', field: string, message: string }>>, user?: Maybe<{ __typename?: 'User', id: number, firstName: string, lastName: string, username: string, email: string, bio?: Maybe<string>, pictureUrl: string, role: string, createdAt: string, updatedAt: string }> } };

export type UpdateUserMutationVariables = Exact<{
  id: Scalars['Int'];
  input: UserInput;
}>;


export type UpdateUserMutation = { __typename?: 'Mutation', updateUser?: Maybe<{ __typename?: 'User', id: number, firstName: string, lastName: string, email: string, username: string, pictureUrl: string, bio?: Maybe<string> }> };

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = { __typename?: 'Query', me?: Maybe<{ __typename?: 'User', id: number, firstName: string, lastName: string, username: string, email: string, bio?: Maybe<string>, pictureUrl: string, role: string, createdAt: string, updatedAt: string }> };

export type ProjectsQueryVariables = Exact<{
  limit: Scalars['Int'];
  cursor?: Maybe<Scalars['String']>;
}>;


export type ProjectsQuery = { __typename?: 'Query', projects: { __typename?: 'PaginatedProjects', hasMore: boolean, projects: Array<{ __typename?: 'Projects', id: number, title: string, headline: string, headlineImage: string, featuredImage: string, category: string, techStack: string, deliverables: string, description: string, points: number, voteStatus?: Maybe<number>, creatorId: number, createdAt: string, updatedAt: string, creator: { __typename?: 'User', id: number, firstName: string, lastName: string, email: string, pictureUrl: string } }> } };

export const RegularErrorFragmentDoc = gql`
    fragment RegularError on FieldError {
  field
  message
}
    `;
export const RegularUserFragmentDoc = gql`
    fragment RegularUser on User {
  id
  firstName
  lastName
  username
  email
  bio
  pictureUrl
  role
  createdAt
  updatedAt
}
    `;
export const RegularUserResponseFragmentDoc = gql`
    fragment RegularUserResponse on UserResponse {
  errors {
    ...RegularError
  }
  user {
    ...RegularUser
  }
}
    ${RegularErrorFragmentDoc}
${RegularUserFragmentDoc}`;
export const ChangePasswordDocument = gql`
    mutation ChangePassword($token: String!, $newPassword: String!) {
  changePassword(token: $token, newPassword: $newPassword) {
    ...RegularUserResponse
  }
}
    ${RegularUserResponseFragmentDoc}`;
export type ChangePasswordMutationFn = Apollo.MutationFunction<ChangePasswordMutation, ChangePasswordMutationVariables>;

/**
 * __useChangePasswordMutation__
 *
 * To run a mutation, you first call `useChangePasswordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useChangePasswordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [changePasswordMutation, { data, loading, error }] = useChangePasswordMutation({
 *   variables: {
 *      token: // value for 'token'
 *      newPassword: // value for 'newPassword'
 *   },
 * });
 */
export function useChangePasswordMutation(baseOptions?: Apollo.MutationHookOptions<ChangePasswordMutation, ChangePasswordMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ChangePasswordMutation, ChangePasswordMutationVariables>(ChangePasswordDocument, options);
      }
export type ChangePasswordMutationHookResult = ReturnType<typeof useChangePasswordMutation>;
export type ChangePasswordMutationResult = Apollo.MutationResult<ChangePasswordMutation>;
export type ChangePasswordMutationOptions = Apollo.BaseMutationOptions<ChangePasswordMutation, ChangePasswordMutationVariables>;
export const ForgotPasswordDocument = gql`
    mutation ForgotPassword($email: String!) {
  forgotPassword(email: $email)
}
    `;
export type ForgotPasswordMutationFn = Apollo.MutationFunction<ForgotPasswordMutation, ForgotPasswordMutationVariables>;

/**
 * __useForgotPasswordMutation__
 *
 * To run a mutation, you first call `useForgotPasswordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useForgotPasswordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [forgotPasswordMutation, { data, loading, error }] = useForgotPasswordMutation({
 *   variables: {
 *      email: // value for 'email'
 *   },
 * });
 */
export function useForgotPasswordMutation(baseOptions?: Apollo.MutationHookOptions<ForgotPasswordMutation, ForgotPasswordMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ForgotPasswordMutation, ForgotPasswordMutationVariables>(ForgotPasswordDocument, options);
      }
export type ForgotPasswordMutationHookResult = ReturnType<typeof useForgotPasswordMutation>;
export type ForgotPasswordMutationResult = Apollo.MutationResult<ForgotPasswordMutation>;
export type ForgotPasswordMutationOptions = Apollo.BaseMutationOptions<ForgotPasswordMutation, ForgotPasswordMutationVariables>;
export const LoginDocument = gql`
    mutation Login($usernameOrEmail: String!, $password: String!) {
  login(usernameOrEmail: $usernameOrEmail, password: $password) {
    ...RegularUserResponse
  }
}
    ${RegularUserResponseFragmentDoc}`;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      usernameOrEmail: // value for 'usernameOrEmail'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, options);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const LogoutDocument = gql`
    mutation Logout {
  logout
}
    `;
export type LogoutMutationFn = Apollo.MutationFunction<LogoutMutation, LogoutMutationVariables>;

/**
 * __useLogoutMutation__
 *
 * To run a mutation, you first call `useLogoutMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLogoutMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [logoutMutation, { data, loading, error }] = useLogoutMutation({
 *   variables: {
 *   },
 * });
 */
export function useLogoutMutation(baseOptions?: Apollo.MutationHookOptions<LogoutMutation, LogoutMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LogoutMutation, LogoutMutationVariables>(LogoutDocument, options);
      }
export type LogoutMutationHookResult = ReturnType<typeof useLogoutMutation>;
export type LogoutMutationResult = Apollo.MutationResult<LogoutMutation>;
export type LogoutMutationOptions = Apollo.BaseMutationOptions<LogoutMutation, LogoutMutationVariables>;
export const RegisterDocument = gql`
    mutation Register($options: UsernamePasswordInput!) {
  register(options: $options) {
    ...RegularUserResponse
  }
}
    ${RegularUserResponseFragmentDoc}`;
export type RegisterMutationFn = Apollo.MutationFunction<RegisterMutation, RegisterMutationVariables>;

/**
 * __useRegisterMutation__
 *
 * To run a mutation, you first call `useRegisterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegisterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registerMutation, { data, loading, error }] = useRegisterMutation({
 *   variables: {
 *      options: // value for 'options'
 *   },
 * });
 */
export function useRegisterMutation(baseOptions?: Apollo.MutationHookOptions<RegisterMutation, RegisterMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RegisterMutation, RegisterMutationVariables>(RegisterDocument, options);
      }
export type RegisterMutationHookResult = ReturnType<typeof useRegisterMutation>;
export type RegisterMutationResult = Apollo.MutationResult<RegisterMutation>;
export type RegisterMutationOptions = Apollo.BaseMutationOptions<RegisterMutation, RegisterMutationVariables>;
export const UpdateUserDocument = gql`
    mutation UpdateUser($id: Int!, $input: UserInput!) {
  updateUser(id: $id, input: $input) {
    id
    firstName
    lastName
    email
    username
    pictureUrl
    bio
  }
}
    `;
export type UpdateUserMutationFn = Apollo.MutationFunction<UpdateUserMutation, UpdateUserMutationVariables>;

/**
 * __useUpdateUserMutation__
 *
 * To run a mutation, you first call `useUpdateUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateUserMutation, { data, loading, error }] = useUpdateUserMutation({
 *   variables: {
 *      id: // value for 'id'
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateUserMutation(baseOptions?: Apollo.MutationHookOptions<UpdateUserMutation, UpdateUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateUserMutation, UpdateUserMutationVariables>(UpdateUserDocument, options);
      }
export type UpdateUserMutationHookResult = ReturnType<typeof useUpdateUserMutation>;
export type UpdateUserMutationResult = Apollo.MutationResult<UpdateUserMutation>;
export type UpdateUserMutationOptions = Apollo.BaseMutationOptions<UpdateUserMutation, UpdateUserMutationVariables>;
export const MeDocument = gql`
    query Me {
  me {
    ...RegularUser
  }
}
    ${RegularUserFragmentDoc}`;

/**
 * __useMeQuery__
 *
 * To run a query within a React component, call `useMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeQuery({
 *   variables: {
 *   },
 * });
 */
export function useMeQuery(baseOptions?: Apollo.QueryHookOptions<MeQuery, MeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MeQuery, MeQueryVariables>(MeDocument, options);
      }
export function useMeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MeQuery, MeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MeQuery, MeQueryVariables>(MeDocument, options);
        }
export type MeQueryHookResult = ReturnType<typeof useMeQuery>;
export type MeLazyQueryHookResult = ReturnType<typeof useMeLazyQuery>;
export type MeQueryResult = Apollo.QueryResult<MeQuery, MeQueryVariables>;
export const ProjectsDocument = gql`
    query Projects($limit: Int!, $cursor: String) {
  projects(limit: $limit, cursor: $cursor) {
    hasMore
    projects {
      id
      title
      headline
      headlineImage
      featuredImage
      category
      techStack
      deliverables
      description
      points
      voteStatus
      creatorId
      creator {
        id
        firstName
        lastName
        email
        pictureUrl
      }
      createdAt
      updatedAt
    }
  }
}
    `;

/**
 * __useProjectsQuery__
 *
 * To run a query within a React component, call `useProjectsQuery` and pass it any options that fit your needs.
 * When your component renders, `useProjectsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProjectsQuery({
 *   variables: {
 *      limit: // value for 'limit'
 *      cursor: // value for 'cursor'
 *   },
 * });
 */
export function useProjectsQuery(baseOptions: Apollo.QueryHookOptions<ProjectsQuery, ProjectsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ProjectsQuery, ProjectsQueryVariables>(ProjectsDocument, options);
      }
export function useProjectsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ProjectsQuery, ProjectsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ProjectsQuery, ProjectsQueryVariables>(ProjectsDocument, options);
        }
export type ProjectsQueryHookResult = ReturnType<typeof useProjectsQuery>;
export type ProjectsLazyQueryHookResult = ReturnType<typeof useProjectsLazyQuery>;
export type ProjectsQueryResult = Apollo.QueryResult<ProjectsQuery, ProjectsQueryVariables>;