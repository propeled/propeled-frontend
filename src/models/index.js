// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { TaskTemplate, Task, Path, Student } = initSchema(schema);

export {
  TaskTemplate,
  Task,
  Path,
  Student
};