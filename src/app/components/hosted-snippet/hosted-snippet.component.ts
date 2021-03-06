import { Component, Input, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { SnippetService } from '../../services/snippet.service';

declare var Prism: any;

@Component({
    selector: 'hosted-snippet',
    templateUrl: 'hosted-snippet.component.html',
    styleUrls: ['hosted-snippet.component.scss'],
    providers: [SnippetService],
    animations: [
        trigger(
            'slide', [
                state('true', style({
                    translate: 'scale(1, 1)',
                    height: '*',
                    opacity: 1,
                    margin: '0 0 20px 0',
                    padding: '4px 15px'
                })),
                state('false', style({
                    translate: 'scale(1, 0)',
                    height: 0,
                    opacity: 0,
                    margin: 0,
                    padding: 0
                })),
                transition('0 => 1', animate('200ms ease-in')),
                transition('1 => 0', animate('200ms ease-out'))
            ]
        )
    ]
})
export class HostedSnippetComponent implements AfterViewInit {
    @Input() url = '';
    @Input() file = '';
    @Input() language = '';
    @Input() maxHeight = '';
    source: string;
    show = false;

    constructor(public snippet: SnippetService, public cdr: ChangeDetectorRef) {}

    ngAfterViewInit() {
        this.snippet.getSource(this.url);

        this.snippet.source.subscribe(source => {
            this.source = Prism.highlight(source.trim(), Prism.languages[this.language]);
            this.cdr.detectChanges();
        });

        if (!(this.maxHeight.length > 0)) {
            this.maxHeight = '100%';
        }
    }

    toggleSnippet() {
        this.show = !this.show;
    }
}
