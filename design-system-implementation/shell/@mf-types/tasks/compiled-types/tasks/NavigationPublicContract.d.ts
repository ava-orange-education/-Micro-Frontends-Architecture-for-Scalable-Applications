/** List of Available Routes */
export type AvailableRoutes = 'profile' | 'tasks';
/** Shell Routing Public Contract for Micro Frontends willing to change routes */
export interface MicroFrontendNavigation {
    onNavigate: (url: AvailableRoutes) => void;
}
