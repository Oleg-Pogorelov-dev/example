import { UUID } from 'crypto';

export type User = {
  id: string;
  firstName: string;
  secondName: string;
  lastName: string;
  dt: Date;
  login: string;
  name: string;
  snils: string;
  profiles: UserProfile[];
};

export type UserProfile = {
  admission: boolean;
  deptID: UUID;
  deptName: string;
  deptPath: string;
  employeeId: UUID;
  post: string;
  postID: string;
  profileID: UUID;
  token: UUID;
  userProfileId: UUID;
  rights: UserRight[];
  roles: UserRole[];
};

export type normolizedUserProfile = {
  deptID: UUID;
  deptName: string;
  employeeId: string;
  post: string;
  userProfileId: string;
  profileId: UUID;
  token: UUID;
};

export type UserRight = {
  id: string;
  grp: string;
  name: string;
  rem: string;
  sys: boolean;
};

export type UserRole = {
  id: string;
  name: string;
};
