import {ChangeDetectionStrategy, Component, Input, Output, EventEmitter } from '@angular/core';
import {EMPTY_ARRAY, setNativeFocused, TUI_DEFAULT_MATCHER} from '@taiga-ui/cdk';
import {isEditingKey, TuiDataListComponent} from '@taiga-ui/core';
interface Items<T> {
    readonly name: string;
    readonly items: readonly T[];
}


@Component({
    selector: 'custom-list',
    templateUrl: './custom-list.template.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CustomListComponent<T> {
    @Input()
    items: ReadonlyArray<string> = [];

    @Output() 
    setItemEvent = new EventEmitter<string>();

    valueGroups= 'gggg';
    valueTeachers= 'tttt';
    valueAuditories= 'aaaa';
    valueEmpity=' '

    readonly all = EMPTY_ARRAY;

    readonly filter = TUI_DEFAULT_MATCHER;

    onArrowDown<T>(list: TuiDataListComponent<T>, event: Event): void {
        list.onFocus(event, true);
    }

    onKeyDown(key: string, element: HTMLElement | null): void {
        if (element && isEditingKey(key)) {
            setNativeFocused(element, true, true);
        }
    }

    selectItem(item:string){
        this.setItemEvent.emit(item);
    }
}
