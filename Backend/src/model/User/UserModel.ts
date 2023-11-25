export interface User {
  id: string;
  name: string;
  email: string;
  password: string;
  active: string;
  created_at: Date;
  update_at: Date;
};

export interface Login {
  email: string;
  password: string;
};
