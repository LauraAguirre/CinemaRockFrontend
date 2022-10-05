import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { of } from 'rxjs';
import { UserService } from 'src/app/services/user.service';
import { ProfileComponent } from "./profile.component";

let fb = new FormBuilder();

let userProfileForm = fb.group({
  name: fb.control('', [Validators.required]),
  lastName: fb.control('', [Validators.required]),
  address: fb.control('', [Validators.required]),
  email: fb.control('', [Validators.required]),
  phone: fb.control('', [Validators.required]),
  id: fb.control('', [Validators.required])
});

describe("ProfileComponent", () => {
  let component: ProfileComponent;
  let fixture: ComponentFixture<ProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProfileComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: 
      [
        { provide: Router, useValue: { navigate: ()=>{} } },
        { provide: UserService, useValue: { update: jest.fn(() => of({})) } },
        { provide: FormBuilder, useValue: { group: object => ({})}},
      ],
      imports: [
        HttpClientTestingModule,
        TranslateModule.forRoot(),
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('shoul run obtener', () => {
    const spy = jest.spyOn(component, 'obtener');
    const profile = {
      ok: true,
      msg: "Usuario encontrado",
      user: {
          address: "Carrera 24",
          birthday: "",
          email: "dario@gmail.com",
          genre: "",
          id: "-N2UtUx56tRYCMdpFf_K",
          idRole: "",
          lastName: "Gomez",
          login: "Dario2",
          name: "Dario2",
          password: "827ccb0eea8a706c4c34a16891f84e7b",
          phone: "2222222"
      }
    };
    jest.spyOn(localStorage, "getItem").mockName("user").mockReturnValue('correo@gmail.com')
    component.userProfileForm = userProfileForm;
    component.userProfileForm.get('name')?.setValue(profile.user.name);
    component.userProfileForm.get('lastName')?.setValue(profile.user.lastName);
    component.userProfileForm.get('address')?.setValue(profile.user.address);
    component.userProfileForm.get('email')?.setValue(profile.user.email);
    component.userProfileForm.get('phone')?.setValue(profile.user.phone);
    component.userProfileForm.get('id')?.setValue(profile.user.id);
    Object.defineProperty(window, 'getComputedStyle', {
      value: () => ({
          getPropertyValue: (prop) => {
              return '';
          }
      })
    });
    expect(spy).toHaveBeenCalled();
  });

  it('shoul run profile onUpdate', () => {
    const spy = jest.spyOn(component, 'onUpdate');
    const profile = {
      ok: true,
      msg: "Usuario encontrado",
      user: {
          address: "Carrera 24",
          birthday: "",
          email: "dario@gmail.com",
          genre: "",
          id: "-N2UtUx56tRYCMdpFf_K",
          idRole: "",
          lastName: "Gomez",
          login: "Dario2",
          name: "Dario2",
          password: "827ccb0eea8a706c4c34a16891f84e7b",
          phone: "2222222"
      }
    };
    component.userProfileForm = userProfileForm;
    component.userProfileForm.get('name')?.setValue(profile.user.name);
    component.userProfileForm.get('lastName')?.setValue(profile.user.lastName);
    component.userProfileForm.get('email')?.setValue(profile.user.address);
    component.userProfileForm.get('address')?.setValue(profile.user.email);
    component.userProfileForm.get('phone')?.setValue(profile.user.phone);
    component.userProfileForm.get('id')?.setValue(profile.user.id);
    Object.defineProperty(window, 'getComputedStyle', {
      value: () => ({
          getPropertyValue: (prop) => {
              return '';
          }
      })
    });
    expect(spy).toHaveBeenCalled();
  });
})