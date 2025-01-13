import {
    Component,
    ElementRef,
    EventEmitter,
    Input,
    Output,
    ViewChild,
} from '@angular/core'

@Component({
    selector: 'shared-search-box',
    templateUrl: './search-box.component.html',
    styleUrl: './search-box.component.css',
})
export class SearchBoxComponent {
    @ViewChild('txtTagInput')
    public txtInput!: ElementRef<HTMLInputElement>

    @Input()
    public placeholder: string = ''

    @Output()
    public onValue = new EventEmitter<string>()

    emitValue(): void {
        this.onValue.emit(this.txtInput.nativeElement.value)
        this.txtInput.nativeElement.value = ''
    }
}
