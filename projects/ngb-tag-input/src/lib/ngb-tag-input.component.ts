import { Component, ElementRef, EventEmitter, forwardRef, Input, Output, ViewChild } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, filter, map } from 'rxjs/operators';

function isStringArray(x: any): x is string[] {
  return !!x;
}

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'ngb-tag-input',
  templateUrl: './ngb-tag-input.component.html',
  styleUrls: ['./ngb-tag-input.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => NgbTagInputComponent),
    multi: true
  }]
})
export class NgbTagInputComponent<T extends any | string> implements ControlValueAccessor {
  editorFocused = false;
  inputValue = '';
  selectedItems: T[] = [];
  @ViewChild('searchInput') searchInput: ElementRef;
  @Input() data: T[] = [];
  @Input() searchField: string = null;
  @Input() disabled = false;
  @Input() maxSelectCount = 0;
  @Output() selectionChange = new EventEmitter<T[]>();

  constructor() { }
  onChange: (value: T[]) => void = (value) => null;
  onTouched: () => void = () => null;

  private search = (term: string) => {
    if (!!this.searchField) {
      return this.data.map(o => o[this.searchField]).filter(s => s.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10);
    } else {
      return this.data.filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10);
    }
  }

  private find(item: string) {
    if (!!this.searchField) {
      return this.data.find(o => o[this.searchField].toLowerCase() === item.toLowerCase());
    } else {
      return this.data.find(s => s.toLowerCase() === item.toLowerCase());
    }
  }

  typeaheadSearch = (text$: Observable<string>) => text$.pipe(
    debounceTime(200),
    distinctUntilChanged(),
    filter(term => term.length >= 2 ),
    map(term => {
        return this.search(term);
    })
  )

  addToSelectedItems(item: T) {
    if (this.selectedItems.indexOf(item) === -1) {
      this.selectedItems = [...this.selectedItems, item];
      this.selectionChange.emit(this.selectedItems);
      this.onChange(this.selectedItems);
    }
  }

  onSelectItem(event) {
    const item = this.find(event.item);
    if (item) {
      this.addToSelectedItems(item);
    }
    this.inputValue = '';
    event.preventDefault();
    return false;
  }

  removeLastItem() {
    if (this.selectedItems.length > 0) {
      this.removeItem(this.selectedItems[this.selectedItems.length - 1]);
    }
  }

  removeItem(item: T) {
    this.selectedItems = this.selectedItems.filter(i => i !== item);
    this.onChange(this.selectedItems);
    this.selectionChange.emit(this.selectedItems);
  }

  applyValue(target: HTMLInputElement) {
    if (this.inputValue !== '') {
      const value = target.value;
      const item = this.find(value);
      if (item) {
        this.addToSelectedItems(item);
      }
    }
    this.inputValue = '';
  }

  focusEditor() {
    this.editorFocused = true;
    this.searchInput.nativeElement.focus();
  }

  onBlur(event) {
    this.applyValue(event.target);
    this.editorFocused = false;
  }

  onBackspace(event: KeyboardEvent) {
    if (event.target['value'] === '') {
      this.removeLastItem();
    }
  }

  get canAdd() {
    return this.maxSelectCount === 0 || this.selectedItems.length < this.maxSelectCount;
  }
  writeValue(values: T[]) {
    if (!values) {
      this.onChange(values);
      return;
    }
    if (this.maxSelectCount && values.length > this.maxSelectCount ) {
      values.length = this.maxSelectCount;
    }
    this.selectedItems = values;
  }
  registerOnChange(fn: (val: T[]) => void): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
}
