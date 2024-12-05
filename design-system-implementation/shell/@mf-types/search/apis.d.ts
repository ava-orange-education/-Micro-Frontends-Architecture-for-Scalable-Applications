
    export type RemoteKeys = 'search/search';
    type PackageType<T> = T extends 'search/search' ? typeof import('search/search') :any;