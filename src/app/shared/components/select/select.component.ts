import { Component, forwardRef, Input, OnDestroy, OnInit } from '@angular/core';
import { FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SelectComponent),
      multi: true,
    },
  ],
})
export class SelectComponent implements OnInit, OnDestroy {
  @Input() title = 'Выберите категорию';
  @Input() options: IOptions[] = [];
  @Input() set id(value: number) {
    if (value) {
      this.optionControl.setValue(value, { emitEvent: false });
    }
  }
  optionControl = new FormControl(null);
  destroy$ = new Subject();

  onChange = (value: any) => {};
  onTouch = () => {};

  ngOnInit(): void {
    this.optionControl.valueChanges
      .pipe(takeUntil(this.destroy$))
      .subscribe((val) => {
        this.onChange(val);
      });
  }

  writeValue(value: any) {
    this.optionControl.setValue(value);
  }

  registerOnChange(fn: any) {
    this.onChange = fn;
  }

  registerOnTouched(fn: any) {
    this.onTouch = fn;
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
}

interface IOptions {
  id: number;
  title: string;
}
