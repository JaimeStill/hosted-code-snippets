import { Component, Input, AfterViewInit } from '@angular/core';
import { SnippetService } from '../../services/snippet.service';

declare var Prism: any;

@Component({
    selector: 'hosted-snippet',
    templateUrl: 'hosted-snippet.component.html',
    providers: [SnippetService]
})
export class HostedSnippetComponent implements AfterViewInit {
    @Input() url = '';
    @Input() language = '';
    source: string;

    constructor(public snippet: SnippetService) {}

    ngAfterViewInit() {
        this.snippet.getSource(this.url);

        this.snippet.source.subscribe(source => {
            this.source = Prism.highlight(source.trim(), Prism.languages[this.language]);
        });
    }
}
