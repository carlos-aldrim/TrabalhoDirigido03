export interface Task {
  id: string;
  title: string;
  description?: string;
  completed: boolean;
  selected: boolean;
  created_at?: Date;
  update_at?: Date;
  userId: string;
};
