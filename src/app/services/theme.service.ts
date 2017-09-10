import { Injectable } from '@angular/core';
import { OverlayContainer } from '@angular/material';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Theme } from '../models/theme';

@Injectable()
export class ThemeService {
    themes: BehaviorSubject<Array<Theme>>;
    active: Theme;

    constructor(public overlay: OverlayContainer) {
        const themes: Array<Theme> = [
            new Theme('green-light', 'Light Theme'),
            new Theme('green-dark', 'Dark Theme')
        ];

        this.themes = new BehaviorSubject<Array<Theme>>(themes);
        this.active = themes[1];
        this.overlay.themeClass = themes[1].theme;
    }

    setTheme(theme: Theme) {
        this.active = theme;
        this.overlay.themeClass = theme.theme;
    }
}
