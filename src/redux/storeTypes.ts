export type Auth = {
  loggedIn: boolean;
};
export type LinkState = {
  link: string;
  name: string;
  icon: string;
  platformId: string;
  id: number;
};

export type Store = {
  auth: Auth;
  links: LinkState[];
};
