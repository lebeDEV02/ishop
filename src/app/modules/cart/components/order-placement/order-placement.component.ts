import { JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'ishop-order-placement',
  templateUrl: './order-placement.component.html',
  styleUrls: ['./order-placement.component.scss'],
  providers: [JsonPipe],
})
export class OrderPlacementComponent implements OnInit {
  fullAddress: string | null = null;

  isFormVisible = false;
  constructor(private fb: FormBuilder, private jsonPipe: JsonPipe) {}
  ngOnInit(): void {
    this.addressForm.valueChanges.subscribe((formValue: any) => {
      this.fullAddress = Object.values(formValue)
        .filter((value) => !!value)
        .join(', ')
        .trim();
    });
  }

  changeFormVisibility(): void {
    this.isFormVisible = !this.isFormVisible;
  }

  addressForm = this.fb.group({
    postcode: [''],
    region: [''],
    city: [''],
    street: [''],
    building: [''],
    hull: [''],
    entrance: [''],
    floor: [''],
    apartment: [''],
  });

  fullAddress1 = this.jsonPipe.transform(this.addressForm.value);
  fullAddress2 = this.jsonPipe.transform(this.addressForm.getRawValue());
}
