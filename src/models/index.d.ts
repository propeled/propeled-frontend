import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





export declare class TaskTemplate {
  readonly id: string;
  readonly shortDescription: string;
  readonly longDescription: string;
  readonly title: string;
  readonly Tasks?: (Task | null)[];
  readonly pathID: string;
  constructor(init: ModelInit<TaskTemplate>);
  static copyOf(source: TaskTemplate, mutator: (draft: MutableModel<TaskTemplate>) => MutableModel<TaskTemplate> | void): TaskTemplate;
}

export declare class Task {
  readonly id: string;
  readonly studentID: string;
  readonly shortDescription: string;
  readonly longDescription?: string;
  readonly title: string;
  readonly tasktemplateID: string;
  readonly studentCreated?: boolean;
  constructor(init: ModelInit<Task>);
  static copyOf(source: Task, mutator: (draft: MutableModel<Task>) => MutableModel<Task> | void): Task;
}

export declare class Path {
  readonly id: string;
  readonly Students?: (Student | null)[];
  readonly TaskTemplates?: (TaskTemplate | null)[];
  constructor(init: ModelInit<Path>);
  static copyOf(source: Path, mutator: (draft: MutableModel<Path>) => MutableModel<Path> | void): Path;
}

export declare class Student {
  readonly id: string;
  readonly email: string;
  readonly firstName?: string;
  readonly lastName?: string;
  readonly Tasks?: (Task | null)[];
  readonly pathID: string;
  constructor(init: ModelInit<Student>);
  static copyOf(source: Student, mutator: (draft: MutableModel<Student>) => MutableModel<Student> | void): Student;
}