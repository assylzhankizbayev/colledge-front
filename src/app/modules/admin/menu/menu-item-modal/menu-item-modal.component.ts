import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { filter, map, take, tap } from 'rxjs/operators';
import { SelectOptionsModalComponent } from '../../../../shared/modals/select-options-modal/select-options-modal.component';
import { MenuFacade } from '../../../../core/facade/menu.facade';

@Component({
  selector: 'app-menu-item-modal',
  templateUrl: './menu-item-modal.component.html',
  styleUrls: ['./menu-item-modal.component.scss'],
})
export class MenuItemModalComponent {
  form: FormGroup;
  menuOptions$ = this.menuFacade.menuItems.pipe(
    map((res) =>
      res.map((item) => ({
        id: item.id,
        title: item.title,
      }))
    )
  );

  constructor(
    private fb: FormBuilder,
    private menuFacade: MenuFacade,
    private dialog: MatDialog,
    private dialogRef: MatDialogRef<MenuItemModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.form = this.fb.group({
      title: ['', Validators.required],
      parentMenuItemId: [null],
      articleId: [null],
      articleTitle: [null],
      route: [null],
    });

    if (data?.menuItem) {
      this.form.patchValue(data.menuItem);
    }

    if (data?.articlesList?.length) {
      const chosenArticle = data.articlesList.find(
        (article: any) => article.id === data?.menuItem?.articleId
      );

      if (chosenArticle) {
        this.form.get('articleTitle')?.setValue(chosenArticle.title);
      }
    }
  }

  choseArticle() {
    this.dialog
      .open(SelectOptionsModalComponent, {
        panelClass: 'custom-dialog-container',
        data: {
          list: this.data.articlesList,
        },
        width: '80vw',
        height: '80vh',
      })
      .afterClosed()
      .pipe(
        take(1),
        filter((res) => res != null),
        tap((res) => {
          this.form.patchValue({
            articleId: res?.id,
            articleTitle: res?.title,
          });
        })
      )
      .subscribe();
  }

  submit(): void {
    this.dialogRef.close(this.form.value);
  }

  close(): void {
    this.dialogRef.close();
  }
}
