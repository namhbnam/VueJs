export const ROLE = {
  ADMIN: 'admin',
  MARKETER: 'marketer',
  JAVIET_ADMIN: 'javiet_admin',
  JAVIET_RECRUITER: 'javiet_recruiter',
  TINHLOI_RECRUITER: 'tinhloi_recruiter'
}

export interface IUser {
  _id?: string
  username: string
  company: string
  role: string
  password?: string
  name?: string
  lang?: string
}
