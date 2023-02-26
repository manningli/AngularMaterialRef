import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-message-new',
  templateUrl: './message-new.component.html',
  styleUrls: ['./message-new.component.scss'],
})
export class MessageNewComponent implements OnInit {
  firstFormGroup = this.formBuilder.group({
    emailCtrl: new FormControl('', Validators.required),
  });
  secondFormGroup = this.formBuilder.group({
    messageCtrl: new FormControl('', Validators.required),
  });

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {}
}
