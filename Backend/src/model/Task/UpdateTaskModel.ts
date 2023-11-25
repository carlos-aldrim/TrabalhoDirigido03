export interface UpdateTask {
  id: string;
  title: string;
  description?: string;
  completed: boolean;
  selected: boolean;
};