import { CommonModule, NgClass } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, NgClass],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent  implements OnInit{
  contactForm!:FormGroup
  constructor(private formBuilder : FormBuilder){
    this.contactForm = this.formBuilder.group({
      email : ['', [Validators.email, Validators.required]],
      message : ['', [Validators.required, Validators.minLength(10)]]
    })
  }
  enviar(event: Event){
    event.preventDefault()
    console.log(this.contactForm.value)
  }
  ngOnInit(): void {
      
  }
  hasErrors(field: string, typeErr: string){
    return this.contactForm.get(field)?.hasError(typeErr) && this.contactForm.get(field)?.touched
  }
}
