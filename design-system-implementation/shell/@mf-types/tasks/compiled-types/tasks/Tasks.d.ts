import type { MicroFrontendNavigation } from './NavigationPublicContract';
export interface TasksProps extends MicroFrontendNavigation {
    title?: string;
}
export default function Tasks({ onNavigate, ...rest }: TasksProps): import("react/jsx-runtime").JSX.Element;
export * from './NavigationPublicContract';
