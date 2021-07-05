import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';

import { TodosServiceService } from '../../services/todos.service';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.scss'],
})
export class NewComponent implements OnInit {
  public form: FormGroup = this._fb.group({
    userId: [
      '',
      [Validators.required, Validators.min(1), Validators.pattern('[0-9]*')],
    ],
    title: ['', [Validators.required, Validators.maxLength(199)]],
    completed: ['', Validators.required],
  });

  constructor(
    private _fb: FormBuilder,
    private route: ActivatedRoute,
    private todoService: TodosServiceService,
    private _router: Router
  ) {}

  ngOnInit(): void {
    this.route.paramMap
      .pipe(
        switchMap((params) => {
          let id = params.get('id');
          return id ? this.todoService.getTodoById(Number(id)) : '';
        })
      )
      .subscribe((element) => {
        if (typeof element !== 'string') {
          this.form.get('userId')?.setValue(element.userId);
          this.form.get('title')?.setValue(element.title);
          element.completed
            ? this.form.get('completed')?.setValue(element.completed)
            : this.form.get('completed')?.setValue(false);
        }
      });
  }

  public onSubmit() {
    this.todoService.postTodos(this.form.value);
    this._router.navigate(['/list']);
  }
}
