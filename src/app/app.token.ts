import { InjectionToken } from "@angular/core";

export const ENV = new InjectionToken<{ [key: string]: any }>('environment');
