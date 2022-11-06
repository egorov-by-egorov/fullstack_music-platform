import { ReactNode } from 'react';

type AppAlertSeverity = 'error' | 'info' | 'success' | 'warning'

export interface AppAlert {
    open: boolean;
    severity: AppAlertSeverity;
    title: string;
    message: string;
}

export interface AppFormDialog {
    open: boolean;
    content: ReactNode;
}
