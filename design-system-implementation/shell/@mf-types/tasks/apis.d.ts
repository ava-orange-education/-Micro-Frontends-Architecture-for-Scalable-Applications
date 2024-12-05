
    export type RemoteKeys = 'tasks/tasks' | 'tasks/actions';
    type PackageType<T> = T extends 'tasks/actions' ? typeof import('tasks/actions') :T extends 'tasks/tasks' ? typeof import('tasks/tasks') :any;