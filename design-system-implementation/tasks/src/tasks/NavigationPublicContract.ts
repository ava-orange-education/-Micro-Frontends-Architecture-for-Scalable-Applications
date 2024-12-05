// This should be hosted as its own (Routing) service (possible an npm package) 
// in which new micro frontends can register their routes
// letting them be dynamically added to the shell routing contract
// left in the Task component as a matter of setup simplicity

/** List of Available Routes */
export type AvailableRoutes = 'profile' | 'tasks';

/** Shell Routing Public Contract for Micro Frontends willing to change routes */
export interface MicroFrontendNavigation {
  onNavigate: (url: AvailableRoutes) => void;
}
