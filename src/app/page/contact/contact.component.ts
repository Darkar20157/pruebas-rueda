import { Component, OnInit } from '@angular/core';
import { ContactService } from '../../services/contact.service';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  activeTab = 'list';
  contacts: any[] = [];
  contactForm: FormGroup;
  bulkContacts: any[] = [];

  constructor(private contactService: ContactService, private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      nombre: ['', Validators.required],
      celular: ['', Validators.required],
      placa: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.loadContacts();
  }

  setTab(tab: string) {
    this.activeTab = tab;
  }

  loadContacts() {
    this.contactService.getContacts().subscribe({
      next: (res) => {
        this.contacts = res.data || [];
      },
      error: (err) => console.error(err)
    });
  }

  addContact() {
    if (this.contactForm.invalid) return;
    this.contactService.addContact(this.contactForm.value).subscribe({
      next: () => {
        this.contactForm.reset();
        this.loadContacts();
        this.activeTab = 'list';
      },
      error: (err) => console.error(err)
    });
  }

  addBulkRow() {
    this.bulkContacts.push({ nombre: '', celular: '', placa: '' });
  }

  removeBulkRow(index: number) {
    this.bulkContacts.splice(index, 1);
  }

  sendBulk() {
    if (this.bulkContacts.length === 0) return;
    this.contactService.bulkImport(this.bulkContacts).subscribe({
      next: () => {
        this.bulkContacts = [];
        this.loadContacts();
        this.activeTab = 'list';
      },
      error: (err) => console.error(err)
    });
  }
}
